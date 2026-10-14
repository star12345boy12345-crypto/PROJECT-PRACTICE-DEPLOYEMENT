import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';
import { aiAPI } from '../services/api';
import { useVoiceInput } from '../hooks/useVoiceInput';
import { useVoiceOutput } from '../hooks/useVoiceOutput';
import {
  Sparkles,
  Send,
  BrainCircuit,
  CheckCircle2,
  Copy,
  Check,
  Volume2,
  VolumeX,
  Award,
  RefreshCw,
  BookOpen,
  ArrowRight,
  Loader2,
  Zap,
  ChevronLeft,
  Lightbulb,
  Mic,
  MicOff,
  Image as ImageIcon,
  Download,
  Languages
} from 'lucide-react';
import { cleanChatbotText, PointToPointResponse } from '../utils/formatChatResponse';

export default function AiTutorPage() {
  const { user } = useAuth();
  const { lang, t } = useLanguage();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [inputMessage, setInputMessage] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState(lang || 'or');
  const [classLevel, setClassLevel] = useState(user?.classLevel || 'Class 8');
  const [subject, setSubject] = useState('Science');
  const [loading, setLoading] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState(null);

  const [showSavedPicker, setShowSavedPicker] = useState(false);

  // Voice Input (Microphone) & Output (Text-to-Speech)
  const {
    isListening,
    startListening,
    stopListening,
    toggleListening,
    error: voiceError
  } = useVoiceInput();

  const { isSpeaking, speakingId, speak, stop: stopSpeaking } = useVoiceOutput();

  const getSavedPrompts = (l) => {
    if (l === 'sat') {
      return [
        { label: '🌿 ᱫᱟᱨᱮ ᱨᱮ ᱡᱚᱢᱟᱜ ᱛᱮᱭᱟᱨ (Photosynthesis)', query: 'Explain Photosynthesis in simple Santali (Ol Chiki) with chemical formula and steps' },
        { label: "🚀 ᱱᱤᱭᱩᱴᱚᱱ ᱟᱜ ᱜᱚᱛᱤ ᱱᱤᱭᱚᱢ (Newton's Laws)", query: "Explain Newton's Laws of Motion in simple Santali (Ol Chiki) with daily life examples" },
        { label: '📐 ᱯᱟᱭᱛᱷᱟᱜᱳᱨᱟᱥ ᱛᱷᱤᱭᱳᱨᱚᱢ (Pythagoras Theorem)', query: 'Explain Pythagoras Theorem in simple Santali (Ol Chiki) with right angle triangle formula' },
        { label: '🔬 ᱫᱟᱨᱮ ᱟᱨ ᱡᱤᱵᱽ ᱠᱳᱥ (Plant vs Animal Cell)', query: 'What are the main differences between Plant Cell and Animal Cell in Santali?' },
        { label: '🤖 ᱮᱟᱭ (Artificial Intelligence) ᱪᱮᱫ ᱠᱟᱱᱟ?', query: 'Explain Artificial Intelligence in simple Santali (Ol Chiki) for school students' },
      ];
    }
    if (l === 'or') {
      return [
        { label: '🌿 ଆଲୋକ ଶ୍ଳେଷଣ ପ୍ରକ୍ରିୟା ବୁଝାନ୍ତୁ', query: 'Explain Photosynthesis in simple Odia with chemical formula and steps' },
        { label: "🚀 ନ୍ୟୁଟନଙ୍କ ଗତି ନିୟମଗୁଡ଼ିକ", query: "Explain Newton's three laws of motion with real-world examples" },
        { label: '📐 ପିଥାଗୋରାସ ଉପପାଦ୍ୟ', query: 'Explain Pythagoras Theorem with step-by-step formula and right angle triangle example' },
        { label: '🔬 ଉଦ୍ଭିଦ ଓ ପ୍ରାଣୀ କୋଷ ମଧ୍ୟରେ ପାର୍ଥକ୍ୟ', query: 'What are the main differences between plant and animal cells?' },
        { label: '🤖 ଆର୍ଟିଫିସିଆଲ ଇଣ୍ଟେଲିଜେନ୍ସ କ’ଣ?', query: 'What is AI and how does it help students in regional languages?' },
      ];
    }
    return [
      { label: '🌿 Explain Photosynthesis with formula', query: 'Explain Photosynthesis in simple English with chemical formula and steps' },
      { label: "🚀 Newton's Laws of Motion with real examples", query: "Explain Newton's three laws of motion with real-world examples" },
      { label: '📐 Pythagorean Theorem step-by-step', query: 'Explain Pythagoras Theorem with step-by-step formula and right angle triangle example' },
      { label: '🔬 Plant Cell vs Animal Cell differences', query: 'What are the main differences between plant and animal cells?' },
      { label: '🤖 Introduction to Artificial Intelligence', query: 'What is AI and how does it help students in regional languages?' },
    ];
  };

  const getTutorGreeting = (l, name) => {
    if (l === 'sat') {
      return `ᱡᱚᱦᱟᱨ ${name || 'ᱯᱟᱹᱴᱷᱩᱣᱟᱹ'}! ᱤᱧ ᱫᱚ ᱵᱤᱫᱽᱭᱳᱨᱟ ᱮᱟᱭ ᱢᱟᱪᱮᱛ (Vidyora AI Tutor) ᱠᱟᱹᱱᱟᱹᱧ ᱾ ᱞᱟᱛᱟᱨ ᱨᱮ ᱢᱮᱱᱟᱜ ᱠᱩᱠᱞᱤ ᱠᱚ ᱠᱞᱤᱠ ᱠᱟᱛᱮ, ᱥᱮ ᱢᱟᱭᱤᱠ 🎤 ᱵᱮᱵᱷᱟᱨ ᱠᱟᱛᱮ, ᱟᱨᱵᱟᱝ ᱟᱢᱟᱜ ᱠᱩᱠᱞᱤ ᱚᱞ ᱠᱟᱛᱮ ᱠᱩᱞᱤ ᱫᱟᱲᱮᱭᱟᱜ-ᱟᱢ:`;
    }
    if (l === 'or') {
      return `ନମସ୍କାର ${name || 'ପିଲାମାନେ'}! ମୁଁ ବିଦ୍ୟୋରା ଏଆଇ ଶିକ୍ଷକ । ଆପଣ ତଳେ ଥିବା ଯେକୌଣସି ସାଇତି ରଖାଯାଇଥିବା ପ୍ରଶ୍ନ ଉପରେ କ୍ଲିକ୍ କରିପାରିବେ, କିମ୍ବା ମାଇକ୍ 🎤 ବଟନ୍ ଦବାଇ କଥା କହିପାରିବେ କିମ୍ବା ଟାଇପ୍ କରି ପଚାରିପାରିବେ:`;
    }
    return `Hello ${name || 'Student'}! I am your Vidyora Agentic AI Tutor. Tap any pre-saved question below, use the microphone 🎤 to speak your doubt, or type your question anytime:`;
  };

  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: getTutorGreeting(lang || 'or', user?.name?.split(' ')[0]),
      showSavedQuestions: true,
      workflowSteps: [
        { step: 'Tutor Session Initialized', status: 'completed' },
        { step: 'Regional Curriculum Engine Ready', status: 'completed' }
      ]
    }
  ]);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    const query = searchParams.get('q');
    if (query) {
      setInputMessage(query);
      handleSendMessage(query);
    }
  }, [searchParams]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const handleSendMessage = async (customQuery) => {
    const textToSend = customQuery || inputMessage;
    if (!textToSend.trim() || loading) return;

    if (isListening) stopListening();

    const userMsg = {
      role: 'user',
      content: textToSend.trim(),
      language: selectedLanguage,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputMessage('');
    setLoading(true);

    try {
      const res = await aiAPI.askChat({
        message: textToSend.trim(),
        language: selectedLanguage,
        classLevel,
        subject,
      });

      const aiMsg = {
        role: 'assistant',
        content: cleanChatbotText(res.data.explanation),
        language: res.data.language,
        workflowSteps: res.data.workflowSteps,
        suggestedQuizTopic: res.data.suggestedQuizTopic,
        diagram: res.data.diagram,
        modelUsed: res.data.modelUsed,
        isAiLive: res.data.isAiLive
      };

      setMessages((prev) => [...prev, aiMsg]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: 'I apologize, an error occurred while connecting to the AI service. Please verify server connection.',
          workflowSteps: [{ step: 'Error handling triggered', status: 'failed' }]
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = (text, idx) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const handleQuickDiagramRequest = (topicName) => {
    navigate(`/scanner`);
  };

  const handleDownloadSvg = (svgContent, topic) => {
    if (!svgContent) return;
    const blob = new Blob([svgContent], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${topic || 'diagram'}-vidyora.svg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      
      {/* Back Button */}
      <div>
        <button
          onClick={() => {
            if (window.history.length > 1) {
              navigate(-1);
            } else {
              navigate('/dashboard');
            }
          }}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-bold text-brand-navy hover:bg-slate-50 transition-all shadow-2xs group cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4 text-brand-teal group-hover:-translate-x-0.5 transition-transform" />
          <span>{lang === 'or' ? '← ପଛକୁ ଫେରନ୍ତୁ (Back)' : '← Back to Dashboard'}</span>
        </button>
      </div>

      {/* Header & Configuration Bar */}
      <div className="glass-panel p-5 sm:p-6 rounded-3xl shadow-sm border border-slate-200/90 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-teal/15 text-brand-teal text-xs font-bold mb-1">
            <Zap className="w-3.5 h-3.5" />
            <span>Agentic Learning Architecture</span>
          </div>
          <h1 className="text-2xl font-extrabold text-brand-navy">
            {t('tutor.title')}
          </h1>
          <p className="text-xs sm:text-sm text-slate-500">
            {t('tutor.subtitle')}
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Visual Diagram Studio Shortcut (Future Feature) */}
          <button
            onClick={() => navigate('/scanner')}
            className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer border border-slate-200"
            title="Visual Diagram Studio (Future Feature)"
          >
            <ImageIcon className="w-3.5 h-3.5" />
            <span>{lang === 'or' ? 'ଚିତ୍ର ଷ୍ଟୁଡିଓ (ଆଗାମୀ)' : 'Diagram Studio (Future)'}</span>
          </button>

          {/* 3-Way Language Selector: English, Odia, Santali */}
          <div className="flex items-center p-0.5 rounded-xl bg-slate-100 border border-slate-200">
            <button
              onClick={() => setSelectedLanguage('en')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                selectedLanguage === 'en'
                  ? 'bg-brand-navy text-white shadow-2xs'
                  : 'text-slate-600 hover:text-brand-navy'
              }`}
            >
              English 🇬🇧
            </button>
            <button
              onClick={() => setSelectedLanguage('or')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                selectedLanguage === 'or'
                  ? 'bg-brand-navy text-white shadow-2xs'
                  : 'text-slate-600 hover:text-brand-navy'
              }`}
            >
              ଓଡ଼ିଆ 🇮🇳
            </button>
            <button
              onClick={() => setSelectedLanguage('sat')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                selectedLanguage === 'sat'
                  ? 'bg-brand-navy text-white shadow-2xs'
                  : 'text-slate-600 hover:text-brand-navy'
              }`}
            >
              🏹 ᱥᱟᱱᱛᱟᱲᱤ
            </button>
          </div>

          {/* Class Selector */}
          <select
            value={classLevel}
            onChange={(e) => setClassLevel(e.target.value)}
            className="px-3 py-1.5 rounded-xl bg-slate-100 border-none text-xs font-bold text-slate-700 outline-none cursor-pointer"
          >
            <option value="Class 6">Class 6</option>
            <option value="Class 7">Class 7</option>
            <option value="Class 8">Class 8</option>
            <option value="Class 9">Class 9</option>
            <option value="Class 10">Class 10</option>
          </select>
        </div>
      </div>

      {/* Chat Messages Viewport */}
      <div className="glass-panel p-4 sm:p-6 rounded-3xl shadow-sm border border-slate-200/90 min-h-[460px] max-h-[620px] overflow-y-auto space-y-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}
          >
            <div
              className={`max-w-[90%] sm:max-w-[80%] p-4 sm:p-5 rounded-3xl space-y-3 transition-all ${
                msg.role === 'user'
                  ? 'bg-brand-navy text-white rounded-tr-none shadow-md'
                  : 'bg-white text-brand-navy rounded-tl-none border border-slate-200/80 shadow-xs'
              }`}
            >
              {/* Assistant Header Badge */}
              {msg.role === 'assistant' && (
                <div className="flex items-center justify-between pb-2 border-b border-slate-100 text-[11px] font-bold text-brand-teal">
                  <div className="flex items-center gap-2">
                    <img
                      src="/chatbot-avatar.png"
                      alt="AI Tutor Avatar"
                      className="w-5 h-5 rounded-full border border-brand-teal/40 object-cover shadow-2xs"
                    />
                    <span>Vidyora AI Tutor</span>
                    {msg.modelUsed && (
                      <span className="text-[10px] font-semibold text-slate-400 ml-1">
                        ({msg.modelUsed})
                      </span>
                    )}
                  </div>
                </div>
              )}

              {/* Agentic Reasoning Steps (Accordion) */}
              {msg.workflowSteps && msg.workflowSteps.length > 0 && (
                <div className="p-2.5 rounded-2xl bg-slate-50 border border-slate-200/60 text-[11px] space-y-1.5">
                  <span className="font-bold text-slate-500 uppercase tracking-wider text-[10px]">
                    Agentic Reasoning Workflow:
                  </span>
                  <div className="space-y-1">
                    {msg.workflowSteps.map((step, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-1.5 text-slate-600">
                        <CheckCircle2 className="w-3 h-3 text-brand-teal shrink-0" />
                        <span>{step.step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Message Content */}
              <div className="prose prose-base max-w-none text-sm sm:text-base leading-relaxed">
                {msg.role === 'assistant' ? (
                  <PointToPointResponse content={msg.content} />
                ) : (
                  <p className="whitespace-pre-wrap">{msg.content}</p>
                )}
              </div>

              {/* Embedded Educational Vector Diagram (if attached) */}
              {msg.diagram && (
                <div className="mt-3 p-3.5 sm:p-4 rounded-2xl bg-slate-900 border border-slate-800 text-white space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm font-bold text-brand-teal flex items-center gap-1.5">
                      <ImageIcon className="w-4 h-4 text-brand-orange" />
                      <span className="capitalize">{msg.diagram.topic} Visual Guide</span>
                    </span>
                    <div className="flex items-center gap-1.5">
                      {(msg.diagram.imageUrl || msg.diagram.photoUrl) && (
                        <a
                          href={msg.diagram.imageUrl || msg.diagram.photoUrl}
                          target="_blank"
                          rel="noreferrer"
                          download={`vidyora_${msg.diagram.topic.replace(/\s+/g, '_')}.jpg`}
                          className="text-[11px] text-brand-teal hover:text-white flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 cursor-pointer transition-all"
                        >
                          <Download className="w-3 h-3 text-brand-teal" />
                          <span>Image</span>
                        </a>
                      )}
                      {msg.diagram.svgContent && (
                        <button
                          onClick={() => handleDownloadSvg(msg.diagram.svgContent, msg.diagram.topic)}
                          className="text-[11px] text-slate-300 hover:text-white flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 cursor-pointer transition-all"
                        >
                          <Download className="w-3 h-3 text-brand-orange" />
                          <span>SVG</span>
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Real Image Display */}
                  {(msg.diagram.imageUrl || msg.diagram.photoUrl) && (
                    <div className="relative rounded-xl overflow-hidden border border-slate-700/80 bg-slate-950 aspect-[16/10] max-h-72 flex items-center justify-center shadow-lg">
                      <img
                        src={msg.diagram.imageUrl || msg.diagram.photoUrl}
                        alt={msg.diagram.topic}
                        className="w-full h-full object-cover rounded-xl"
                        loading="lazy"
                        onError={(e) => {
                          if (msg.diagram.photoUrl && e.target.src !== msg.diagram.photoUrl) {
                            e.target.src = msg.diagram.photoUrl;
                          }
                        }}
                      />
                      <div className="absolute bottom-2 right-2 bg-black/75 backdrop-blur-xs text-[10px] px-2 py-0.5 rounded-md text-brand-teal font-bold border border-slate-700">
                        📸 Realistic Educational Image
                      </div>
                    </div>
                  )}

                  {/* Labeled Vector Diagram (if SVG exists) */}
                  {msg.diagram.svgContent && (
                    <details className="text-xs text-slate-400 cursor-pointer">
                      <summary className="text-[11px] font-bold text-slate-300 hover:text-brand-teal transition-colors py-1">
                        📐 {selectedLanguage === 'or' ? 'ପାଠ୍ୟପୁସ୍ତକ ବ୍ଲୁପ୍ରିଣ୍ଟ ଡାୟାଗ୍ରାମ୍ ଦେଖନ୍ତୁ (Click to view Blueprint SVG)' : 'View Textbook Blueprint Diagram (SVG)'}
                      </summary>
                      <div
                        className="mt-2 rounded-xl overflow-hidden max-h-56 flex items-center justify-center bg-slate-950 p-2 border border-slate-800"
                        dangerouslySetInnerHTML={{ __html: msg.diagram.svgContent }}
                      />
                    </details>
                  )}

                  {/* Caption */}
                  {msg.diagram.caption && (
                    <p className="text-xs text-slate-300 leading-relaxed font-medium">
                      {selectedLanguage === 'or' ? (msg.diagram.captionOdia || msg.diagram.caption) : msg.diagram.caption}
                    </p>
                  )}

                  {msg.diagram.labels?.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {msg.diagram.labels.map((lbl, lIdx) => (
                        <span key={lIdx} className="text-[10px] px-2.5 py-1 rounded-lg bg-brand-teal/20 text-brand-teal font-bold border border-brand-teal/30">
                          {lbl}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Pre-saved interactive questions demonstrated inside the chat */}
              {msg.showSavedQuestions && (
                <div className="mt-3 pt-3 border-t border-slate-100 space-y-2">
                  <div className="text-[11px] font-bold text-slate-500 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-brand-teal" />
                    <span>{selectedLanguage === 'or' ? 'ସାଇତି ରଖାଯାଇଥିବା ପ୍ରଶ୍ନ (କ୍ଲିକ୍ କରନ୍ତୁ):' : 'Pre-saved Questions (Click to ask):'}</span>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {getSavedPrompts(selectedLanguage).map((sq, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => handleSendMessage(sq.query)}
                        className="text-left p-3 rounded-2xl bg-slate-50 hover:bg-brand-teal/10 hover:border-brand-teal border border-slate-200 text-xs font-semibold text-brand-navy transition-all flex items-center justify-between group cursor-pointer shadow-2xs"
                      >
                        <span className="leading-snug">{sq.label}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-brand-teal group-hover:translate-x-0.5 transition-transform shrink-0 ml-1.5" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Message Footer Actions */}
              {msg.role === 'assistant' && (
                <div className="pt-2 flex flex-wrap items-center justify-between gap-2 border-t border-slate-100 text-[11px] text-slate-500">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleCopy(cleanChatbotText(msg.content), index)}
                      className="flex items-center gap-1 hover:text-brand-teal transition-colors cursor-pointer"
                      title="Copy response"
                    >
                      {copiedIndex === index ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedIndex === index ? 'Copied' : 'Copy'}</span>
                    </button>

                    {/* Voice Readout Button with Sound Waves indicator */}
                    <button
                      onClick={() => speak(cleanChatbotText(msg.content), `msg_${index}`, selectedLanguage)}
                      className={`flex items-center gap-1 transition-all px-2 py-0.5 rounded-lg cursor-pointer ${
                        speakingId === `msg_${index}`
                          ? 'bg-brand-teal text-brand-navy font-bold animate-pulse'
                          : 'hover:text-brand-teal'
                      }`}
                      title={speakingId === `msg_${index}` ? 'Stop Audio' : 'Listen with Voice (ଶୁଣନ୍ତୁ)'}
                    >
                      {speakingId === `msg_${index}` ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                      <span>
                        {speakingId === `msg_${index}`
                          ? 'Stop Audio'
                          : selectedLanguage === 'sat'
                          ? 'Listen (ᱟᱧᱡᱚᱢ ᱢᱮ)'
                          : selectedLanguage === 'or'
                          ? 'Listen'
                          : 'Listen'}
                      </span>
                    </button>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => navigate('/scanner')}
                      className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold flex items-center gap-1 transition-colors cursor-pointer text-xs"
                      title="Diagram Studio (Future Roadmap)"
                    >
                      <ImageIcon className="w-3 h-3 text-slate-500" />
                      <span>Diagram Studio (Future)</span>
                    </button>

                    <button
                      onClick={() => navigate('/quizzes')}
                      className="px-2.5 py-1 rounded-lg bg-brand-teal/15 text-brand-navy font-bold hover:bg-brand-teal/25 flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      <Award className="w-3 h-3 text-brand-teal" />
                      <span>Take Practice Quiz</span>
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>
        ))}

        {/* Loading Indicator */}
        {loading && (
          <div className="flex items-start gap-3">
            <div className="p-4 rounded-3xl rounded-tl-none bg-white border border-slate-200/80 shadow-xs space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-brand-teal">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Agentic Reasoning in progress...</span>
              </div>
              <p className="text-[11px] text-slate-400">
                Understanding query ➔ Querying curriculum graph ➔ Formulating {selectedLanguage === 'sat' ? 'Santali (ᱥᱟᱱᱛᱟᱲᱤ)' : selectedLanguage === 'or' ? 'Odia' : 'English'} explanation...
              </p>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Quick Drawer for Pre-saved questions */}
      {showSavedPicker && (
        <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 shadow-sm space-y-2 animate-fadeIn">
          <div className="flex items-center justify-between pb-1">
            <span className="font-bold text-xs text-brand-navy flex items-center gap-1.5">
              <Lightbulb className="w-4 h-4 text-amber-500" />
              <span>Choose any pre-saved curriculum question:</span>
            </span>
            <button
              type="button"
              onClick={() => setShowSavedPicker(false)}
              className="text-xs text-slate-500 hover:text-slate-800 font-bold cursor-pointer"
            >
              ✕ Close
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {getSavedPrompts(selectedLanguage).map((sq, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => { setShowSavedPicker(false); handleSendMessage(sq.query); }}
                className="text-left p-2.5 rounded-xl bg-white hover:bg-brand-teal/10 hover:border-brand-teal border border-slate-200 text-xs font-semibold text-brand-navy transition-all flex items-center justify-between cursor-pointer"
              >
                <span>{sq.label}</span>
                <ArrowRight className="w-3.5 h-3.5 text-brand-teal shrink-0 ml-1.5" />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Voice Listening Active Indicator Banner */}
      {isListening && (
        <div className="p-3 bg-rose-50 border border-rose-200 rounded-2xl flex items-center justify-between text-xs font-bold text-rose-700 animate-pulse">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-600 animate-ping" />
            <span>
              {selectedLanguage === 'sat'
                ? 'ᱟᱸᱡᱚᱢᱮᱫ-ᱟ... ᱠᱩᱠᱞᱤ ᱢᱮ (Listening... Speak your question)'
                : selectedLanguage === 'or'
                ? 'ଭଏସ୍ ଇନପୁଟ୍ ସକ୍ରିୟ: ଦୟାକରି କୁହନ୍ତୁ... (Listening...)'
                : 'Listening to your microphone... Speak your question now'}
            </span>
          </div>
          <button
            type="button"
            onClick={stopListening}
            className="text-xs bg-rose-600 text-white px-2.5 py-1 rounded-lg hover:bg-rose-700 cursor-pointer"
          >
            Done / ସରିଲା
          </button>
        </div>
      )}

      {voiceError && (
        <div className="p-2.5 bg-rose-50 border border-rose-200 text-rose-600 text-xs rounded-xl">
          {voiceError}
        </div>
      )}

      {/* Answer Language Selector Bar right above the input form */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-4 py-2.5 bg-white rounded-2xl border border-slate-200/90 shadow-2xs">
        <div className="flex items-center gap-2 text-slate-600 text-xs font-bold">
          <Languages className="w-4 h-4 text-brand-teal" />
          <span>
            {selectedLanguage === 'sat'
              ? 'ᱛᱮᱞᱟ ᱯᱟᱹᱨᱥᱤ ᱵᱟᱪᱷᱟᱣ ᱢᱮ (Answer language):'
              : selectedLanguage === 'or'
              ? 'ଉତ୍ତର କେଉଁ ଭାଷାରେ ଚାହାଁନ୍ତି? (Choose answer language):'
              : 'Generate answer in:'}
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => setSelectedLanguage('en')}
            className={`px-3 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              selectedLanguage === 'en'
                ? 'bg-brand-navy text-white shadow-xs'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
            }`}
          >
            🇬🇧 English
          </button>
          <button
            type="button"
            onClick={() => setSelectedLanguage('or')}
            className={`px-3 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              selectedLanguage === 'or'
                ? 'bg-brand-navy text-white shadow-xs'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
            }`}
          >
            🇮🇳 ଓଡ଼ିଆ (Odia)
          </button>
          <button
            type="button"
            onClick={() => setSelectedLanguage('sat')}
            className={`px-3 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              selectedLanguage === 'sat'
                ? 'bg-brand-navy text-white shadow-xs'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
            }`}
          >
            🏹 ᱥᱟᱱᱛᱟᱲᱤ (Santali)
          </button>
        </div>
      </div>

      {/* Input Form Bar with Microphone Button */}
      <form
        onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }}
        className="glass-panel p-2 rounded-2xl border border-slate-200/90 shadow-md flex items-center gap-2"
      >
        <button
          type="button"
          onClick={() => setShowSavedPicker(!showSavedPicker)}
          className={`p-3 rounded-xl border text-xs transition-colors shrink-0 cursor-pointer ${
            showSavedPicker
              ? 'bg-amber-100 border-amber-300 text-amber-800'
              : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
          }`}
          title="Toggle Pre-saved Questions"
        >
          <Lightbulb className="w-4 h-4 text-amber-500" />
        </button>

        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder={
            selectedLanguage === 'sat'
              ? 'ᱱᱚᱸᱰᱮ ᱠᱩᱠᱞᱤ ᱚᱞ ᱢᱮ (Ask doubt in Santali/English/Odia)...'
              : selectedLanguage === 'or'
              ? 'ଏଠାରେ ଆପଣଙ୍କ ପ୍ରଶ୍ନ ବା ସନ୍ଦେହ ଲେଖନ୍ତୁ...'
              : 'Type your question or doubt here...'
          }
          className="w-full px-4 py-3 bg-transparent text-sm sm:text-base font-medium text-brand-navy placeholder:text-slate-400 outline-none"
        />

        {/* Microphone Button (Speech-to-Text) */}
        <button
          type="button"
          onClick={() => toggleListening({
            lang: selectedLanguage === 'sat' ? 'hi' : selectedLanguage,
            onTranscript: (txt) => setInputMessage(txt),
          })}
          className={`p-3 rounded-xl border transition-all shrink-0 cursor-pointer ${
            isListening
              ? 'bg-rose-500 border-rose-600 text-white animate-pulse shadow-md'
              : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-brand-teal/15 hover:text-brand-teal'
          }`}
          title={isListening ? 'Stop Listening' : 'Speak Question with Microphone (ଭଏସ୍ ଇନପୁଟ୍)'}
        >
          {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
        </button>

        <button
          type="submit"
          disabled={loading || !inputMessage.trim()}
          className="p-3 rounded-xl bg-brand-navy text-white hover:bg-brand-navyLight disabled:opacity-50 btn-3d shrink-0 transition-all cursor-pointer"
        >
          <Send className="w-4 h-4 text-brand-teal" />
        </button>
      </form>

    </div>
  );
}
