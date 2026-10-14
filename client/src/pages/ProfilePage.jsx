import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';
import { authAPI } from '../services/api';
import {
  User,
  Mail,
  School,
  Users,
  Globe,
  Save,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ChevronLeft,
  LogOut
} from 'lucide-react';

export default function ProfilePage() {
  const { user, login, logout } = useAuth();
  const { lang, setLang } = useLanguage();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: user?.name || '',
    classLevel: user?.classLevel || 'Class 8',
    schoolName: user?.schoolName || '',
    parentName: user?.parentName || '',
    parentEmail: user?.parentEmail || '',
    preferredLanguage: user?.preferredLanguage || 'or',
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      const res = await authAPI.updateProfile(formData);
      setStatus({ success: true, message: 'Profile updated successfully!' });
      if (formData.preferredLanguage !== lang) {
        setLang(formData.preferredLanguage);
      }
    } catch (err) {
      setStatus({
        success: false,
        message: err.response?.data?.message || 'Failed to update profile.'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      
      {/* Back Button */}
      <div className="flex items-center justify-between">
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

        <button
          onClick={handleLogout}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold hover:bg-rose-100 transition-all shadow-2xs"
        >
          <LogOut className="w-3.5 h-3.5" />
          <span>{lang === 'or' ? 'ଲଗ୍-ଆଉଟ୍ (Log Out)' : 'Log Out'}</span>
        </button>
      </div>

      <div>
        <h1 className="text-2xl font-extrabold text-brand-navy">Student Profile & Settings</h1>
        <p className="text-xs sm:text-sm text-slate-500">
          Manage your grade, school, parent contacts, and preferred tutoring language.
        </p>
      </div>

      <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm space-y-6">
        
        {status && (
          <div className={`p-4 rounded-2xl border text-xs font-semibold flex items-center gap-2 ${
            status.success
              ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
              : 'bg-rose-50 border-rose-200 text-rose-800'
          }`}>
            <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
            <span>{status.message}</span>
          </div>
        )}

        <form onSubmit={handleSave} className="space-y-4">
          <div className="space-y-1">
            <label className="text-xs font-bold text-brand-navy">Full Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs font-semibold focus:ring-2 focus:ring-brand-teal/40 outline-none"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-400">Email Address (Read-only)</label>
            <input
              type="email"
              disabled
              value={user?.email || ''}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-500 font-medium"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-bold text-brand-navy">Class / Grade</label>
              <select
                name="classLevel"
                value={formData.classLevel}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs font-semibold focus:ring-2 focus:ring-brand-teal/40 outline-none"
              >
                <option value="Class 6">Class 6 (ଷଷ୍ଠ ଶ୍ରେଣୀ)</option>
                <option value="Class 7">Class 7 (ସପ୍ତମ ଶ୍ରେଣୀ)</option>
                <option value="Class 8">Class 8 (ଅଷ୍ଟମ ଶ୍ରେଣୀ)</option>
                <option value="Class 9">Class 9 (ନବମ ଶ୍ରେଣୀ)</option>
                <option value="Class 10">Class 10 (ଦଶମ ଶ୍ରେଣୀ)</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-brand-navy">Preferred Language</label>
              <select
                name="preferredLanguage"
                value={formData.preferredLanguage}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs font-semibold focus:ring-2 focus:ring-brand-teal/40 outline-none"
              >
                <option value="or">ଓଡ଼ିଆ (Odia)</option>
                <option value="en">English</option>
              </select>
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-brand-navy">School Name</label>
            <input
              type="text"
              name="schoolName"
              value={formData.schoolName}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs font-semibold focus:ring-2 focus:ring-brand-teal/40 outline-none"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
            <div className="space-y-1">
              <label className="text-xs font-bold text-brand-navy">Parent's Name</label>
              <input
                type="text"
                name="parentName"
                value={formData.parentName}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs font-semibold focus:ring-2 focus:ring-brand-teal/40 outline-none"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-brand-navy">Parent's Email Address</label>
              <input
                type="email"
                name="parentEmail"
                value={formData.parentEmail}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs font-semibold focus:ring-2 focus:ring-brand-teal/40 outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-4 py-3 rounded-xl bg-brand-navy text-white text-xs font-extrabold hover:bg-brand-navyLight shadow-md btn-3d flex items-center justify-center gap-2"
          >
            {loading ? <Loader2 className="w-4 h-4 animate-spin text-brand-teal" /> : <Save className="w-4 h-4 text-brand-teal" />}
            <span>Save Profile Changes</span>
          </button>
        </form>

      </div>
    </div>
  );
}
