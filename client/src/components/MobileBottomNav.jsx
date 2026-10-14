import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';
import {
  LayoutDashboard,
  BrainCircuit,
  BookOpen,
  Award,
  User,
  HardDriveDownload,
  Home,
  LogIn,
  UserPlus,
  Menu
} from 'lucide-react';

export default function MobileBottomNav() {
  const { user, syncStatus } = useAuth();
  const { lang, t } = useLanguage();
  const location = useLocation();

  // Hide mobile bottom nav on desktop/tablets (visible strictly on screens < 768px)
  const authenticatedTabs = [
    {
      id: 'dashboard',
      label: lang === 'or' ? 'ଡ୍ୟାସବୋର୍ଡ' : 'Home',
      path: '/dashboard',
      icon: LayoutDashboard,
    },
    {
      id: 'tutor',
      label: lang === 'or' ? 'ଏଆଇ ଶିକ୍ଷକ' : 'AI Tutor',
      path: '/tutor',
      icon: BrainCircuit,
      highlight: true,
      badge: 'AI',
    },
    {
      id: 'subjects',
      label: lang === 'or' ? 'ବିଷୟ' : 'Subjects',
      path: '/subjects',
      icon: BookOpen,
    },
    {
      id: 'quizzes',
      label: lang === 'or' ? 'କୁଇଜ୍' : 'Quizzes',
      path: '/quizzes',
      icon: Award,
    },
    {
      id: 'menu',
      label: lang === 'or' ? 'ମେନୁ' : 'Menu',
      icon: Menu,
      isMenuTrigger: true,
      hasDot: syncStatus?.pendingCount > 0,
    },
  ];

  const guestTabs = [
    {
      id: 'home',
      label: lang === 'or' ? 'ମୁଖ୍ୟ ପୃଷ୍ଠା' : 'Home',
      path: '/',
      icon: Home,
    },
    {
      id: 'vault',
      label: lang === 'or' ? 'ଅଫଲାଇନ୍' : 'Offline',
      path: '/offline-vault',
      icon: HardDriveDownload,
    },
    {
      id: 'login',
      label: lang === 'or' ? 'ଲଗ୍-ଇନ୍' : 'Login',
      path: '/login',
      icon: LogIn,
    },
    {
      id: 'register',
      label: lang === 'or' ? 'ପଞ୍ଜୀକରଣ' : 'Register',
      path: '/register',
      icon: UserPlus,
      highlight: true,
    },
    {
      id: 'menu',
      label: lang === 'or' ? 'ମେନୁ' : 'Menu',
      icon: Menu,
      isMenuTrigger: true,
    },
  ];

  const tabs = user ? authenticatedTabs : guestTabs;

  return (
    <nav
      aria-label="Mobile Navigation"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-t border-slate-200/90 shadow-[0_-4px_25px_rgba(14,27,48,0.08)] px-2 pt-1 pb-[calc(0.5rem+env(safe-area-inset-bottom,0px))] transition-all duration-300"
    >
      <div className="flex items-center justify-around max-w-lg mx-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = !tab.isMenuTrigger && location.pathname === tab.path;

          if (tab.isMenuTrigger) {
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => window.dispatchEvent(new CustomEvent('vidyora-toggle-menu'))}
                className="relative flex flex-col items-center justify-center py-1 px-2 rounded-2xl transition-all duration-200 cursor-pointer min-w-[56px] select-none text-slate-500 hover:text-brand-navy font-semibold focus:outline-none group"
                aria-label={tab.label}
              >
                <div className="relative p-1">
                  <Icon className="w-5 h-5 transition-transform duration-200 text-brand-navy group-hover:scale-110 stroke-[2.2]" />
                  {tab.hasDot && (
                    <span className="absolute top-0 right-0 w-2 h-2 rounded-full bg-rose-500 ring-2 ring-white animate-pulse" />
                  )}
                </div>
                <span className="text-[10px] leading-tight tracking-tight mt-0.5 text-slate-600 font-bold group-hover:text-brand-navy">
                  {tab.label}
                </span>
              </button>
            );
          }

          return (
            <NavLink
              key={tab.id}
              to={tab.path}
              className={`relative flex flex-col items-center justify-center py-1 px-2 rounded-2xl transition-all duration-200 cursor-pointer min-w-[56px] select-none ${
                isActive
                  ? 'text-brand-navy font-black'
                  : 'text-slate-500 hover:text-brand-navy font-semibold'
              }`}
            >
              {/* Highlight Pill for Center / AI Tutor Button */}
              {tab.highlight ? (
                <div
                  className={`relative -top-2.5 p-2 rounded-2xl shadow-lg border-2 transition-all duration-300 flex items-center justify-center ${
                    isActive
                      ? 'bg-brand-navy border-brand-teal text-brand-teal shadow-brand-teal/25 scale-105'
                      : 'bg-gradient-to-tr from-brand-navy to-brand-navyLight border-slate-700 text-brand-teal shadow-slate-900/20'
                  }`}
                >
                  <Icon className="w-5 h-5 animate-pulse" />
                  {tab.badge && (
                    <span className="absolute -top-1 -right-1 text-[8px] font-black bg-brand-orange text-white px-1 rounded-full uppercase leading-tight shadow-xs">
                      {tab.badge}
                    </span>
                  )}
                </div>
              ) : (
                <div className="relative p-1">
                  <Icon
                    className={`w-5 h-5 transition-transform duration-200 ${
                      isActive ? 'text-brand-teal scale-110 stroke-[2.4]' : 'stroke-[1.8]'
                    }`}
                  />
                  {tab.hasDot && (
                    <span className="absolute top-0 right-0 w-2 h-2 rounded-full bg-rose-500 ring-2 ring-white animate-pulse" />
                  )}
                </div>
              )}

              {/* Label */}
              <span
                className={`text-[10px] leading-tight tracking-tight mt-0.5 ${
                  tab.highlight ? '-mt-1 font-bold' : ''
                } ${isActive ? 'text-brand-navy font-bold' : 'text-slate-500'}`}
              >
                {tab.label}
              </span>

              {/* Active Indicator Bar */}
              {isActive && !tab.highlight && (
                <span className="absolute bottom-0 w-5 h-0.5 rounded-full bg-brand-teal" />
              )}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}
