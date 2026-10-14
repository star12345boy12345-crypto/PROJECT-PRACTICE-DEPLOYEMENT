import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';
import { Sparkles, User, Mail, Lock, School, Users, Globe, AlertCircle, ArrowRight, ChevronLeft, Home } from 'lucide-react';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    classLevel: 'Class 8',
    schoolName: '',
    parentName: '',
    parentEmail: '',
    preferredLanguage: 'or',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();
  const { lang, t } = useLanguage();
  const navigate = useNavigate();

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    const res = await register(formData);
    setLoading(false);
    if (res.success) {
      navigate('/dashboard');
    } else {
      setError(res.message);
    }
  };

  return (
    <div className="min-h-[90vh] flex items-center justify-center px-4 py-12 gradient-bg">
      <div className="w-full max-w-xl">
        
        {/* Top Back & Home Navigation */}
        <div className="mb-4 flex items-center justify-between">
          <button
            type="button"
            onClick={handleBack}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-300 text-xs font-extrabold text-brand-navy hover:bg-slate-50 hover:border-brand-teal transition-all shadow-xs cursor-pointer group"
          >
            <ChevronLeft className="w-4 h-4 text-brand-teal group-hover:-translate-x-1 transition-transform" />
            <span>{lang === 'or' ? '← ପଛକୁ ଫେରନ୍ତୁ (Back)' : '← Back'}</span>
          </button>

          <Link
            to="/"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/90 border border-slate-200 text-xs font-bold text-slate-600 hover:text-brand-navy hover:bg-white transition-all shadow-2xs"
          >
            <Home className="w-3.5 h-3.5 text-brand-teal" />
            <span>{lang === 'or' ? 'ମୂଳପୃଷ୍ଠା (Home)' : 'Home'}</span>
          </Link>
        </div>

        <div className="glass-panel p-8 sm:p-10 rounded-3xl shadow-xl border border-slate-200/90 space-y-6">
          
          {/* Header */}
          <div className="relative text-center space-y-2">
            <button
              type="button"
              onClick={handleBack}
              className="absolute left-0 top-0 p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-brand-navy transition-colors cursor-pointer group"
              title="Go Back"
            >
              <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <div className="w-16 h-16 rounded-2xl bg-brand-navy p-1.5 mx-auto shadow-lg border border-brand-teal/30 flex items-center justify-center overflow-hidden">
              <img
                src="/logo.png"
                alt="Vidyora AI"
                className="w-full h-full object-contain"
              />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy">
              {t('auth.registerTitle')}
            </h2>
            <p className="text-xs sm:text-sm text-brand-muted">
              {lang === 'or' ? 'ନିଜର ଶ୍ରେଣୀ ଓ ବିବରଣୀ ଦେଇ ପାଠପଢା ଆରମ୍ଭ କରନ୍ତୁ' : 'Join India’s agentic learning platform built for your curriculum'}
            </p>
          </div>

          {error && (
            <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* Registration Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Student Name */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-brand-navy">{t('auth.name')}</label>
              <div className="relative flex items-center">
                <User className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
                <input
                  type="text"
                  required
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Omm Pritam Jena"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-200 text-sm font-medium focus:ring-2 focus:ring-brand-teal/40 outline-none"
                />
              </div>
            </div>

            {/* Email & Password Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-brand-navy">{t('auth.email')}</label>
                <div className="relative flex items-center">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
                  <input
                    type="email"
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="student@example.com"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-200 text-sm font-medium focus:ring-2 focus:ring-brand-teal/40 outline-none"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-brand-navy">{t('auth.password')}</label>
                <div className="relative flex items-center">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
                  <input
                    type="password"
                    required
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-200 text-sm font-medium focus:ring-2 focus:ring-brand-teal/40 outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Class & Preferred Language Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-brand-navy">{t('auth.classLevel')}</label>
                <select
                  name="classLevel"
                  value={formData.classLevel}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-sm font-semibold text-brand-navy focus:ring-2 focus:ring-brand-teal/40 outline-none"
                >
                  <option value="Class 6">Class 6 (ଷଷ୍ଠ ଶ୍ରେଣୀ)</option>
                  <option value="Class 7">Class 7 (ସପ୍ତମ ଶ୍ରେଣୀ)</option>
                  <option value="Class 8">Class 8 (ଅଷ୍ଟମ ଶ୍ରେଣୀ)</option>
                  <option value="Class 9">Class 9 (ନବମ ଶ୍ରେଣୀ)</option>
                  <option value="Class 10">Class 10 (ଦଶମ ଶ୍ରେଣୀ)</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-brand-navy">{t('auth.preferredLanguage')}</label>
                <select
                  name="preferredLanguage"
                  value={formData.preferredLanguage}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-sm font-semibold text-brand-navy focus:ring-2 focus:ring-brand-teal/40 outline-none"
                >
                  <option value="or">ଓଡ଼ିଆ (Odia - Recommended)</option>
                  <option value="en">English</option>
                </select>
              </div>
            </div>

            {/* School Name */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-brand-navy">{t('auth.schoolName')}</label>
              <div className="relative flex items-center">
                <School className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
                <input
                  type="text"
                  name="schoolName"
                  value={formData.schoolName}
                  onChange={handleChange}
                  placeholder="Government High School, Balasore"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-200 text-sm font-medium focus:ring-2 focus:ring-brand-teal/40 outline-none"
                />
              </div>
            </div>

            {/* Parent Name & Parent Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="space-y-1">
                <label className="text-xs font-bold text-brand-navy">{t('auth.parentName')}</label>
                <div className="relative flex items-center">
                  <Users className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
                  <input
                    type="text"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleChange}
                    placeholder="Father / Mother Name"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-200 text-sm font-medium focus:ring-2 focus:ring-brand-teal/40 outline-none"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-brand-navy">{t('auth.parentEmail')}</label>
                <div className="relative flex items-center">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
                  <input
                    type="email"
                    name="parentEmail"
                    value={formData.parentEmail}
                    onChange={handleChange}
                    placeholder="parent@example.com"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-200 text-sm font-medium focus:ring-2 focus:ring-brand-teal/40 outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full mt-4 py-3.5 rounded-xl bg-brand-navy text-white font-extrabold text-sm shadow-md btn-3d hover:bg-brand-navyLight flex items-center justify-center gap-2 transition-all"
            >
              <span>{loading ? 'Registering...' : t('auth.btnSignUp')}</span>
              <ArrowRight className="w-4 h-4 text-brand-teal" />
            </button>
          </form>

          {/* Link to login */}
          <div className="text-center text-xs text-slate-500 pt-2">
            <span>Already have an account? </span>
            <Link to="/login" className="font-extrabold text-brand-teal hover:underline">
              {t('auth.btnSignIn')}
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
