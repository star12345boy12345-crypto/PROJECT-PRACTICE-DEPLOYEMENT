import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import {
  Bell,
  CheckCheck,
  X,
  Sparkles,
  Mail,
  HardDriveDownload,
  BrainCircuit,
  Award,
  CalendarCheck,
  ExternalLink,
  ChevronRight,
  Wifi,
  Trash2,
  CheckCircle2,
  Clock,
  BookOpen
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';
import { quizzesAPI, progressAPI, studyTasksAPI } from '../services/api';
import { getPendingSyncAttempts } from '../services/offlineStorage';

// Time formatting helper for both Odia and English
function formatTimeAgo(dateString, isOdia) {
  if (!dateString) return isOdia ? 'ଏହିମାତ୍ର' : 'Just now';
  const past = new Date(dateString).getTime();
  if (isNaN(past)) return isOdia ? 'ଏହିମାତ୍ର' : 'Just now';
  const diffSec = Math.max(0, Math.floor((Date.now() - past) / 1000));
  if (diffSec < 60) return isOdia ? 'ଏହିମାତ୍ର' : 'Just now';
  const diffMin = Math.floor(diffSec / 60);
  if (diffMin < 60) return isOdia ? `${diffMin} ମିନିଟ୍ ପୂର୍ବେ` : `${diffMin}m ago`;
  const diffHours = Math.floor(diffMin / 60);
  if (diffHours < 24) return isOdia ? `${diffHours} ଘଣ୍ଟା ପୂର୍ବେ` : `${diffHours}h ago`;
  const diffDays = Math.floor(diffHours / 24);
  return isOdia ? `${diffDays} ଦିନ ପୂର୍ବେ` : `${diffDays}d ago`;
}

export default function NotificationBell() {
  const { user, isOnline, syncStatus } = useAuth();
  const { lang } = useLanguage();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);
  const [coords, setCoords] = useState({ top: 68, right: 16 });
  const [filter, setFilter] = useState('all'); // 'all' | 'unread'
  const [loading, setLoading] = useState(false);
  const [notifications, setNotifications] = useState([]);

  const updatePosition = () => {
    if (dropdownRef.current) {
      const rect = dropdownRef.current.getBoundingClientRect();
      setCoords({
        top: Math.round(rect.bottom + 8),
        right: Math.max(12, Math.round(window.innerWidth - rect.right)),
      });
    }
  };

  const handleToggle = () => {
    if (!isOpen) {
      updatePosition();
    }
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (!isOpen) return;
    updatePosition();
    window.addEventListener('resize', updatePosition);
    window.addEventListener('scroll', updatePosition);
    return () => {
      window.removeEventListener('resize', updatePosition);
      window.removeEventListener('scroll', updatePosition);
    };
  }, [isOpen]);

  // Build Real-Time Notifications based on actual student session & database
  const buildRealNotifications = async () => {
    if (!user) {
      setNotifications([]);
      return;
    }

    setLoading(true);
    const notifs = [];

    // 1. REAL LIVE SESSION & ENROLLMENT NOTIFICATION
    notifs.push({
      id: `real-session-${user._id || 'user'}`,
      title: `Signed in as ${user.name}`,
      titleOdia: `${user.name} ହିସାବରେ ସକ୍ରିୟ ଲଗ୍-ଇନ୍`,
      message: `Enrolled in ${user.classLevel || 'Class 8'}${user.schoolName ? ` at ${user.schoolName}` : ''}. Preferred medium: ${user.preferredLanguage === 'or' ? 'ଓଡ଼ିଆ (Odia)' : 'English'}.`,
      messageOdia: `${user.classLevel || 'Class 8'}${user.schoolName ? `, ${user.schoolName}` : ''} ରେ ସଫଳତାର ସହ ଲଗ୍-ଇନ୍ ହୋଇଛି । ମାଧ୍ୟମ: ${user.preferredLanguage === 'or' ? 'ଓଡ଼ିଆ' : 'English'} ।`,
      category: 'Session Active',
      categoryOdia: 'ସକ୍ରିୟ ଅଧିବେଶନ',
      link: '/dashboard',
      time: 'Active now',
      timeOdia: 'ବର୍ତ୍ତମାନ ସକ୍ରିୟ',
      icon: Sparkles,
      color: 'teal',
      unread: true,
    });

    // 2. REAL PARENT EMAIL CONNECTIVITY NOTIFICATION
    if (user.parentEmail && user.parentEmail !== 'Not configured' && user.parentEmail.includes('@')) {
      notifs.push({
        id: `real-parent-${user.parentEmail}`,
        title: `Parent Report Card Alerts: Active`,
        titleOdia: `ଅଭିଭାବକ ପ୍ରଗତି ସୂଚନା: ସକ୍ରିୟ`,
        message: `Quiz performance & weekly report cards are automatically emailed to ${user.parentEmail}.`,
        messageOdia: `କୁଇଜ୍ ମାର୍କ ଓ ସାପ୍ତାହିକ ପ୍ରଗତି ପତ୍ର ${user.parentEmail} କୁ ସ୍ୱୟଂକ୍ରିୟ ଭାବେ ପ୍ରେରିତ ହେଉଛି ।`,
        category: 'Parent Connect',
        categoryOdia: 'ଅଭିଭାବକ ସଂଯୋଗ',
        link: '/parent-report',
        time: 'Live configured',
        timeOdia: 'ସଂଯୋଜିତ',
        icon: Mail,
        color: 'amber',
        unread: true,
      });
    } else {
      notifs.push({
        id: `real-parent-missing`,
        title: `Add Parent Email for Auto-Reports`,
        titleOdia: `ଅଭିଭାବକ ଇମେଲ୍ ଯୋଡ଼ନ୍ତୁ`,
        message: `No parent email configured yet. Add parent email in Profile to send automatic weekly report cards.`,
        messageOdia: `ଅଭିଭାବକଙ୍କୁ ସାପ୍ତାହିକ ପ୍ରଗତି ରିପୋର୍ଟ ପଠାଇବା ପାଇଁ ପ୍ରୋଫାଇଲ୍ ରେ ଇମେଲ୍ ଯୋଡନ୍ତୁ ।`,
        category: 'Parent Alert',
        categoryOdia: 'ଅଭିଭାବକ ସୂଚନା',
        link: '/profile',
        time: 'Action recommended',
        timeOdia: 'ଜରୁରୀ ପଦକ୍ଷେପ',
        icon: Mail,
        color: 'rose',
        unread: true,
      });
    }

    // 3. REAL QUIZ HISTORY (Fetch live from MongoDB if online, or local IndexedDB)
    try {
      let realAttempts = [];
      if (isOnline) {
        const histRes = await quizzesAPI.getHistory();
        realAttempts = histRes.data?.history || [];
      }
      if (realAttempts.length === 0) {
        const offAttempts = await getPendingSyncAttempts();
        realAttempts = offAttempts || [];
      }

      if (realAttempts.length > 0) {
        // Take up to 2 most recent real attempts
        realAttempts.slice(0, 2).forEach((att) => {
          const quizTitle = att.quiz?.title || 'State Curriculum Quiz';
          const quizTitleOdia = att.quiz?.titleOdia || att.quiz?.title || 'ପାଠ୍ୟକ୍ରମ କୁଇଜ୍';
          const isPassed = (att.percentage || 0) >= 70;

          notifs.push({
            id: `real-quiz-${att._id}`,
            title: `Quiz Result: ${quizTitle}`,
            titleOdia: `କୁଇଜ୍ ଫଳାଫଳ: ${quizTitleOdia}`,
            message: `Scored ${att.score}/${att.totalQuestions} (${att.percentage}%). ${isPassed ? 'Outstanding mastery achieved!' : 'Review suggested with AI Tutor.'}`,
            messageOdia: `ମାର୍କ: ${att.score}/${att.totalQuestions} (${att.percentage}%) । ${isPassed ? 'ଚମତ୍କାର ପ୍ରଦର୍ଶନ!' : 'ଏଆଇ ଶିକ୍ଷକଙ୍କ ସହ ପୁନରାବୃତ୍ତି କରନ୍ତୁ ।'}`,
            category: 'Quiz Update',
            categoryOdia: 'କୁଇଜ୍ ଫଳାଫଳ',
            link: `/quizzes/${att.quiz?._id || ''}`,
            time: formatTimeAgo(att.createdAt, false),
            timeOdia: formatTimeAgo(att.createdAt, true),
            icon: Award,
            color: isPassed ? 'emerald' : 'amber',
            unread: false,
          });
        });
      } else {
        notifs.push({
          id: `real-quiz-starter`,
          title: `${user.classLevel || 'Class 8'} Quizzes Ready`,
          titleOdia: `${user.classLevel || 'Class 8'} କୁଇଜ୍ ପ୍ରସ୍ତୁତ`,
          message: `Take your first interactive assessment in Science, Math, or English to unlock mastery badges.`,
          messageOdia: `ନୂଆ ବ୍ୟାଜ୍ ହାସଲ କରିବା ପାଇଁ ବିଜ୍ଞାନ, ଗଣିତ ବା ଇଂରାଜୀରେ ପ୍ରଥମ କୁଇଜ୍ ଆରମ୍ଭ କରନ୍ତୁ ।`,
          category: 'Assessment',
          categoryOdia: 'ପରୀକ୍ଷା',
          link: '/quizzes',
          time: 'Available now',
          timeOdia: 'ବର୍ତ୍ତମାନ ଉପଲବ୍ଧ',
          icon: Award,
          color: 'emerald',
          unread: true,
        });
      }
    } catch (err) {
      console.warn('Real quiz history fetch notice:', err.message);
    }

    // 4. REAL LEARNING PROGRESS & WEAK TOPICS (From API)
    try {
      if (isOnline) {
        const progRes = await progressAPI.getProgress();
        const prog = progRes.data?.progress;
        if (prog) {
          if (prog.weakTopics && prog.weakTopics.length > 0) {
            notifs.push({
              id: `real-weak-topics`,
              title: `AI Focus: ${prog.weakTopics.length} Topic(s) Identified`,
              titleOdia: `ଏଆଇ ଧ୍ୟାନ: ${prog.weakTopics.length}ଟି ବିଷୟ ଚିହ୍ନଟ`,
              message: `Vidyora AI recommends reviewing: ${prog.weakTopics.slice(0, 2).join(', ')}. Ask your AI Tutor.`,
              messageOdia: `ଏଆଇ ଶିକ୍ଷକ ପରାମର୍ଶ: ${prog.weakTopics.slice(0, 2).join(', ')} ବିଷୟରେ ସନ୍ଦେହ ଦୂର କରନ୍ତୁ ।`,
              category: 'AI Tutor',
              categoryOdia: 'ଏଆଇ ଶିକ୍ଷକ',
              link: '/tutor',
              time: 'AI Adaptive',
              timeOdia: 'ଏଆଇ ବିଶ୍ଳେଷଣ',
              icon: BrainCircuit,
              color: 'cyan',
              unread: true,
            });
          }

          if (prog.streakDays && prog.streakDays > 1) {
            notifs.push({
              id: `real-streak-${prog.streakDays}`,
              title: `${prog.streakDays}-Day Study Streak Active! 🔥`,
              titleOdia: `${prog.streakDays} ଦିନର ପାଠପଢା ଷ୍ଟ୍ରିକ୍ ସକ୍ରିୟ! 🔥`,
              message: `Great consistency! You have logged ${prog.activeMinutes || 30} minutes of learning.`,
              messageOdia: `ଉତ୍କୃଷ୍ଟ ନିରନ୍ତରତା! ଆପଣ ${prog.activeMinutes || 30} ମିନିଟ୍ ଅଧ୍ୟୟନ କରିଛନ୍ତି ।`,
              category: 'Milestone',
              categoryOdia: 'ସଫଳତା',
              link: '/dashboard',
              time: 'Consistency',
              timeOdia: 'ନିରନ୍ତରତା',
              icon: Sparkles,
              color: 'orange',
              unread: false,
            });
          }
        }
      }
    } catch (err) {
      console.warn('Real progress fetch notice:', err.message);
    }

    // 5. REAL OFFLINE SYNC STATUS
    if (syncStatus?.pendingCount > 0) {
      notifs.push({
        id: `real-offline-pending-${syncStatus.pendingCount}`,
        title: `${syncStatus.pendingCount} Offline Attempt(s) Pending Sync`,
        titleOdia: `${syncStatus.pendingCount} ଟି ଅଫଲାଇନ୍ ରେକର୍ଡ ସିଙ୍କ୍ ବାକି ଅଛି`,
        message: `Offline quiz results are safely saved in local IndexedDB. Connect to internet to sync to cloud.`,
        messageOdia: `ଅଫଲାଇନ୍ କୁଇଜ୍ ତଥ୍ୟ ଇଣ୍ଡେକ୍ସଡ୍-ଡିବି ରେ ସୁରକ୍ଷିତ ଅଛି । ଅନଲାଇନ୍ ହେଲେ ସ୍ୱୟଂକ୍ରିୟ ସିଙ୍କ୍ ହେବ ।`,
        category: 'Offline Sync',
        categoryOdia: 'ଅଫଲାଇନ୍ ସିଙ୍କ୍',
        link: '/offline-vault',
        time: 'IndexedDB',
        timeOdia: 'ସ୍ଥାନୀୟ ଡାଟା',
        icon: HardDriveDownload,
        color: 'amber',
        unread: true,
      });
    } else {
      notifs.push({
        id: `real-offline-vault-ready`,
        title: `Offline Vault Ready for Village Study`,
        titleOdia: `ଅଫଲାଇନ୍ ଭଲ୍ଟ ଅଧ୍ୟୟନ ପାଇଁ ପ୍ରସ୍ତୁତ`,
        message: `5 Foundational subjects & bilingual chapter quizzes preloaded into IndexedDB for zero-internet study.`,
        messageOdia: `୫ଟି ବିଷୟ ଓ ଦ୍ୱିଭାଷୀ କୁଇଜ୍ ଇଣ୍ଡେକ୍ସଡ୍-ଡିବି ରେ ସାଇତା ହୋଇଛି । ଇଣ୍ଟରନେଟ୍ ବିନା ୧୦୦% ଉପଲବ୍ଧ ।`,
        category: 'Zero-Internet',
        categoryOdia: 'ଶୂନ୍ୟ-ଇଣ୍ଟରନେଟ୍',
        link: '/offline-vault',
        time: '100% Offline',
        timeOdia: 'ଅଫଲାଇନ୍ ପ୍ରସ୍ତୁତ',
        icon: HardDriveDownload,
        color: 'teal',
        unread: false,
      });
    }

    // 6. REAL STUDY TASKS (Fetch from API if available)
    try {
      if (isOnline) {
        const tasksRes = await studyTasksAPI.getTasks();
        const tasks = tasksRes.data?.tasks || [];
        const pendingTasks = tasks.filter((t) => !t.completed);
        if (pendingTasks.length > 0) {
          notifs.push({
            id: `real-tasks-pending`,
            title: `${pendingTasks.length} Active Study Target(s)`,
            titleOdia: `${pendingTasks.length} ଟି ସକ୍ରିୟ ପାଠପଢା ଲକ୍ଷ୍ୟ`,
            message: `Top priority: "${pendingTasks[0].title}". Stay on schedule with your study plan.`,
            messageOdia: `ପ୍ରମୁଖ କାର୍ଯ୍ୟ: "${pendingTasks[0].title}" । ସାପ୍ତାହିକ ଲକ୍ଷ୍ୟ ପୂରଣ କରନ୍ତୁ ।`,
            category: 'Planner',
            categoryOdia: 'ଯୋଜନା',
            link: '/study-planner',
            time: 'Today',
            timeOdia: 'ଆଜି',
            icon: CalendarCheck,
            color: 'blue',
            unread: false,
          });
        }
      }
    } catch (err) {
      console.warn('Real tasks fetch notice:', err.message);
    }

    // Apply saved read states from localStorage
    try {
      const savedRead = JSON.parse(localStorage.getItem('vidyora_read_notifs') || '[]');
      const finalNotifs = notifs.map((n) => ({
        ...n,
        unread: !savedRead.includes(n.id) && n.unread,
      }));
      setNotifications(finalNotifs);
    } catch {
      setNotifications(notifs);
    } finally {
      setLoading(false);
    }
  };

  // Build real notifications on mount, when user changes, or when opened
  useEffect(() => {
    if (user) {
      buildRealNotifications();
    } else {
      setNotifications([]);
    }
  }, [user?._id, user?.name, user?.parentEmail, user?.classLevel, syncStatus?.pendingCount, isOnline]);

  // Re-fetch when dropdown is opened to guarantee the latest live data
  useEffect(() => {
    if (isOpen && user) {
      buildRealNotifications();
    }
  }, [isOpen]);

  // Close on outside click or Escape
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  // Strictly render nothing if user is not signed in
  if (!user) {
    return null;
  }

  const unreadCount = notifications.filter((n) => n.unread).length;

  const markAllAsRead = () => {
    const updated = notifications.map((n) => ({ ...n, unread: false }));
    setNotifications(updated);
    try {
      const allIds = updated.map((n) => n.id);
      localStorage.setItem('vidyora_read_notifs', JSON.stringify(allIds));
    } catch (e) {
      console.warn('Could not save read notifications:', e);
    }
  };

  const markAsRead = (id) => {
    const updated = notifications.map((n) => (n.id === id ? { ...n, unread: false } : n));
    setNotifications(updated);
    try {
      const readIds = updated.filter((n) => !n.unread).map((n) => n.id);
      localStorage.setItem('vidyora_read_notifs', JSON.stringify(readIds));
    } catch (e) {
      console.warn('Could not save read notification:', e);
    }
  };

  const handleNotificationClick = (item) => {
    markAsRead(item.id);
    setIsOpen(false);
    if (item.link) {
      navigate(item.link);
    }
  };

  const clearAll = () => {
    setNotifications([]);
  };

  const filteredNotifications = filter === 'unread'
    ? notifications.filter((n) => n.unread)
    : notifications;

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Bell Button */}
      <button
        onClick={handleToggle}
        aria-label="View notifications and platform updates"
        className={`relative p-2 rounded-xl transition-all duration-200 cursor-pointer flex items-center justify-center ${
          isOpen
            ? 'bg-brand-navy text-white shadow-md ring-2 ring-brand-teal/40'
            : 'bg-white hover:bg-slate-100 text-slate-700 hover:text-brand-navy border border-slate-200/90 shadow-2xs hover:border-brand-teal/40'
        }`}
        title={lang === 'or' ? 'ଅପଡେଟ୍ ଓ ସୂଚନା ଦେଖନ୍ତୁ' : 'Notifications & Updates'}
      >
        <Bell className={`w-4 h-4 transition-transform ${isOpen ? 'scale-110' : 'hover:rotate-12'}`} />

        {/* Unread Counter Badge */}
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 flex h-4 min-w-[16px] px-1 items-center justify-center rounded-full bg-rose-500 text-[9px] font-black text-white shadow-sm ring-2 ring-white animate-pulse">
            {unreadCount}
          </span>
        )}
      </button>

      {/* Dropdown Panel Rendered via Portal Directly into document.body to Prevent Any Stacking Overlaps */}
      {isOpen && typeof document !== 'undefined' && createPortal(
        <div className="fixed inset-0 pointer-events-auto" style={{ zIndex: 99999 }}>
          {/* Dimmed backdrop overlay: dims background page and closes on click */}
          <div
            className="fixed inset-0 bg-slate-900/45 backdrop-blur-xs transition-opacity"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          <div
            style={
              typeof window !== 'undefined' && window.innerWidth < 640
                ? {
                    position: 'fixed',
                    top: `${coords.top}px`,
                    left: '12px',
                    right: '12px',
                    width: 'auto',
                    maxHeight: 'calc(100vh - 85px)',
                    zIndex: 100000,
                  }
                : {
                    position: 'fixed',
                    top: `${coords.top}px`,
                    right: `${coords.right}px`,
                    width: '420px',
                    maxHeight: 'calc(100vh - 85px)',
                    zIndex: 100000,
                  }
            }
            className="rounded-2xl bg-white border border-slate-200 shadow-2xl overflow-hidden flex flex-col animate-in fade-in slide-in-from-top-2 duration-200"
          >
            
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-slate-900 via-brand-navy to-slate-900 text-white flex items-center justify-between">
              <div className="flex items-center gap-2 min-w-0">
                <div className="p-1.5 rounded-lg bg-brand-teal/20 text-brand-teal shrink-0">
                  <Bell className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-xs sm:text-sm font-extrabold flex items-center gap-2 truncate">
                    <span className="truncate">{lang === 'or' ? 'ସୂଚନା ଓ ତାଜା ଅପଡେଟ୍' : 'Real-Time Notifications'}</span>
                    {unreadCount > 0 && (
                      <span className="px-1.5 py-0.2 rounded-full bg-brand-orange text-brand-navy text-[10px] font-black shrink-0">
                        {unreadCount} {lang === 'or' ? 'ନୂଆ' : 'new'}
                      </span>
                    )}
                  </h3>
                  <p className="text-[10px] text-slate-300 truncate">
                    {user.name} • {user.classLevel || 'Class 8'}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1 shrink-0">
                {unreadCount > 0 && (
                  <button
                    onClick={markAllAsRead}
                    className="p-1.5 rounded-lg hover:bg-white/10 text-brand-teal hover:text-white text-[11px] font-bold flex items-center gap-1 transition-colors cursor-pointer"
                    title="Mark all as read"
                  >
                    <CheckCheck className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline text-[10px]">{lang === 'or' ? 'ସବୁ ପଢ଼ାହେଲା' : 'Mark read'}</span>
                  </button>
                )}
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
                  aria-label="Close notifications"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Filter Bar */}
            <div className="px-4 py-2 bg-slate-50 border-b border-slate-200/80 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setFilter('all')}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all cursor-pointer ${
                    filter === 'all'
                      ? 'bg-brand-navy text-white shadow-2xs'
                      : 'text-slate-600 hover:bg-slate-200/60'
                  }`}
                >
                  {lang === 'or' ? 'ସମସ୍ତ' : 'All'} ({notifications.length})
                </button>
                <button
                  onClick={() => setFilter('unread')}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all cursor-pointer ${
                    filter === 'unread'
                      ? 'bg-brand-navy text-white shadow-2xs'
                      : 'text-slate-600 hover:bg-slate-200/60'
                  }`}
                >
                  {lang === 'or' ? 'ନୂଆ' : 'Unread'} ({unreadCount})
                </button>
              </div>

              {notifications.length > 0 && (
                <button
                  onClick={clearAll}
                  className="text-[10px] text-slate-400 hover:text-rose-600 flex items-center gap-1 font-semibold transition-colors cursor-pointer"
                >
                  <Trash2 className="w-3 h-3" />
                  <span>{lang === 'or' ? 'ସଫା କରନ୍ତୁ' : 'Clear'}</span>
                </button>
              )}
            </div>

            {/* Notifications List - 100% Solid Opaque Background */}
            <div className="max-h-[380px] overflow-y-auto divide-y divide-slate-100 bg-white">
              {filteredNotifications.length > 0 ? (
                filteredNotifications.map((item) => {
                  const IconComponent = item.icon || Bell;
                  const categoryLabel = lang === 'or' ? (item.categoryOdia || item.category) : item.category;
                  const titleText = lang === 'or' ? (item.titleOdia || item.title) : item.title;
                  const messageText = lang === 'or' ? (item.messageOdia || item.message) : item.message;
                  const timeText = lang === 'or' ? (item.timeOdia || item.time) : item.time;

                  const colorStyles = {
                    amber: 'bg-amber-500/15 text-amber-700 border-amber-300',
                    teal: 'bg-teal-500/15 text-teal-700 border-teal-300',
                    cyan: 'bg-cyan-500/15 text-cyan-700 border-cyan-300',
                    emerald: 'bg-emerald-500/15 text-emerald-700 border-emerald-300',
                    blue: 'bg-blue-500/15 text-blue-700 border-blue-300',
                    rose: 'bg-rose-500/15 text-rose-700 border-rose-300',
                    orange: 'bg-orange-500/15 text-orange-700 border-orange-300',
                  }[item.color] || 'bg-slate-100 text-slate-700 border-slate-300';

                  return (
                    <div
                      key={item.id}
                      className={`p-3.5 transition-colors flex items-start gap-3 group relative ${
                        item.unread ? 'bg-teal-50/60 hover:bg-teal-50/90' : 'bg-white hover:bg-slate-50'
                      }`}
                    >
                      {/* Unread Accent Dot */}
                      {item.unread && (
                        <span className="absolute top-4 left-1.5 w-1.5 h-1.5 rounded-full bg-brand-teal" />
                      )}

                      {/* Icon Badge */}
                      <div className={`p-2 rounded-xl border shrink-0 mt-0.5 ${colorStyles}`}>
                        <IconComponent className="w-4 h-4" />
                      </div>

                      {/* Content */}
                      <div
                        className="flex-1 min-w-0 cursor-pointer"
                        onClick={() => handleNotificationClick(item)}
                      >
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 truncate max-w-[170px]">
                            {categoryLabel}
                          </span>
                          <span className="text-[10px] text-slate-400 font-medium shrink-0">
                            {timeText}
                          </span>
                        </div>

                        <h4 className={`text-xs font-bold leading-snug line-clamp-1 break-words ${
                          item.unread ? 'text-brand-navy' : 'text-slate-700'
                        }`}>
                          {titleText}
                        </h4>

                        <p className="text-[11px] text-slate-600 line-clamp-2 mt-0.5 leading-relaxed break-words">
                          {messageText}
                        </p>

                        {item.link && (
                          <div className="flex items-center gap-1 text-[10px] text-brand-teal font-bold mt-1.5 group-hover:translate-x-0.5 transition-transform">
                            <span>{lang === 'or' ? 'ଅଧିକ ଦେଖନ୍ତୁ' : 'View details'}</span>
                            <ChevronRight className="w-3 h-3" />
                          </div>
                        )}
                      </div>

                      {/* Mark single as read */}
                      {item.unread && (
                        <button
                          onClick={(e) => { e.stopPropagation(); markAsRead(item.id); }}
                          className="p-1 rounded-lg hover:bg-slate-200/80 text-slate-400 hover:text-brand-teal transition-colors shrink-0 cursor-pointer"
                          title="Mark as read"
                        >
                          <CheckCheck className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  );
                })
              ) : (
                <div className="p-8 text-center text-slate-400 bg-white">
                  <Bell className="w-8 h-8 mx-auto mb-2 opacity-30" />
                  <p className="text-xs font-semibold">
                    {lang === 'or' ? 'କୌଣସି ନୂଆ ସୂଚନା ନାହିଁ' : 'No notifications to display'}
                  </p>
                  <p className="text-[10px] text-slate-400 mt-1">
                    {lang === 'or' ? 'ଆପଣ ସମସ୍ତ ସୂଚନା ପଢ଼ି ସାରିଛନ୍ତି ।' : 'You are all caught up!'}
                  </p>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-3 bg-slate-50 border-t border-slate-200/80 text-center">
              <button
                onClick={() => { setIsOpen(false); navigate('/dashboard'); }}
                className="text-xs font-bold text-brand-teal hover:text-brand-navy transition-colors cursor-pointer"
              >
                {lang === 'or' ? 'ଡ୍ୟାସବୋର୍ଡ ଖୋଲନ୍ତୁ ➔' : 'Go to Learning Dashboard ➔'}
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}
