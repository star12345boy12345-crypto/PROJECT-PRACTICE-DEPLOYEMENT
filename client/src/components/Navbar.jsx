import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';
import NotificationBell from './NotificationBell';
import {
  Sparkles,
  BookOpen,
  BrainCircuit,
  Camera,
  Award,
  BarChart3,
  HardDriveDownload,
  Users,
  LogOut,
  LogIn,
  Globe,
  Wifi,
  WifiOff,
  Menu,
  X,
  CalendarCheck,
  ChevronLeft,
  ChevronRight,
  User,
  LayoutDashboard
} from 'lucide-react';

export default function Navbar() {
  const { user, logout, isOnline, syncStatus, triggerOfflineSync } = useAuth();
  const { lang, toggleLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftPos, setScrollLeftPos] = useState(0);
  const hasDragged = useRef(false);

  // Sync with global custom event (e.g., from MobileBottomNav Menu trigger)
  useEffect(() => {
    const handleToggle = () => setMobileMenuOpen((prev) => !prev);
    const handleOpen = () => setMobileMenuOpen(true);
    const handleClose = () => setMobileMenuOpen(false);

    window.addEventListener('vidyora-toggle-menu', handleToggle);
    window.addEventListener('vidyora-open-menu', handleOpen);
    window.addEventListener('vidyora-close-menu', handleClose);

    return () => {
      window.removeEventListener('vidyora-toggle-menu', handleToggle);
      window.removeEventListener('vidyora-open-menu', handleOpen);
      window.removeEventListener('vidyora-close-menu', handleClose);
    };
  }, []);

  // Lock body scroll when mobile hamburger drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const checkScroll = () => {
    if (navRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = navRef.current;
      setCanScrollLeft(scrollLeft > 6);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 6);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scrollNav = (direction) => {
    if (navRef.current) {
      const amount = direction === 'left' ? -260 : 260;
      navRef.current.scrollBy({ left: amount, behavior: 'smooth' });
      setTimeout(checkScroll, 280);
    }
  };

  const handleWheel = (e) => {
    if (navRef.current && e.deltaY !== 0) {
      navRef.current.scrollLeft += e.deltaY * 0.9;
      checkScroll();
    }
  };

  // Mouse Drag-To-Scroll handlers
  const handleMouseDown = (e) => {
    if (!navRef.current) return;
    setIsDragging(true);
    hasDragged.current = false;
    setStartX(e.pageX - navRef.current.offsetLeft);
    setScrollLeftPos(navRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !navRef.current) return;
    e.preventDefault();
    hasDragged.current = true;
    const x = e.pageX - navRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    navRef.current.scrollLeft = scrollLeftPos - walk;
    checkScroll();
  };

  const handleLogout = () => {
    setMobileMenuOpen(false);
    logout();
    navigate('/');
  };

  const handleNavClick = (e, link) => {
    if (hasDragged.current) {
      e.preventDefault();
      return;
    }
    setMobileMenuOpen(false);

    if (link.path.startsWith('/#')) {
      e.preventDefault();
      const targetId = link.path.replace('/#', '');
      if (location.pathname === '/') {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          window.history.pushState(null, '', `/#${targetId}`);
        }
      } else {
        navigate(`/#${targetId}`);
      }
    } else if (link.path === '/') {
      if (location.pathname === '/') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        window.history.pushState(null, '', '/');
      } else {
        navigate('/');
      }
    }
  };

  const navLinks = user
    ? [
        {
          name: t('nav.dashboard'),
          path: '/dashboard',
          icon: LayoutDashboard,
          desc: lang === 'or' ? 'ଶିକ୍ଷା କେନ୍ଦ୍ର ଓ ଦୈନିକ ବିବରଣୀ' : 'Learning Hub & Daily Overview',
          category: 'main'
        },
        {
          name: t('nav.aiTutor'),
          path: '/tutor',
          icon: BrainCircuit,
          badge: 'Agent',
          desc: lang === 'or' ? '୨୪/୭ ବ୍ୟକ୍ତିଗତ ଏଆଇ ଶିକ୍ଷକ' : 'Personal 24/7 Agentic Tutor',
          category: 'main'
        },
        {
          name: t('nav.scanner'),
          path: '/scanner',
          icon: Camera,
          badge: 'Vision',
          badgeColor: 'teal',
          desc: lang === 'or' ? 'ପାଠ୍ୟପୁସ୍ତକ ସ୍କାନର୍ ଓ ଡାୟାଗ୍ରାମ୍' : 'Textbook Vision & Diagram Studio',
          category: 'main'
        },
        {
          name: t('nav.subjects'),
          path: '/subjects',
          icon: BookOpen,
          desc: lang === 'or' ? 'ସମସ୍ତ ପାଠ୍ୟକ୍ରମ ବିଷୟ ଓ ଅଧ୍ୟାୟ' : 'All Curricular Subjects & Lessons',
          category: 'main'
        },
        {
          name: t('nav.quizzes'),
          path: '/quizzes',
          icon: Award,
          desc: lang === 'or' ? 'ସ୍ମାର୍ଟ ଅନୁକୂଳ ପରୀକ୍ଷା ଓ ଅଭ୍ୟାସ' : 'Adaptive Quizzes & Exam Prep',
          category: 'main'
        },
        {
          name: t('nav.progress'),
          path: '/progress',
          icon: BarChart3,
          desc: lang === 'or' ? 'ଦୁର୍ବଳ ବିଷୟ ଓ ଅଗ୍ରଗତି ବିଶ୍ଳେଷଣ' : 'Weak Topics & Performance Analytics',
          category: 'analytics'
        },
        {
          name: t('nav.studyPlanner'),
          path: '/study-planner',
          icon: CalendarCheck,
          desc: lang === 'or' ? 'ସ୍ମାର୍ଟ ଦୈନିକ ରୁଟିନ୍ ଓ ଯୋଜନା' : 'Smart Daily Schedules & Tasks',
          category: 'analytics'
        },
        {
          name: t('nav.offlineLessons'),
          path: '/offline-vault',
          icon: HardDriveDownload,
          count: syncStatus.pendingCount,
          desc: lang === 'or' ? 'ବିନା ଇଣ୍ଟରନେଟ୍ ପାଠ ସଂଗ୍ରହ' : 'Zero-Internet Offline Lessons',
          category: 'analytics'
        },
        {
          name: t('nav.parentSummary'),
          path: '/parent-report',
          icon: Users,
          desc: lang === 'or' ? 'ଅଭିଭାବକ ସାପ୍ତାହିକ ରିପୋର୍ଟ' : 'Parent Weekly Insights & Portal',
          category: 'analytics'
        },
      ]
    : [
        { name: t('nav.home'), path: '/', icon: BookOpen, desc: lang === 'or' ? 'ମୁଖ୍ୟ ପୃଷ୍ଠା' : 'Welcome to Vidyora AI' },
        { name: t('nav.features'), path: '/#features', desc: lang === 'or' ? 'ମୁଖ୍ୟ ବୈଶିଷ୍ଟ୍ୟ' : 'Platform Capabilities' },
        { name: t('nav.howItWorks'), path: '/#how-it-works', desc: lang === 'or' ? 'କିପରି କାମ କରେ' : 'The 4-Step Cycle' },
        { name: t('nav.offlineLessons'), path: '/offline-vault', icon: HardDriveDownload, desc: lang === 'or' ? 'ଅଫଲାଇନ୍ ଭଲ୍ଟ' : 'Zero-Internet Vault' },
        { name: t('nav.about'), path: '/#about', desc: lang === 'or' ? 'ଆମ ଲକ୍ଷ୍ୟ' : 'Our Mission' },
      ];

  const isActive = (path) => {
    if (path.startsWith('/#')) {
      return location.pathname === '/' && location.hash === path.replace('/', '');
    }
    return location.pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-slate-200/90 shadow-xs transition-all duration-300">
      
      {/* TIER 1: TOP HEADER BAR (Logo, Search, Online/Offline, Notification, Language, Profile/Auth) */}
      <div className="relative z-50 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
        <div className="w-full max-w-[1750px] mx-auto px-2 sm:px-4">
          <div className="flex items-center justify-between h-14 sm:h-16 gap-2 sm:gap-3">
            
            {/* Logo Section */}
            <div className="shrink-0 flex items-center pr-2 sm:pr-3">
              <Link
                to={user ? "/dashboard" : "/"}
                className="flex items-center gap-2 group py-1 cursor-pointer"
                title="Vidyora AI — Learn in Your Language"
              >
                <div className="relative rounded-xl bg-brand-navy p-1 shadow-xs border border-brand-teal/40 group-hover:scale-105 group-hover:border-brand-teal transition-all flex items-center justify-center overflow-hidden shrink-0 h-9 w-9 sm:h-11 sm:w-11">
                  <img
                    src="/logo.png"
                    alt="VIDYORA-AI"
                    className="h-full w-full object-contain rounded-lg drop-shadow-2xs"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-1">
                    <span className="font-black text-base sm:text-xl tracking-tight text-brand-navy group-hover:text-brand-teal transition-colors leading-none">
                      Vidyora<span className="text-brand-teal">.ai</span>
                    </span>
                    <span className="hidden xs:inline-block text-[8px] uppercase font-black tracking-wider px-1 py-0.2 rounded bg-brand-orange/15 text-brand-orange border border-brand-orange/30">
                      NEXTECH 2.0
                    </span>
                  </div>
                  <p className="text-[9px] sm:text-[10px] font-bold text-slate-500 mt-0.5 leading-none">
                    {lang === 'or' ? 'ଓଡ଼ିଆ ଏଆଇ ଶିକ୍ଷଣ' : 'Agentic AI Platform'}
                  </p>
                </div>
              </Link>
            </div>

            {/* Right Utilities: Online/Offline, Notification, Language, Profile/Auth */}
            <div className="shrink-0 flex items-center gap-1.5 sm:gap-2">
              
              {/* Online / Offline Status Badge */}
              <div
                className={`flex px-2 py-1 rounded-xl text-[11px] font-bold items-center gap-1.5 border shadow-2xs shrink-0 ${
                  isOnline
                    ? 'bg-emerald-50 text-emerald-700 border-emerald-200/80'
                    : 'bg-amber-50 text-amber-700 border-amber-200/80 animate-pulse'
                }`}
                title={isOnline ? 'Online - Cloud AI Connected' : 'Offline - Running via IndexedDB Vault'}
              >
                <span className={`w-2 h-2 rounded-full shrink-0 ${isOnline ? 'bg-emerald-500' : 'bg-amber-500 animate-ping'}`} />
                <span className="hidden sm:inline">{isOnline ? 'Online' : 'Offline'}</span>
              </div>

              {/* Notification Bell Dropdown */}
              {user && <NotificationBell />}

              {/* Language Switcher */}
              <button
                onClick={toggleLanguage}
                className="px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-xl text-xs font-bold border border-slate-200 bg-white hover:bg-slate-50 text-brand-navy shadow-2xs flex items-center gap-1 sm:gap-1.5 transition-all hover:border-brand-teal/50 cursor-pointer"
                title="Switch language between English & Odia"
              >
                <Globe className="w-3.5 h-3.5 text-brand-teal shrink-0" />
                <span className="text-[11px] sm:text-xs font-bold">{lang === 'en' ? 'ଓଡ଼ିଆ' : 'English'}</span>
              </button>

              {/* Profile / Auth Section */}
              {user ? (
                <div className="flex items-center gap-1.5">
                  <Link
                    to="/profile"
                    className="flex items-center gap-1.5 px-2 py-1 sm:px-2.5 sm:py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200/80 text-brand-navy text-xs font-bold transition-colors"
                    title={`Profile: ${user.name}`}
                  >
                    <div className="w-6 h-6 rounded-full bg-brand-teal text-white flex items-center justify-center text-[11px] font-black shrink-0">
                      {user.name?.charAt(0) || 'S'}
                    </div>
                    <span className="hidden xl:inline max-w-[85px] truncate">{user.name.split(' ')[0]}</span>
                  </Link>

                  <button
                    onClick={handleLogout}
                    className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-extrabold transition-all shadow-2xs cursor-pointer active:scale-95 shrink-0"
                    title="Sign Out of Vidyora AI"
                  >
                    <LogOut className="w-3.5 h-3.5 shrink-0" />
                    <span className="hidden md:inline">{lang === 'or' ? 'ଲଗ୍-ଆଉଟ୍' : 'Log Out'}</span>
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-1 sm:gap-1.5">
                  <Link
                    to="/login"
                    className="px-2.5 py-1 rounded-xl text-xs font-bold text-brand-navy hover:bg-slate-100 transition-colors"
                  >
                    {t('nav.login')}
                  </Link>
                  <Link
                    to="/register"
                    className="px-3 py-1 rounded-xl text-xs font-extrabold bg-brand-navy text-white hover:bg-brand-navyLight shadow-2xs transition-transform"
                  >
                    {t('nav.register')}
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* TIER 2: SUB-NAVIGATION BAR (Visible on webview / desktop, completely hidden on phone view) */}
      <div className="relative z-10 hidden md:block w-full bg-slate-50/95 sm:bg-slate-100/80 border-b border-slate-200 shadow-2xs">
        <div className="w-full max-w-[1750px] mx-auto px-2 sm:px-4">
          <div className="flex items-center h-10 sm:h-11 gap-1.5 sm:gap-2">
            
            {/* Scrollable Channel Container with Chevrons and Visible Scroller */}
            <div className="flex items-center flex-1 min-w-0 relative">
              
              {/* Left Scroll Chevron */}
              {canScrollLeft && (
                <button
                  onClick={() => scrollNav('left')}
                  aria-label="Scroll navigation left"
                  className="absolute left-0 z-20 p-1 rounded-full bg-white text-brand-navy shadow-md border border-slate-200 hover:bg-brand-teal hover:text-white transition-all cursor-pointer -translate-x-1"
                  title="Scroll left"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>
              )}

              {/* Horizontally Scrollable Nav Items */}
              <nav
                ref={navRef}
                onScroll={checkScroll}
                onWheel={handleWheel}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                className="flex items-center gap-1 sm:gap-1.5 nav-horizontal-scroller scroll-smooth w-full py-1 px-1 select-none cursor-grab active:cursor-grabbing pb-1.5"
              >
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  const active = isActive(link.path);
                  const isAiTutor = link.path === '/tutor';

                  return (
                    <Link
                      key={link.name}
                      to={link.path}
                      onClick={(e) => handleNavClick(e, link)}
                      title={link.name}
                      className={`px-2.5 sm:px-3 py-1 rounded-lg text-xs font-bold flex items-center gap-1.5 whitespace-nowrap shrink-0 transition-all duration-200 cursor-pointer ${
                        active
                          ? 'bg-brand-navy text-white shadow-xs ring-1 ring-brand-teal/40 font-extrabold'
                          : isAiTutor
                          ? 'bg-white hover:bg-brand-teal/10 text-brand-navy border border-brand-teal/40 shadow-2xs font-extrabold'
                          : 'text-slate-700 hover:bg-slate-200/90 hover:text-brand-navy'
                      }`}
                    >
                      {Icon && (
                        <Icon
                          className={`w-3.5 h-3.5 ${
                            active
                              ? 'text-brand-teal'
                              : isAiTutor
                              ? 'text-brand-teal animate-pulse'
                              : 'text-slate-500'
                          } shrink-0`}
                        />
                      )}
                      <span>{link.name}</span>
                      {link.badge && (
                        <span
                          className={`text-[8px] font-black px-1.5 py-0.2 rounded uppercase tracking-tight ${
                            active
                              ? 'bg-brand-teal/20 text-brand-teal'
                              : link.badgeColor === 'teal'
                              ? 'bg-teal-500/15 text-teal-700'
                              : 'bg-brand-teal/20 text-brand-teal'
                          }`}
                        >
                          {link.badge}
                        </span>
                      )}
                      {link.count > 0 && (
                        <span className="text-[9px] font-black px-1.5 py-0.2 rounded-full bg-rose-500 text-white animate-pulse">
                          {link.count}
                        </span>
                      )}
                    </Link>
                  );
                })}
              </nav>

              {/* Right Scroll Chevron */}
              {canScrollRight && (
                <button
                  onClick={() => scrollNav('right')}
                  aria-label="Scroll navigation right"
                  className="absolute right-0 z-20 p-1 rounded-full bg-white text-brand-navy shadow-md border border-slate-200 hover:bg-brand-teal hover:text-white transition-all cursor-pointer translate-x-1"
                  title="Scroll right"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Slide-in Drawer Sheet - Rendered into document.body to avoid header backdrop-filter containing block issues */}
      {mobileMenuOpen && createPortal(
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop with Blur */}
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Slide-in Drawer Panel */}
          <div className="fixed top-0 right-0 bottom-0 w-[86vw] max-w-[360px] bg-white shadow-2xl flex flex-col justify-between overflow-hidden z-10 transition-transform duration-300">
            
            {/* Drawer Top Header */}
            <div className="p-4 bg-gradient-to-r from-brand-navy via-brand-navyLight to-slate-900 text-white flex items-center justify-between border-b border-brand-teal/20">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-brand-navy border border-brand-teal/40 flex items-center justify-center p-0.5 shadow-sm">
                  <img src="/logo.png" alt="Vidyora" className="w-full h-full object-contain rounded-lg" />
                </div>
                <div>
                  <h3 className="text-sm font-black text-white leading-none">
                    Vidyora<span className="text-brand-teal">.ai</span>
                  </h3>
                  <p className="text-[10px] text-brand-teal font-semibold mt-0.5">
                    {lang === 'or' ? 'ଓଡ଼ିଆ ଏଆଇ ଶିକ୍ଷଣ ପ୍ଲାଟଫର୍ମ' : 'Vernacular Learning Companion'}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Student Profile Card (if logged in) */}
            {user && (
              <div className="px-4 py-3 bg-slate-50 border-b border-slate-200/80 flex items-center justify-between">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-10 h-10 rounded-2xl bg-brand-teal text-white flex items-center justify-center text-sm font-black shadow-xs shrink-0">
                    {user.name?.charAt(0) || 'S'}
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-black text-brand-navy truncate">
                      {user.name}
                    </p>
                    <span className="inline-block text-[10px] font-bold text-brand-teal">
                      {user.classLevel || 'Class 8'} • Odisha State Board
                    </span>
                  </div>
                </div>

                <Link
                  to="/profile"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-white text-brand-navy hover:text-brand-teal border border-slate-200 shadow-2xs shrink-0"
                >
                  {lang === 'or' ? 'ପ୍ରୋଫାଇଲ୍' : 'Profile'}
                </Link>
              </div>
            )}

            {/* Scrollable Navigation Options List (Contains Dashboard & All Horizontal Scrollable Items) */}
            <div className="flex-1 overflow-y-auto p-3 space-y-4">
              
              {/* Category: Main Learning Options */}
              <div className="space-y-1">
                <p className="text-[10px] font-black uppercase tracking-wider text-slate-400 px-2 pb-1 flex items-center justify-between">
                  <span>{lang === 'or' ? 'ମୁଖ୍ୟ ଶିକ୍ଷଣ ବିକଳ୍ପ' : 'Main Learning Options'}</span>
                  <span className="text-[9px] font-bold text-brand-teal">Vidyora Suite</span>
                </p>

                {navLinks.slice(0, 5).map((link) => {
                  const Icon = link.icon;
                  const active = isActive(link.path);

                  return (
                    <Link
                      key={link.name}
                      to={link.path}
                      onClick={(e) => handleNavClick(e, link)}
                      className={`flex items-center gap-3 p-2.5 rounded-2xl transition-all cursor-pointer ${
                        active
                          ? 'bg-brand-navy text-white shadow-md ring-1 ring-brand-teal/40'
                          : 'text-slate-700 hover:bg-slate-100 hover:text-brand-navy'
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                        active ? 'bg-brand-teal text-brand-navy' : 'bg-slate-100 text-brand-teal'
                      }`}>
                        {Icon && <Icon className="w-4 h-4" />}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5">
                          <p className={`text-xs font-bold leading-tight ${active ? 'text-white' : 'text-brand-navy'}`}>
                            {link.name}
                          </p>
                          {link.badge && (
                            <span className={`text-[8px] font-black px-1.5 py-0.2 rounded uppercase ${
                              active ? 'bg-brand-teal/20 text-brand-teal' : 'bg-teal-500/10 text-teal-600'
                            }`}>
                              {link.badge}
                            </span>
                          )}
                          {link.count > 0 && (
                            <span className="text-[9px] font-black px-1.5 py-0.2 rounded-full bg-rose-500 text-white ml-auto">
                              {link.count}
                            </span>
                          )}
                        </div>
                        {link.desc && (
                          <p className={`text-[10px] truncate leading-normal ${active ? 'text-slate-300' : 'text-slate-400'}`}>
                            {link.desc}
                          </p>
                        )}
                      </div>

                      <ChevronRight className={`w-3.5 h-3.5 shrink-0 ${active ? 'text-brand-teal' : 'text-slate-300'}`} />
                    </Link>
                  );
                })}
              </div>

              {/* Category: Planning, Analytics & Tools (Contains Progress, Planner, Vault, Reports) */}
              {user && navLinks.length > 5 && (
                <div className="space-y-1 pt-2 border-t border-slate-100">
                  <p className="text-[10px] font-black uppercase tracking-wider text-slate-400 px-2 pb-1">
                    {lang === 'or' ? 'ଅଗ୍ରଗତି, ଯୋଜନା ଓ ଭଲ୍ଟ' : 'Planning, Analytics & Vault'}
                  </p>

                  {navLinks.slice(5).map((link) => {
                    const Icon = link.icon;
                    const active = isActive(link.path);

                    return (
                      <Link
                        key={link.name}
                        to={link.path}
                        onClick={(e) => handleNavClick(e, link)}
                        className={`flex items-center gap-3 p-2.5 rounded-2xl transition-all cursor-pointer ${
                          active
                            ? 'bg-brand-navy text-white shadow-md ring-1 ring-brand-teal/40'
                            : 'text-slate-700 hover:bg-slate-100 hover:text-brand-navy'
                        }`}
                      >
                        <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                          active ? 'bg-brand-teal text-brand-navy' : 'bg-slate-100 text-brand-teal'
                        }`}>
                          {Icon && <Icon className="w-4 h-4" />}
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1.5">
                            <p className={`text-xs font-bold leading-tight ${active ? 'text-white' : 'text-brand-navy'}`}>
                              {link.name}
                            </p>
                            {link.count > 0 && (
                              <span className="text-[9px] font-black px-1.5 py-0.2 rounded-full bg-rose-500 text-white ml-auto">
                                {link.count}
                              </span>
                            )}
                          </div>
                          {link.desc && (
                            <p className={`text-[10px] truncate leading-normal ${active ? 'text-slate-300' : 'text-slate-400'}`}>
                              {link.desc}
                            </p>
                          )}
                        </div>

                        <ChevronRight className={`w-3.5 h-3.5 shrink-0 ${active ? 'text-brand-teal' : 'text-slate-300'}`} />
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Drawer Bottom Utilities & Actions */}
            <div className="p-4 bg-slate-50 border-t border-slate-200/80 space-y-3">
              
              {/* Language Switcher in Drawer */}
              <div className="flex items-center justify-between p-2 rounded-xl bg-white border border-slate-200 text-xs shadow-2xs">
                <div className="flex items-center gap-2 text-slate-700 font-bold">
                  <Globe className="w-4 h-4 text-brand-teal" />
                  <span>{lang === 'or' ? 'ଭାଷା (Language)' : 'Language'}</span>
                </div>
                <button
                  onClick={toggleLanguage}
                  className="px-2.5 py-1 rounded-lg bg-brand-navy text-white text-[11px] font-extrabold cursor-pointer hover:bg-brand-navyLight transition-colors"
                >
                  {lang === 'en' ? 'ଓଡ଼ିଆ ରେ ଦେଖନ୍ତୁ' : 'Switch to English'}
                </button>
              </div>

              {/* Online / Offline Status */}
              <div className="flex items-center justify-between text-[11px] font-bold text-slate-500 px-1">
                <span>{lang === 'or' ? 'ସଂଯୋଗ ସ୍ଥିତି' : 'Network Status'}:</span>
                <span className={`inline-flex items-center gap-1.5 ${isOnline ? 'text-emerald-600' : 'text-amber-600'}`}>
                  <span className={`w-2 h-2 rounded-full ${isOnline ? 'bg-emerald-500' : 'bg-amber-500 animate-pulse'}`} />
                  {isOnline ? 'Online • Cloud Sync' : 'Offline • Vault Mode'}
                </span>
              </div>

              {/* Auth Button */}
              {user ? (
                <button
                  onClick={handleLogout}
                  className="w-full py-2.5 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 text-xs font-black flex items-center justify-center gap-2 border border-rose-200 transition-colors cursor-pointer"
                >
                  <LogOut className="w-4 h-4" />
                  <span>{lang === 'or' ? 'ଲଗ୍-ଆଉଟ୍ (Sign Out)' : 'Log Out'}</span>
                </button>
              ) : (
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <Link
                    to="/login"
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-brand-navy text-xs font-bold text-center transition-colors"
                  >
                    {t('nav.login')}
                  </Link>
                  <Link
                    to="/register"
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-2.5 rounded-xl bg-brand-navy hover:bg-brand-navyLight text-white text-xs font-black text-center shadow-sm transition-colors"
                  >
                    {t('nav.register')}
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>,
        document.body
      )}
    </header>
  );
}
