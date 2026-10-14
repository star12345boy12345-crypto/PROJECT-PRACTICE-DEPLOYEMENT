import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Heart, Shield, Cpu, ExternalLink, ArrowRight } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { user } = useAuth();
  const { lang } = useLanguage();

  const handleAnchorClick = (e, targetId) => {
    const el = document.getElementById(targetId);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.pushState(null, '', `/#${targetId}`);
    }
  };

  return (
    <footer className="bg-brand-navy text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-brand-navy p-1 shadow-md border border-brand-teal/30 flex items-center justify-center overflow-hidden">
                <img
                  src="/logo.png"
                  alt="Vidyora AI Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-extrabold text-2xl text-white tracking-tight">
                Vidyora<span className="text-brand-teal">.ai</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              {lang === 'or'
                ? 'ଓଡ଼ିଶାର ଗ୍ରାମାଞ୍ଚଳ ଓ ସହରତଳି ଛାତ୍ରଛାତ୍ରୀଙ୍କ ପାଇଁ ପ୍ରଥମ ଏଜେଣ୍ଟିକ୍ ଏଆଇ ଶିକ୍ଷା ସାଥୀ । ଓଡ଼ିଆ ଓ ଇଂରାଜୀ ଭାଷାରେ ସରଳ ବୁଝାମଣା, ଅନୁକୂଳ ପରୀକ୍ଷା ଏବଂ ୧୦୦% ଅଫଲାଇନ୍ ପାଠପଢା ସୁବିଧା ।'
                : 'India’s pioneer agentic AI personalized learning platform built to bridge rural educational divides. Features bilingual Odia & English tutoring, smart adaptive testing, and offline-first IndexedDB architecture.'}
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-brand-teal/10 text-brand-teal border border-brand-teal/20">
                NEXTECH 2.0 | NMIET 2026
              </span>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-brand-orange/10 text-brand-orange border border-brand-orange/20">
                State Board Curriculum
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold text-white tracking-wider uppercase">Platform Modules</h4>
            <ul className="space-y-2 text-sm text-slate-400 font-medium">
              <li><Link to={user ? "/tutor" : "/login"} className="hover:text-brand-teal transition-colors">Agentic AI Tutor</Link></li>
              <li><Link to={user ? "/scanner" : "/login"} className="hover:text-brand-teal transition-colors">Textbook Lens & Solver</Link></li>
              <li><Link to={user ? "/subjects" : "/login"} className="hover:text-brand-teal transition-colors">Curriculum Lessons</Link></li>
              <li><Link to={user ? "/quizzes" : "/login"} className="hover:text-brand-teal transition-colors">Adaptive Quizzes</Link></li>
              <li><Link to={user ? "/offline-vault" : "/login"} className="hover:text-brand-teal transition-colors">Offline IndexedDB Vault</Link></li>
              <li><Link to={user ? "/parent-report" : "/login"} className="hover:text-brand-teal transition-colors">Parent Progress Portal</Link></li>
            </ul>
          </div>

          {/* Explore & Navigation Sections */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold text-white tracking-wider uppercase">Navigation & Sections</h4>
            <ul className="space-y-2 text-sm text-slate-400 font-medium">
              <li>
                <Link to="/#home" onClick={(e) => handleAnchorClick(e, 'home')} className="hover:text-brand-teal transition-colors cursor-pointer">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/#features" onClick={(e) => handleAnchorClick(e, 'features')} className="hover:text-brand-teal transition-colors cursor-pointer">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/#how-it-works" onClick={(e) => handleAnchorClick(e, 'how-it-works')} className="hover:text-brand-teal transition-colors cursor-pointer">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/#about" onClick={(e) => handleAnchorClick(e, 'about')} className="hover:text-brand-teal transition-colors cursor-pointer">
                  About Vidyora
                </Link>
              </li>
              <li>
                <Link to="/login" className="hover:text-brand-teal transition-colors text-white font-semibold flex items-center gap-1">
                  <span>Sign In</span>
                  <ArrowRight className="w-3.5 h-3.5 text-brand-teal" />
                </Link>
              </li>
              <li>
                <Link to="/register" className="hover:text-brand-teal transition-colors text-white font-semibold flex items-center gap-1">
                  <span>Create Account</span>
                  <ArrowRight className="w-3.5 h-3.5 text-brand-orange" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 Vidyora AI. Built with precision for NEXTECH 2.0 Hackathon.</p>
          <p className="flex items-center gap-1">
            "Learn in Your Language. Learn at Your Pace."
          </p>
        </div>
      </div>
    </footer>
  );
}
