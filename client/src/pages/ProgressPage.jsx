import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { progressAPI } from '../services/api';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import {
  BarChart3,
  Flame,
  Award,
  BookOpen,
  Clock,
  AlertTriangle,
  Sparkles,
  TrendingUp,
  Loader2,
  ChevronLeft,
  Target,
  CheckCircle2,
  Languages,
  Printer,
  Users,
  BrainCircuit,
  ArrowRight
} from 'lucide-react';

export default function ProgressPage() {
  const navigate = useNavigate();
  const [analytics, setAnalytics] = useState(null);
  const [weakTopics, setWeakTopics] = useState([]);
  const [loading, setLoading] = useState(true);
  const { lang, t } = useLanguage();
  const { user } = useAuth();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const [anaRes, weakRes] = await Promise.all([
        progressAPI.getAnalytics(),
        progressAPI.getWeakTopics(),
      ]);
      setAnalytics(anaRes.data);
      setWeakTopics(weakRes.data.weakTopics || []);
    } catch (err) {
      console.error('Failed to load analytics:', err);
    } finally {
      setLoading(false);
    }
  };

  const handlePrintReport = () => {
    window.print();
  };

  if (loading) {
    return (
      <div className="py-24 flex flex-col items-center justify-center">
        <Loader2 className="w-8 h-8 text-brand-teal animate-spin mb-2" />
        <p className="text-xs font-semibold text-slate-500">Compiling comprehensive learning analytics...</p>
      </div>
    );
  }

  const scoreTrend = analytics?.scoreTrend || [];
  const subjectProgress = analytics?.subjectProgress || [];
  const weeklyActivity = analytics?.weeklyActivity || [];
  const strengths = analytics?.strengths || [];
  const readiness = analytics?.examReadinessScore || 82;
  const langSplit = analytics?.studyLanguageSplit || { odia: 65, english: 35 };

  const languagePieData = [
    { name: 'Odia (ଓଡ଼ିଆ)', value: langSplit.odia, color: '#26C4B1' },
    { name: 'English', value: langSplit.english, color: '#0E1B30' }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Top Controls & Navigation Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 print:hidden">
        <button
          onClick={() => {
            if (window.history.length > 1) {
              navigate(-1);
            } else {
              navigate('/dashboard');
            }
          }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white border border-slate-300 text-xs font-bold text-brand-navy hover:bg-slate-100 hover:border-brand-teal transition-all shadow-2xs group cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4 text-brand-teal group-hover:-translate-x-1 transition-transform" />
          <span>{lang === 'or' ? '← ପଛକୁ ଫେରନ୍ତୁ (Back)' : '← Back to Dashboard'}</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={handlePrintReport}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors shadow-2xs cursor-pointer"
            title="Print or Save PDF report"
          >
            <Printer className="w-3.5 h-3.5 text-brand-navy" />
            <span>{lang === 'or' ? 'ରିପୋର୍ଟ ପ୍ରିଣ୍ଟ୍ କରନ୍ତୁ' : 'Print Report'}</span>
          </button>

          <Link
            to="/parent-report"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-purple-700 text-white text-xs font-extrabold hover:bg-purple-800 transition-colors shadow-2xs"
          >
            <Users className="w-3.5 h-3.5" />
            <span>{lang === 'or' ? 'ଅଭିଭାବକ ପୋର୍ଟାଲ୍ ➔' : 'Parent Portal ➔'}</span>
          </Link>
        </div>
      </div>

      {/* Main Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-teal/15 text-brand-teal text-[11px] font-extrabold mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI-Driven Learning Diagnostics</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-brand-navy">
            {lang === 'or' ? 'ଛାତ୍ର ବିଶ୍ଳେଷଣାତ୍ମକ ପ୍ରଗତି ରିପୋର୍ଟ' : 'Student Analytical Progress Report'}
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            {lang === 'or'
              ? `${user?.name || 'ବିଦ୍ୟାର୍ଥୀ'}ଙ୍କ ପରୀକ୍ଷା ନିପୁଣତା, ସାପ୍ତାହିକ ଅଧ୍ୟୟନ ସମୟ ଏବଂ ବିଷୟଭିତ୍ତିକ ସାମର୍ଥ୍ୟ ବିବରଣୀ`
              : `Comprehensive performance analytics, test accuracy trends, and curriculum mastery for ${user?.name || 'Student'}`}
          </p>
        </div>

        {/* Exam Readiness Score Badge */}
        <div className="p-4 rounded-3xl bg-gradient-to-r from-brand-navy via-slate-900 to-teal-900 text-white shadow-md flex items-center gap-4 shrink-0 border border-brand-teal/30">
          <div className="w-14 h-14 rounded-2xl bg-brand-teal/20 border border-brand-teal flex items-center justify-center font-black text-xl text-brand-teal">
            {readiness}%
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-wider text-slate-300 font-bold">
              {lang === 'or' ? 'ପରୀକ୍ଷା ପ୍ରସ୍ତୁତି ସୂଚକ' : 'Exam Readiness Index'}
            </div>
            <div className="text-sm font-extrabold text-white">
              {readiness >= 80 ? (lang === 'or' ? 'ଉଚ୍ଚ ପ୍ରସ୍ତୁତି (High Ready)' : 'Optimal Readiness') : (lang === 'or' ? 'ମଧ୍ୟମ ଅଭ୍ୟାସ ଜାରି ରଖନ୍ତୁ' : 'Steady Progress')}
            </div>
          </div>
        </div>
      </div>

      {/* Overview Metric Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="glass-panel p-5 rounded-3xl border border-slate-200/90 shadow-2xs space-y-1 bg-white">
          <div className="flex items-center gap-2 text-brand-orange text-xs font-bold">
            <Flame className="w-4 h-4 fill-brand-orange" />
            <span>{lang === 'or' ? 'ଦୈନିକ ପଢ଼ା ଧାରା' : 'Daily Streak'}</span>
          </div>
          <div className="text-2xl font-black text-brand-navy">{analytics?.streakDays || 3} Days</div>
          <p className="text-[11px] text-slate-400">Consistent daily study</p>
        </div>

        <div className="glass-panel p-5 rounded-3xl border border-slate-200/90 shadow-2xs space-y-1 bg-white">
          <div className="flex items-center gap-2 text-brand-teal text-xs font-bold">
            <Award className="w-4 h-4" />
            <span>{lang === 'or' ? 'ହାରାହାରି କୁଇଜ୍ ସ୍କୋର' : 'Average Quiz Score'}</span>
          </div>
          <div className="text-2xl font-black text-brand-navy">{analytics?.averageScore || 82}%</div>
          <p className="text-[11px] text-slate-400">Across all attempts</p>
        </div>

        <div className="glass-panel p-5 rounded-3xl border border-slate-200/90 shadow-2xs space-y-1 bg-white">
          <div className="flex items-center gap-2 text-emerald-600 text-xs font-bold">
            <BookOpen className="w-4 h-4" />
            <span>{lang === 'or' ? 'ସମ୍ପୂର୍ଣ୍ଣ ହୋଇଥିବା ପାଠ' : 'Completed Lessons'}</span>
          </div>
          <div className="text-2xl font-black text-brand-navy">{analytics?.lessonsCompleted || 3}</div>
          <p className="text-[11px] text-slate-400">Curriculum units finished</p>
        </div>

        <div className="glass-panel p-5 rounded-3xl border border-slate-200/90 shadow-2xs space-y-1 bg-white">
          <div className="flex items-center gap-2 text-purple-600 text-xs font-bold">
            <Clock className="w-4 h-4" />
            <span>{lang === 'or' ? 'ଅଧ୍ୟୟନ ସମୟ' : 'Learning Time'}</span>
          </div>
          <div className="text-2xl font-black text-brand-navy">{analytics?.totalActiveMinutes || 48} mins</div>
          <p className="text-[11px] text-slate-400">Total active learning</p>
        </div>
      </div>

      {/* Primary Analytics Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Score Trend Area Chart */}
        <div className="glass-panel p-6 rounded-3xl border border-slate-200/90 shadow-sm space-y-4 bg-white">
          <div className="flex items-center justify-between">
            <h3 className="text-sm sm:text-base font-extrabold text-brand-navy flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-brand-teal" />
              <span>{lang === 'or' ? 'କୁଇଜ୍ ନିପୁଣତା ପ୍ରବୃତ୍ତି (Score Progression)' : 'Quiz Performance Trend'}</span>
            </h3>
            <span className="text-xs font-bold text-slate-400">Accuracy %</span>
          </div>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={scoreTrend}>
                <defs>
                  <linearGradient id="scoreGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#26C4B1" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#26C4B1" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                <XAxis dataKey="quizNumber" stroke="#94A3B8" fontSize={11} />
                <YAxis domain={[0, 100]} stroke="#94A3B8" fontSize={11} />
                <Tooltip />
                <Area type="monotone" dataKey="percentage" stroke="#26C4B1" strokeWidth={3} fillOpacity={1} fill="url(#scoreGrad)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Weekly Learning Minutes Bar Chart */}
        <div className="glass-panel p-6 rounded-3xl border border-slate-200/90 shadow-sm space-y-4 bg-white">
          <div className="flex items-center justify-between">
            <h3 className="text-sm sm:text-base font-extrabold text-brand-navy flex items-center gap-2">
              <Clock className="w-4 h-4 text-brand-orange" />
              <span>{lang === 'or' ? 'ସାପ୍ତାହିକ ଅଧ୍ୟୟନ ସମୟ (Weekly Minutes)' : 'Weekly Active Study Minutes'}</span>
            </h3>
            <span className="text-xs font-bold text-slate-400">Minutes / Day</span>
          </div>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weeklyActivity}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                <XAxis dataKey={lang === 'or' ? 'dayOdia' : 'day'} stroke="#94A3B8" fontSize={11} />
                <YAxis stroke="#94A3B8" fontSize={11} />
                <Tooltip />
                <Bar dataKey="minutes" fill="#FF6B4A" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>

      {/* Subject Mastery Progress Bars & Language Split */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* 5-Subject Mastery Breakdown */}
        <div className="lg:col-span-2 glass-panel p-6 rounded-3xl border border-slate-200/90 shadow-sm space-y-4 bg-white">
          <div className="flex items-center justify-between">
            <h3 className="text-sm sm:text-base font-extrabold text-brand-navy flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-brand-teal" />
              <span>{lang === 'or' ? 'ବିଷୟଭିତ୍ତିକ ଦକ୍ଷତା ପ୍ରଗତି (Subject Mastery)' : 'Curriculum Subject Mastery Breakdown'}</span>
            </h3>
            <span className="text-xs font-bold text-slate-400">5 Foundational Subjects</span>
          </div>

          <div className="space-y-4 pt-2">
            {subjectProgress.map((sp, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="text-brand-navy">
                    {lang === 'or' ? sp.subjectOdia : sp.subject}
                    <span className="text-slate-400 font-normal ml-2">({sp.subject})</span>
                  </span>
                  <span className="text-brand-teal font-black">{sp.accuracy || sp.completed}% Mastery</span>
                </div>
                <div className="w-full h-3 rounded-full bg-slate-100 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-brand-teal to-brand-navy rounded-full transition-all duration-500"
                    style={{ width: `${sp.accuracy || sp.completed}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bilingual Study Language Ratio */}
        <div className="glass-panel p-6 rounded-3xl border border-slate-200/90 shadow-sm space-y-4 bg-white flex flex-col justify-between">
          <div>
            <h3 className="text-sm sm:text-base font-extrabold text-brand-navy flex items-center gap-2">
              <Languages className="w-4 h-4 text-purple-600" />
              <span>{lang === 'or' ? 'ଭାଷାଗତ ଅଧ୍ୟୟନ ଅନୁପାତ' : 'Bilingual Study Split'}</span>
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Time allocated between Odia & English modules
            </p>

            <div className="h-44 w-full mt-2">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={languagePieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={45}
                    outerRadius={65}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {languagePieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="space-y-2 pt-2 border-t border-slate-100">
            <div className="flex items-center justify-between text-xs font-bold">
              <span className="flex items-center gap-1.5 text-brand-teal">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-teal" />
                <span>ଓଡ଼ିଆ ମାଧ୍ୟମ (Odia)</span>
              </span>
              <span className="text-brand-navy font-black">{langSplit.odia}%</span>
            </div>
            <div className="flex items-center justify-between text-xs font-bold">
              <span className="flex items-center gap-1.5 text-brand-navy">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-navy" />
                <span>English Medium</span>
              </span>
              <span className="text-brand-navy font-black">{langSplit.english}%</span>
            </div>
          </div>
        </div>

      </div>

      {/* Strengths & Weaknesses Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Mastered Strengths */}
        <div className="p-6 rounded-3xl bg-emerald-50/60 border border-emerald-200/80 space-y-3">
          <div className="flex items-center gap-2 text-emerald-800">
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            <h4 className="text-sm font-extrabold uppercase tracking-wide">
              {lang === 'or' ? 'ଦକ୍ଷତା ହାସଲ ହୋଇଥିବା ବିଷୟ (Core Strengths)' : 'Mastered Concepts & Strengths'}
            </h4>
          </div>
          <p className="text-xs text-emerald-950 font-medium">
            Topics where student scored 90%+ with solid conceptual grasp:
          </p>
          <div className="space-y-2 pt-1">
            {strengths.map((s, idx) => (
              <div key={idx} className="p-3 rounded-2xl bg-white border border-emerald-200 flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-emerald-950 block">{s.topic}</span>
                  <span className="text-[11px] text-slate-500">{s.subject}</span>
                </div>
                <span className="px-2.5 py-1 rounded-xl bg-emerald-100 text-emerald-800 font-extrabold text-[11px]">
                  {s.score || 95}% Mastered
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Identified Weak Topics for Revision */}
        <div className="p-6 rounded-3xl bg-amber-50/60 border border-amber-200/80 space-y-3">
          <div className="flex items-center gap-2 text-amber-900">
            <AlertTriangle className="w-5 h-5 text-amber-600" />
            <h4 className="text-sm font-extrabold uppercase tracking-wide">
              {lang === 'or' ? 'ପୁନରାବୃତ୍ତି ଆବଶ୍ୟକ କରୁଥିବା ବିଷୟ (Revision Focus)' : 'Concepts Flagged for Revision'}
            </h4>
          </div>
          <p className="text-xs text-amber-950 font-medium">
            Concepts with missed questions queued for Odia explanation revision:
          </p>
          <div className="space-y-2 pt-1">
            {weakTopics.length > 0 ? (
              weakTopics.map((wt, idx) => (
                <div key={idx} className="p-3 rounded-2xl bg-white border border-amber-200 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-brand-navy block">{wt.topic}</span>
                    <span className="text-[11px] text-slate-500">{wt.subject || 'General'}</span>
                  </div>
                  <Link
                    to={`/tutor?q=${encodeURIComponent(`Explain ${wt.topic} in simple Odia step by step with easy examples`)}`}
                    className="px-3 py-1 rounded-xl bg-amber-100 text-amber-900 hover:bg-amber-200 font-bold text-[11px] transition-colors"
                  >
                    Revise with AI ➔
                  </Link>
                </div>
              ))
            ) : (
              <div className="p-4 rounded-2xl bg-white border border-slate-200 text-center text-xs text-slate-500">
                No weak topics flagged. Great job!
              </div>
            )}
          </div>
        </div>

      </div>

      {/* Parent Portal Banner Card */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-purple-900 via-brand-navy to-slate-900 text-white shadow-xl border border-purple-500/30 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-[11px] font-bold">
            <Users className="w-3.5 h-3.5" />
            <span>Parent Progress Tracking</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold">
            {lang === 'or' ? 'ଅଭିଭାବକଙ୍କ ପାଇଁ ସ୍ୱତନ୍ତ୍ର ରିପୋର୍ଟ କାର୍ଡ ଓ ହ୍ୱାଟ୍ସଆପ୍ ସେୟାର୍' : 'Dedicated Parent Portal & WhatsApp Progress Updates'}
          </h3>
          <p className="text-xs text-slate-300">
            {lang === 'or'
              ? 'ଅଭିଭାବକମାନେ ଛାତ୍ରଙ୍କ ସମ୍ପୂର୍ଣ୍ଣ ପ୍ରଗତି ଦେଖିପାରିବେ ଏବଂ ଏକ-କ୍ଲିକ୍‌ରେ ହ୍ୱାଟ୍ସଆପ୍ ବାର୍ତ୍ତା କିମ୍ବା ଇମେଲ୍ ପାଇପାରିବେ ।'
              : 'Parents can view official student report cards, track weak topics, and receive updates directly via WhatsApp or Email.'}
          </p>
        </div>

        <Link
          to="/parent-report"
          className="px-5 py-2.5 rounded-xl bg-brand-teal text-brand-navy text-xs font-extrabold hover:bg-brand-tealLight shrink-0 flex items-center gap-2 shadow-md transition-all hover:scale-105"
        >
          <span>Open Parent Portal</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

    </div>
  );
}
