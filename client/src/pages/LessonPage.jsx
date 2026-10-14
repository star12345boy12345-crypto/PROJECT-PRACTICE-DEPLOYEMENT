import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate, useSearchParams } from 'react-router-dom';
import { lessonsAPI, quizzesAPI } from '../services/api';
import {
  saveLessonOffline,
  getOfflineLessonById,
  saveOfflineQuiz,
  getOfflineQuizzes,
  queueOfflineLessonCompleted
} from '../services/offlineStorage';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';
import {
  BookOpen,
  Languages,
  HardDriveDownload,
  CheckCircle,
  Clock,
  Sparkles,
  ChevronLeft,
  Award,
  Volume2,
  VolumeX,
  Check,
  BrainCircuit,
  Loader2,
  WifiOff
} from 'lucide-react';
import { useVoiceOutput } from '../hooks/useVoiceOutput';

export default function LessonPage() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const { isOnline, checkPendingSync } = useAuth();

  const queryLang = searchParams.get('lang');
  const initialMode = queryLang === 'en' ? 'en' : (queryLang === 'or' ? 'or' : (lang === 'or' ? 'or' : 'en'));

  const [lesson, setLesson] = useState(null);
  const [relatedQuiz, setRelatedQuiz] = useState(null);
  const [displayMode, setDisplayMode] = useState(initialMode); // 'or' | 'en' | 'dual'
  const [isDownloaded, setIsDownloaded] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [isLoadedFromOfflineDb, setIsLoadedFromOfflineDb] = useState(false);
  const { speak, isSpeaking, stop: stopSpeaking } = useVoiceOutput();

  useEffect(() => {
    loadLesson();
  }, [id]);

  const loadLesson = async () => {
    try {
      setLoading(true);
      let lessonData = null;

      // Handle offline starter lessons directly
      if (id?.startsWith('offline-')) {
        const offlineDoc = await getOfflineLessonById(id);
        if (offlineDoc) {
          lessonData = offlineDoc;
          setIsDownloaded(true);
          setIsLoadedFromOfflineDb(true);

          // Find corresponding offline quiz
          try {
            const allOffQuizzes = await getOfflineQuizzes();
            const matchQuiz = allOffQuizzes.find((q) => q.lessonId === id || q._id === id);
            if (matchQuiz) {
              setRelatedQuiz(matchQuiz);
            }
          } catch (qErr) {
            console.warn('Error matching offline quiz:', qErr);
          }
        }
      } else {
        // Try online first if internet available
        if (isOnline) {
          try {
            const res = await lessonsAPI.getLessonById(id);
            lessonData = res.data.lesson;
            const chapId = lessonData.chapter?._id || lessonData.chapter;
            const qRes = await quizzesAPI.getQuizzes({ chapterId: chapId });
            if (qRes.data.quizzes?.length > 0) {
              setRelatedQuiz(qRes.data.quizzes[0]);
            }
          } catch (netErr) {
            console.warn('Network fetch error, falling back to IndexedDB:', netErr);
          }
        }

        // Check IndexedDB
        const offlineDoc = await getOfflineLessonById(id);
        if (offlineDoc) {
          setIsDownloaded(true);
          if (!lessonData) {
            lessonData = offlineDoc;
            setIsLoadedFromOfflineDb(true);
          }
        }
      }

      setLesson(lessonData);
    } catch (err) {
      console.error('Failed to load lesson:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadOffline = async () => {
    if (!lesson) return;
    try {
      await saveLessonOffline(lesson);
      if (relatedQuiz) {
        await saveOfflineQuiz(relatedQuiz);
      }
      setIsDownloaded(true);
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 3000);
    } catch (err) {
      console.error('Failed to save offline:', err);
    }
  };

  const handleComplete = async () => {
    if (isCompleted) return;
    try {
      if (isOnline && !id?.startsWith('offline-')) {
        await lessonsAPI.markCompleted(id);
      } else {
        await queueOfflineLessonCompleted({
          lessonId: id,
          subjectId: lesson?.subject?._id || lesson?.subject,
          title: lesson?.title,
        });
        if (checkPendingSync) await checkPendingSync();
      }
      setIsCompleted(true);
    } catch (err) {
      console.warn('Failed to mark complete online, queuing offline:', err);
      await queueOfflineLessonCompleted({
        lessonId: id,
        subjectId: lesson?.subject?._id || lesson?.subject,
        title: lesson?.title,
      });
      if (checkPendingSync) await checkPendingSync();
      setIsCompleted(true);
    }
  };

  const handleSpeak = () => {
    if (!lesson) return;
    const textToRead = displayMode === 'or'
      ? (lesson.contentOdia || lesson.content)
      : lesson.content;
    speak(textToRead, 'lesson-content', displayMode === 'or' ? 'or' : 'en');
  };

  if (loading) {
    return (
      <div className="py-24 flex flex-col items-center justify-center">
        <Loader2 className="w-8 h-8 text-brand-teal animate-spin mb-2" />
        <p className="text-xs font-semibold text-slate-500">Loading lesson content...</p>
      </div>
    );
  }

  if (!lesson) {
    return (
      <div className="py-20 text-center max-w-md mx-auto space-y-4">
        <p className="text-sm font-semibold text-slate-600">
          Lesson not found in offline vault or server.
        </p>
        <Link to="/offline-vault" className="px-4 py-2 rounded-xl bg-brand-navy text-white text-xs font-bold inline-block">
          Open Offline Vault
        </Link>
      </div>
    );
  }

  const titleEn = lesson.title;
  const titleOr = lesson.titleOdia || lesson.title;
  const contentEn = lesson.content;
  const contentOr = lesson.contentOdia || lesson.content;
  const objectivesEn = lesson.learningObjectives || [];
  const objectivesOr = lesson.learningObjectivesOdia?.length ? lesson.learningObjectivesOdia : objectivesEn;
  const takeawaysEn = lesson.keyTakeaways || [];
  const takeawaysOr = lesson.keyTakeawaysOdia?.length ? lesson.keyTakeawaysOdia : takeawaysEn;
  const exampleEn = lesson.realWorldExample;
  const exampleOr = lesson.realWorldExampleOdia || lesson.realWorldExample;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      
      {/* Top Controls Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <button
          onClick={() => {
            if (window.history.length > 1) {
              navigate(-1);
            } else {
              navigate('/offline-vault');
            }
          }}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-bold text-brand-navy hover:bg-slate-50 shadow-2xs cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4 text-brand-teal" />
          <span>Back</span>
        </button>

        {/* Single button for Odia and English language switch */}
        <button
          onClick={() => setDisplayMode((prev) => (prev === 'or' ? 'en' : 'or'))}
          className="px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 text-brand-navy hover:bg-slate-50 text-xs font-extrabold flex items-center gap-1.5 shadow-2xs transition-all cursor-pointer"
          title="Switch language between Odia and English"
        >
          <Languages className="w-4 h-4 text-brand-teal" />
          <span>{displayMode === 'or' ? 'Switch to English 🇬🇧' : 'ଓଡ଼ିଆରେ ପଢ଼ନ୍ତୁ (Odia) 🇮🇳'}</span>
        </button>

        <div className="flex items-center gap-2">
          {/* Audio Read Aloud */}
          <button
            onClick={handleSpeak}
            className={`px-3 py-1.5 rounded-xl border text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
              isSpeaking
                ? 'bg-rose-500 text-white border-rose-500 shadow-sm'
                : 'bg-white border-slate-200 text-brand-navy hover:border-brand-teal'
            }`}
            title={isSpeaking ? 'Stop Audio' : 'Listen to lesson (ଶୁଣନ୍ତୁ)'}
          >
            {isSpeaking ? <VolumeX className="w-3.5 h-3.5 animate-pulse" /> : <Volume2 className="w-3.5 h-3.5 text-brand-teal" />}
            <span>{isSpeaking ? (lang === 'or' ? 'ବନ୍ଦ କରନ୍ତୁ' : 'Stop Audio') : (lang === 'or' ? 'ପାଠ ଶୁଣନ୍ତୁ' : 'Listen')}</span>
          </button>

          {/* Download for Offline Vault Button */}
          <button
            onClick={handleDownloadOffline}
            className={`px-3.5 py-1.5 rounded-xl border text-xs font-bold flex items-center gap-1.5 shadow-2xs transition-all cursor-pointer ${
              isDownloaded
                ? 'bg-emerald-50 text-emerald-700 border-emerald-300'
                : 'bg-white text-brand-navy border-slate-200 hover:border-brand-teal'
            }`}
          >
            {isDownloaded ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <HardDriveDownload className="w-3.5 h-3.5 text-brand-teal" />}
            <span>{isDownloaded ? 'Saved in Vault' : 'Download Offline'}</span>
          </button>
        </div>
      </div>

      {/* Offline Status Badge Banner */}
      {(!isOnline || isLoadedFromOfflineDb) && (
        <div className="p-3.5 rounded-2xl bg-cyan-50/80 border border-cyan-200 text-cyan-900 text-xs font-bold flex items-center gap-2 shadow-2xs">
          <WifiOff className="w-4 h-4 text-cyan-700 shrink-0" />
          <span>
            📶 ଅଫଲାଇନ୍ ମୋଡ୍ ସକ୍ରିୟ: ପାଠଟି ଆପଣଙ୍କ ବ୍ରାଉଜର୍ IndexedDB ରୁ ଲୋଡ୍ ହୋଇଛି । ଉଭୟ ଓଡ଼ିଆ ଏବଂ ଇଂରାଜୀ ଭାଷାରେ ସମ୍ପୂର୍ଣ୍ଣ ଉପଲବ୍ଧ !
          </span>
        </div>
      )}

      {downloadSuccess && (
        <div className="p-3 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center gap-2 animate-pulse">
          <CheckCircle className="w-4 h-4 text-emerald-600" />
          <span>Lesson successfully saved to offline vault in both Odia and English!</span>
        </div>
      )}

      {/* Main Content Card */}
      <article className="glass-panel p-6 sm:p-10 rounded-3xl border border-slate-200/90 shadow-md space-y-8 bg-white">
        
        {/* Header */}
        <div className="space-y-3 pb-6 border-b border-slate-100">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md bg-brand-teal/15 text-brand-teal">
              {lesson.subject?.nameOdia ? `${lesson.subject.nameOdia} • ${lesson.subject.name}` : (lesson.subject?.name || 'Science')}
            </span>
            <span className="text-xs text-slate-400">•</span>
            <span className="text-xs font-bold text-slate-500">
              {lesson.chapter?.title || lesson.classLevel || 'Curriculum Topic'}
            </span>
            <span className="text-xs text-slate-400">•</span>
            <span className="flex items-center gap-1 text-xs text-slate-500 font-medium">
              <Clock className="w-3 h-3 text-brand-orange" />
              {lesson.durationMinutes || 15} Mins
            </span>
            <span className="text-xs text-slate-400">•</span>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
              ଓଡ଼ିଆ + English
            </span>
          </div>

          {displayMode === 'dual' ? (
            <div className="space-y-1.5">
              <h1 className="text-2xl sm:text-4xl font-black text-brand-navy leading-tight">
                {titleOr}
              </h1>
              <h2 className="text-lg sm:text-2xl font-bold text-slate-600 leading-snug">
                {titleEn}
              </h2>
            </div>
          ) : (
            <h1 className="text-2xl sm:text-4xl font-black text-brand-navy leading-tight">
              {displayMode === 'or' ? titleOr : titleEn}
            </h1>
          )}
        </div>

        {/* Learning Objectives */}
        {displayMode === 'dual' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-teal-50/70 border border-brand-teal/30 space-y-2.5">
              <h3 className="text-sm font-extrabold uppercase tracking-wider text-teal-900 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-brand-teal" />
                <span>ଶିକ୍ଷଣ ଉଦ୍ଦେଶ୍ୟ (Odia Objectives)</span>
              </h3>
              <ul className="space-y-2 text-sm sm:text-base text-teal-950 font-medium">
                {objectivesOr.map((obj, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-teal shrink-0 mt-1" />
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-cyan-50/70 border border-cyan-200 space-y-2.5">
              <h3 className="text-sm font-extrabold uppercase tracking-wider text-cyan-950 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-cyan-600" />
                <span>Learning Objectives (English)</span>
              </h3>
              <ul className="space-y-2 text-sm sm:text-base text-cyan-950 font-medium">
                {objectivesEn.map((obj, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-cyan-600 shrink-0 mt-1" />
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          (displayMode === 'or' ? objectivesOr : objectivesEn).length > 0 && (
            <div className="p-5 rounded-2xl bg-teal-50/70 border border-brand-teal/30 space-y-2.5">
              <h3 className="text-sm font-extrabold uppercase tracking-wider text-teal-900 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-brand-teal" />
                <span>{displayMode === 'or' ? 'ଶିକ୍ଷଣ ଉଦ୍ଦେଶ୍ୟ (Learning Objectives)' : 'Learning Objectives'}</span>
              </h3>
              <ul className="space-y-2 text-sm sm:text-base text-teal-950 font-medium">
                {(displayMode === 'or' ? objectivesOr : objectivesEn).map((obj, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-teal shrink-0 mt-1" />
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>
          )
        )}

        {/* Body Text / Detailed Theory */}
        {displayMode === 'dual' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/90 space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-navy text-white text-xs sm:text-sm font-bold">
                <span>🇮🇳 ଓଡ଼ିଆ ବିସ୍ତୃତ ବ୍ୟାଖ୍ୟା (Odia)</span>
              </div>
              <div className="prose prose-slate max-w-none text-sm sm:text-base leading-relaxed text-brand-navy whitespace-pre-wrap font-medium">
                {contentOr}
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/90 space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-700 text-white text-xs sm:text-sm font-bold">
                <span>🇬🇧 English Curriculum Theory</span>
              </div>
              <div className="prose prose-slate max-w-none text-sm sm:text-base leading-relaxed text-brand-navy whitespace-pre-wrap font-medium">
                {contentEn}
              </div>
            </div>
          </div>
        ) : (
          <div className="prose prose-slate max-w-none text-base sm:text-lg leading-relaxed text-brand-navy whitespace-pre-wrap font-medium p-2">
            {displayMode === 'or' ? contentOr : contentEn}
          </div>
        )}

        {/* Real-World Analogy */}
        {(exampleOr || exampleEn) && (
          <div className="p-6 rounded-3xl bg-amber-50/80 border border-amber-200 space-y-2.5">
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-amber-900 flex items-center gap-1.5">
              <span>💡 {displayMode === 'or' ? 'ଦୈନନ୍ଦିନ ଜୀବନର ସହଜ ଉଦାହରଣ (Real-World Analogy)' : 'Real-World Everyday Analogy'}</span>
            </h4>
            {displayMode === 'dual' ? (
              <div className="space-y-2 text-sm sm:text-base text-amber-950 font-medium">
                <p><strong>ଓଡ଼ିଆ:</strong> {exampleOr}</p>
                <p><strong>English:</strong> {exampleEn}</p>
              </div>
            ) : (
              <p className="text-sm sm:text-base text-amber-950 leading-relaxed font-medium">
                {displayMode === 'or' ? exampleOr : exampleEn}
              </p>
            )}
          </div>
        )}

        {/* Key Takeaways */}
        {displayMode === 'dual' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-2.5">
              <h4 className="text-sm font-extrabold uppercase tracking-wider text-brand-navy flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-brand-orange" />
                <span>ମନେରଖିବା କଥା (Odia Key Takeaways)</span>
              </h4>
              <ul className="space-y-2 text-sm sm:text-base text-slate-700 font-medium">
                {takeawaysOr.map((tk, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-orange mt-2 shrink-0" />
                    <span>{tk}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-2.5">
              <h4 className="text-sm font-extrabold uppercase tracking-wider text-brand-navy flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-cyan-600" />
                <span>Key Exam Points (English)</span>
              </h4>
              <ul className="space-y-2 text-sm sm:text-base text-slate-700 font-medium">
                {takeawaysEn.map((tk, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-600 mt-2 shrink-0" />
                    <span>{tk}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          (displayMode === 'or' ? takeawaysOr : takeawaysEn).length > 0 && (
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-2.5">
              <h4 className="text-sm font-extrabold uppercase tracking-wider text-brand-navy flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-brand-orange" />
                <span>{displayMode === 'or' ? 'ମନେରଖିବା କଥା (Key Takeaways)' : 'Key Takeaways for Exams'}</span>
              </h4>
              <ul className="space-y-2 text-sm sm:text-base text-slate-700 font-medium">
                {(displayMode === 'or' ? takeawaysOr : takeawaysEn).map((tk, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-orange mt-2 shrink-0" />
                    <span>{tk}</span>
                  </li>
                ))}
              </ul>
            </div>
          )
        )}

        {/* Bottom Actions Bar */}
        <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={handleComplete}
              className={`px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-1.5 shadow-2xs transition-all cursor-pointer ${
                isCompleted
                  ? 'bg-emerald-600 text-white'
                  : 'bg-brand-navy text-white hover:bg-brand-navyLight'
              }`}
            >
              <Check className="w-4 h-4" />
              <span>{isCompleted ? 'Completed ✓' : 'Mark as Completed'}</span>
            </button>

            <Link
              to={`/tutor?q=${encodeURIComponent(`I have a question about ${lesson.title}`)}`}
              className="px-4 py-2.5 rounded-xl bg-slate-100 text-brand-navy hover:bg-slate-200/80 font-bold text-xs flex items-center gap-1.5 transition-colors"
            >
              <BrainCircuit className="w-4 h-4 text-brand-teal" />
              <span>Ask AI Tutor</span>
            </Link>
          </div>

          <Link
            to={relatedQuiz ? `/quizzes/${relatedQuiz._id}` : '/quizzes'}
            className="px-6 py-2.5 rounded-xl bg-brand-teal text-brand-navy font-extrabold text-xs hover:bg-brand-tealLight flex items-center gap-2 shadow-md transition-all hover:scale-105"
          >
            <Award className="w-4 h-4" />
            <span>Take Practice Quiz ➔</span>
          </Link>
        </div>

      </article>

    </div>
  );
}
