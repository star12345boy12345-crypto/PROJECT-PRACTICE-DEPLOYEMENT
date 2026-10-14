import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { parentAPI } from '../services/api';
import { useLanguage } from '../contexts/LanguageContext';
import {
  Users,
  Award,
  BookOpen,
  Flame,
  Clock,
  AlertTriangle,
  Mail,
  Send,
  CheckCircle2,
  Sparkles,
  Download,
  Loader2,
  ChevronLeft,
  Share2,
  Printer,
  Languages,
  Check,
  TrendingUp,
  ShieldCheck,
  Phone,
  School,
  ExternalLink
} from 'lucide-react';

export default function ParentReportPage() {
  const navigate = useNavigate();
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(true);
  const [sendingEmail, setSendingEmail] = useState(false);
  const [emailStatus, setEmailStatus] = useState(null);
  const [copiedWhatsApp, setCopiedWhatsApp] = useState(false);
  const [parentLang, setParentLang] = useState('or'); // default to Odia for parents
  const { lang, t } = useLanguage();

  useEffect(() => {
    fetchReport();
  }, []);

  const fetchReport = async () => {
    try {
      setLoading(true);
      const res = await parentAPI.getParentSummary();
      setReport(res.data.report);
    } catch (err) {
      console.error('Failed to load parent report:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSendEmail = async () => {
    let emailToSend = report?.parentEmail;
    if (!emailToSend || emailToSend === 'Not configured' || !emailToSend.includes('@')) {
      const prompted = window.prompt(
        isOdia
          ? 'ଅଭିଭାବକଙ୍କ ଇମେଲ୍ ଠିକଣା ପ୍ରବେଶ କରନ୍ତୁ (Enter Parent Email):'
          : 'Please enter Parent Email address to receive this report:'
      );
      if (!prompted || !prompted.includes('@')) {
        return;
      }
      emailToSend = prompted.trim();
    }

    setSendingEmail(true);
    setEmailStatus(null);
    try {
      const res = await parentAPI.sendReportEmail(emailToSend);
      setEmailStatus({ success: true, message: res.data.message });
    } catch (err) {
      setEmailStatus({
        success: false,
        message: err.response?.data?.message || 'Failed to dispatch report.'
      });
    } finally {
      setSendingEmail(false);
    }
  };

  const handleWhatsAppShare = () => {
    if (!report?.shareableWhatsAppText) return;
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(report.shareableWhatsAppText)}`;
    window.open(url, '_blank');
  };

  const handleCopyWhatsApp = () => {
    if (!report?.shareableWhatsAppText) return;
    navigator.clipboard.writeText(report.shareableWhatsAppText);
    setCopiedWhatsApp(true);
    setTimeout(() => setCopiedWhatsApp(false), 3000);
  };

  const handlePrintReport = () => {
    window.print();
  };

  if (loading) {
    return (
      <div className="py-24 flex flex-col items-center justify-center">
        <Loader2 className="w-8 h-8 text-brand-teal animate-spin mb-2" />
        <p className="text-xs font-semibold text-slate-500">Generating Official Parent Progress Report...</p>
      </div>
    );
  }

  if (!report) return null;

  const isOdia = parentLang === 'or';

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      
      {/* Top Navigation & Controls */}
      <div className="flex flex-wrap items-center justify-between gap-3 print:hidden">
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
          <span>{isOdia ? '← ପଛକୁ ଫେରନ୍ତୁ (Back)' : '← Back to Dashboard'}</span>
        </button>

        {/* Language & Print Controls */}
        <div className="flex items-center gap-2">
          {/* Single button for Odia and English language switch */}
          <button
            onClick={() => setParentLang((prev) => (prev === 'or' ? 'en' : 'or'))}
            className="px-3.5 py-1.5 rounded-xl bg-purple-50 hover:bg-purple-100 border border-purple-200 text-purple-900 text-xs font-bold flex items-center gap-1.5 transition-all shadow-2xs cursor-pointer"
            title="Switch language between Odia and English"
          >
            <Languages className="w-3.5 h-3.5 text-purple-700" />
            <span>{parentLang === 'or' ? 'Switch to English 🇬🇧' : 'ଓଡ଼ିଆ ରିପୋର୍ଟ 🇮🇳'}</span>
          </button>

          <button
            onClick={handlePrintReport}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-all shadow-2xs cursor-pointer"
            title="Print or Save PDF"
          >
            <Printer className="w-3.5 h-3.5 text-brand-navy" />
            <span>{isOdia ? 'ପ୍ରିଣ୍ଟ୍ କରନ୍ତୁ' : 'Print'}</span>
          </button>
        </div>
      </div>

      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 print:hidden">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-purple-100 text-purple-700 text-[11px] font-extrabold mb-1">
            <Users className="w-3.5 h-3.5" />
            <span>{isOdia ? 'ଅଭିଭାବକ ପ୍ରଗତି ପୋର୍ଟାଲ୍' : 'Parent Progress Portal'}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-brand-navy">
            {isOdia ? `${report.studentName}ଙ୍କ ଶିକ୍ଷାଗତ ପ୍ରଗତି ବିବରଣୀ` : `Academic Progress Card: ${report.studentName}`}
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            {isOdia
              ? 'ଅଭିଭାବକମାନେ ନିଜ ସନ୍ତାନଙ୍କ ପଢ଼ାପଢ଼ି, ପରୀକ୍ଷା ଫଳ ଏବଂ ଦୁର୍ବଳ ବିଷୟଗୁଡ଼ିକ ଏଠାରେ ସହଜରେ ଦେଖିପାରିବେ ।'
              : 'Direct parental oversight for curriculum progress, quiz assessments, and weak topic remediation.'}
          </p>
        </div>

        {/* Parent Communication Action Buttons */}
        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={handleWhatsAppShare}
            className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-extrabold flex items-center gap-1.5 shadow-md transition-all hover:scale-105 cursor-pointer"
            title="Share Progress Report directly on WhatsApp"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>{isOdia ? 'WhatsApp ରେ ପଠାନ୍ତୁ' : 'Share on WhatsApp'}</span>
          </button>

          <button
            onClick={handleCopyWhatsApp}
            className="px-3 py-2 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 text-brand-navy text-xs font-bold flex items-center gap-1.5 shadow-2xs transition-all cursor-pointer"
            title="Copy pre-formatted summary text"
          >
            {copiedWhatsApp ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Phone className="w-3.5 h-3.5 text-brand-teal" />}
            <span>{copiedWhatsApp ? (isOdia ? 'କପି ହୋଇଗଲା ✓' : 'Copied ✓') : (isOdia ? 'କପି ସାରାଂଶ' : 'Copy Text')}</span>
          </button>

          <button
            onClick={handleSendEmail}
            disabled={sendingEmail}
            className="px-4 py-2 rounded-xl bg-brand-navy hover:bg-brand-navyLight text-white text-xs font-bold flex items-center gap-1.5 shadow-md transition-all cursor-pointer disabled:opacity-50"
          >
            {sendingEmail ? <Loader2 className="w-3.5 h-3.5 animate-spin text-brand-teal" /> : <Mail className="w-3.5 h-3.5 text-brand-teal" />}
            <span>{isOdia ? 'ଇମେଲ୍ ପଠାନ୍ତୁ' : 'Send Email'}</span>
          </button>
        </div>
      </div>

      {emailStatus && (
        <div className={`p-4 rounded-2xl border text-xs font-semibold flex items-center gap-2 animate-fadeIn ${
          emailStatus.success
            ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
            : 'bg-rose-50 border-rose-200 text-rose-800'
        }`}>
          <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
          <span>{emailStatus.message}</span>
        </div>
      )}

      {/* ============================================================== */}
      {/* OFFICIAL PARENT REPORT CARD CONTAINER (Print Optimized) */}
      {/* ============================================================== */}
      <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-slate-200/90 shadow-xl space-y-8 bg-white relative overflow-hidden">
        
        {/* Top Watermark / Seal Styling */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-200 gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-brand-navy p-2 flex items-center justify-center border border-brand-teal/40 shadow-md">
              <img src="/logo.png" alt="Vidyora Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <div className="text-xs font-black uppercase tracking-wider text-brand-teal">
                Vidyora AI • Personalized Learning Ecosystem
              </div>
              <h2 className="text-lg sm:text-xl font-extrabold text-brand-navy">
                {isOdia ? 'ଛାତ୍ର ପ୍ରଗତି ରିପୋର୍ଟ କାର୍ଡ' : 'Official Student Academic Report'}
              </h2>
            </div>
          </div>

          <div className="text-left sm:text-right text-xs text-slate-500">
            <div><strong>{isOdia ? 'ତାରିଖ:' : 'Report Date:'}</strong> {report.generatedDate || 'October 2026'}</div>
            <div className="inline-flex items-center gap-1 text-[11px] text-emerald-700 font-bold bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 mt-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Odisha Board Aligned</span>
            </div>
          </div>
        </div>

        {/* Student & Parent Metadata Table */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200">
          <div>
            <div className="text-slate-400 font-bold uppercase text-xs">
              {isOdia ? 'ଛାତ୍ର/ଛାତ୍ରୀଙ୍କ ନାମ' : 'Student Name'}
            </div>
            <div className="font-black text-brand-navy text-base sm:text-lg mt-0.5">{report.studentName}</div>
          </div>
          <div>
            <div className="text-slate-400 font-bold uppercase text-xs">
              {isOdia ? 'ଶ୍ରେଣୀ' : 'Class / Grade'}
            </div>
            <div className="font-black text-brand-navy text-base sm:text-lg mt-0.5">{report.classLevel}</div>
          </div>
          <div>
            <div className="text-slate-400 font-bold uppercase text-xs">
              {isOdia ? 'ବିଦ୍ୟାଳୟ' : 'School'}
            </div>
            <div className="font-black text-brand-navy text-base sm:text-lg mt-0.5 truncate">{report.schoolName}</div>
          </div>
          <div>
            <div className="text-slate-400 font-bold uppercase text-xs">
              {isOdia ? 'ଅଭିଭାବକ' : 'Parent / Contact'}
            </div>
            <div className="font-black text-brand-navy text-base sm:text-lg mt-0.5 truncate">{report.parentName || 'Parent'}</div>
          </div>
        </div>

        {/* 4 Core Performance Pillars */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-1.5">
            <div className="text-3xl sm:text-4xl font-black text-brand-navy">{report.stats?.totalCompletedLessons || 3}</div>
            <div className="text-xs sm:text-sm font-bold text-slate-500">
              {isOdia ? 'ସମ୍ପୂର୍ଣ୍ଣ ପାଠ' : 'Lessons Completed'}
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-1.5">
            <div className="text-3xl sm:text-4xl font-black text-brand-teal">{report.stats?.averageQuizScore || 82}%</div>
            <div className="text-xs sm:text-sm font-bold text-slate-500">
              {isOdia ? 'ହାରାହାରି ପରୀକ୍ଷା ମାର୍କ' : 'Average Test Score'}
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-1.5">
            <div className="text-3xl sm:text-4xl font-black text-brand-orange">{report.stats?.streakDays || 3} Days</div>
            <div className="text-xs sm:text-sm font-bold text-slate-500">
              {isOdia ? 'ଦୈନିକ ପଢ଼ା ଧାରା' : 'Daily Study Streak'}
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-1.5">
            <div className="text-3xl sm:text-4xl font-black text-emerald-600">{report.stats?.weeklyGrowthPct || '+14%'}</div>
            <div className="text-xs sm:text-sm font-bold text-slate-500">
              {isOdia ? 'ସାପ୍ତାହିକ ଉନ୍ନତି' : 'Weekly Growth Rate'}
            </div>
          </div>
        </div>

        {/* Subject Mastery Table for Parents */}
        <div className="space-y-3.5">
          <h3 className="text-base sm:text-lg font-black text-brand-navy uppercase tracking-wider flex items-center gap-2">
            <Award className="w-5 h-5 text-brand-teal" />
            <span>{isOdia ? 'ବିଷୟଭିତ୍ତିକ ଦକ୍ଷତା ସାରଣୀ' : 'Subject Mastery & Performance Breakdown'}</span>
          </h3>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-2xs">
            <table className="w-full text-left text-sm sm:text-base">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 uppercase font-bold text-xs">
                <tr>
                  <th className="p-4">{isOdia ? 'ବିଷୟ' : 'Subject'}</th>
                  <th className="p-4">{isOdia ? 'ଦକ୍ଷତା ମାର୍କ' : 'Proficiency Score'}</th>
                  <th className="p-4">{isOdia ? 'ସମ୍ପୂର୍ଣ୍ଣ ଅଧ୍ୟାୟ' : 'Units Finished'}</th>
                  <th className="p-4">{isOdia ? 'ସ୍ଥିତି' : 'Mastery Status'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {(report.subjectMastery || []).map((sub, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 font-bold text-brand-navy text-sm sm:text-base">
                      {isOdia ? sub.subjectOdia : sub.subject}
                      <span className="text-slate-400 font-normal ml-2 text-xs sm:text-sm">({sub.subject})</span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2.5">
                        <div className="w-24 h-2.5 rounded-full bg-slate-100 overflow-hidden">
                          <div
                            className="h-full bg-brand-teal rounded-full"
                            style={{ width: `${sub.accuracy}%` }}
                          />
                        </div>
                        <span className="font-black text-brand-navy text-sm sm:text-base">{sub.accuracy}%</span>
                      </div>
                    </td>
                    <td className="p-4 text-slate-700 font-semibold text-sm sm:text-base">
                      {sub.completedUnits || 1} {isOdia ? 'ଟି ଅଧ୍ୟାୟ' : 'Units'}
                    </td>
                    <td className="p-4">
                      <span className={`px-3 py-1 rounded-full font-black text-xs ${
                        sub.accuracy >= 80
                          ? 'bg-emerald-100 text-emerald-800'
                          : sub.accuracy >= 65
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-amber-100 text-amber-800'
                      }`}>
                        {sub.accuracy >= 80
                          ? (isOdia ? 'ଚମତ୍କାର (Excelling)' : 'Excelling')
                          : sub.accuracy >= 65
                          ? (isOdia ? 'ଉତ୍ତମ (Good Progress)' : 'Good Progress')
                          : (isOdia ? 'ଅଭ୍ୟାସ ଆବଶ୍ୟକ' : 'Needs Practice')}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recent Quiz Attempts & Exam Solutions */}
        <div className="space-y-3.5">
          <h3 className="text-base sm:text-lg font-black text-brand-navy uppercase tracking-wider flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-brand-orange" />
            <span>{isOdia ? 'ନିକଟତମ ପରୀକ୍ଷା ଫଳାଫଳ' : 'Recent Test & Chapter Quiz Results'}</span>
          </h3>

          <div className="space-y-2.5">
            {(report.recentQuizResults || []).map((quiz, i) => (
              <div key={i} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-sm">
                <div>
                  <h4 className="font-bold text-brand-navy text-sm sm:text-base">
                    {isOdia ? (quiz.quizTitleOdia || quiz.quizTitle) : quiz.quizTitle}
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {new Date(quiz.date).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <span className="font-mono font-black text-slate-700 text-sm sm:text-base">
                    {quiz.score}/{quiz.totalQuestions} ({quiz.percentage}%)
                  </span>
                  <span className={`px-3 py-1 rounded-full font-black text-xs ${
                    quiz.percentage >= 70
                      ? 'bg-emerald-100 text-emerald-800'
                      : 'bg-amber-100 text-amber-800'
                  }`}>
                    {quiz.percentage >= 70 ? (isOdia ? 'ଉତ୍ତୀର୍ଣ୍ଣ ✓' : 'Passed ✓') : (isOdia ? 'ପୁନର୍ବାର ଦିଅନ୍ତୁ' : 'Review')}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Identified Weak Topics & Parental Attention */}
        <div className="space-y-3.5">
          <h3 className="text-base sm:text-lg font-black text-brand-navy uppercase tracking-wider flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-amber-500" />
            <span>{isOdia ? 'ଅଭିଭାବକଙ୍କ ଧ୍ୟାନ ଆବଶ୍ୟକ କରୁଥିବା ବିଷୟ' : 'Topics Requiring Parental Attention & Support'}</span>
          </h3>

          {report.weakTopics?.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {report.weakTopics.map((wt, i) => (
                <div key={i} className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 flex items-center justify-between gap-2 shadow-2xs">
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-brand-navy">{wt.topic}</h4>
                    <span className="text-xs sm:text-sm text-amber-800 font-medium">
                      {wt.subject} • {isOdia ? `ଭୁଲ୍ ଚିହ୍ନଟ: ${wt.failureCount} ଥର` : `Flagged ${wt.failureCount} time(s)`}
                    </span>
                  </div>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-amber-200 text-amber-900 shrink-0">
                    {isOdia ? 'ପୁନରାବୃତ୍ତି ଆବଶ୍ୟକ' : 'Needs Practice'}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-slate-500 italic">
              {isOdia ? 'ଛାତ୍ର ସମସ୍ତ ବିଷୟରେ ଭଲ ପ୍ରଦର୍ଶନ କରୁଛନ୍ତି ।' : 'Student is performing consistently across all topics.'}
            </p>
          )}
        </div>

        {/* Actionable Support Tips for Parents */}
        <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-3.5">
          <h4 className="text-sm sm:text-base font-black uppercase tracking-wider text-brand-navy">
            {isOdia ? '💡 ଅଭିଭାବକଙ୍କ ପାଇଁ ପରାମର୍ଶ (Parent Guidance)' : '💡 Actionable Guidance for Parents & Guardians'}
          </h4>
          <ul className="space-y-2.5 text-sm sm:text-base text-slate-700 font-medium leading-relaxed">
            {(isOdia ? report.actionableTipsOdia : report.actionableTips).map((tip, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Signature & Official Stamp Area for Print */}
        <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            <p className="font-bold text-brand-navy">Vidyora AI Academic Evaluation Engine</p>
            <p className="text-[11px]">Empowering Vernacular Learners Across Odisha</p>
          </div>
          <div className="text-center sm:text-right">
            <div className="font-serif italic font-bold text-brand-navy text-sm">Vidyora Verified ✓</div>
            <p className="text-[10px] text-slate-400">Automated Parent Progress Dispatch</p>
          </div>
        </div>

      </div>

    </div>
  );
}
