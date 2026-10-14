import { useState, useEffect, useCallback, useRef } from 'react';

const isLocal = typeof window !== 'undefined' && (
  window.location.hostname === 'localhost' ||
  window.location.hostname === '127.0.0.1' ||
  window.location.hostname.startsWith('192.168.') ||
  window.location.hostname.startsWith('10.') ||
  window.location.hostname.startsWith('172.') ||
  window.location.hostname.endsWith('.local')
);

const API_BASE = import.meta.env.VITE_API_URL || (
  isLocal
    ? `http://${window.location.hostname}:5000/api`
    : 'https://vidyora-ai.onrender.com/api'
);

/**
 * Phonetic transliteration of Odia Unicode to Indic Devanagari phonemes
 * used for browser Web Speech API offline fallback when native Odia voice is unavailable.
 */
function odiaToPhoneticDevanagari(text) {
  if (!text) return '';
  const specialMap = {
    '\u0B5F': 'य', // ୟ
    '\u0B71': 'व', // ୱ
    '\u0B5C': 'ड़', // ଡ଼
    '\u0B5D': 'ढ़', // ଢ଼
    '\u0B33': 'ल', // ଳ
  };

  return text.split('').map(c => {
    if (specialMap[c]) return specialMap[c];
    const code = c.charCodeAt(0);
    if ((code >= 0x0B01 && code <= 0x0B70) || (code >= 0x0B66 && code <= 0x0B6F)) {
      return String.fromCharCode(code - 0x0200);
    }
    return c;
  }).join('');
}

/**
 * Clean text for audio narration
 */
function cleanTextForSpeech(text) {
  if (!text) return '';
  return text
    .replace(/```[\s\S]*?```/g, '')
    .replace(/[*#`_~>\[\]\(\)\{\}\\|\^]/g, ' ')
    .replace(/https?:\/\/\S+/g, '')
    .replace(/[📸🌿🚀💡🎯🔬✨⚙️🔒👍👎🔄📊]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Custom React hook for Vidyora AI Voice Output
 * Provides neural Odia & English speech with streaming server-side audio playback,
 * instantaneous local caching, native Web Speech synthesis fallback, and active playing states.
 */
export function useVoiceOutput() {
  const [speakingId, setSpeakingId] = useState(null);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [voices, setVoices] = useState([]);
  
  const activeAudioRef = useRef(null);
  const activeUtteranceRef = useRef(null);

  // Initialize available browser voices
  useEffect(() => {
    if ('speechSynthesis' in window) {
      const updateVoices = () => {
        try {
          const available = window.speechSynthesis.getVoices();
          setVoices(available || []);
        } catch (e) {
          console.warn('Could not load browser voices:', e);
        }
      };

      updateVoices();
      window.speechSynthesis.onvoiceschanged = updateVoices;
    }

    return () => {
      // Cleanup any active speech or audio on unmount
      if (activeAudioRef.current) {
        try {
          activeAudioRef.current.pause();
          activeAudioRef.current.src = '';
          activeAudioRef.current = null;
        } catch {
          // ignore
        }
      }
      if ('speechSynthesis' in window) {
        try {
          window.speechSynthesis.cancel();
        } catch {
          // ignore
        }
      }
    };
  }, []);

  // Stop any active speech (both streaming audio and speech synthesis)
  const stop = useCallback(() => {
    if (activeAudioRef.current) {
      try {
        activeAudioRef.current.pause();
        activeAudioRef.current.removeAttribute('src');
        activeAudioRef.current.load();
        activeAudioRef.current = null;
      } catch (e) {
        console.warn('Error pausing audio:', e);
      }
    }

    if ('speechSynthesis' in window) {
      try {
        window.speechSynthesis.cancel();
      } catch (e) {
        console.warn('Error cancelling speech synthesis:', e);
      }
    }

    setSpeakingId(null);
    setIsSpeaking(false);
  }, []);

  // Browser Web Speech fallback when streaming audio is unavailable or offline
  const speakWithWebSpeech = useCallback((cleanText, id, lang) => {
    if (!('speechSynthesis' in window)) {
      setSpeakingId(null);
      setIsSpeaking(false);
      return;
    }

    try {
      window.speechSynthesis.cancel();

      const hasOdia = /[\u0B00-\u0B7F]/.test(cleanText);
      const isOdia = lang === 'or' || hasOdia;

      // Check if browser has a native Odia voice
      const nativeOdiaVoice = voices.find(v => {
        const vl = (v.lang || '').toLowerCase();
        return vl.includes('or') || vl.includes('ori') || (v.name || '').toLowerCase().includes('odia');
      });

      let textToRead = cleanText;
      let targetLangCode = isOdia ? 'or-IN' : 'en-IN';
      let selectedVoice = null;

      if (isOdia) {
        if (nativeOdiaVoice) {
          selectedVoice = nativeOdiaVoice;
          targetLangCode = 'or-IN';
        } else {
          // Convert Odia script to phonetic Indic Devanagari for standard Hindi/Indic voices
          textToRead = odiaToPhoneticDevanagari(cleanText);
          targetLangCode = 'hi-IN';
          selectedVoice = voices.find(v => {
            const vl = (v.lang || '').toLowerCase();
            return vl.includes('hi') || vl.includes('in') || (v.name || '').toLowerCase().includes('hindi');
          }) || voices.find(v => (v.lang || '').toLowerCase().includes('en-in')) || null;
        }
      } else {
        selectedVoice = voices.find(v => {
          const vl = (v.lang || '').toLowerCase();
          return vl.includes('en-in') || vl.includes('en_in') || vl.includes('en-gb') || vl.includes('en-us');
        }) || null;
      }

      const utterance = new SpeechSynthesisUtterance(textToRead);
      utterance.lang = targetLangCode;
      utterance.rate = isOdia ? 0.88 : 0.95;
      utterance.pitch = 1.0;

      if (selectedVoice) {
        utterance.voice = selectedVoice;
      }

      utterance.onstart = () => {
        setSpeakingId(id);
        setIsSpeaking(true);
      };

      utterance.onend = () => {
        setSpeakingId(null);
        setIsSpeaking(false);
      };

      utterance.onerror = () => {
        setSpeakingId(null);
        setIsSpeaking(false);
      };

      activeUtteranceRef.current = utterance;
      window.speechSynthesis.speak(utterance);
    } catch (err) {
      console.warn('Web Speech fallback failed:', err);
      setSpeakingId(null);
      setIsSpeaking(false);
    }
  }, [voices]);

  // Main Speak function
  const speak = useCallback((text, id = 'global', lang = 'or') => {
    if (!text || typeof text !== 'string') return;

    // Toggle off if currently speaking the exact same message/element
    if (isSpeaking && speakingId === id) {
      stop();
      return;
    }

    // Cancel any previous speech immediately
    stop();

    const cleanText = cleanTextForSpeech(text);
    if (!cleanText) return;

    const hasOdia = /[\u0B00-\u0B7F]/.test(cleanText);
    const isOdia = lang === 'or' || hasOdia;

    // 1. Primary engine: Vidyora AI Speech Audio Endpoint (Authentic Odia & Indic Voice)
    const audioUrl = `${API_BASE}/ai/tts?text=${encodeURIComponent(cleanText)}&lang=${isOdia ? 'or' : 'en'}`;
    const audio = new Audio();
    activeAudioRef.current = audio;

    setSpeakingId(id);
    setIsSpeaking(true);

    let fallbackTriggered = false;
    const triggerFallback = () => {
      if (fallbackTriggered) return;
      fallbackTriggered = true;
      console.info('[Vidyora AI Voice] Falling back to browser speech synthesis');
      speakWithWebSpeech(cleanText, id, isOdia ? 'or' : 'en');
    };

    audio.onplay = () => {
      setSpeakingId(id);
      setIsSpeaking(true);
    };

    audio.onended = () => {
      setSpeakingId(null);
      setIsSpeaking(false);
      activeAudioRef.current = null;
    };

    audio.onerror = (e) => {
      console.warn('[Vidyora AI Voice] Audio error, using fallback:', e);
      triggerFallback();
    };

    // Set source and start playback
    audio.src = audioUrl;
    audio.load();

    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.catch((err) => {
        console.warn('[Vidyora AI Voice] Playback prevented or failed:', err.message);
        triggerFallback();
      });
    }
  }, [isSpeaking, speakingId, stop, speakWithWebSpeech]);

  return {
    isSpeaking,
    speakingId,
    speak,
    stop,
  };
}

export default useVoiceOutput;
