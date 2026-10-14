import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { subjectsAPI } from '../services/api';
import { getOfflineSubjects } from '../services/offlineStorage';
import { useLanguage } from '../contexts/LanguageContext';
import {
  BookOpen,
  ChevronRight,
  ChevronLeft,
  Atom,
  Calculator,
  Cpu,
  Globe,
  Loader2,
  Sparkles,
  WifiOff
} from 'lucide-react';

export default function SubjectsPage() {
  const navigate = useNavigate();
  const [subjects, setSubjects] = useState([]);
  const [selectedClass, setSelectedClass] = useState('Class 8');
  const [loading, setLoading] = useState(true);
  const [isOfflineMode, setIsOfflineMode] = useState(false);
  const { lang, t } = useLanguage();

  useEffect(() => {
    fetchSubjects();

    const handleBundleUpdated = () => {
      fetchSubjects();
    };
    window.addEventListener('vidyora-offline-bundle-updated', handleBundleUpdated);
    return () => window.removeEventListener('vidyora-offline-bundle-updated', handleBundleUpdated);
  }, [selectedClass]);

  const fetchSubjects = async () => {
    try {
      setLoading(true);
      if (navigator.onLine) {
        try {
          const res = await subjectsAPI.getSubjects({ classLevel: selectedClass });
          if (res.data?.subjects && res.data.subjects.length > 0) {
            setSubjects(res.data.subjects);
            setIsOfflineMode(false);
            return;
          }
        } catch (netErr) {
          console.warn('Network error in SubjectsPage, checking offline vault:', netErr);
        }
      }

      // Offline fallback: load subjects stored in IndexedDB from MongoDB
      const offlineSubs = await getOfflineSubjects();
      if (offlineSubs && offlineSubs.length > 0) {
        setIsOfflineMode(true);
        setSubjects(offlineSubs);
      }
    } catch (err) {
      console.error('Failed to load subjects:', err);
    } finally {
      setLoading(false);
    }
  };

  const getIcon = (name) => {
    switch (name) {
      case 'Atom': return Atom;
      case 'Calculator': return Calculator;
      case 'Cpu': return Cpu;
      case 'Globe': return Globe;
      default: return BookOpen;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      
      {/* Back Button */}
      <div>
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
          <span>{lang === 'or' ? '← ପଛକୁ ଫେରନ୍ତୁ (Back)' : '← Back to Dashboard'}</span>
        </button>
      </div>

      {/* Header & Class Filter */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-brand-navy">
            {t('nav.subjects')}
          </h1>
          <p className="text-xs sm:text-sm text-slate-500">
            {lang === 'or' ? 'ଓଡ଼ିଆ ଓ ଇଂରାଜୀ ଭାଷାରେ ଆପଣଙ୍କ ଶ୍ରେଣୀର ପାଠ୍ୟକ୍ରମ ବାଛନ୍ତୁ' : 'Explore state syllabus curriculum modules in Odia & English'}
          </p>
        </div>

        {/* Class Selection Tabs */}
        <div className="flex items-center gap-1 bg-white p-1 rounded-2xl border border-slate-200 shadow-2xs overflow-x-auto">
          {['Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10'].map((cls) => (
            <button
              key={cls}
              onClick={() => setSelectedClass(cls)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold shrink-0 transition-all ${
                selectedClass === cls
                  ? 'bg-brand-navy text-white shadow-2xs'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              {cls}
            </button>
          ))}
        </div>
      </div>

      {isOfflineMode && (
        <div className="p-3.5 rounded-2xl bg-cyan-50/80 border border-cyan-200 text-cyan-900 text-xs font-bold flex items-center gap-2 shadow-2xs">
          <WifiOff className="w-4 h-4 text-cyan-700 shrink-0" />
          <span>
            ଅଫଲାଇନ୍ ମୋଡ୍ ସକ୍ରିୟ: ଆପଣ ବ୍ରାଉଜର୍ ଭଲ୍ଟରେ ସାଇତା ହୋଇଥିବା ବିଷୟଗୁଡ଼ିକ ଦେଖୁଛନ୍ତି । ଉଭୟ ଓଡ଼ିଆ ଓ ଇଂରାଜୀ ଭାଷାରେ ସମ୍ପୂର୍ଣ୍ଣ ଉପଲବ୍ଧ !
          </span>
        </div>
      )}

      {/* Grid of Subjects */}
      {loading ? (
        <div className="py-20 flex flex-col items-center justify-center">
          <Loader2 className="w-8 h-8 text-brand-teal animate-spin mb-2" />
          <p className="text-xs font-semibold text-slate-500">Loading curriculum subjects...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map((sub) => {
            const IconComponent = getIcon(sub.icon);
            return (
              <Link
                key={sub._id}
                to={`/subjects/${sub._id}?classLevel=${encodeURIComponent(selectedClass)}`}
                className="glass-card p-6 rounded-3xl flex flex-col justify-between group h-full space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform"
                      style={{ backgroundColor: sub.color || '#26C4B1' }}
                    >
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-lg bg-slate-100 text-slate-600">
                      {selectedClass}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-extrabold text-brand-navy group-hover:text-brand-teal transition-colors">
                      {lang === 'or' ? sub.nameOdia : sub.name}
                    </h3>
                    <p className="text-xs text-brand-orange font-bold mt-0.5">
                      {lang === 'or' ? sub.name : sub.nameOdia}
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed mt-2 line-clamp-2">
                      {lang === 'or' ? (sub.descriptionOdia || sub.description) : sub.description}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-brand-teal">
                  <span>Browse Chapters & Lessons</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      )}

    </div>
  );
}
