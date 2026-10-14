import { useState, useEffect, useRef, useCallback } from 'react';

/**
 * Custom React hook for Voice Input (Speech-to-Text)
 * Supports Web Speech Recognition API with automatic language configuration (Odia/English),
 * real-time transcript streaming, error handling, and browser capability detection.
 */
export function useVoiceInput() {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [interimTranscript, setInterimTranscript] = useState('');
  const [error, setError] = useState(null);
  const [isSupported, setIsSupported] = useState(false);

  const recognitionRef = useRef(null);
  const activeCallbacksRef = useRef({ onTranscript: null, onFinal: null });

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    setIsSupported(!!SpeechRecognition);

    return () => {
      if (recognitionRef.current) {
        try {
          recognitionRef.current.abort();
        } catch (e) {
          // ignore
        }
      }
    };
  }, []);

  const stopListening = useCallback(() => {
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch (e) {
        // ignore
      }
    }
    setIsListening(false);
  }, []);

  const startListening = useCallback(({
    lang = 'or',
    onTranscript = null,
    onFinal = null,
  } = {}) => {
    setError(null);
    activeCallbacksRef.current = { onTranscript, onFinal };

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setError(lang === 'or'
        ? 'ଆପଣଙ୍କ ବ୍ରାଉଜର୍ରେ ଭଏସ୍ ଚିହ୍ନଟ (Speech Recognition) ସୁବିଧା ଉପଲବ୍ଧ ନାହିଁ । ଦୟାକରି Chrome ବା Edge ବ୍ୟବହାର କରନ୍ତୁ ।'
        : 'Voice input is not supported in this browser. Please use Chrome or Edge.'
      );
      return;
    }

    try {
      if (recognitionRef.current) {
        try { recognitionRef.current.abort(); } catch (e) {}
      }

      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = true;
      recognition.maxAlternatives = 1;

      // Choose dialect for India
      if (lang === 'or') {
        recognition.lang = 'or-IN'; // Odia (India)
      } else {
        recognition.lang = 'en-IN'; // Indian English
      }

      recognition.onstart = () => {
        setIsListening(true);
        setTranscript('');
        setInterimTranscript('');
        setError(null);
      };

      recognition.onresult = (event) => {
        let currentInterim = '';
        let currentFinal = '';

        for (let i = event.resultIndex; i < event.results.length; i++) {
          const item = event.results[i];
          if (item.isFinal) {
            currentFinal += item[0].transcript;
          } else {
            currentInterim += item[0].transcript;
          }
        }

        const fullText = (currentFinal || currentInterim).trim();
        setTranscript(fullText);
        setInterimTranscript(currentInterim);

        if (activeCallbacksRef.current.onTranscript && fullText) {
          activeCallbacksRef.current.onTranscript(fullText);
        }
      };

      recognition.onerror = (event) => {
        console.warn('[Vidyora Voice] Recognition event notice:', event.error);
        if (event.error === 'not-allowed') {
          setError(lang === 'or'
            ? 'ମାଇକ୍ରୋଫୋନ୍ ଅନୁମତି ଆବଶ୍ୟକ । ଦୟାକରି ବ୍ରାଉଜର୍ ସେଟିଙ୍ଗରେ ମାଇକ୍ ଅନୁମତି ଦିଅନ୍ତୁ ।'
            : 'Microphone permission denied. Please allow microphone access in your browser.'
          );
        } else if (event.error === 'no-speech') {
          // Normal timeout when silence
        } else if (event.error === 'network') {
          setError(lang === 'or'
            ? 'ଭଏସ୍ ସେବା ପାଇଁ ଇଣ୍ଟରନେଟ୍ ସଂଯୋଗ ଆବଶ୍ୟକ ।'
            : 'Voice recognition network error. Check connection.'
          );
        }
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
        if (activeCallbacksRef.current.onFinal) {
          activeCallbacksRef.current.onFinal(transcript);
        }
      };

      recognitionRef.current = recognition;
      recognition.start();
    } catch (err) {
      console.error('[Vidyora Voice] Start error:', err);
      setError('Could not start microphone: ' + err.message);
      setIsListening(false);
    }
  }, [transcript]);

  const toggleListening = useCallback((options) => {
    if (isListening) {
      stopListening();
    } else {
      startListening(options);
    }
  }, [isListening, startListening, stopListening]);

  return {
    isListening,
    transcript,
    interimTranscript,
    error,
    isSupported,
    startListening,
    stopListening,
    toggleListening,
    clearError: () => setError(null),
  };
}

export default useVoiceInput;
