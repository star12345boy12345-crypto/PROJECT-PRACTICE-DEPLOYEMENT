import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';
import {
  subjectsAPI,
  progressAPI,
  studyTasksAPI,
  recommendationsAPI,
  lessonsAPI
} from '../services/api';
import { getOfflineLessons, getOfflineSubjects, getOfflineQuizzes } from '../services/offlineStorage';
import SearchBar from '../components/SearchBar';
import {
  Sparkles,
  Flame,
  Clock,
  BookOpen,
  Award,
  AlertTriangle,
  BrainCircuit,
  Camera,
  Lock,
  ArrowRight,
  CheckCircle2,
  Circle,
  Plus,
  HardDriveDownload,
  Calendar,
  Languages,
  ChevronRight,
  Loader2,
  Atom,
  Calculator,
  Cpu,
  Globe,
  Share2,
  LogOut,
  BarChart3,
  Users
} from 'lucide-react';

export default function DashboardPage() {
  const { user, logout } = useAuth();
  const { lang, t } = useLanguage();
  const navigate = useNavigate();

  const [subjects, setSubjects] = useState([]);
  const [progress, setProgress] = useState(null);
  const [weakTopics, setWeakTopics] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [studyTasks, setStudyTasks] = useState([]);
  const [offlineCount, setOfflineCount] = useState(0);
  const [loading, setLoading] = useState(true);

  // Quick task input state
  const [newTaskTitle, setNewTaskTitle] = useState('');

  useEffect(() => {
    loadDashboardData();

    const handleBundleUpdated = () => {
      loadDashboardData();
    };
    window.addEventListener('vidyora-offline-bundle-updated', handleBundleUpdated);
    return () => window.removeEventListener('vidyora-offline-bundle-updated', handleBundleUpdated);
  }, [user]);

  const loadDashboardData = async () => {
    try {
      setLoading(true);
      if (navigator.onLine) {
        try {
          const [subsRes, progRes, recsRes, tasksRes] = await Promise.all([
            subjectsAPI.getSubjects({ classLevel: user?.classLevel || 'Class 8' }),
            progressAPI.getProgress(),
            recommendationsAPI.getRecommendations(),
            studyTasksAPI.getTasks(),
          ]);

          if (subsRes.data?.subjects && subsRes.data.subjects.length > 0) {
            setSubjects(subsRes.data.subjects);
          } else {
            const offSubs = await getOfflineSubjects();
            if (offSubs.length > 0) setSubjects(offSubs);
          }

          setProgress(progRes.data?.progress || null);
          setWeakTopics(progRes.data?.progress?.weakTopics || []);
          setRecommendations(recsRes.data?.recommendations || []);
          setStudyTasks(tasksRes.data?.tasks || []);
        } catch (netErr) {
          console.warn('Network fetch error in Dashboard, falling back to offline storage:', netErr);
          const offSubs = await getOfflineSubjects();
          if (offSubs.length > 0) setSubjects(offSubs);
        }
      } else {
        const offSubs = await getOfflineSubjects();
        if (offSubs.length > 0) setSubjects(offSubs);
      }

      // Check offline lessons in IndexedDB
      const [offLessons, offQuizzes] = await Promise.all([
        getOfflineLessons(),
        getOfflineQuizzes()
      ]);
      setOfflineCount(offLessons.length);
    } catch (err) {
      console.warn('Dashboard data fetch note:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleToggleTask = async (taskId, currentStatus) => {
    try {
      await studyTasksAPI.updateTask(taskId, { completed: !currentStatus });
      setStudyTasks((prev) =>
        prev.map((t) => (t._id === taskId ? { ...t, completed: !currentStatus } : t))
      );
    } catch (err) {
      console.error('Failed to update task:', err);
    }
  };

  const handleCreateTask = async (e) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;
    try {
      const res = await studyTasksAPI.createTask({
        title: newTaskTitle.trim(),
        subject: 'General',
        priority: 'Medium',
      });
      setStudyTasks((prev) => [res.data.task, ...prev]);
      setNewTaskTitle('');
    } catch (err) {
      console.error('Failed to create task:', err);
    }
  };

  const getSubjectIcon = (iconName) => {
    switch (iconName) {
      case 'Atom': return Atom;
      case 'Calculator': return Calculator;
      case 'Cpu': return Cpu;
      case 'Globe': return Globe;
      default: return BookOpen;
    }
  };

  if (loading) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center">
        <Loader2 className="w-10 h-10 text-brand-teal animate-spin mb-3" />
        <p className="text-sm font-semibold text-brand-navy">Loading Personalized Learning Dashboard...</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* 1. TOP GLOBAL TOPIC SEARCH BAR */}
      <div className="text-center space-y-2">
        <SearchBar placeholder={lang === 'or' ? "ଯେକୌଣସି ପାଠ ବା ସୂତ୍ର ଟାଇପ୍ କରି ଖୋଜନ୍ତୁ (ଯଥା: ଆଲୋକ ଶ୍ଳେଷଣ, ନ୍ୟୁଟନ, ପିଥାଗୋରାସ)..." : "Type any topic to search syllabus & read directly (e.g., Photosynthesis, Newton)..."} />
      </div>

      {/* 2. WELCOME & STATS BANNER */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-brand-navy via-brand-navyLight to-slate-900 text-white p-6 sm:p-8 shadow-xl border border-slate-700/60">
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          
          {/* Welcome Text */}
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-teal/20 text-brand-teal text-xs font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{user?.classLevel || 'Class 8'} • {user?.preferredLanguage === 'or' ? 'ଓଡ଼ିଆ ମାଧ୍ୟମ' : 'English Mode'}</span>
              </div>
              
              <button
                onClick={() => { logout(); navigate('/'); }}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/20 hover:bg-rose-600 text-rose-200 hover:text-white border border-rose-400/30 text-xs font-bold transition-all shadow-xs cursor-pointer active:scale-95"
                title="Log Out of Vidyora AI"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>{lang === 'or' ? 'ଲଗ୍-ଆଉଟ୍ (Log Out)' : 'Log Out'}</span>
              </button>
            </div>
            
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              {t('dashboard.welcome')}, <span className="text-brand-teal">{user?.name || 'Student'}</span>! 👋
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              {user?.schoolName ? `${user.schoolName}` : 'Government High School'} • {lang === 'or' ? 'ଆଜିର ଲକ୍ଷ୍ୟ: ଆଲୋକ ଶ୍ଳେଷଣ ଓ ଗତି ନିୟମ ଅଭ୍ୟାସ କରନ୍ତୁ' : "Today's Target: Review Photosynthesis & Newton's Laws"}
            </p>
          </div>

          {/* Quick Stats Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3 sm:p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 text-center">
              <div className="flex items-center justify-center gap-1 text-brand-orange font-black text-xl sm:text-2xl">
                <Flame className="w-5 h-5 fill-brand-orange" />
                <span>{progress?.streakDays || 1}</span>
              </div>
              <div className="text-[10px] sm:text-xs font-semibold text-slate-300 mt-1">{t('dashboard.streak')}</div>
            </div>

            <div className="p-3 sm:p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 text-center">
              <div className="flex items-center justify-center gap-1 text-brand-teal font-black text-xl sm:text-2xl">
                <Clock className="w-5 h-5" />
                <span>{progress?.activeMinutes || 45}m</span>
              </div>
              <div className="text-[10px] sm:text-xs font-semibold text-slate-300 mt-1">{t('dashboard.activeMinutes')}</div>
            </div>

            <div className="p-3 sm:p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 text-center">
              <div className="flex items-center justify-center gap-1 text-emerald-300 font-black text-xl sm:text-2xl">
                <BookOpen className="w-5 h-5" />
                <span>{progress?.completedLessons?.length || 2}</span>
              </div>
              <div className="text-[10px] sm:text-xs font-semibold text-slate-300 mt-1">{t('dashboard.completedLessons')}</div>
            </div>

            <div className="p-3 sm:p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 text-center">
              <div className="flex items-center justify-center gap-1 text-amber-300 font-black text-xl sm:text-2xl">
                <Award className="w-5 h-5" />
                <span>{progress?.averageScore || 78}%</span>
              </div>
              <div className="text-[10px] sm:text-xs font-semibold text-slate-300 mt-1">{t('dashboard.avgScore')}</div>
            </div>
          </div>

        </div>
      </div>

      {/* 3. IDENTIFIED WEAK TOPICS BANNER (Crucial Agentic AI Feature) */}
      {weakTopics.length > 0 && (
        <div className="p-5 sm:p-6 rounded-3xl bg-amber-500/10 border-2 border-amber-500/40 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-amber-900 font-extrabold text-sm sm:text-base">
              <AlertTriangle className="w-5 h-5 text-amber-600 animate-bounce" />
              <span>{t('dashboard.weakTopics')}</span>
              <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-amber-200 text-amber-800">
                {weakTopics.length} Focus Areas
              </span>
            </div>
            <span className="text-xs font-semibold text-amber-700 hidden sm:inline">
              Auto-detected from Quiz Performance (&lt; 60% accuracy)
            </span>
          </div>

          <p className="text-xs text-amber-900/80 leading-relaxed">
            {t('dashboard.weakTopicsDesc')}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-1">
            {weakTopics.map((wt, i) => (
              <div
                key={i}
                className="p-3 rounded-2xl bg-white border border-amber-200 shadow-2xs flex items-center justify-between"
              >
                <div>
                  <h4 className="text-xs font-bold text-brand-navy">{wt.topic}</h4>
                  <span className="text-[11px] text-slate-500">{wt.subject} • Missed {wt.failureCount}x</span>
                </div>
                <Link
                  to={`/tutor?q=${encodeURIComponent(`Explain ${wt.topic} in simple Odia and give me examples`)}`}
                  className="px-3 py-1 rounded-xl bg-amber-500 text-white font-extrabold text-[11px] hover:bg-amber-600 transition-colors shadow-2xs"
                >
                  Revise Now ➔
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 4. MAIN DASHBOARD GRID: SUBJECTS & AI ACTIONS */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left 2 Cols: My Subjects & AI Recommendations */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Quick AI Launchpad */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <Link
              to="/tutor"
              className="p-6 rounded-3xl bg-gradient-to-br from-brand-navy to-brand-navyLight text-white shadow-md hover:shadow-xl transition-all group border border-slate-700/50 flex items-center justify-between"
            >
              <div className="space-y-1.5">
                <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-brand-teal">
                  <BrainCircuit className="w-3.5 h-3.5" />
                  <span>Agentic Tutor</span>
                </div>
                <h3 className="text-lg font-black group-hover:text-brand-teal transition-colors">
                  Ask AI Tutor in Odia / English
                </h3>
                <p className="text-xs text-slate-300">
                  Step-by-step concept explanations with real-world examples.
                </p>
              </div>
              <ChevronRight className="w-6 h-6 text-brand-teal group-hover:translate-x-1 transition-transform shrink-0 ml-2" />
            </Link>

            <Link
              to="/scanner"
              className="p-6 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-md hover:shadow-xl transition-all group border border-amber-500/30 flex items-center justify-between"
            >
              <div className="space-y-1.5">
                <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-amber-400">
                  <Camera className="w-3.5 h-3.5" />
                  <span>Textbook Lens</span>
                  <span className="px-1.5 py-0.5 rounded-md bg-amber-500/20 text-amber-300 border border-amber-500/30 font-black text-[9px]">
                    Future Feature
                  </span>
                </div>
                <h3 className="text-lg font-black group-hover:text-amber-400 transition-colors flex items-center gap-2">
                  <span>Snap & Solve Textbook Photo</span>
                  <Lock className="w-4 h-4 text-amber-400" />
                </h3>
                <p className="text-xs text-slate-300">
                  Scheduled for upcoming platform release (Not accessible now).
                </p>
              </div>
              <ChevronRight className="w-6 h-6 text-amber-400 group-hover:translate-x-1 transition-transform shrink-0 ml-2" />
            </Link>

          </div>

          {/* Subjects Grid */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg sm:text-xl font-extrabold text-brand-navy flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-brand-teal" />
                <span>{t('dashboard.mySubjects')}</span>
              </h2>
              <Link to="/subjects" className="text-xs font-bold text-brand-teal hover:underline flex items-center gap-1">
                <span>View All Syllabus</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {subjects.map((subj) => {
                const IconComponent = getSubjectIcon(subj.icon);
                return (
                  <Link
                    key={subj._id}
                    to={`/subjects/${subj._id}`}
                    className="glass-card p-5 rounded-3xl flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3.5">
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform"
                        style={{ backgroundColor: subj.color || '#26C4B1' }}
                      >
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-base font-extrabold text-brand-navy group-hover:text-brand-teal transition-colors">
                          {lang === 'or' ? subj.nameOdia : subj.name}
                        </h4>
                        <p className="text-xs text-slate-500 font-medium">
                          {lang === 'or' ? `${subj.name} • ଶ୍ରେଣୀ ୮` : `Class 8 • Core Curriculum`}
                        </p>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-brand-teal group-hover:translate-x-1 transition-all" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* AI Personalized Recommendations */}
          <div className="space-y-4">
            <h2 className="text-lg sm:text-xl font-extrabold text-brand-navy flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-brand-orange" />
              <span>{t('dashboard.recommendations')}</span>
            </h2>

            <div className="space-y-3">
              {recommendations.slice(0, 3).map((rec, idx) => (
                <div
                  key={rec._id || idx}
                  className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-brand-teal/10 text-brand-teal uppercase">
                        {rec.type || 'Revision'}
                      </span>
                      <h4 className="text-sm font-bold text-brand-navy">
                        {lang === 'or' ? (rec.titleOdia || rec.title) : rec.title}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-500">
                      {lang === 'or' ? (rec.reasonOdia || rec.reason) : rec.reason}
                    </p>
                  </div>

                  <Link
                    to={rec.type === 'quiz' ? '/quizzes' : `/tutor?q=${encodeURIComponent(rec.title)}`}
                    className="shrink-0 px-3.5 py-1.5 rounded-xl bg-brand-navy text-white text-xs font-bold hover:bg-brand-navyLight transition-colors shadow-2xs cursor-pointer"
                  >
                    Start ➔
                  </Link>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Col: Today's Study Plan & Offline Vault Widget */}
        <div className="space-y-6">
          
          {/* Today's Study Plan Checklist */}
          <div className="glass-panel p-6 rounded-3xl shadow-sm border border-slate-200/80 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-extrabold text-brand-navy flex items-center gap-2">
                <Calendar className="w-4 h-4 text-brand-teal" />
                <span>{t('dashboard.todayPlan')}</span>
              </h3>
              <span className="text-xs font-bold text-slate-400">
                {studyTasks.filter((t) => t.completed).length}/{studyTasks.length} Done
              </span>
            </div>

            {/* Quick Add Task */}
            <form onSubmit={handleCreateTask} className="flex items-center gap-2">
              <input
                type="text"
                value={newTaskTitle}
                onChange={(e) => setNewTaskTitle(e.target.value)}
                placeholder="Add a revision task..."
                className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium focus:ring-2 focus:ring-brand-teal/40 outline-none"
              />
              <button
                type="submit"
                className="p-2 rounded-xl bg-brand-navy text-white hover:bg-brand-navyLight shrink-0"
              >
                <Plus className="w-4 h-4" />
              </button>
            </form>

            {/* Tasks List */}
            <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
              {studyTasks.length > 0 ? (
                studyTasks.map((task) => (
                  <div
                    key={task._id}
                    onClick={() => handleToggleTask(task._id, task.completed)}
                    className={`p-3 rounded-xl border flex items-start gap-2.5 cursor-pointer transition-all ${
                      task.completed
                        ? 'bg-slate-50 border-slate-200 text-slate-400 line-through'
                        : 'bg-white border-slate-200/90 text-brand-navy hover:border-brand-teal/50'
                    }`}
                  >
                    {task.completed ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    ) : (
                      <Circle className="w-4 h-4 text-slate-300 shrink-0 mt-0.5" />
                    )}
                    <div className="space-y-0.5">
                      <p className="text-xs font-bold leading-tight">{task.title}</p>
                      {task.isAiRecommended && (
                        <span className="text-[10px] text-brand-teal font-semibold">
                          ★ AI Weak Topic Task
                        </span>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-xs text-slate-400 text-center py-4">No pending tasks for today.</p>
              )}
            </div>

            <Link
              to="/study-planner"
              className="block text-center text-xs font-bold text-brand-teal hover:underline pt-1"
            >
              Open Full Study Planner ➔
            </Link>
          </div>

          {/* Downloaded Offline Vault Card */}
          <div className="glass-panel p-6 rounded-3xl shadow-sm border border-slate-200/80 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-100 text-cyan-800 flex items-center justify-center font-bold">
                <HardDriveDownload className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-extrabold text-brand-navy">Offline Learning Vault</h3>
                <p className="text-[11px] text-slate-500">IndexedDB Device Storage</p>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              {lang === 'or'
                ? `ଆପଣଙ୍କ ଫୋନ୍ ଭଲ୍ଟରେ ${offlineCount} ଟି ପାଠ ସୁରକ୍ଷିତ ଅଛି । ଇଣ୍ଟରନେଟ୍ ନଥିଲେ ମଧ୍ୟ ଏହା ଚାଲିବ ।`
                : `You have ${offlineCount} lesson(s) stored locally on your device for zero-internet learning.`}
            </p>

            <Link
              to="/offline-vault"
              className="w-full py-2.5 rounded-xl bg-brand-navy text-white text-xs font-extrabold flex items-center justify-center gap-2 hover:bg-brand-navyLight shadow-2xs"
            >
              <span>Explore Offline Vault</span>
              <ArrowRight className="w-3.5 h-3.5 text-brand-teal" />
            </Link>
          </div>

          {/* Student Analytics & Parent Progress Card */}
          <div className="glass-panel p-6 rounded-3xl shadow-sm border border-purple-200/80 space-y-4 bg-gradient-to-br from-white to-purple-50/40">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-extrabold text-brand-navy">
                  {lang === 'or' ? 'ଅଭିଭାବକ ପ୍ରଗତି ରିପୋର୍ଟ' : 'Parent & Progress Portal'}
                </h3>
                <p className="text-[11px] text-slate-500">
                  {lang === 'or' ? 'ପରୀକ୍ଷା ବିଶ୍ଳେଷଣ ଓ ହ୍ୱାଟ୍ସଆପ୍ ସେୟାର୍' : 'Analytics & WhatsApp Updates'}
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              {lang === 'or'
                ? 'ଅଭିଭାବକମାନେ ଛାତ୍ରଙ୍କ ସମ୍ପୂର୍ଣ୍ଣ ପ୍ରଗତି କାର୍ଡ ଦେଖିପାରିବେ ଏବଂ ଏକ-କ୍ଲିକ୍‌ରେ ହ୍ୱାଟ୍ସଆପ୍ ବାର୍ତ୍ତା ପାଇପାରିବେ ।'
                : 'View official performance analytics and share weekly progress updates directly with parents via WhatsApp.'}
            </p>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <Link
                to="/progress"
                className="py-2.5 rounded-xl bg-white border border-slate-200 text-brand-navy text-xs font-bold flex items-center justify-center gap-1.5 hover:bg-slate-50 shadow-2xs"
              >
                <BarChart3 className="w-3.5 h-3.5 text-brand-teal" />
                <span>{lang === 'or' ? 'ଅଗ୍ରଗତି' : 'Analytics'}</span>
              </Link>

              <Link
                to="/parent-report"
                className="py-2.5 rounded-xl bg-purple-700 hover:bg-purple-800 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-2xs"
              >
                <Users className="w-3.5 h-3.5" />
                <span>{lang === 'or' ? 'ଅଭିଭାବକ' : 'Parent Card'}</span>
              </Link>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
