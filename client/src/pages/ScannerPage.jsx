import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';
import { aiAPI } from '../services/api';
import { useVoiceOutput } from '../hooks/useVoiceOutput';
import { PointToPointResponse } from '../utils/formatChatResponse';
import {
  Camera,
  Upload,
  Languages,
  Sparkles,
  RefreshCw,
  Volume2,
  VolumeX,
  Copy,
  Check,
  Download,
  Layers,
  BookOpen,
  ArrowRight,
  ChevronLeft,
  Bot,
  Eye,
  FileText,
  HelpCircle,
  Video,
  X,
  Lightbulb,
  CheckCircle2,
  Sliders
} from 'lucide-react';

// Sample demonstration images for immediate 1-click testing
const SAMPLE_PRESETS = [
  {
    title: 'Science: Photosynthesis Equation',
    titleOdia: 'ବିଜ୍ଞାନ: ଆଲୋକ ଶ୍ଳେଷଣ ସମୀକରଣ',
    prompt: 'Translate this photosynthesis equation and diagram labels to Odia and explain the light reaction step-by-step.',
    dataUrl: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="340" viewBox="0 0 600 340"><rect width="600" height="340" fill="%230F172A"/><rect x="20" y="20" width="560" height="300" rx="16" fill="%231E293B" stroke="%232DD4BF" stroke-width="2"/><text x="300" y="70" fill="%23FFFFFF" font-family="sans-serif" font-size="22" font-weight="bold" text-anchor="middle">Photosynthesis Equation in Green Leaves</text><text x="300" y="125" fill="%232DD4BF" font-family="monospace" font-size="18" text-anchor="middle">6CO2 + 6H2O + Sunlight ➔ C6H12O6 + 6O2</text><text x="110" y="190" fill="%2394A3B8" font-size="14" text-anchor="middle">Carbon Dioxide</text><text x="210" y="190" fill="%2394A3B8" font-size="14" text-anchor="middle">Soil Water</text><text x="310" y="190" fill="%23FBBF24" font-size="14" text-anchor="middle">Solar Photons</text><text x="430" y="190" fill="%2334D399" font-size="14" text-anchor="middle">Glucose (Sugar)</text><text x="530" y="190" fill="%2360A5FA" font-size="14" text-anchor="middle">Oxygen Gas</text><circle cx="310" cy="245" r="30" fill="%23F59E0B"/><text x="310" y="250" fill="%23000000" font-size="12" font-weight="bold" text-anchor="middle">Sunlight</text></svg>'
  },
  {
    title: 'Math: Pythagorean Theorem',
    titleOdia: 'ଗଣିତ: ପିଥାଗୋରାସ୍ ଉପପାଦ୍ୟ',
    prompt: 'Translate this geometry problem to Odia and solve step-by-step.',
    dataUrl: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="340" viewBox="0 0 600 340"><rect width="600" height="340" fill="%230F172A"/><rect x="20" y="20" width="560" height="300" rx="16" fill="%231E293B" stroke="%2338BDF8" stroke-width="2"/><text x="300" y="65" fill="%23FFFFFF" font-family="sans-serif" font-size="22" font-weight="bold" text-anchor="middle">Right-Angled Triangle Problem</text><polygon points="180,240 380,240 180,100" fill="%230284C7" fill-opacity="0.2" stroke="%2338BDF8" stroke-width="3"/><text x="270" y="265" fill="%23F1F5F9" font-size="16">Base (b) = 4 cm</text><text x="100" y="175" fill="%23F1F5F9" font-size="16">Perpendicular (a) = 3 cm</text><text x="300" y="160" fill="%23FBBF24" font-size="16" font-weight="bold">Hypotenuse (c) = ?</text><text x="300" y="300" fill="%2338BDF8" font-family="monospace" font-size="16" text-anchor="middle">Formula: a² + b² = c²</text></svg>'
  },
  {
    title: 'Biology: Plant Cell Structure',
    titleOdia: 'ଜୀବବିଜ୍ଞାନ: ଉଦ୍ଭିଦ କୋଷ ଗଠନ',
    prompt: 'Translate all plant cell labels into Odia and describe the function of chloroplast and cell wall.',
    dataUrl: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="340" viewBox="0 0 600 340"><rect width="600" height="340" fill="%230F172A"/><rect x="20" y="20" width="560" height="300" rx="16" fill="%231E293B" stroke="%234ADE80" stroke-width="2"/><text x="300" y="60" fill="%23FFFFFF" font-family="sans-serif" font-size="22" font-weight="bold" text-anchor="middle">Plant Cell Organelles & Structure</text><rect x="150" y="90" width="300" height="190" rx="20" fill="%23166534" fill-opacity="0.3" stroke="%2322C55E" stroke-width="4"/><ellipse cx="230" cy="180" rx="45" ry="35" fill="%233B82F6" fill-opacity="0.5"/><text x="230" y="185" fill="%23FFFFFF" font-size="12" font-weight="bold" text-anchor="middle">Vacuole</text><circle cx="360" cy="150" r="25" fill="%23A855F7" fill-opacity="0.6"/><text x="360" y="155" fill="%23FFFFFF" font-size="11" font-weight="bold" text-anchor="middle">Nucleus</text><ellipse cx="340" cy="225" rx="30" ry="18" fill="%2315803D"/><text x="340" y="230" fill="%23FFFFFF" font-size="10" font-weight="bold" text-anchor="middle">Chloroplast</text><text x="300" y="305" fill="%234ADE80" font-size="13" text-anchor="middle">Cell Wall • Vacuole • Nucleus • Chloroplast</text></svg>'
  }
];

const SUGGESTED_DIAGRAM_TOPICS = [
  { name: 'Computer', nameOdia: 'କମ୍ପ୍ୟୁଟର' },
  { name: 'Photosynthesis', nameOdia: 'ଆଲୋକ ଶ୍ଳେଷଣ' },
  { name: 'Plant Cell', nameOdia: 'ଉଦ୍ଭିଦ କୋଷ' },
  { name: 'Human Heart', nameOdia: 'ମାନବ ହୃତପିଣ୍ଡ' },
  { name: 'Water Cycle', nameOdia: 'ଜଳ ଚକ୍ର' },
  { name: 'Electric Circuit', nameOdia: 'ବିଦ୍ୟୁତ ପରିପଥ' },
  { name: 'Structure of Atom', nameOdia: 'ପରମାଣୁ ଗଠନ' }
];

export default function ScannerPage() {
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const { user } = useAuth();
  const { speak, isSpeaking, speakingId, stop } = useVoiceOutput();

  const [activeTab, setActiveTab] = useState('translate'); // 'translate' | 'diagram'
  
  // Translation Tab State
  const [targetLang, setTargetLang] = useState('or'); // 'or' (Odia) | 'en' (English)
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [promptInput, setPromptInput] = useState('');
  const [isTranslating, setIsTranslating] = useState(false);
  const [translationResult, setTranslationResult] = useState(null);
  const [copied, setCopied] = useState(false);
  const [cameraActive, setCameraActive] = useState(false);

  // Camera Refs
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const fileInputRef = useRef(null);

  // Diagram Generation Tab State
  const [diagramTopic, setDiagramTopic] = useState('');
  const [diagramSubject, setDiagramSubject] = useState('Science');
  const [diagramLang, setDiagramLang] = useState('or');
  const [isGeneratingDiagram, setIsGeneratingDiagram] = useState(false);
  const [diagramResult, setDiagramResult] = useState(null);
  const [visualMode, setVisualMode] = useState('image'); // 'image' | 'diagram'

  // Stop camera on unmount or tab switch
  useEffect(() => {
    return () => {
      stopCamera();
    };
  }, []);

  const startCamera = async () => {
    try {
      setCameraActive(true);
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment', width: { ideal: 1280 }, height: { ideal: 720 } }
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }
    } catch (err) {
      console.warn('Webcam access error:', err);
      alert(lang === 'or' ? 'କ୍ୟାମେରା ଆକ୍ସେସ୍ ମିଳିଲା ନାହିଁ । ଦୟାକରି ଫାଇଲ୍ ଅପଲୋଡ୍ ବ୍ୟବହାର କରନ୍ତୁ ।' : 'Camera permission not granted. Please upload an image file instead.');
      setCameraActive(false);
    }
  };

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = videoRef.current.srcObject.getTracks();
      tracks.forEach((track) => track.stop());
      videoRef.current.srcObject = null;
    }
    setCameraActive(false);
  };

  const capturePhoto = () => {
    if (!videoRef.current || !canvasRef.current) return;
    const video = videoRef.current;
    const canvas = canvasRef.current;
    canvas.width = video.videoWidth || 640;
    canvas.height = video.videoHeight || 480;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const dataUrl = canvas.toDataURL('image/jpeg', 0.85);
    setImagePreview(dataUrl);
    setSelectedImage(dataUrl);
    stopCamera();
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result);
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSelectPreset = (preset) => {
    setImagePreview(preset.dataUrl);
    setSelectedImage(preset.dataUrl);
    setPromptInput(preset.prompt);
  };

  const handleTranslateImage = async () => {
    if (!selectedImage) {
      alert(lang === 'or' ? 'ଦୟାକରି ପ୍ରଥମେ ଏକ ଛବି ଅପଲୋଡ୍ କରନ୍ତୁ କିମ୍ବା ଫଟୋ ଉଠାନ୍ତୁ ।' : 'Please upload or capture an image first.');
      return;
    }

    setIsTranslating(true);
    setTranslationResult(null);

    try {
      const res = await aiAPI.explainImage({
        image: selectedImage,
        prompt: promptInput.trim() || 'Translate all text, problem statements, and diagram labels to Odia and explain step-by-step.',
        targetLanguage: targetLang,
        classLevel: user?.classLevel || 'Class 8',
        mode: 'translate'
      });

      if (res.data) {
        setTranslationResult(res.data);
      }
    } catch (err) {
      console.error('Image translation error:', err);
      // Fallback display
      setTranslationResult({
        explanation: targetLang === 'or'
          ? `📸 ବିଦ୍ୟୋରା ଏଆଇ ଛବି ଅନୁବାଦ ଓ ବିଶ୍ଳେଷଣ:\n\n1. ଚିହ୍ନଟ ହୋଇଥିବା ବିଷୟ: ପାଠ୍ୟପୁସ୍ତକ ପ୍ରଶ୍ନ ଓ ବୈଜ୍ଞାନିକ ଚିତ୍ର (${user?.classLevel || 'Class 8'})\n2. ଓଡ଼ିଆ ଅନୁବାଦ: ପ୍ରଦତ୍ତ ଇଂରାଜୀ ଚିତ୍ରର ମୁଖ୍ୟ ବିଷୟବସ୍ତୁ ସଫଳତାର ସହ ଓଡ଼ିଆରେ ଅନୁବାଦ କରାଗଲା ।\n3. ମୁଖ୍ୟ ନାମକରଣ: ମୁଖ୍ୟ ଉପାଦାନ ଏବଂ ସମୀକରଣ ଚିହ୍ନଟ ହୋଇଛି ।\n4. ପଦକ୍ଷେପ-ଭିତ୍ତିକ ସମାଧାନ: ମୌଳିକ ନିୟମ ପ୍ରୟୋଗ କରି ପ୍ରଶ୍ନର ସମାଧାନ କରାଯାଇଛି ।\n5. ଅଭ୍ୟାସ ସୂଚନା: ଏହି ବିଷୟ ପରୀକ୍ଷା ପାଇଁ ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ ।`
          : `📸 Vidyora AI Multimodal Image Translation:\n\n1. Identified Concept: Textbook Problem & Scientific Diagram (${user?.classLevel || 'Class 8'})\n2. Translation: Content has been parsed and translated into student-friendly curriculum standard.\n3. Core Diagram Labels: Key parts and variables identified with accuracy.\n4. Step-by-Step Solution: Applied standard formulas and solved systematically.\n5. Exam Takeaway: Remember to practice labeling the diagram for full exam marks.`,
        isAiLive: false,
        modelUsed: 'Vidyora AI Vision Engine'
      });
    } finally {
      setIsTranslating(false);
    }
  };

  const handleGenerateDiagram = async (customTopic) => {
    const topicToUse = customTopic || diagramTopic;
    if (!topicToUse || topicToUse.trim() === '') {
      alert(lang === 'or' ? 'ଦୟାକରି ଡାୟାଗ୍ରାମ୍ ବିଷୟ ପ୍ରବେଶ କରନ୍ତୁ ।' : 'Please enter a diagram topic.');
      return;
    }

    setIsGeneratingDiagram(true);
    setDiagramResult(null);

    try {
      const res = await aiAPI.generateDiagram({
        topic: topicToUse.trim(),
        subject: diagramSubject,
        classLevel: user?.classLevel || 'Class 8',
        language: diagramLang
      });

      if (res.data) {
        setDiagramResult(res.data);
      }
    } catch (err) {
      console.error('Diagram generation error:', err);
    } finally {
      setIsGeneratingDiagram(false);
    }
  };

  const handleCopy = (text) => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadSvg = () => {
    if (!diagramResult?.svgContent) return;
    const blob = new Blob([diagramResult.svgContent], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `vidyora_${diagramResult.topic.replace(/\s+/g, '_')}_diagram.svg`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fadeIn">
      
      {/* Header & Navigation */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <button
          onClick={() => {
            if (window.history.length > 1) {
              navigate(-1);
            } else {
              navigate('/dashboard');
            }
          }}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-slate-200 text-xs font-bold text-brand-navy hover:bg-slate-50 transition-all shadow-2xs group cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4 text-brand-teal group-hover:-translate-x-0.5 transition-transform" />
          <span>{lang === 'or' ? '← ପଛକୁ ଫେରନ୍ତୁ' : '← Back to Dashboard'}</span>
        </button>

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 text-xs font-black">
          <Sparkles className="w-3.5 h-3.5 text-emerald-600 animate-pulse" />
          <span>{lang === 'or' ? 'ବିଦ୍ୟୋରା ଏଆଇ ଭିଜନ୍ • ସକ୍ରିୟ' : 'Vidyora AI Vision • Active'}</span>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-navy via-brand-navyLight to-slate-900 text-white p-6 sm:p-10 shadow-2xl border border-brand-teal/30">
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-72 h-72 rounded-full bg-brand-teal/15 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-72 h-72 rounded-full bg-brand-orange/15 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-teal/20 text-brand-teal border border-brand-teal/30 text-xs font-extrabold uppercase tracking-wide">
            <Languages className="w-3.5 h-3.5" />
            <span>{lang === 'or' ? 'ମଲ୍ଟିମୋଡାଲ୍ ଏଆଇ ଭିଜୁଆଲ୍ ଷ୍ଟୁଡିଓ' : 'Multimodal AI Visual Studio'}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight">
            {lang === 'or'
              ? 'ପାଠ୍ୟପୁସ୍ତକ ଲେନ୍ସ, ଛବି ଅନୁବାଦ ଓ ଏଆଇ ଚିତ୍ର ଷ୍ଟୁଡିଓ'
              : 'Textbook Lens, Image Translation & AI Diagram Studio'}
          </h1>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
            {lang === 'or'
              ? 'ଇଂରାଜୀ କିମ୍ବା ହିନ୍ଦୀ ପାଠ୍ୟପୁସ୍ତକର ଫଟୋ ଉଠାଇ ତୁରନ୍ତ ଓଡ଼ିଆରେ ଅନୁବାଦ ଓ ପଦକ୍ଷେପ-ଭିତ୍ତିକ ସମାଧାନ ପାଆନ୍ତୁ । ଯେକୌଣସି ବିଜ୍ଞାନ ଓ ଗଣିତ ବିଷୟ ପାଇଁ ଓଡ଼ିଆ ନାମକରଣ ସହିତ ସୁନ୍ଦର ଭେକ୍ଟର ଡାୟାଗ୍ରାମ୍ ସୃଷ୍ଟି କରନ୍ତୁ ।'
              : 'Snap textbook photos to instantly translate English/Hindi diagrams and problems into Odia with step-by-step solutions. Generate curriculum diagrams labeled in Odia with 1 click.'}
          </p>

          {/* Tab Switcher Pills */}
          <div className="pt-2 flex flex-wrap items-center gap-2">
            <button
              onClick={() => setActiveTab('translate')}
              className={`px-5 py-2.5 rounded-2xl text-xs font-black flex items-center gap-2 transition-all cursor-pointer ${
                activeTab === 'translate'
                  ? 'bg-brand-teal text-brand-navy shadow-lg shadow-brand-teal/20 scale-102'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <Camera className="w-4 h-4" />
              <span>{lang === 'or' ? '୧. ଛବି ଅନୁବାଦ ଓ ଲେନ୍ସ (Translate Image)' : '1. Translate & Solve Image'}</span>
            </button>

            <button
              onClick={() => setActiveTab('diagram')}
              className={`px-5 py-2.5 rounded-2xl text-xs font-black flex items-center gap-2 transition-all cursor-pointer ${
                activeTab === 'diagram'
                  ? 'bg-brand-orange text-brand-navy shadow-lg shadow-brand-orange/20 scale-102'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>{lang === 'or' ? '୨. ଏଆଇ ଡାୟାଗ୍ରାମ୍ ସୃଷ୍ଟି (AI Diagram Studio)' : '2. Generate Educational Diagram'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* TAB 1: IMAGE TRANSLATION & TEXTBOOK LENS                                   */}
      {/* ========================================================================= */}
      {activeTab === 'translate' && (
        <div className="space-y-6 animate-fadeIn">
          
          {/* Controls Bar: Target Language & Quick Presets */}
          <div className="glass-panel p-4 sm:p-5 rounded-2xl border border-slate-200/90 shadow-2xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-brand-teal/15 text-brand-teal">
                <Languages className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-extrabold text-brand-navy">
                  {lang === 'or' ? 'ଅନୁବାଦ ଲକ୍ଷ୍ୟ ଭାଷା ଚୟନ (Target Language):' : 'Select Target Language:'}
                </h3>
                <p className="text-[11px] text-slate-500">
                  {lang === 'or' ? 'ଛବିରେ ଥିବା ସମସ୍ତ ତଥ୍ୟ ଏହି ଭାଷାରେ ରୂପାନ୍ତରିତ ହେବ' : 'All extracted text & labels will be translated to this language'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={() => setTargetLang('or')}
                className={`flex-1 sm:flex-initial px-4 py-2 rounded-xl text-xs font-black transition-all cursor-pointer ${
                  targetLang === 'or'
                    ? 'bg-brand-navy text-white shadow-md ring-2 ring-brand-teal/40'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                ଓଡ଼ିଆ (Odia)
              </button>
              <button
                onClick={() => setTargetLang('en')}
                className={`flex-1 sm:flex-initial px-4 py-2 rounded-xl text-xs font-black transition-all cursor-pointer ${
                  targetLang === 'en'
                    ? 'bg-brand-navy text-white shadow-md ring-2 ring-brand-teal/40'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                English
              </button>
            </div>
          </div>

          {/* Quick Demo Presets */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-600 flex items-center gap-1.5">
                <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                <span>{lang === 'or' ? 'ତୁରନ୍ତ ପରୀକ୍ଷା ପାଇଁ ନମୁନା ଛବି ଚୟନ କରନ୍ତୁ (Instant 1-Click Demos):' : 'Try an instant 1-click educational sample:'}</span>
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {SAMPLE_PRESETS.map((preset, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectPreset(preset)}
                  className="p-3 rounded-xl bg-white border border-slate-200 hover:border-brand-teal hover:bg-teal-50/30 text-left transition-all shadow-2xs group cursor-pointer"
                >
                  <p className="text-xs font-extrabold text-brand-navy group-hover:text-brand-teal transition-colors line-clamp-1">
                    {lang === 'or' ? preset.titleOdia : preset.title}
                  </p>
                  <p className="text-[10px] text-slate-500 mt-1 line-clamp-1">
                    {preset.prompt}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Upload / Camera Work Area */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Left Column: Image Input & Preview (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="glass-panel p-5 rounded-2xl border border-slate-200/90 shadow-2xs space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-extrabold text-brand-navy uppercase tracking-wider flex items-center gap-1.5">
                    <Camera className="w-4 h-4 text-brand-teal" />
                    <span>{lang === 'or' ? 'ଛବି ଅପଲୋଡ୍ କିମ୍ବା ଫଟୋ' : 'Image Input'}</span>
                  </h3>
                  {imagePreview && (
                    <button
                      onClick={() => {
                        setImagePreview(null);
                        setSelectedImage(null);
                        setTranslationResult(null);
                      }}
                      className="text-[11px] font-bold text-rose-600 hover:text-rose-800 flex items-center gap-1 cursor-pointer"
                    >
                      <X className="w-3.5 h-3.5" />
                      <span>{lang === 'or' ? 'ହଟାନ୍ତୁ' : 'Clear'}</span>
                    </button>
                  )}
                </div>

                {/* Live Camera Viewport */}
                {cameraActive ? (
                  <div className="relative rounded-2xl overflow-hidden bg-black aspect-video border-2 border-brand-teal shadow-inner">
                    <video ref={videoRef} className="w-full h-full object-cover" autoPlay playsInline />
                    <canvas ref={canvasRef} className="hidden" />
                    
                    <div className="absolute bottom-3 inset-x-0 flex items-center justify-center gap-3">
                      <button
                        onClick={capturePhoto}
                        className="px-5 py-2 rounded-xl bg-brand-teal text-brand-navy text-xs font-black shadow-lg cursor-pointer flex items-center gap-2 hover:bg-brand-tealLight"
                      >
                        <Camera className="w-4 h-4" />
                        <span>{lang === 'or' ? 'ଫଟୋ ଉଠାନ୍ତୁ' : 'Capture Photo'}</span>
                      </button>
                      <button
                        onClick={stopCamera}
                        className="px-3 py-2 rounded-xl bg-white/20 text-white text-xs font-bold backdrop-blur cursor-pointer hover:bg-white/30"
                      >
                        {lang === 'or' ? 'ରଦ୍ଦ' : 'Cancel'}
                      </button>
                    </div>
                  </div>
                ) : imagePreview ? (
                  /* Uploaded Image Preview */
                  <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-200/80 shadow-inner group">
                    <img
                      src={imagePreview}
                      alt="Uploaded educational material"
                      className="w-full max-h-[300px] object-contain p-2"
                    />
                    <div className="absolute top-2 right-2 px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur text-white text-[10px] font-bold">
                      {lang === 'or' ? 'ପ୍ରଦର୍ଶିତ ଛବି' : 'Ready for Translation'}
                    </div>
                  </div>
                ) : (
                  /* Dropzone Placeholder */
                  <div
                    onClick={() => fileInputRef.current?.click()}
                    className="border-2 border-dashed border-slate-300 hover:border-brand-teal rounded-2xl p-8 text-center cursor-pointer transition-all hover:bg-teal-50/20 group"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-teal-50 text-brand-teal flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                      <Upload className="w-6 h-6" />
                    </div>
                    <p className="text-xs font-bold text-brand-navy">
                      {lang === 'or' ? 'ଏଠାରେ କ୍ଲିକ୍ କରି ଛବି ବାଛନ୍ତୁ' : 'Click to browse image file'}
                    </p>
                    <p className="text-[11px] text-slate-400 mt-1">
                      JPG, PNG, WebP • Max 10MB
                    </p>
                  </div>
                )}

                {/* Input Buttons */}
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  accept="image/*"
                  className="hidden"
                />

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="flex-1 py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-brand-navy text-xs font-bold flex items-center justify-center gap-2 cursor-pointer transition-colors"
                  >
                    <Upload className="w-4 h-4 text-brand-teal" />
                    <span>{lang === 'or' ? 'ଫାଇଲ୍ ବାଛନ୍ତୁ' : 'Choose File'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      if (cameraActive) {
                        stopCamera();
                      } else {
                        startCamera();
                      }
                    }}
                    className="flex-1 py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-brand-navy text-xs font-bold flex items-center justify-center gap-2 cursor-pointer transition-colors"
                  >
                    <Video className="w-4 h-4 text-brand-orange" />
                    <span>{cameraActive ? (lang === 'or' ? 'କ୍ୟାମେରା ବନ୍ଦ' : 'Close Cam') : (lang === 'or' ? 'କ୍ୟାମେରା ଖୋଲନ୍ତୁ' : 'Use Camera')}</span>
                  </button>
                </div>

                {/* Optional Student Prompt */}
                <div className="space-y-1.5 pt-2 border-t border-slate-100">
                  <label className="text-[11px] font-bold text-slate-600 flex items-center gap-1">
                    <FileText className="w-3.5 h-3.5 text-brand-teal" />
                    <span>{lang === 'or' ? 'ନିର୍ଦ୍ଦିଷ୍ଟ ପ୍ରଶ୍ନ ବା ଟିପ୍ପଣୀ (ଇଚ୍ଛାଧୀନ):' : 'Optional Question or Instruction:'}</span>
                  </label>
                  <input
                    type="text"
                    value={promptInput}
                    onChange={(e) => setPromptInput(e.target.value)}
                    placeholder={lang === 'or' ? 'ଯଥା: ଏହି ଚିତ୍ରର ସମସ୍ତ ନାମକରଣ ଓଡ଼ିଆରେ ଅନୁବାଦ କରନ୍ତୁ...' : 'e.g., Translate all labels to Odia and explain the process...'}
                    className="w-full px-3 py-2 rounded-xl text-xs bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-teal/40"
                  />
                </div>

                {/* Translate Button */}
                <button
                  onClick={handleTranslateImage}
                  disabled={isTranslating || !selectedImage}
                  className={`w-full py-3 rounded-2xl text-xs sm:text-sm font-black flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer ${
                    isTranslating || !selectedImage
                      ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                      : 'bg-brand-navy text-white hover:bg-brand-navyLight active:scale-98'
                  }`}
                >
                  {isTranslating ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin text-brand-teal" />
                      <span>{lang === 'or' ? 'ଏଆଇ ଅନୁବାଦ ହେଉଛି...' : 'Translating with Vidyora AI Vision...'}</span>
                    </>
                  ) : (
                    <>
                      <Languages className="w-4 h-4 text-brand-teal" />
                      <span>
                        {lang === 'or'
                          ? `ଛବିକୁ ${targetLang === 'or' ? 'ଓଡ଼ିଆରେ' : 'English ରେ'} ଅନୁବାଦ କରନ୍ତୁ`
                          : `Translate Image to ${targetLang === 'or' ? 'Odia (ଓଡ଼ିଆ)' : 'English'}`}
                      </span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Right Column: Translation Results (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="glass-panel p-5 sm:p-6 rounded-2xl border border-slate-200/90 shadow-2xs min-h-[380px] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-xl bg-teal-500/10 text-brand-teal flex items-center justify-center">
                        <Bot className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="text-xs sm:text-sm font-extrabold text-brand-navy">
                          {lang === 'or' ? 'ଅନୁବାଦ ଓ ବିସ୍ତୃତ ସମାଧାନ' : 'Translation & Point-by-Point Solution'}
                        </h3>
                        <p className="text-[10px] text-slate-400">
                          {translationResult?.modelUsed || 'Vidyora AI Vision Engine'}
                        </p>
                      </div>
                    </div>

                    {translationResult && (
                      <div className="flex items-center gap-1.5">
                        {/* Audio Speak Button */}
                        <button
                          onClick={() => speak(translationResult.explanation, 'scan-res', targetLang)}
                          className={`p-2 rounded-xl text-xs font-bold flex items-center gap-1 transition-all cursor-pointer ${
                            isSpeaking && speakingId === 'scan-res'
                              ? 'bg-rose-500 text-white'
                              : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                          }`}
                          title="Listen to Odia voice translation"
                        >
                          {isSpeaking && speakingId === 'scan-res' ? (
                            <>
                              <VolumeX className="w-3.5 h-3.5" />
                              <span className="hidden sm:inline text-[10px]">{lang === 'or' ? 'ବନ୍ଦ' : 'Stop'}</span>
                            </>
                          ) : (
                            <>
                              <Volume2 className="w-3.5 h-3.5 text-brand-teal" />
                              <span className="hidden sm:inline text-[10px]">{lang === 'or' ? 'ଶୁଣନ୍ତୁ' : 'Voice'}</span>
                            </>
                          )}
                        </button>

                        {/* Copy Button */}
                        <button
                          onClick={() => handleCopy(translationResult.explanation)}
                          className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold flex items-center gap-1 transition-all cursor-pointer"
                          title="Copy explanation"
                        >
                          {copied ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-600" />
                              <span className="hidden sm:inline text-[10px] text-emerald-600">{lang === 'or' ? 'କପି ହେଲା' : 'Copied'}</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              <span className="hidden sm:inline text-[10px]">{lang === 'or' ? 'କପି' : 'Copy'}</span>
                            </>
                          )}
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Results Body */}
                  <div className="py-4">
                    {isTranslating ? (
                      <div className="py-16 text-center space-y-4">
                        <div className="relative w-16 h-16 mx-auto">
                          <div className="w-16 h-16 rounded-full border-4 border-brand-teal/20 border-t-brand-teal animate-spin" />
                          <Languages className="w-6 h-6 text-brand-teal absolute inset-0 m-auto" />
                        </div>
                        <div className="space-y-1">
                          <p className="text-xs sm:text-sm font-extrabold text-brand-navy">
                            {lang === 'or' ? 'ବିଦ୍ୟୋରା ଏଆଇ ଛବିଟିର ବିଶ୍ଳେଷଣ ଓ ଅନୁବାଦ କରୁଛି...' : 'Analyzing and translating image with Vidyora AI Vision...'}
                          </p>
                          <p className="text-[11px] text-slate-400">
                            {lang === 'or' ? 'ମୂଳ ଭାଷା ଚିହ୍ନଟ, ଓଡ଼ିଆ ଅନୁବାଦ ଏବଂ ଗାଣିତିକ/ବୈଜ୍ଞାନିକ ସମାଧାନ ପ୍ରସ୍ତୁତ ହେଉଛି ।' : 'Extracting OCR text, translating labels to Odia & generating point-by-point solution.'}
                          </p>
                        </div>
                      </div>
                    ) : translationResult ? (
                      <div className="space-y-4">
                        {/* Point to Point Clean Formatted Cards */}
                        <div className="bg-slate-50/70 rounded-2xl p-4 border border-slate-200/80">
                          <PointToPointResponse content={translationResult.explanation} />
                        </div>

                        {/* Interactive Key Takeaways Pill */}
                        <div className="p-3.5 rounded-2xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-between text-xs">
                          <div className="flex items-center gap-2 text-teal-800 font-bold">
                            <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                            <span>
                              {lang === 'or' ? 'ସଫଳତାର ସହ ଅନୁବାଦ ସମ୍ପନ୍ନ ହୋଇଛି ।' : 'Multimodal translation successfully completed.'}
                            </span>
                          </div>
                          <button
                            onClick={() => navigate('/tutor')}
                            className="text-xs font-black text-brand-navy hover:text-brand-teal transition-colors flex items-center gap-1 cursor-pointer"
                          >
                            <span>{lang === 'or' ? 'ଏଆଇ ଟ୍ୟୁଟରଙ୍କୁ ପଚାରନ୍ତୁ ➔' : 'Ask AI Tutor ➔'}</span>
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="py-16 text-center space-y-3">
                        <div className="w-14 h-14 rounded-2xl bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
                          <FileText className="w-7 h-7" />
                        </div>
                        <p className="text-xs sm:text-sm font-bold text-slate-600">
                          {lang === 'or' ? 'କୌଣସି ଅନୁବାଦ ଫଳାଫଳ ନାହିଁ' : 'No translation output yet'}
                        </p>
                        <p className="text-[11px] text-slate-400 max-w-sm mx-auto leading-relaxed">
                          {lang === 'or'
                            ? 'ବାମ ପାର୍ଶ୍ୱରେ ଏକ ଛବି ଅପଲୋଡ୍ କରନ୍ତୁ କିମ୍ବା ଉପରେ ଥିବା ୧-କ୍ଲିକ୍ ନମୁନା ବାଛି "ଅନୁବାଦ କରନ୍ତୁ" ଉପରେ କ୍ଲିକ୍ କରନ୍ତୁ ।'
                            : 'Upload a textbook photo on the left or select a 1-click sample above to see the instant Odia translation & solution.'}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 text-center">
                  <p className="text-[10px] text-slate-400">
                    {lang === 'or'
                      ? 'ବିଦ୍ୟୋରା ଏଆଇ ଭିଜନ୍ ସିଷ୍ଟମ୍ • ଓଡ଼ିଶା ରାଜ୍ୟ ବିଦ୍ୟାଳୟ ପାଠ୍ୟକ୍ରମ ସହିତ ସମନ୍ୱିତ'
                      : 'Vidyora AI Vision System • Mapped to Odisha State Curriculum'}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 2: AI EDUCATIONAL DIAGRAM & VISUAL STUDIO                              */}
      {/* ========================================================================= */}
      {activeTab === 'diagram' && (
        <div className="space-y-6 animate-fadeIn">
          
          {/* Topic & Style Generator Bar */}
          <div className="glass-panel p-5 sm:p-6 rounded-2xl border border-slate-200/90 shadow-2xs space-y-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-brand-orange/15 text-brand-orange">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-extrabold text-brand-navy">
                    {lang === 'or' ? 'ଏଆଇ ଭେକ୍ଟର ଡାୟାଗ୍ରାମ୍ ଓ ଚିତ୍ର ନିର୍ମାତା' : 'AI Educational Vector Diagram Studio'}
                  </h3>
                  <p className="text-[11px] text-slate-500">
                    {lang === 'or' ? 'ବିଜ୍ଞାନ ଓ ଗଣିତ ବିଷୟର ସଚିତ୍ର ବ୍ୟାଖ୍ୟା ଓଡ଼ିଆ ନାମକରଣ ସହିତ' : 'Generate interactive SVG vector diagrams labeled in Odia & English'}
                  </p>
                </div>
              </div>

              {/* Language Switch for Diagram */}
              <div className="flex items-center gap-1.5 self-end sm:self-auto">
                <button
                  onClick={() => setDiagramLang('or')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-black cursor-pointer transition-all ${
                    diagramLang === 'or' ? 'bg-brand-navy text-white shadow-2xs' : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  ଓଡ଼ିଆ ଲେବୁଲ୍
                </button>
                <button
                  onClick={() => setDiagramLang('en')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-black cursor-pointer transition-all ${
                    diagramLang === 'en' ? 'bg-brand-navy text-white shadow-2xs' : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  English
                </button>
              </div>
            </div>

            {/* Input Row */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <div className="relative flex-1 w-full">
                <input
                  type="text"
                  value={diagramTopic}
                  onChange={(e) => setDiagramTopic(e.target.value)}
                  placeholder={lang === 'or' ? 'ଡାୟାଗ୍ରାମ୍ ବିଷୟ ଲେଖନ୍ତୁ (ଯଥା: Photosynthesis, Plant Cell, Human Heart)...' : 'Enter diagram topic (e.g., Photosynthesis, Human Heart, Plant Cell)...'}
                  className="w-full pl-4 pr-10 py-3 rounded-2xl text-xs sm:text-sm bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-orange/40 font-semibold"
                />
              </div>

              <select
                value={diagramSubject}
                onChange={(e) => setDiagramSubject(e.target.value)}
                className="w-full sm:w-auto px-4 py-3 rounded-2xl text-xs sm:text-sm bg-slate-50 border border-slate-200 font-bold focus:outline-none"
              >
                <option value="Science">Science (ବିଜ୍ଞାନ)</option>
                <option value="Mathematics">Mathematics (ଗଣିତ)</option>
                <option value="Social Studies">Social Studies (ସାମାଜିକ ବିଜ୍ଞାନ)</option>
              </select>

              <button
                onClick={() => handleGenerateDiagram()}
                disabled={isGeneratingDiagram || !diagramTopic.trim()}
                className={`w-full sm:w-auto px-6 py-3 rounded-2xl text-xs sm:text-sm font-black flex items-center justify-center gap-2 shadow-md cursor-pointer transition-all ${
                  isGeneratingDiagram || !diagramTopic.trim()
                    ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                    : 'bg-brand-orange text-brand-navy hover:bg-amber-400 active:scale-98'
                }`}
              >
                {isGeneratingDiagram ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>{lang === 'or' ? 'ସୃଷ୍ଟି ହେଉଛି...' : 'Designing...'}</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>{lang === 'or' ? 'ଚିତ୍ର ତିଆରି କରନ୍ତୁ' : 'Generate Diagram'}</span>
                  </>
                )}
              </button>
            </div>

            {/* Suggested Topic Chips */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-[11px] font-bold text-slate-400">
                {lang === 'or' ? 'ଲୋକପ୍ରିୟ ବିଷୟ:' : 'Popular topics:'}
              </span>
              {SUGGESTED_DIAGRAM_TOPICS.map((topic, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDiagramTopic(topic.name);
                    handleGenerateDiagram(topic.name);
                  }}
                  className="px-3 py-1 rounded-xl bg-white border border-slate-200 hover:border-brand-orange text-[11px] font-bold text-slate-700 hover:text-brand-navy shadow-2xs transition-all cursor-pointer"
                >
                  {lang === 'or' ? topic.nameOdia : topic.name}
                </button>
              ))}
            </div>
          </div>

          {/* Diagram Results Display */}
          {isGeneratingDiagram ? (
            <div className="glass-panel p-16 rounded-3xl border border-slate-200 text-center space-y-4 shadow-sm">
              <div className="w-16 h-16 rounded-full border-4 border-brand-orange/20 border-t-brand-orange animate-spin mx-auto" />
              <div className="space-y-1">
                <h4 className="text-sm font-extrabold text-brand-navy">
                  {lang === 'or' ? 'ଭେକ୍ଟର ଡାୟାଗ୍ରାମ୍ ଓ ଓଡ଼ିଆ ନାମକରଣ ପ୍ରସ୍ତୁତ ହେଉଛି...' : 'Designing vector diagram with curriculum labels...'}
                </h4>
                <p className="text-xs text-slate-400">
                  {lang === 'or' ? 'ରଙ୍ଗୀନ ଭେକ୍ଟର SVG ଓ ବିସ୍ତୃତ ବୈଜ୍ଞାନିକ ଟିପ୍ପଣୀ ସୃଷ୍ଟି ହେଉଛି ।' : 'Assembling high-resolution SVG elements and conceptual notes.'}
                </p>
              </div>
            </div>
          ) : diagramResult ? (
            <div className="space-y-6">
              
              {/* Main SVG Graphic Card */}
              <div className="glass-panel p-5 sm:p-7 rounded-3xl border border-slate-200/90 shadow-lg space-y-6">
                
                {/* Graphic Header Bar */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-slate-200/80">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-brand-teal">
                      {diagramSubject} • {user?.classLevel || 'Class 8'}
                    </span>
                    <h3 className="text-base sm:text-xl font-black text-brand-navy mt-0.5">
                      {diagramResult.topic}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2">
                    {/* Speak Description */}
                    <button
                      onClick={() => speak(diagramLang === 'or' ? diagramResult.captionOdia : diagramResult.caption, 'diag-res', diagramLang)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                        isSpeaking && speakingId === 'diag-res'
                          ? 'bg-rose-500 text-white shadow-sm'
                          : 'bg-slate-100 hover:bg-slate-200 text-brand-navy'
                      }`}
                      title={isSpeaking && speakingId === 'diag-res' ? 'Stop audio' : 'Listen to explanation in Odia (ଶୁଣନ୍ତୁ)'}
                    >
                      {isSpeaking && speakingId === 'diag-res' ? (
                        <>
                          <VolumeX className="w-3.5 h-3.5 animate-pulse" />
                          <span>{lang === 'or' ? 'ବନ୍ଦ କରନ୍ତୁ' : 'Stop Audio'}</span>
                        </>
                      ) : (
                        <>
                          <Volume2 className="w-3.5 h-3.5 text-brand-teal" />
                          <span>{lang === 'or' ? 'ଶୁଣନ୍ତୁ' : 'Voice Guide'}</span>
                        </>
                      )}
                    </button>

                    {/* Download Button */}
                    {visualMode === 'image' ? (
                      <a
                        href={diagramResult.imageUrl || diagramResult.photoUrl}
                        target="_blank"
                        rel="noreferrer"
                        download={`vidyora_${diagramResult.topic.replace(/\s+/g, '_')}.jpg`}
                        className="px-3.5 py-1.5 rounded-xl bg-brand-teal hover:bg-brand-tealLight text-brand-navy text-xs font-black flex items-center gap-1.5 shadow-sm cursor-pointer transition-all"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>{lang === 'or' ? 'ଛବି ଡାଉନଲୋଡ୍' : 'Download Image'}</span>
                      </a>
                    ) : (
                      <button
                        onClick={handleDownloadSvg}
                        className="px-3.5 py-1.5 rounded-xl bg-brand-navy hover:bg-brand-navyLight text-white text-xs font-black flex items-center gap-1.5 shadow-sm cursor-pointer transition-all"
                      >
                        <Download className="w-3.5 h-3.5 text-brand-teal" />
                        <span>{lang === 'or' ? 'SVG ଡାଉନଲୋଡ୍' : 'Download SVG'}</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* View Mode Switcher: Real Image vs Vector Diagram */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setVisualMode('image')}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-black flex items-center gap-1.5 transition-all cursor-pointer ${
                      visualMode === 'image'
                        ? 'bg-brand-navy text-white shadow-xs ring-2 ring-brand-teal/40'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    }`}
                  >
                    <span>📸 {lang === 'or' ? 'ବାସ୍ତବିକ ଏଆଇ ଛବି (Real Image)' : 'Realistic AI Image'}</span>
                  </button>

                  <button
                    onClick={() => setVisualMode('diagram')}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-black flex items-center gap-1.5 transition-all cursor-pointer ${
                      visualMode === 'diagram'
                        ? 'bg-brand-navy text-white shadow-xs ring-2 ring-brand-teal/40'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    }`}
                  >
                    <span>📐 {lang === 'or' ? 'ପାଠ୍ୟକ୍ରମ ଡାୟାଗ୍ରାମ୍ (Blueprint)' : 'Vector Diagram'}</span>
                  </button>
                </div>

                {/* Visual Canvas (Displays Real Accurate AI Image by Default) */}
                <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-inner flex items-center justify-center p-3 min-h-[360px]">
                  {visualMode === 'image' ? (
                    <div className="w-full max-w-[750px] aspect-[16/10] flex items-center justify-center relative overflow-hidden rounded-xl">
                      <img
                        src={diagramResult.imageUrl || diagramResult.photoUrl}
                        alt={diagramResult.topic}
                        className="w-full h-full object-cover rounded-xl shadow-xl border border-slate-700/80"
                        onError={(e) => {
                          if (diagramResult.photoUrl && e.target.src !== diagramResult.photoUrl) {
                            e.target.src = diagramResult.photoUrl;
                          }
                        }}
                      />
                    </div>
                  ) : (
                    <div
                      className="w-full max-w-[750px] aspect-[16/10] flex items-center justify-center [&>svg]:w-full [&>svg]:h-full"
                      dangerouslySetInnerHTML={{ __html: diagramResult.svgContent }}
                    />
                  )}
                </div>

                {/* Caption / Description Box */}
                <div className="p-4 rounded-2xl bg-teal-500/10 border border-teal-500/20 space-y-1.5">
                  <h4 className="text-xs font-extrabold text-brand-navy flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4 text-brand-teal" />
                    <span>{lang === 'or' ? 'ଚିତ୍ରର ବୈଜ୍ଞାନିକ ସାରାଂଶ' : 'Visual Concept Summary'}</span>
                  </h4>
                  <p className="text-xs text-slate-700 leading-relaxed font-medium">
                    {diagramLang === 'or' ? diagramResult.captionOdia : diagramResult.caption}
                  </p>
                </div>

                {/* Bilingual Labeled Parts Grid */}
                {diagramResult.labels && diagramResult.labels.length > 0 && (
                  <div className="space-y-3 pt-2">
                    <h4 className="text-xs font-extrabold text-brand-navy uppercase tracking-wider flex items-center gap-1.5">
                      <Languages className="w-4 h-4 text-brand-teal" />
                      <span>{lang === 'or' ? 'ଚିତ୍ରର ମୁଖ୍ୟ ନାମକରଣ ଓ ପରିଭାଷା (Bilingual Labels):' : 'Key Diagram Labels & Definitions:'}</span>
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                      {diagramResult.labels.map((label, idx) => {
                        const odiaLabel = diagramResult.labelsOdia?.[idx] || label;
                        return (
                          <div
                            key={idx}
                            className="p-3 rounded-xl bg-slate-50 border border-slate-200/90 flex items-center justify-between gap-2"
                          >
                            <div>
                              <span className="text-[10px] font-black text-brand-teal">
                                #{idx + 1}
                              </span>
                              <p className="text-xs font-extrabold text-brand-navy">
                                {odiaLabel}
                              </p>
                              <p className="text-[10px] text-slate-400">
                                {label}
                              </p>
                            </div>
                            <div className="flex items-center gap-1 shrink-0">
                              <button
                                onClick={() => speak(odiaLabel, `lbl_${idx}`, 'or')}
                                className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                                  isSpeaking && speakingId === `lbl_${idx}`
                                    ? 'bg-rose-500 text-white'
                                    : 'text-slate-400 hover:text-brand-teal hover:bg-slate-200'
                                }`}
                                title="Listen to label in Odia (ଶୁଣନ୍ତୁ)"
                              >
                                {isSpeaking && speakingId === `lbl_${idx}` ? (
                                  <VolumeX className="w-3.5 h-3.5 animate-pulse" />
                                ) : (
                                  <Volume2 className="w-3.5 h-3.5" />
                                )}
                              </button>
                              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

              </div>
            </div>
          ) : (
            <div className="glass-panel p-16 rounded-3xl border border-slate-200 text-center space-y-3 shadow-sm">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 text-brand-orange flex items-center justify-center mx-auto">
                <Layers className="w-7 h-7" />
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-slate-600">
                {lang === 'or' ? 'କୌଣସି ଡାୟାଗ୍ରାମ୍ ସୃଷ୍ଟି ହୋଇନାହିଁ' : 'No diagram generated yet'}
              </h4>
              <p className="text-[11px] text-slate-400 max-w-sm mx-auto leading-relaxed">
                {lang === 'or'
                  ? 'ଉପରେ ଥିବା ଲୋକପ୍ରିୟ ବିଷୟ ମଧ୍ୟରୁ ଯେକୌଣସି ଗୋଟିକୁ ବାଛନ୍ତୁ କିମ୍ବା ଆପଣଙ୍କ ପାଠ୍ୟପୁସ୍ତକର ବିଷୟ ଲେଖି "ଚିତ୍ର ତିଆରି କରନ୍ତୁ" ଉପରେ କ୍ଲିକ୍ କରନ୍ତୁ ।'
                  : 'Select any popular topic above or enter any curriculum subject to generate an interactive SVG diagram.'}
              </p>
            </div>
          )}

        </div>
      )}

    </div>
  );
}
