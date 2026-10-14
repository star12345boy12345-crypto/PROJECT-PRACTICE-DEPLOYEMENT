import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';
import {
  Sparkles,
  ArrowRight,
  BrainCircuit,
  Languages,
  Award,
  HardDriveDownload,
  Camera,
  CalendarCheck,
  Users,
  ShieldCheck,
  CheckCircle,
  TrendingUp,
  Zap,
  Globe2,
  BookOpen
} from 'lucide-react';

export default function LandingPage() {
  const { lang, t } = useLanguage();
  const { user } = useAuth();

  return (
    <div className="gradient-bg min-h-screen">
      
      {/* HERO SECTION */}
      <section id="home" className="relative pt-12 pb-20 lg:pt-20 lg:pb-32 overflow-hidden scroll-mt-24">
        {/* Glow Spheres */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-teal/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-72 h-72 bg-brand-orange/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            
            {/* Hackathon Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-slate-200/80 shadow-xs text-xs font-bold text-brand-navy">
              <span className="w-2 h-2 rounded-full bg-brand-teal animate-ping" />
              <span>{t('landing.badge')}</span>
              <span className="text-slate-300">•</span>
              <span className="text-brand-orange">NMIET / NIRMIT 2026</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-brand-navy tracking-tight leading-[1.15]">
              {t('landing.heroTitle')}{' '}
              <span className="bg-gradient-to-r from-brand-teal via-teal-500 to-brand-orange bg-clip-text text-transparent">
                {t('landing.heroTitleHighlight')}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-xl text-brand-muted max-w-3xl mx-auto leading-relaxed font-normal">
              {t('landing.heroSubtitle')}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Link
                to={user ? "/dashboard" : "/register"}
                className="px-8 py-4 rounded-2xl bg-brand-navy text-white font-extrabold text-base shadow-3d hover:bg-brand-navyLight flex items-center gap-2.5 transition-all group"
              >
                <span>{user ? t('nav.dashboard') : t('landing.ctaStart')}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 text-brand-teal transition-transform" />
              </Link>

              <Link
                to={user ? "/tutor" : "/login"}
                className="px-7 py-4 rounded-2xl bg-white/90 backdrop-blur-md text-brand-navy font-bold text-base border border-slate-200 hover:bg-white shadow-sm flex items-center gap-2 hover:border-brand-teal transition-all cursor-pointer"
              >
                <BrainCircuit className="w-5 h-5 text-brand-teal" />
                <span>{user ? 'Open AI Tutor' : 'Sign In to Try AI Tutor'}</span>
              </Link>
            </div>

            {/* Floating Stats */}
            <div className="pt-10 grid grid-cols-3 gap-3 sm:gap-6 max-w-xl mx-auto">
              <div className="p-3 sm:p-4 rounded-2xl bg-white/70 backdrop-blur-md border border-slate-200 shadow-xs">
                <div className="text-lg sm:text-2xl font-black text-brand-navy">Class 6–10</div>
                <div className="text-[11px] sm:text-xs font-semibold text-slate-500">State Syllabus</div>
              </div>
              <div className="p-3 sm:p-4 rounded-2xl bg-white/70 backdrop-blur-md border border-slate-200 shadow-xs">
                <div className="text-lg sm:text-2xl font-black text-brand-teal">ଓଡ଼ିଆ + Eng</div>
                <div className="text-[11px] sm:text-xs font-semibold text-slate-500">Bilingual Engine</div>
              </div>
              <div className="p-3 sm:p-4 rounded-2xl bg-white/70 backdrop-blur-md border border-slate-200 shadow-xs">
                <div className="text-lg sm:text-2xl font-black text-brand-orange">100% Offline</div>
                <div className="text-[11px] sm:text-xs font-semibold text-slate-500">IndexedDB Vault</div>
              </div>
            </div>
          </div>

          {/* 3D Interactive UI Preview Showcase */}
          <div className="mt-16 max-w-5xl mx-auto">
            <div className="relative rounded-3xl p-3 sm:p-6 bg-gradient-to-b from-brand-navy to-brand-navyLight shadow-2xl border border-slate-700/50">
              
              {/* Window Controls */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500" />
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  <span className="text-xs font-semibold text-slate-400 ml-2">Vidyora Agentic Reasoning Flow</span>
                </div>
                <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-brand-teal/20 text-brand-teal">
                  Live Preview
                </span>
              </div>

              {/* Mock Chat & Reasoning Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
                
                {/* Agentic Pipeline */}
                <div className="bg-slate-900/80 rounded-2xl p-4 border border-slate-800 text-left space-y-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-brand-teal flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5" />
                    <span>Agentic Pipeline</span>
                  </div>
                  <div className="space-y-2 text-xs text-slate-300">
                    <div className="flex items-center gap-2 text-emerald-400">
                      <CheckCircle className="w-3.5 h-3.5" />
                      <span>1. Understand (Odia / Grade 8)</span>
                    </div>
                    <div className="flex items-center gap-2 text-emerald-400">
                      <CheckCircle className="w-3.5 h-3.5" />
                      <span>2. Curriculum Knowledge Retrieved</span>
                    </div>
                    <div className="flex items-center gap-2 text-emerald-400">
                      <CheckCircle className="w-3.5 h-3.5" />
                      <span>3. Conceptual Synthesis</span>
                    </div>
                    <div className="flex items-center gap-2 text-brand-orange animate-pulse">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>4. Formulate Adaptive Quiz</span>
                    </div>
                  </div>
                </div>

                {/* Mock Dialogue */}
                <div className="md:col-span-2 bg-slate-900/80 rounded-2xl p-5 border border-slate-800 text-left space-y-4">
                  {/* Student Bubble */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-brand-orange text-brand-navy flex items-center justify-center font-bold text-xs shrink-0">
                      OP
                    </div>
                    <div className="bg-slate-800 rounded-2xl rounded-tl-none p-3 text-sm text-slate-200">
                      "ଆଲୋକ ଶ୍ଳେଷଣ ପ୍ରକ୍ରିୟା ସରଳ ଓଡ଼ିଆରେ ବୁଝାଇଦିଅ ।" (Explain Photosynthesis in simple Odia)
                    </div>
                  </div>

                  {/* AI Bubble */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-brand-teal text-brand-navy flex items-center justify-center font-bold text-xs shrink-0">
                      AI
                    </div>
                    <div className="bg-brand-navy/90 border border-brand-teal/30 rounded-2xl rounded-tl-none p-4 text-xs sm:text-sm text-slate-200 space-y-2">
                      <div className="font-bold text-brand-teal text-sm">
                        🌿 ଆଲୋକ ଶ୍ଳେଷଣ (Photosynthesis) - ସରଳ ବୁଝାମଣା
                      </div>
                      <p className="leading-relaxed">
                        ସବୁଜ ଉଦ୍ଭିଦମାନେ ସୂର୍ଯ୍ୟାଲୋକ, ପତ୍ରହରିତ୍, ଜଳ (H₂O) ଏବଂ ଅଙ୍ଗାରକାମ୍ଳ (CO₂) ବ୍ୟବହାର କରି ନିଜର ଖାଦ୍ୟ (ଗ୍ଲୁକୋଜ୍) ପ୍ରସ୍ତୁତ କରନ୍ତି ଏବଂ ପରିବେଶକୁ ଅମ୍ଳଜାନ ଛାଡନ୍ତି ।
                      </p>
                      <div className="p-2.5 rounded-xl bg-slate-800/80 font-mono text-[11px] text-amber-300">
                        ୬ CO₂ + ୬ H₂O + ସୂର୍ଯ୍ୟାଲୋକ ➔ C₆H₁₂O₆ + ୬ O₂
                      </div>
                      <div className="pt-1 flex items-center gap-2">
                        <Link
                          to={user ? "/tutor" : "/login"}
                          className="px-3 py-1 rounded-lg bg-brand-teal text-brand-navy font-bold text-xs hover:bg-brand-tealLight transition-colors cursor-pointer"
                        >
                          {user ? 'Continue in Tutor ➔' : 'Sign In to Try AI Tutor ➔'}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM & SOLUTION SECTION */}
      <section id="about" className="py-20 bg-white border-y border-slate-200/80 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-xs font-extrabold uppercase tracking-wider text-brand-teal">
              The Mission Behind Vidyora
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-brand-navy">
              Empowering Rural Learners Through Localized AI
            </h3>
            <p className="text-slate-600">
              Transforming the learning journey for millions of school students facing language and connectivity divides.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            
            {/* The Problem */}
            <div className="p-8 rounded-3xl bg-rose-50/50 border border-rose-200/70 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center font-bold">
                ⚠️
              </div>
              <h4 className="text-2xl font-bold text-rose-950">{t('landing.problemTitle')}</h4>
              <p className="text-slate-700 leading-relaxed">{t('landing.problemText')}</p>
              <ul className="space-y-2.5 text-sm text-slate-700 pt-2 font-medium">
                <li className="flex items-center gap-2">
                  <span className="text-rose-500 font-bold">✕</span> English-only complex textbooks with zero regional explanations
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-rose-500 font-bold">✕</span> Lack of 1-on-1 tutoring after school hours in rural villages
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-rose-500 font-bold">✕</span> Unstable internet dropping access to digital classrooms
                </li>
              </ul>
            </div>

            {/* The Solution */}
            <div className="p-8 rounded-3xl bg-teal-50/60 border border-brand-teal/40 space-y-4 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-brand-teal/20 text-teal-800 flex items-center justify-center font-bold">
                💡
              </div>
              <h4 className="text-2xl font-bold text-brand-navy">{t('landing.solutionTitle')}</h4>
              <p className="text-slate-700 leading-relaxed">{t('landing.solutionText')}</p>
              <ul className="space-y-2.5 text-sm text-slate-700 pt-2 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-teal" /> Native Odia (ଓଡ଼ିଆ) + English dual-language explanations
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-teal" /> Offline-first IndexedDB vault saving entire lessons & quizzes
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-teal" /> Automated weak-topic detection & parent progress updates
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 8 CORE FEATURES GRID */}
      <section id="features" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-xs font-extrabold uppercase tracking-wider text-brand-teal">
            Complete Educational Suite
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-brand-navy">
            {t('landing.featuresTitle')}
          </h3>
          <p className="text-slate-600">{t('landing.featuresSubtitle')}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <Link
            to={user ? "/tutor" : "/login"}
            className="glass-card p-6 rounded-3xl space-y-3 group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-200/90 block cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-brand-teal/10 text-brand-teal flex items-center justify-center group-hover:scale-110 transition-transform">
                <BrainCircuit className="w-6 h-6" />
              </div>
              {!user && (
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                  🔒 Login Req.
                </span>
              )}
            </div>
            <h4 className="text-lg font-bold text-brand-navy group-hover:text-brand-teal transition-colors">Agentic AI Tutor</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Multi-step cognitive pipeline: understands questions, retrieves curriculum concepts, and synthesizes simple Odia answers.
            </p>
            <div className="pt-1 flex items-center text-xs font-bold text-brand-teal group-hover:text-brand-orange transition-colors">
              <span>{user ? 'Open AI Tutor ➔' : 'Sign in to access ➔'}</span>
            </div>
          </Link>

          <Link
            to={user ? "/subjects" : "/login"}
            className="glass-card p-6 rounded-3xl space-y-3 group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-200/90 block cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-brand-orange/15 text-brand-orange flex items-center justify-center group-hover:scale-110 transition-transform">
                <Languages className="w-6 h-6" />
              </div>
              {!user && (
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                  🔒 Login Req.
                </span>
              )}
            </div>
            <h4 className="text-lg font-bold text-brand-navy group-hover:text-brand-orange transition-colors">Odia & English Dual Mode</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Native Unicode Odia interface with 1-click translation switch on every chapter, lesson, and quiz solution.
            </p>
            <div className="pt-1 flex items-center text-xs font-bold text-brand-teal group-hover:text-brand-orange transition-colors">
              <span>{user ? 'Browse Subjects ➔' : 'Sign in to access ➔'}</span>
            </div>
          </Link>

          <Link
            to={user ? "/quizzes" : "/login"}
            className="glass-card p-6 rounded-3xl space-y-3 group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-200/90 block cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Award className="w-6 h-6" />
              </div>
              {!user && (
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                  🔒 Login Req.
                </span>
              )}
            </div>
            <h4 className="text-lg font-bold text-brand-navy group-hover:text-emerald-700 transition-colors">Smart Adaptive Quizzes</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Deterministic server-validated scoring, micro-topic breakdown, and instant solution explanations.
            </p>
            <div className="pt-1 flex items-center text-xs font-bold text-brand-teal group-hover:text-brand-orange transition-colors">
              <span>{user ? 'Take Quizzes ➔' : 'Sign in to access ➔'}</span>
            </div>
          </Link>

          <Link
            to={user ? "/scanner" : "/login"}
            className="glass-card p-6 rounded-3xl space-y-3 group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-200/90 block cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Camera className="w-6 h-6" />
              </div>
              {!user && (
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                  🔒 Login Req.
                </span>
              )}
            </div>
            <h4 className="text-lg font-bold text-brand-navy group-hover:text-purple-700 transition-colors">Textbook Lens & Solver</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Upload textbook photos or diagram equations; AI analyzes the image and explains the theory step-by-step.
            </p>
            <div className="pt-1 flex items-center text-xs font-bold text-brand-teal group-hover:text-brand-orange transition-colors">
              <span>{user ? 'Open Lens Scanner ➔' : 'Sign in to access ➔'}</span>
            </div>
          </Link>

          <Link
            to={user ? "/offline-vault" : "/login"}
            className="glass-card p-6 rounded-3xl space-y-3 group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-200/90 block cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-cyan-100 text-cyan-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                <HardDriveDownload className="w-6 h-6" />
              </div>
              {!user && (
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                  🔒 Login Req.
                </span>
              )}
            </div>
            <h4 className="text-lg font-bold text-brand-navy group-hover:text-cyan-700 transition-colors">100% Offline Vault</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Stores lessons and quizzes in browser IndexedDB. Continue learning without internet and auto-sync when online.
            </p>
            <div className="pt-1 flex items-center text-xs font-bold text-brand-teal group-hover:text-brand-orange transition-colors">
              <span>{user ? 'Open Offline Vault ➔' : 'Sign in to access ➔'}</span>
            </div>
          </Link>

          <Link
            to={user ? "/dashboard" : "/login"}
            className="glass-card p-6 rounded-3xl space-y-3 group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-200/90 block cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                <TrendingUp className="w-6 h-6" />
              </div>
              {!user && (
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                  🔒 Login Req.
                </span>
              )}
            </div>
            <h4 className="text-lg font-bold text-brand-navy group-hover:text-amber-700 transition-colors">Weak Topic Detection</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Isolates concepts with accuracy below 60% and recommends targeted revision tasks directly on the dashboard.
            </p>
            <div className="pt-1 flex items-center text-xs font-bold text-brand-teal group-hover:text-brand-orange transition-colors">
              <span>{user ? 'View Analytics ➔' : 'Sign in to access ➔'}</span>
            </div>
          </Link>

          <Link
            to={user ? "/study-planner" : "/login"}
            className="glass-card p-6 rounded-3xl space-y-3 group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-200/90 block cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <CalendarCheck className="w-6 h-6" />
              </div>
              {!user && (
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                  🔒 Login Req.
                </span>
              )}
            </div>
            <h4 className="text-lg font-bold text-brand-navy group-hover:text-indigo-700 transition-colors">Adaptive Study Planner</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Auto-schedules revision tasks based on test performances, with customizable priorities and deadline trackers.
            </p>
            <div className="pt-1 flex items-center text-xs font-bold text-brand-teal group-hover:text-brand-orange transition-colors">
              <span>{user ? 'Open Study Planner ➔' : 'Sign in to access ➔'}</span>
            </div>
          </Link>

          <Link
            to={user ? "/parent-report" : "/login"}
            className="glass-card p-6 rounded-3xl space-y-3 group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-200/90 block cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6" />
              </div>
              {!user && (
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                  🔒 Login Req.
                </span>
              )}
            </div>
            <h4 className="text-lg font-bold text-brand-navy group-hover:text-rose-700 transition-colors">Parent Progress Reports</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Generates bilingual progress reports for parents detailing completed chapters, streak, and quiz scores.
            </p>
            <div className="pt-1 flex items-center text-xs font-bold text-brand-teal group-hover:text-brand-orange transition-colors">
              <span>{user ? 'Open Parent Portal ➔' : 'Sign in to access ➔'}</span>
            </div>
          </Link>

        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="py-20 bg-brand-navy text-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-xs font-extrabold uppercase tracking-wider text-brand-teal">
              The 4-Step Cycle
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold">How Students Learn with Vidyora</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 rounded-3xl bg-slate-800/60 border border-slate-700 space-y-3 relative">
              <div className="w-10 h-10 rounded-full bg-brand-teal text-brand-navy font-black flex items-center justify-center">
                1
              </div>
              <h4 className="text-lg font-bold">Ask Doubt</h4>
              <p className="text-xs text-slate-400">
                Type question in Odia or English, or snap a photo of any textbook page or formula.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-800/60 border border-slate-700 space-y-3 relative">
              <div className="w-10 h-10 rounded-full bg-brand-teal text-brand-navy font-black flex items-center justify-center">
                2
              </div>
              <h4 className="text-lg font-bold">Understand</h4>
              <p className="text-xs text-slate-400">
                AI breaks down the theory into class-level concepts with rural real-world analogies.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-800/60 border border-slate-700 space-y-3 relative">
              <div className="w-10 h-10 rounded-full bg-brand-teal text-brand-navy font-black flex items-center justify-center">
                3
              </div>
              <h4 className="text-lg font-bold">Practise Smartly</h4>
              <p className="text-xs text-slate-400">
                Take an instant 3-question adaptive quiz to evaluate concept retention and formula recall.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-800/60 border border-slate-700 space-y-3 relative">
              <div className="w-10 h-10 rounded-full bg-brand-orange text-brand-navy font-black flex items-center justify-center">
                4
              </div>
              <h4 className="text-lg font-bold">Retain & Excel</h4>
              <p className="text-xs text-slate-400">
                Weak areas are identified and automatically turned into personalized revision tasks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HACKATHON FOOTER CTA */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="max-w-3xl mx-auto p-8 sm:p-12 rounded-3xl bg-gradient-to-tr from-brand-navy via-brand-navyLight to-slate-900 text-white shadow-2xl border border-brand-teal/30 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-teal/20 text-brand-teal text-xs font-bold">
            <Sparkles className="w-4 h-4" />
            <span>Built for NEXTECH 2.0 Hackathon</span>
          </div>
          <h3 className="text-3xl sm:text-4xl font-black">
            Ready to experience Agentic AI in your native language?
          </h3>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            Try the demo student account with preloaded subjects, quizzes, and offline vaults.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              to="/login"
              className="px-8 py-3.5 rounded-2xl bg-brand-teal text-brand-navy font-extrabold text-sm hover:bg-brand-tealLight shadow-lg transition-transform hover:scale-105"
            >
              One-Click Demo Login ➔
            </Link>
            <Link
              to="/register"
              className="px-6 py-3.5 rounded-2xl bg-white/10 text-white font-bold text-sm hover:bg-white/20 border border-white/20 transition-colors"
            >
              Create Student Account
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
