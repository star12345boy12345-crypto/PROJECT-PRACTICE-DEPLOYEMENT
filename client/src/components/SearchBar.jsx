import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { lessonsAPI } from '../services/api';
import { useLanguage } from '../contexts/LanguageContext';
import { Search, BookOpen, ChevronRight, Loader2, Sparkles, X } from 'lucide-react';

export default function SearchBar({ placeholder }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { lang, t } = useLanguage();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (!query.trim() || query.length < 2) {
      setResults([]);
      setLoading(false);
      return;
    }

    const timer = setTimeout(async () => {
      setLoading(true);
      try {
        const res = await lessonsAPI.searchLessons(query);
        setResults(res.data.results || []);
        setIsOpen(true);
      } catch (err) {
        console.error('Search query failed:', err);
      } finally {
        setLoading(false);
      }
    }, 250);

    return () => clearTimeout(timer);
  }, [query]);

  const handleSelectLesson = (lessonId) => {
    setIsOpen(false);
    setQuery('');
    navigate(`/lessons/${lessonId}`);
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto" ref={dropdownRef}>
      <div className="relative flex items-center">
        <div className="absolute left-4 text-brand-teal pointer-events-none">
          <Search className="w-5 h-5" />
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => { if (results.length > 0) setIsOpen(true); }}
          placeholder={placeholder || (lang === 'or' ? 'ଯେକୌଣସି ବିଷୟ, ସୂତ୍ର କିମ୍ବା ପାଠ ଖୋଜନ୍ତୁ (ଯଥା: Photosynthesis, ନ୍ୟୁଟନ)...' : 'Search any curriculum topic, formula, or concept (e.g. Photosynthesis, Newton)...')}
          className="w-full pl-12 pr-12 py-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-sm text-sm sm:text-base font-medium text-brand-navy placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-teal/40 focus:border-brand-teal transition-all"
        />
        {query && (
          <button
            onClick={() => { setQuery(''); setResults([]); }}
            className="absolute right-4 text-slate-400 hover:text-slate-600"
          >
            <X className="w-4 h-4" />
          </button>
        )}
        {loading && (
          <div className="absolute right-10 text-brand-teal animate-spin">
            <Loader2 className="w-4 h-4" />
          </div>
        )}
      </div>

      {/* Auto-suggest Results Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-slate-200/90 z-50 overflow-hidden max-h-96 overflow-y-auto">
          {results.length > 0 ? (
            <div className="p-2 space-y-1">
              <div className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center justify-between">
                <span>Matching Topics Found</span>
                <span className="text-brand-teal">{results.length} Results</span>
              </div>
              {results.map((lesson) => (
                <div
                  key={lesson._id}
                  onClick={() => handleSelectLesson(lesson._id)}
                  className="p-3 rounded-xl hover:bg-slate-50 cursor-pointer flex items-center justify-between group transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-brand-teal/10 text-brand-teal flex items-center justify-center group-hover:bg-brand-teal group-hover:text-white transition-colors">
                      <BookOpen className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-brand-navy group-hover:text-brand-teal transition-colors">
                        {lang === 'or' ? (lesson.titleOdia || lesson.title) : lesson.title}
                      </h4>
                      <p className="text-xs text-slate-500 flex items-center gap-2 mt-0.5">
                        <span className="font-semibold text-brand-orange">{lesson.subject?.name || 'Science'}</span>
                        <span>•</span>
                        <span>{lesson.chapter?.title || 'Chapter'}</span>
                        <span>•</span>
                        <span className="text-[10px] px-1.5 py-0.2 bg-slate-100 rounded text-slate-600 font-medium">Class 8</span>
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-brand-teal group-hover:translate-x-1 transition-all" />
                </div>
              ))}
            </div>
          ) : query.length >= 2 && !loading ? (
            <div className="p-6 text-center text-slate-500">
              <Sparkles className="w-8 h-8 text-slate-300 mx-auto mb-2" />
              <p className="text-sm font-medium">
                {lang === 'or' ? 'କୌଣସି ପାଠ ମିଳିଲା ନାହିଁ । ଆପଣ ଏଆଇ ଶିକ୍ଷକଙ୍କୁ ପଚାରିପାରିବେ ।' : 'No exact curriculum match. Try asking the AI Tutor directly!'}
              </p>
              <button
                onClick={() => { setIsOpen(false); navigate(`/tutor?q=${encodeURIComponent(query)}`); }}
                className="mt-3 px-4 py-1.5 rounded-xl bg-brand-navy text-white text-xs font-bold hover:bg-brand-navyLight"
              >
                Ask Vidyora AI Tutor ➔
              </button>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}
