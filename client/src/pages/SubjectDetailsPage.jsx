import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams, Link, useNavigate } from 'react-router-dom';
import { subjectsAPI, lessonsAPI, quizzesAPI } from '../services/api';
import { getOfflineSubjects, getOfflineChapters, getOfflineLessons, getOfflineQuizzes } from '../services/offlineStorage';
import { useLanguage } from '../contexts/LanguageContext';
import {
  BookOpen,
  ChevronRight,
  ChevronLeft,
  Award,
  Clock,
  CheckCircle2,
  Sparkles,
  Loader2,
  WifiOff
} from 'lucide-react';

export default function SubjectDetailsPage() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const classLevel = searchParams.get('classLevel') || 'Class 8';
  const navigate = useNavigate();

  const [subject, setSubject] = useState(null);
  const [chapters, setChapters] = useState([]);
  const [lessonsMap, setLessonsMap] = useState({});
  const [quizzesMap, setQuizzesMap] = useState({});
  const [loading, setLoading] = useState(true);
  const [isOfflineLoaded, setIsOfflineLoaded] = useState(false);
  const { lang } = useLanguage();

  useEffect(() => {
    fetchSubjectData();
  }, [id, classLevel]);

  const fetchSubjectData = async () => {
    try {
      setLoading(true);
      if (!navigator.onLine) {
        await loadFromOfflineVault();
        return;
      }

      const [subRes, chapsRes, lessonsRes, quizzesRes] = await Promise.all([
        subjectsAPI.getSubjectById(id),
        subjectsAPI.getChapters(id, { classLevel }),
        lessonsAPI.getLessons({ subjectId: id, classLevel }),
        quizzesAPI.getQuizzes({ subjectId: id, classLevel }),
      ]);

      setSubject(subRes.data.subject);
      setChapters(chapsRes.data.chapters || []);

      // Group lessons by chapter
      const map = {};
      (lessonsRes.data.lessons || []).forEach((l) => {
        const chapId = l.chapter?._id || l.chapter;
        if (!map[chapId]) map[chapId] = [];
        map[chapId].push(l);
      });
      setLessonsMap(map);

      // Group quizzes by chapter
      const qMap = {};
      (quizzesRes.data.quizzes || []).forEach((q) => {
        const chapId = q.chapter?._id || q.chapter;
        if (chapId) qMap[chapId] = q;
      });
      setQuizzesMap(qMap);
      setIsOfflineLoaded(false);
    } catch (err) {
      console.warn('Network error in SubjectDetailsPage, checking IndexedDB offline vault:', err);
      await loadFromOfflineVault();
    } finally {
      setLoading(false);
    }
  };

  const loadFromOfflineVault = async () => {
    try {
      const [offSubs, offChaps, offLessons, offQuizzes] = await Promise.all([
        getOfflineSubjects(),
        getOfflineChapters(id, classLevel),
        getOfflineLessons({ subjectId: id, classLevel }),
        getOfflineQuizzes({ subjectId: id, classLevel })
      ]);

      const matchedSubject = offSubs.find(
        (s) => s._id === id || s.code === id || s.name?.toLowerCase() === id?.toLowerCase()
      ) || { name: 'Subject', nameOdia: 'ବିଷୟ' };

      setSubject(matchedSubject);

      let finalChapters = offChaps;
      if (!finalChapters || finalChapters.length === 0) {
        // If chapters store didn't match, synthesize from lessons
        finalChapters = offLessons.map((l) => ({
          _id: l.chapter?._id || l.chapter || l._id,
          title: l.chapter?.title || l.title,
          titleOdia: l.chapter?.titleOdia || l.titleOdia,
          description: l.titleOdia ? `${l.titleOdia} (${l.title})` : l.title,
          descriptionOdia: l.titleOdia || l.title,
        }));
      }

      setChapters(finalChapters);

      // Group lessons by chapter
      const map = {};
      offLessons.forEach((l) => {
        const chapId = l.chapter?._id || l.chapter || l._id;
        if (!map[chapId]) map[chapId] = [];
        map[chapId].push(l);
      });
      setLessonsMap(map);

      // Group quizzes by chapter
      const qMap = {};
      offQuizzes.forEach((q) => {
        const chapId = q.chapter?._id || q.chapter || q.lessonId;
        if (chapId) qMap[chapId] = q;
      });
      setQuizzesMap(qMap);

      setIsOfflineLoaded(true);
    } catch (offErr) {
      console.error('Failed to load from offline vault:', offErr);
    }
  };

  if (loading) {
    return (
      <div className="py-24 flex flex-col items-center justify-center">
        <Loader2 className="w-8 h-8 text-brand-teal animate-spin mb-2" />
        <p className="text-xs font-semibold text-slate-500">Loading chapters...</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Back Button */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => {
            if (window.history.length > 1) {
              navigate(-1);
            } else {
              navigate('/subjects');
            }
          }}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-bold text-brand-navy hover:bg-slate-50 transition-all shadow-2xs group cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4 text-brand-teal group-hover:-translate-x-0.5 transition-transform" />
          <span>{lang === 'or' ? '← ପଛକୁ ଫେରନ୍ତୁ (Back)' : '← Back'}</span>
        </button>

        <Link
          to="/subjects"
          className="inline-flex items-center gap-1 text-xs font-bold text-slate-500 hover:text-brand-navy"
        >
          <span>All Subjects</span>
        </Link>
      </div>

      {isOfflineLoaded && (
        <div className="p-3.5 rounded-2xl bg-cyan-50/80 border border-cyan-200 text-cyan-900 text-xs font-bold flex items-center gap-2 shadow-2xs">
          <WifiOff className="w-4 h-4 text-cyan-700 shrink-0" />
          <span>
            ଅଫଲାଇନ୍ ମୋଡ୍: ବିଷୟବସ୍ତୁ ଆପଣଙ୍କ ବ୍ରାଉଜର୍ ଭଲ୍ଟ (IndexedDB) ରୁ ପ୍ରଦର୍ଶିତ ହେଉଛି । ଉଭୟ ଓଡ଼ିଆ ଓ ଇଂରାଜୀରେ ପଢ଼ିପାରିବେ ।
          </span>
        </div>
      )}

      {/* Subject Header Banner */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2">
          <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md bg-brand-teal/15 text-brand-teal">
            {classLevel} Syllabus
          </span>
          <h1 className="text-3xl font-extrabold text-brand-navy">
            {lang === 'or' ? subject?.nameOdia : subject?.name}
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 max-w-xl">
            {lang === 'or' ? (subject?.descriptionOdia || subject?.description) : subject?.description}
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center shrink-0">
          <div className="text-2xl font-black text-brand-navy">{chapters.length}</div>
          <div className="text-[11px] font-bold text-slate-500">Active Chapters</div>
        </div>
      </div>

      {/* Chapters Accordion / List */}
      <div className="space-y-6">
        <h2 className="text-lg font-extrabold text-brand-navy">Chapters & Topics</h2>

        {chapters.length > 0 ? (
          chapters.map((chap, idx) => {
            const chapLessons = lessonsMap[chap._id] || [];
            return (
              <div key={chap._id} className="glass-panel rounded-3xl border border-slate-200/90 shadow-2xs overflow-hidden">
                
                {/* Chapter Title Bar */}
                <div className="p-5 sm:p-6 bg-slate-50/70 border-b border-slate-200/80 flex items-center justify-between gap-4">
                  <div className="space-y-1">
                    <span className="text-[10px] font-extrabold uppercase text-brand-teal">
                      Chapter {idx + 1}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-brand-navy">
                      {lang === 'or' ? chap.titleOdia : chap.title}
                    </h3>
                    <p className="text-xs text-slate-500">
                      {lang === 'or' ? (chap.descriptionOdia || chap.description) : chap.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-xs font-bold px-3 py-1 rounded-xl bg-white border border-slate-200 text-slate-600 shrink-0">
                      {chapLessons.length} Lesson(s)
                    </span>
                    {quizzesMap[chap._id] && (
                      <Link
                        to={`/quizzes/${quizzesMap[chap._id]._id}`}
                        className="text-xs font-extrabold px-3 py-1 rounded-xl bg-brand-teal text-brand-navy hover:bg-brand-tealLight shrink-0 flex items-center gap-1 shadow-2xs transition-all hover:scale-105"
                      >
                        <Award className="w-3.5 h-3.5" />
                        <span>{lang === 'or' ? 'ଅଧ୍ୟାୟ କୁଇଜ୍ 🎯' : 'Chapter Quiz 🎯'}</span>
                      </Link>
                    )}
                  </div>
                </div>

                {/* Lessons in Chapter */}
                <div className="p-4 sm:p-6 space-y-3">
                  {chapLessons.length > 0 ? (
                    chapLessons.map((les) => (
                      <div
                        key={les._id}
                        className="p-4 rounded-2xl bg-white border border-slate-200/80 hover:border-brand-teal flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all shadow-2xs"
                      >
                        <div className="space-y-1">
                          <h4 className="text-sm font-bold text-brand-navy">
                            {lang === 'or' ? les.titleOdia : les.title}
                          </h4>
                          <div className="flex items-center gap-3 text-xs text-slate-500">
                            <span className="flex items-center gap-1">
                              <Clock className="w-3.5 h-3.5 text-brand-orange" />
                              {les.durationMinutes || 15} mins
                            </span>
                            <span>•</span>
                            <span className="text-brand-teal font-semibold">
                              {les.learningObjectives?.length || 3} Learning Objectives
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <Link
                            to={`/lessons/${les._id}`}
                            className="px-4 py-2 rounded-xl bg-brand-navy text-white text-xs font-bold hover:bg-brand-navyLight transition-colors"
                          >
                            {lang === 'or' ? 'ପାଠ ପଢ଼ନ୍ତୁ ➔' : 'Read Lesson ➔'}
                          </Link>
                          {quizzesMap[chap._id] && (
                            <Link
                              to={`/quizzes/${quizzesMap[chap._id]._id}`}
                              className="px-3.5 py-2 rounded-xl bg-brand-teal/15 text-brand-teal border border-brand-teal/30 hover:bg-brand-teal hover:text-brand-navy text-xs font-bold transition-all flex items-center gap-1 shadow-2xs"
                            >
                              <Award className="w-3.5 h-3.5" />
                              <span>{lang === 'or' ? 'କୁଇଜ୍ 🎯' : 'Quiz 🎯'}</span>
                            </Link>
                          )}
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-4 text-xs text-slate-400">
                      Curriculum lessons for this chapter are loading.
                    </div>
                  )}
                </div>

              </div>
            );
          })
        ) : (
          <div className="p-8 text-center glass-panel rounded-3xl text-slate-500 text-sm font-medium">
            No chapters registered yet for this subject and class.
          </div>
        )}
      </div>

    </div>
  );
}
