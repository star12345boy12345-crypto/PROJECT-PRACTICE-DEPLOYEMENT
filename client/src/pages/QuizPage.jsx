import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import confetti from 'canvas-confetti';
import { quizzesAPI } from '../services/api';
import { queueOfflineQuizAttempt, getOfflineQuizById, getOfflineQuizzes } from '../services/offlineStorage';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';
import {
  Award,
  Clock,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  RotateCcw,
  ArrowRight,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  HelpCircle,
  Share2,
  Send,
  Loader2,
  BrainCircuit,
  WifiOff,
  Languages
} from 'lucide-react';

const getStudentEncouragement = (pct, odia) => {
  if (pct === 100) {
    return {
      tier: 'champion',
      badge: odia ? '🏆 ଚାମ୍ପିଅନ୍ ଶିରୋମଣି (Flawless 100%)' : '🏆 Flawless Champion (100%)',
      title: odia ? 'ଅଦ୍ଭୁତପୂର୍ବ ସଫଳତା! ସମ୍ପୂର୍ଣ୍ଣ ଶତ ପ୍ରତିଶତ!' : 'Absolute Perfection! Flawless Score!',
      message: odia
        ? 'ଚମତ୍କାର ପ୍ରଦର୍ଶନ! ତୁମେ ଏହି ଅଧ୍ୟାୟର ପ୍ରତ୍ୟେକଟି ପ୍ରଶ୍ନର ସଠିକ୍ ଉତ୍ତର ଦେଇ ସମ୍ପୂର୍ଣ୍ଣ ନିପୁଣତା ପ୍ରମାଣିତ କରିଛ । ତୁମର ଏହି ପରିଶ୍ରମ ଓ ନିଷ୍ଠା ଅତ୍ୟନ୍ତ ପ୍ରେରଣାଦାୟୀ !'
        : 'Outstanding performance! You answered every single question with pinpoint accuracy and mastered this topic completely. You are a true role model!',
      powerWords: odia
        ? ['✨ ଚମତ୍କାର (Brilliant)', '🔥 ଅଦ୍ୱିତୀୟ (Unmatched)', '👑 ବିଜୟୀ (Champion)', '💡 ଜ୍ଞାନୀ (Master)']
        : ['✨ Brilliant', '🔥 Unstoppable', '👑 Champion', '💡 Master Mind'],
      headerBg: 'bg-gradient-to-r from-amber-500 via-emerald-500 to-teal-500 text-white',
      cardBorder: 'border-emerald-300',
      icon: '🏆',
    };
  } else if (pct >= 80) {
    return {
      tier: 'excellent',
      badge: odia ? '🌟 ଉଜ୍ଜ୍ୱଳ ପ୍ରତିଭା (Distinction)' : '🌟 Outstanding Mastery',
      title: odia ? 'ଉଲ୍ଲେଖନୀୟ ପ୍ରଦର୍ଶନ! ଖୁବ୍ ସୁନ୍ଦର!' : 'Outstanding Achievement! Superb!',
      message: odia
        ? 'ସାବାସ୍ ବିଦ୍ୟାର୍ଥୀ! ତୁମର ଏକାଗ୍ରତା ଓ ପରିଶ୍ରମ ରଙ୍ଗ ଆଣିଛି । ତୁମେ ଶୀର୍ଷ ସ୍ଥାନର ବହୁତ ନିକଟରେ ଅଛ । ଏହିପରି ଉତ୍ସାହର ସହିତ ଆଗକୁ ବଢ଼ି ଚାଲ !'
        : 'Bravo! Your dedication is truly shining through. You have a profound conceptual grasp and are just one step away from absolute perfection!',
      powerWords: odia
        ? ['🌟 ପ୍ରତିଭାବାନ (Gifted)', '🎯 ଲକ୍ଷ୍ୟଭେଦୀ (Focused)', '⚡ ତେଜସ୍ୱୀ (Dynamic)', '🚀 ଅଗ୍ରଗାମୀ (Pioneer)']
        : ['🌟 Gifted', '🎯 Focused', '⚡ Dynamic', '🚀 High Achiever'],
      headerBg: 'bg-gradient-to-r from-brand-teal via-emerald-500 to-brand-navy text-white',
      cardBorder: 'border-brand-teal/40',
      icon: '🌟',
    };
  } else if (pct >= 60) {
    return {
      tier: 'good',
      badge: odia ? '🚀 ଦୃଢ଼ ଅଗ୍ରଗତି (Strong Progress)' : '🚀 Great Effort & Progress',
      title: odia ? 'ଉତ୍ତମ ପ୍ରୟାସ! ତୁମେ ନିଶ୍ଚୟ ଆହୁରି ଉନ୍ନତି କରିବ!' : 'Great Work! You are Growing Stronger!',
      message: odia
        ? 'ବହୁତ ଭଲ ଚେଷ୍ଟା କରିଛ! ତୁମର ବୁଝିବା ଶକ୍ତି ପ୍ରଶଂସନୀୟ । ତଳେ ଥିବା ଉତ୍ତର ଓ ସୂତ୍ରଗୁଡ଼ିକୁ ଥରେ ପୁନରାବୃତ୍ତି କରିନିଅ, ପରବର୍ତ୍ତୀ ପରୀକ୍ଷାରେ ତୁମେ ନିଶ୍ଚୟ ଶତପ୍ରତିଶତ ହାସଲ କରିବ !'
        : 'Solid effort! You demonstrated good conceptual retention. Mistakes are the greatest teachers — review the explanations below and you will easily reach the top!',
      powerWords: odia
        ? ['💪 ପରିଶ୍ରମୀ (Hardworking)', '📈 ପ୍ରଗତିଶୀଳ (Progressing)', '🎯 ଉଦ୍ୟମୀ (Diligent)', '💡 ଧୀମାନ (Clever)']
        : ['💪 Resilient', '📈 Progressing', '🎯 Diligent', '💡 Sharp Mind'],
      headerBg: 'bg-gradient-to-r from-brand-orange via-amber-500 to-brand-teal text-white',
      cardBorder: 'border-amber-300',
      icon: '🚀',
    };
  } else {
    return {
      tier: 'encouraging',
      badge: odia ? '💪 ସାହସୀ ଯୋଦ୍ଧା (Brave Learner)' : '💪 Brave Learner — Never Give Up',
      title: odia ? 'ହାରିବାର ନାହିଁ! ତୁମ ଭିତରେ ଅସୀମ ସମ୍ଭାବନା ଅଛି!' : 'Every Mistake is a Stepping Stone!',
      message: odia
        ? 'ଆଦୌ ନିରାଶ ହୁଅ ନାହିଁ ! ମହାନ ବୈଜ୍ଞାନିକ ଓ ଗଣିତଜ୍ଞମାନେ ମଧ୍ୟ ବାରମ୍ବାର ଚେଷ୍ଟା କରି ସଫଳତା ପାଇଥିଲେ । ତୁମେ ନିଶ୍ଚୟ ପାରିବ — ତଳେ ଥିବା ବ୍ୟାଖ୍ୟା ପଢ଼ି ଆଉ ଥରେ ଚେଷ୍ଟା କର !'
        : 'Never lose heart! True champions are made through perseverance. You took on the challenge boldly — read through the step-by-step guidance below and conquer it on your next attempt!',
      powerWords: odia
        ? ['🌱 ଆଶାବାଦୀ (Hopeful)', '🛡️ ଅପରାଜେୟ (Unstoppable)', '🔥 ସାହସୀ (Brave)', '✨ ଭବିଷ୍ୟତ (Future Star)']
        : ['🌱 Growth Mindset', '🛡️ Persistent', '🔥 Brave', '✨ Future Star'],
      headerBg: 'bg-gradient-to-r from-rose-600 via-brand-orange to-brand-navy text-white',
      cardBorder: 'border-orange-300',
      icon: '💪',
    };
  }
};

export default function QuizPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user, isOnline, checkPendingSync } = useAuth();
  const { lang, t } = useLanguage();

  const [quizList, setQuizList] = useState([]);
  const [currentQuiz, setCurrentQuiz] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [evaluationResult, setEvaluationResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [quizLangMode, setQuizLangMode] = useState(lang === 'or' ? 'or' : 'en'); // 'or' | 'en'
  const [timerSeconds, setTimerSeconds] = useState(300);
  const [isLoadedOffline, setIsLoadedOffline] = useState(false);

  // Vidyora AI Quiz Generator States
  const [generatingQuiz, setGeneratingQuiz] = useState(false);
  const [customTopic, setCustomTopic] = useState('');
  const [selectedClass, setSelectedClass] = useState(user?.classLevel || 'Class 8');
  const [quizGenError, setQuizGenError] = useState('');

  const handleGenerateAiQuiz = async (e) => {
    e?.preventDefault();
    if (!customTopic.trim() || generatingQuiz) return;
    try {
      setGeneratingQuiz(true);
      setQuizGenError('');
      const res = await quizzesAPI.generateQuiz({
        topic: customTopic.trim(),
        classLevel: selectedClass,
        count: 3,
      });

      if (res.data?.quiz?._id) {
        navigate(`/quizzes/${res.data.quiz._id}`);
      }
    } catch (err) {
      console.error('Failed to generate AI quiz:', err);
      setQuizGenError('Could not generate quiz with Vidyora AI. Please try again.');
    } finally {
      setGeneratingQuiz(false);
    }
  };

  useEffect(() => {
    if (id) {
      loadSingleQuiz(id);
    } else {
      loadAllQuizzes();
    }
  }, [id, selectedClass]);

  useEffect(() => {
    if (submitted || !currentQuiz) return;
    const interval = setInterval(() => {
      setTimerSeconds((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [submitted, currentQuiz]);

  const loadAllQuizzes = async () => {
    try {
      setLoading(true);
      if (isOnline) {
        try {
          const res = await quizzesAPI.getQuizzes({ classLevel: selectedClass });
          if (res.data?.quizzes && res.data.quizzes.length > 0) {
            setQuizList(res.data.quizzes);
            return;
          }
        } catch (netErr) {
          console.warn('Network error loading quizzes, checking IndexedDB:', netErr);
        }
      }

      const offList = await getOfflineQuizzes({ classLevel: selectedClass });
      setQuizList(offList.filter((q) => !selectedClass || q.classLevel === selectedClass || !q.classLevel));
    } catch (err) {
      console.error('Failed to load quizzes online, falling back to offline:', err);
      const offList = await getOfflineQuizzes({ classLevel: selectedClass });
      setQuizList(offList || []);
    } finally {
      setLoading(false);
    }
  };

  const loadSingleQuiz = async (quizId) => {
    try {
      setLoading(true);
      let quizData = null;

      // Handle offline starter quizzes directly
      if (quizId?.startsWith('offline-')) {
        quizData = await getOfflineQuizById(quizId);
        if (quizData) {
          setIsLoadedOffline(true);
        }
      } else {
        if (isOnline) {
          try {
            const res = await quizzesAPI.getQuizById(quizId);
            quizData = res.data.quiz;
          } catch (netErr) {
            console.warn('Network error loading quiz, checking offline DB:', netErr);
          }
        }
        if (!quizData) {
          quizData = await getOfflineQuizById(quizId);
          if (quizData) {
            setIsLoadedOffline(true);
          }
        }
      }

      if (quizData) {
        setCurrentQuiz(quizData);
        setUserAnswers({});
        setSubmitted(false);
        setEvaluationResult(null);
        setCurrentQuestionIndex(0);
        setTimerSeconds((quizData.questions?.length || 3) * 60);
      }
    } catch (err) {
      console.error('Failed to load quiz:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSelectOption = (optionIndex) => {
    if (submitted) return;
    setUserAnswers({
      ...userAnswers,
      [currentQuestionIndex]: optionIndex,
    });
  };

  const handleSubmitQuiz = async () => {
    if (!currentQuiz) return;
    setSubmitting(true);

    const answersArray = currentQuiz.questions.map((_, idx) =>
      userAnswers[idx] !== undefined ? userAnswers[idx] : -1
    );

    const isOfflineQuiz = currentQuiz._id?.startsWith('offline-');

    if (isOnline && !isOfflineQuiz) {
      try {
        const res = await quizzesAPI.submitQuiz(currentQuiz._id, answersArray);
        setEvaluationResult(res.data.result);
        setSubmitted(true);

        if (res.data.result.percentage >= 70) {
          confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
        }
      } catch (err) {
        console.error('Online submit failed, queuing offline:', err);
        await handleOfflineSubmitFallback(answersArray);
      }
    } else {
      await handleOfflineSubmitFallback(answersArray);
    }

    setSubmitting(false);
  };

  const handleOfflineSubmitFallback = async (answersArray) => {
    // Save attempt in IndexedDB pending queue
    await queueOfflineQuizAttempt({
      quizId: currentQuiz._id,
      quizTitle: currentQuiz.title,
      answers: answersArray,
      submittedAt: new Date().toISOString(),
    });

    await checkPendingSync();

    // Highly accurate local evaluation using stored correctAnswerIndex or correctAnswer
    let correctCount = 0;
    const questions = currentQuiz.questions || [];
    const fallbackAnswers = questions.map((q, idx) => {
      const correctIdx = q.correctAnswerIndex !== undefined ? q.correctAnswerIndex : (q.correctAnswer !== undefined ? q.correctAnswer : 0);
      const isCorrect = userAnswers[idx] === correctIdx;
      if (isCorrect) correctCount++;
      return {
        questionIndex: idx,
        selectedOption: userAnswers[idx],
        isCorrect,
        topic: q.topic || 'Curriculum Concept'
      };
    });

    // Provide solution keys with Odia and English explanations
    const solutionKeys = questions.map((q) => ({
      correctAnswerIndex: q.correctAnswerIndex !== undefined ? q.correctAnswerIndex : (q.correctAnswer !== undefined ? q.correctAnswer : 0),
      explanation: q.explanation || 'Review the chapter notes for complete understanding.',
      explanationOdia: q.explanationOdia || q.explanation || 'ସମ୍ପୂର୍ଣ୍ଣ ବୁଝିବା ପାଇଁ ଅଧ୍ୟାୟର ପାଠ୍ୟକ୍ରମ ପୁନରାବୃତ୍ତି କରନ୍ତୁ ।',
      topic: q.topic || 'Concept'
    }));

    const scorePct = questions.length > 0 ? Math.round((correctCount / questions.length) * 100) : 0;

    setEvaluationResult({
      score: correctCount,
      totalQuestions: questions.length,
      percentage: scorePct,
      answers: fallbackAnswers,
      solutionKeys: solutionKeys,
      isOfflineSaved: true,
      newlyIdentifiedWeak: [],
    });
    setSubmitted(true);

    if (scorePct >= 70) {
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    }
  };

  const formatTimer = (sec) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  // If viewing list of all quizzes
  if (!id) {
    return (
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
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

        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-brand-navy">
            {t('nav.quizzes')}
          </h1>
          <p className="text-xs sm:text-sm text-slate-500">
            {lang === 'or' ? 'ଅଧ୍ୟାୟ ଭିତ୍ତିକ ସ୍ମାର୍ଟ କୁଇଜ୍ (ଓଡ଼ିଆ ଓ ଇଂରାଜୀ ଉଭୟ ଉପଲବ୍ଧ)' : 'Chapter practice quizzes available online and offline in Odia & English'}
          </p>
        </div>

        {/* Vidyora AI Quiz Generator Banner */}
        <div className="p-6 rounded-3xl bg-gradient-to-br from-brand-navy via-brand-navyLight to-slate-900 text-white shadow-xl border border-brand-teal/40 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-teal/20 text-brand-teal text-xs font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Powered by Vidyora AI</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black">
                {lang === 'or' ? 'ଯେକୌଣସି ବିଷୟରେ ନୂତନ ଏଆଇ କୁଇଜ୍ ତିଆରି କରନ୍ତୁ' : 'Generate Custom Smart Quiz on Any Topic'}
              </h2>
              <p className="text-xs text-slate-300">
                {lang === 'or' ? 'ବିଦ୍ୟୋରା ଏଆଇ ଆପଣଙ୍କ ଶ୍ରେଣୀ ଓ ପାଠ୍ୟକ୍ରମ ଅନୁସାରେ ଓଡ଼ିଆ ଓ ଇଂରାଜୀରେ ତୁରନ୍ତ ନୂଆ ପ୍ରଶ୍ନ ପ୍ରସ୍ତୁତ କରିବ ।' : 'Vidyora AI formulates dynamic 3-question adaptive tests in Odia & English on-demand.'}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <select
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
                className="px-3 py-2 rounded-xl bg-slate-800 text-white text-xs font-bold border border-slate-700 outline-none"
              >
                {['Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10'].map((cls) => (
                  <option key={cls} value={cls}>{cls}</option>
                ))}
              </select>
            </div>
          </div>

          <form onSubmit={handleGenerateAiQuiz} className="flex flex-col sm:flex-row gap-2.5 pt-1">
            <input
              type="text"
              value={customTopic}
              onChange={(e) => setCustomTopic(e.target.value)}
              placeholder={lang === 'or' ? 'ବିଷୟ ଟାଇପ୍ କରନ୍ତୁ (ଯଥା: ଆଲୋକ ଶ୍ଳେଷଣ, ନ୍ୟୁଟନଙ୍କ ଗତି ନିୟମ, ପିଥାଗୋରାସ୍)...' : 'Type any topic (e.g., Photosynthesis, Newton Laws, Pythagoras Theorem)...'}
              className="flex-1 px-4 py-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder:text-slate-400 text-sm outline-none focus:ring-2 focus:ring-brand-teal"
            />
            <button
              type="submit"
              disabled={generatingQuiz || !customTopic.trim()}
              className="px-6 py-3 rounded-2xl bg-brand-teal text-brand-navy font-extrabold text-sm shadow-md hover:bg-brand-tealLight transition-all flex items-center justify-center gap-2 shrink-0 disabled:opacity-50 cursor-pointer"
            >
              {generatingQuiz ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Generating with Vidyora AI...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  <span>Generate AI Quiz ➔</span>
                </>
              )}
            </button>
          </form>

          {quizGenError && (
            <p className="text-xs text-rose-400 font-semibold">{quizGenError}</p>
          )}

          {/* Quick topic suggestion pills */}
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pt-1">
            <span className="text-[11px] font-bold text-slate-400 shrink-0">Quick Topics:</span>
            {[
              { label: '🌿 Photosynthesis', topic: 'Photosynthesis in Plants' },
              { label: "🚀 Newton's Laws", topic: "Newton's Laws of Motion" },
              { label: '📐 Pythagoras Theorem', topic: 'Pythagorean Theorem and Triangles' },
              { label: '🔬 Plant vs Animal Cell', topic: 'Plant Cell and Animal Cell Structure' },
              { label: '⚡ Electric Current', topic: 'Electric Current and Circuits' },
            ].map((item, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCustomTopic(item.topic)}
                className="shrink-0 px-2.5 py-1 rounded-xl bg-white/10 hover:bg-brand-teal/20 text-[11px] font-bold text-slate-200 hover:text-brand-teal border border-white/10 transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Class Selection Tabs & Curriculum Filter */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-lg sm:text-xl font-extrabold text-brand-navy">
              {selectedClass} Chapter Practice Quizzes ({quizList.length})
            </h2>
            <p className="text-xs text-slate-500">
              {lang === 'or' ? 'ପ୍ରତ୍ୟେକ ଅଧ୍ୟାୟ ପାଇଁ ପ୍ରଶ୍ନ ଓ ଓଡ଼ିଆରେ ସମ୍ପୂର୍ଣ୍ଣ ବ୍ୟାଖ୍ୟା' : 'Practice questions with instant bilingual feedback and step-by-step explanations'}
            </p>
          </div>

          <div className="flex items-center gap-1 bg-white p-1 rounded-2xl border border-slate-200 shadow-2xs overflow-x-auto">
            {['Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10'].map((cls) => (
              <button
                key={cls}
                type="button"
                onClick={() => setSelectedClass(cls)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold shrink-0 transition-all cursor-pointer ${
                  selectedClass === cls
                    ? 'bg-brand-navy text-white shadow-2xs'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                {cls}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="py-20 flex justify-center">
            <Loader2 className="w-8 h-8 text-brand-teal animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {quizList.map((q) => (
              <div
                key={q._id}
                className="glass-card p-6 rounded-3xl flex flex-col justify-between space-y-4 border border-slate-200 bg-white shadow-2xs"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-extrabold px-2.5 py-1 rounded-md bg-brand-teal/15 text-brand-teal">
                      {q.difficulty || 'Medium'}
                    </span>
                    <span className="text-xs text-slate-400 font-semibold">
                      {q.questions?.length || 3} Questions (Bilingual)
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-brand-navy">
                    {q.titleOdia || q.title}
                  </h3>
                  {q.titleOdia && q.title !== q.titleOdia && (
                    <p className="text-xs text-slate-500 font-medium">{q.title}</p>
                  )}
                  <p className="text-xs text-slate-400">
                    {q.subject?.nameOdia ? `${q.subject.nameOdia} • ${q.subject.name}` : (q.subject?.name || 'Science')}
                  </p>
                </div>

                <button
                  onClick={() => navigate(`/quizzes/${q._id}`)}
                  className="w-full py-2.5 rounded-xl bg-brand-navy text-white text-xs font-bold hover:bg-brand-navyLight flex items-center justify-center gap-1.5 shadow-2xs cursor-pointer transition-all"
                >
                  <Award className="w-4 h-4 text-brand-teal" />
                  <span>Start Practice Quiz</span>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  if (loading || !currentQuiz) {
    return (
      <div className="py-24 flex flex-col items-center justify-center">
        <Loader2 className="w-8 h-8 text-brand-teal animate-spin mb-2" />
        <p className="text-xs font-semibold text-slate-500">Loading quiz questions...</p>
      </div>
    );
  }

  const currentQ = currentQuiz.questions[currentQuestionIndex] || {};
  const encouragement = (submitted && evaluationResult)
    ? getStudentEncouragement(evaluationResult.percentage, quizLangMode !== 'en')
    : null;

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">

      {/* Back Button */}
      <div>
        <button
          onClick={() => {
            if (window.history.length > 1) {
              navigate(-1);
            } else {
              navigate('/quizzes');
            }
          }}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-bold text-brand-navy hover:bg-slate-50 transition-all shadow-2xs group cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4 text-brand-teal group-hover:-translate-x-0.5 transition-transform" />
          <span>{lang === 'or' ? '← ପଛକୁ ଫେରନ୍ତୁ (Back)' : '← Back to Quizzes'}</span>
        </button>
      </div>

      {/* Quiz Header Bar */}
      <div className="glass-panel p-5 rounded-3xl border border-slate-200/90 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white">
        <div>
          <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-brand-orange/20 text-brand-orange">
            {currentQuiz.subject?.nameOdia ? `${currentQuiz.subject.nameOdia} • ${currentQuiz.subject.name}` : (currentQuiz.subject?.name || 'Subject')} Quiz
          </span>
          <h2 className="text-lg font-extrabold text-brand-navy mt-1">
            {quizLangMode === 'en' ? currentQuiz.title : (currentQuiz.titleOdia || currentQuiz.title)}
          </h2>
          {quizLangMode === 'dual' && currentQuiz.titleOdia && currentQuiz.title !== currentQuiz.titleOdia && (
            <p className="text-xs font-medium text-slate-500">{currentQuiz.title}</p>
          )}
        </div>

        {/* Timer & Single Language Toggle Button */}
        <div className="flex items-center gap-2.5">
          {/* Single button for Odia and English language switch */}
          <button
            onClick={() => setQuizLangMode((prev) => (prev === 'or' ? 'en' : 'or'))}
            className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-xs font-bold text-brand-navy flex items-center gap-1.5 transition-all shadow-2xs cursor-pointer"
            title="Switch language between Odia and English"
          >
            <Languages className="w-3.5 h-3.5 text-brand-teal" />
            <span>{quizLangMode === 'or' ? 'Switch to Eng 🇬🇧' : 'ଓଡ଼ିଆରେ ଦେଖନ୍ତୁ 🇮🇳'}</span>
          </button>

          {!submitted && (
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 font-mono text-xs font-bold text-brand-navy">
              <Clock className="w-3.5 h-3.5 text-brand-orange" />
              <span>{formatTimer(timerSeconds)}</span>
            </div>
          )}
        </div>
      </div>

      {(!isOnline || isLoadedOffline) && (
        <div className="p-3 rounded-2xl bg-cyan-50/80 border border-cyan-200 text-cyan-900 text-xs font-bold flex items-center gap-2">
          <WifiOff className="w-4 h-4 text-cyan-700 shrink-0" />
          <span>
            ଅଫଲାଇନ୍ କୁଇଜ୍ ମୋଡ୍: ଉତ୍ତରଗୁଡ଼ିକ ସ୍ଥାନୀୟ ବ୍ରାଉଜର୍‌ରେ ସାଇତା ହେବ ଏବଂ ଇଣ୍ଟରନେଟ୍ ଆସିବା ମାତ୍ରେ ସ୍ୱୟଂଚାଳିତ ଭାବେ ସିଙ୍କ୍ ହେବ ।
          </span>
        </div>
      )}

      {/* RESULT VIEW (If Submitted) */}
      {submitted && evaluationResult ? (
        <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-slate-200/90 shadow-xl space-y-8 animate-fadeIn bg-white">

          {/* Score Header */}
          <div className="text-center space-y-3">
            <div className={`w-20 h-20 rounded-3xl mx-auto flex items-center justify-center font-black text-2xl shadow-lg ${
              evaluationResult.percentage >= 70
                ? 'bg-emerald-500 text-white'
                : 'bg-brand-orange text-white'
            }`}>
              {evaluationResult.score}/{evaluationResult.totalQuestions}
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-navy">
              {evaluationResult.percentage >= 70 ? t('quiz.congrats') : t('quiz.needsImprovement')}
            </h3>

            <p className="text-sm font-semibold text-slate-600">
              Score: <span className="text-brand-navy font-black text-base">{evaluationResult.percentage}%</span> • {evaluationResult.isOfflineSaved ? 'Offline Evaluated' : 'Server Evaluated'}
            </p>

            {evaluationResult.isOfflineSaved ? (
              <div className="inline-block p-2 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold">
                📱 Offline Mode: Quiz answers saved locally in IndexedDB. Will sync to parent report when online!
              </div>
            ) : (
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{t('quiz.parentAlert')}</span>
              </div>
            )}
          </div>

          {/* Student Motivational & Encouragement Banner with Odia Power Words */}
          {encouragement && (
            <div className={`rounded-3xl border-2 p-6 sm:p-7 shadow-lg bg-white relative overflow-hidden transition-all duration-300 ${encouragement.cardBorder}`}>
              <div className={`absolute top-0 left-0 right-0 h-2 ${encouragement.headerBg}`} />

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 pt-1">
                <div className="relative shrink-0 mx-auto sm:mx-0">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden bg-brand-navy p-1 border-2 border-brand-teal shadow-xl flex items-center justify-center">
                    <img
                      src="/chatbot-avatar.png"
                      alt="Vidyora Encouragement Mascot"
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 text-2xl filter drop-shadow">
                    {encouragement.icon}
                  </div>
                </div>

                <div className="flex-1 text-center sm:text-left space-y-2">
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                    <span className="text-xs font-black px-3 py-1 rounded-full bg-brand-navy text-white shadow-xs">
                      {encouragement.badge}
                    </span>
                    <span className="text-xs font-bold text-slate-400">
                      {quizLangMode !== 'en' ? 'ମନୋବଳ ବୃଦ୍ଧିକାରୀ ବାର୍ତ୍ତା' : 'Student Encouragement'}
                    </span>
                  </div>

                  <h4 className="text-lg sm:text-xl font-extrabold text-brand-navy">
                    {encouragement.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                    {encouragement.message}
                  </p>

                  <div className="pt-2">
                    <p className="text-[11px] font-black uppercase tracking-wider text-brand-teal mb-1.5 flex items-center justify-center sm:justify-start gap-1">
                      <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
                      <span>{quizLangMode !== 'en' ? 'ଉତ୍ସାହବର୍ଦ୍ଧକ ଶକ୍ତି-ଶବ୍ଦ (Power Keywords):' : 'Key Encouragement Power Words:'}</span>
                    </p>
                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                      {encouragement.powerWords.map((word, wIdx) => (
                        <span
                          key={wIdx}
                          className="px-3 py-1 rounded-xl text-xs font-black bg-gradient-to-r from-slate-50 to-slate-100 border border-slate-300 text-brand-navy shadow-2xs hover:scale-105 hover:border-brand-teal transition-transform cursor-default"
                        >
                          {word}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Weak Topics Alert */}
          {evaluationResult.newlyIdentifiedWeak?.length > 0 && (
            <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-xs text-rose-900 space-y-1">
              <div className="font-extrabold flex items-center gap-1 text-rose-700">
                <AlertTriangle className="w-4 h-4" />
                <span>Weak Topics Flagged:</span>
              </div>
              <p>
                You missed questions on: <strong>{evaluationResult.newlyIdentifiedWeak.join(', ')}</strong>. This has been scheduled in your Study Planner for revision.
              </p>
            </div>
          )}

          {/* Solutions & Explanations Key in Odia + English */}
          {evaluationResult.solutionKeys && (
            <div className="space-y-4">
              <h4 className="text-sm font-extrabold text-brand-navy uppercase tracking-wider">
                {t('quiz.reviewExplanation')} (ଓଡ଼ିଆ ଓ English)
              </h4>
              <div className="space-y-3">
                {currentQuiz.questions.map((q, idx) => {
                  const solution = evaluationResult.solutionKeys[idx];
                  const userChoice = userAnswers[idx];
                  const correctIdx = solution?.correctAnswerIndex ?? 0;
                  const isCorrect = userChoice === correctIdx;

                  const userOptTextEn = q.options[userChoice] || 'Skipped';
                  const userOptTextOr = q.optionsOdia?.[userChoice] || userOptTextEn;
                  const correctOptTextEn = q.options[correctIdx];
                  const correctOptTextOr = q.optionsOdia?.[correctIdx] || correctOptTextEn;

                  return (
                    <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                      <div className="flex items-start gap-2">
                        {isCorrect ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        ) : (
                          <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                        )}
                        <div className="flex-1 space-y-1.5">
                          <p className="text-sm sm:text-base font-bold text-brand-navy leading-relaxed">
                            {idx + 1}. {q.questionOdia || q.question}
                          </p>
                          {q.questionOdia && q.question !== q.questionOdia && (
                            <p className="text-xs sm:text-sm text-slate-500 font-medium">
                              {q.question}
                            </p>
                          )}

                          <p className="text-xs sm:text-sm text-slate-600 mt-1">
                            Your Answer: <strong>{quizLangMode === 'en' ? userOptTextEn : userOptTextOr}</strong> | Correct: <strong className="text-emerald-700">{quizLangMode === 'en' ? correctOptTextEn : correctOptTextOr}</strong>
                          </p>

                          <div className="text-sm sm:text-base text-slate-800 mt-2 bg-white p-3.5 rounded-2xl border border-slate-200 space-y-1.5 leading-relaxed">
                            {solution.explanationOdia && (
                              <p className="font-medium">💡 <strong className="text-brand-navy font-bold">ଓଡ଼ିଆ ବ୍ୟାଖ୍ୟା:</strong> {solution.explanationOdia}</p>
                            )}
                            {solution.explanation && (
                              <p className="font-medium">💡 <strong className="text-brand-navy font-bold">English:</strong> {solution.explanation}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={() => loadSingleQuiz(currentQuiz._id)}
              className="px-5 py-2.5 rounded-xl border border-slate-200 bg-white text-brand-navy hover:bg-slate-50 font-bold text-xs flex items-center gap-1.5 shadow-2xs cursor-pointer"
            >
              <RotateCcw className="w-4 h-4 text-brand-teal" />
              <span>{t('quiz.retry')}</span>
            </button>

            <Link
              to={`/tutor?q=${encodeURIComponent(`Explain key concepts from ${currentQuiz.title} in simple terms so I can score 100% next time`)}`}
              className="px-5 py-2.5 rounded-xl bg-brand-teal/15 text-brand-navy hover:bg-brand-teal/25 font-bold text-xs flex items-center gap-1.5 border border-brand-teal/30 shadow-2xs"
            >
              <BrainCircuit className="w-4 h-4 text-brand-teal" />
              <span>{quizLangMode !== 'en' ? 'ଏଆଇ ଶିକ୍ଷକଙ୍କ ସହ ବୁଝନ୍ତୁ ➔' : 'Clear Doubts with AI Tutor ➔'}</span>
            </Link>

            <Link
              to="/offline-vault"
              className="px-5 py-2.5 rounded-xl bg-brand-navy text-white hover:bg-brand-navyLight font-extrabold text-xs shadow-md"
            >
              Back to Offline Vault
            </Link>
          </div>

        </div>
      ) : (
        /* QUIZ TAKING QUESTION CARD */
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-md space-y-6 bg-white">

          {/* Progress Bar & Indicators */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-bold text-slate-500">
              <span>{t('quiz.question')} {currentQuestionIndex + 1} {t('quiz.of')} {currentQuiz.questions.length}</span>
              <span className="text-brand-teal">{Math.round(((currentQuestionIndex + 1) / currentQuiz.questions.length) * 100)}%</span>
            </div>
            <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-brand-teal to-brand-navy transition-all duration-300"
                style={{ width: `${((currentQuestionIndex + 1) / currentQuiz.questions.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Question Text */}
          <div className="space-y-1.5">
            <span className="text-[10px] font-bold text-brand-orange uppercase">
              Topic: {currentQ.topic || 'Curriculum Concept'}
            </span>

            {quizLangMode === 'dual' ? (
              <div className="space-y-1.5">
                <h3 className="text-lg sm:text-2xl font-black text-brand-navy leading-relaxed">
                  {currentQ.questionOdia || currentQ.question}
                </h3>
                {currentQ.questionOdia && currentQ.question !== currentQ.questionOdia && (
                  <p className="text-sm sm:text-base font-semibold text-slate-500">
                    {currentQ.question}
                  </p>
                )}
              </div>
            ) : (
              <h3 className="text-lg sm:text-2xl font-black text-brand-navy leading-relaxed">
                {quizLangMode === 'or' ? (currentQ.questionOdia || currentQ.question) : currentQ.question}
              </h3>
            )}
          </div>

          {/* Options List */}
          <div className="space-y-3.5">
            {(currentQ.options || []).map((optEn, optIdx) => {
              const isSelected = userAnswers[currentQuestionIndex] === optIdx;
              const optOdia = (currentQ.optionsOdia && currentQ.optionsOdia[optIdx]) || optEn;

              return (
                <div
                  key={optIdx}
                  onClick={() => handleSelectOption(optIdx)}
                  className={`p-4 sm:p-5 rounded-2xl border-2 cursor-pointer flex items-center gap-4 transition-all ${
                    isSelected
                      ? 'border-brand-teal bg-brand-teal/10 shadow-sm'
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center font-extrabold text-sm sm:text-base shrink-0 ${
                    isSelected
                      ? 'bg-brand-teal text-white'
                      : 'bg-slate-100 text-slate-700'
                  }`}>
                    {String.fromCharCode(65 + optIdx)}
                  </div>

                  <div className="flex-1">
                    {quizLangMode === 'dual' ? (
                      <div>
                        <span className="text-sm sm:text-base font-bold text-brand-navy block leading-relaxed">
                          {optOdia}
                        </span>
                        {optOdia !== optEn && (
                          <span className="text-xs sm:text-sm text-slate-500 font-medium block mt-1">
                            {optEn}
                          </span>
                        )}
                      </div>
                    ) : (
                      <span className="text-sm sm:text-base font-bold text-brand-navy leading-relaxed">
                        {quizLangMode === 'or' ? optOdia : optEn}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Controls */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
            <button
              onClick={() => setCurrentQuestionIndex((prev) => Math.max(0, prev - 1))}
              disabled={currentQuestionIndex === 0}
              className="px-4 py-2 rounded-xl border border-slate-200 text-xs font-bold text-brand-navy disabled:opacity-30 flex items-center gap-1 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>

            {currentQuestionIndex < currentQuiz.questions.length - 1 ? (
              <button
                onClick={() => setCurrentQuestionIndex((prev) => Math.min(currentQuiz.questions.length - 1, prev + 1))}
                className="px-5 py-2 rounded-xl bg-brand-navy text-white text-xs font-bold hover:bg-brand-navyLight flex items-center gap-1 cursor-pointer"
              >
                <span>Next</span>
                <ChevronRight className="w-4 h-4 text-brand-teal" />
              </button>
            ) : (
              <button
                onClick={handleSubmitQuiz}
                disabled={submitting}
                className="px-6 py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-extrabold hover:bg-emerald-700 flex items-center gap-1.5 shadow-md btn-3d cursor-pointer"
              >
                {submitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                <span>{t('quiz.submit')}</span>
              </button>
            )}
          </div>

        </div>
      )}

    </div>
  );
}
