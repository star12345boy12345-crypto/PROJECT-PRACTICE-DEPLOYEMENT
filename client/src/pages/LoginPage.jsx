import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';
import { authAPI } from '../services/api';
import {
  Sparkles,
  LogIn,
  Lock,
  Mail,
  AlertCircle,
  ArrowRight,
  UserCheck,
  ChevronLeft,
  Home,
  KeyRound,
  CheckCircle2,
  RefreshCw,
  Eye,
  EyeOff,
  ShieldCheck,
  ArrowLeft
} from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Forgot Password Mode & Multi-Step Wizard States
  const [mode, setMode] = useState('login'); // 'login' | 'forgot'
  const [resetStep, setResetStep] = useState(1); // 1: Email, 2: Code, 3: New Password
  const [resetEmail, setResetEmail] = useState('');
  const [resetCode, setResetCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [resetError, setResetError] = useState('');
  const [resetSuccess, setResetSuccess] = useState('');
  const [resetLoading, setResetLoading] = useState(false);
  const [resendCooldown, setResendCooldown] = useState(0);

  const { login, quickDemoLogin, setAuthSession } = useAuth();
  const { lang, t } = useLanguage();
  const navigate = useNavigate();

  // Handle Resend Cooldown Timer
  useEffect(() => {
    let timer;
    if (resendCooldown > 0) {
      timer = setTimeout(() => setResendCooldown((prev) => prev - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [resendCooldown]);

  const handleBack = () => {
    if (mode === 'forgot') {
      setMode('login');
      setResetStep(1);
      setResetError('');
      setResetSuccess('');
      return;
    }
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    const res = await login(email, password);
    setLoading(false);
    if (res.success) {
      navigate('/dashboard');
    } else {
      setError(res.message);
    }
  };

  const handleDemoLogin = async () => {
    setEmail('demo.student@vidyora.ai');
    setPassword('vidyora123');
    setLoading(true);
    const res = await quickDemoLogin();
    setLoading(false);
    if (res.success) {
      navigate('/dashboard');
    } else {
      setError(res.message);
    }
  };

  const handleStartForgotPassword = () => {
    setResetEmail(email || '');
    setResetStep(1);
    setResetError('');
    setResetSuccess('');
    setMode('forgot');
  };

  // Step 1: Send Reset Code to Email
  const handleSendResetCode = async (e) => {
    e?.preventDefault();
    setResetError('');
    setResetSuccess('');

    if (!resetEmail || !resetEmail.trim() || !resetEmail.includes('@')) {
      setResetError(lang === 'or' ? 'ଦୟାକରି ଏକ ସଠିକ୍ ଇମେଲ୍ ପ୍ରବେଶ କରନ୍ତୁ ।' : 'Please enter a valid email address.');
      return;
    }

    setResetLoading(true);
    try {
      const res = await authAPI.forgotPassword(resetEmail.trim());
      setResetLoading(false);
      setResetSuccess(
        lang === 'or'
          ? `ଆପଣଙ୍କ ଇମେଲ୍ (${resetEmail}) କୁ ୬-ଅଙ୍କ ବିଶିଷ୍ଟ କୋଡ୍ ପଠାଗଲା ।`
          : `A 6-digit verification code has been sent to ${resetEmail}. Check your inbox.`
      );
      setResetStep(2);
      setResendCooldown(45);
    } catch (err) {
      setResetLoading(false);
      setResetError(
        err.response?.data?.message ||
        (lang === 'or' ? 'ଇମେଲ୍ ପଠାଇବାରେ ତ୍ରୁଟି ଘଟିଲା । ଦୟାକରି ପୁଣି ଚେଷ୍ଟା କରନ୍ତୁ ।' : 'Failed to send reset code. Please check email address.')
      );
    }
  };

  // Step 2: Verify Code
  const handleVerifyCode = async (e) => {
    e?.preventDefault();
    setResetError('');
    setResetSuccess('');

    const cleanCode = resetCode.trim();
    if (!cleanCode || cleanCode.length < 6) {
      setResetError(lang === 'or' ? 'ଦୟାକରି ୬-ଅଙ୍କ ବିଶିଷ୍ଟ କୋଡ୍ ପ୍ରବେଶ କରନ୍ତୁ ।' : 'Please enter the complete 6-digit code.');
      return;
    }

    setResetLoading(true);
    try {
      await authAPI.verifyResetCode(resetEmail.trim(), cleanCode);
      setResetLoading(false);
      setResetSuccess(
        lang === 'or'
          ? 'କୋଡ୍ ସଫଳତାର ସହ ଯାଞ୍ଚ ହେଲା । ଏବେ ନୂଆ ପାସୱାର୍ଡ ଦିଅନ୍ତୁ ।'
          : 'Verification code confirmed. Enter your new password.'
      );
      setResetStep(3);
    } catch (err) {
      setResetLoading(false);
      setResetError(
        err.response?.data?.message ||
        (lang === 'or' ? 'ଅବୈଧ କିମ୍ବା ସମୟ ସମାପ୍ତ କୋଡ୍ । ପୁନର୍ବାର ଯାଞ୍ଚ କରନ୍ତୁ ।' : 'Invalid or expired verification code.')
      );
    }
  };

  // Step 3: Set New Password & Direct Access Account
  const handleResetPassword = async (e) => {
    e?.preventDefault();
    setResetError('');
    setResetSuccess('');

    if (!newPassword || newPassword.length < 6) {
      setResetError(lang === 'or' ? 'ପାସୱାର୍ଡ ଅତିକମରେ ୬ ଅକ୍ଷର ବିଶିଷ୍ଟ ହେବା ଆବଶ୍ୟକ ।' : 'New password must be at least 6 characters.');
      return;
    }

    if (newPassword !== confirmPassword) {
      setResetError(lang === 'or' ? 'ଉଭୟ ପାସୱାର୍ଡ ମେଳ ଖାଉନାହିଁ ।' : 'Passwords do not match.');
      return;
    }

    setResetLoading(true);
    try {
      const res = await authAPI.resetPassword(resetEmail.trim(), resetCode.trim(), newPassword);
      setResetLoading(false);

      if (res.data?.token && res.data?.user) {
        // Direct auto-login and access account immediately!
        setAuthSession(res.data.token, res.data.user);
        setResetSuccess(
          lang === 'or'
            ? 'ପାସୱାର୍ଡ ସଫଳତାର ସହ ପରିବର୍ତ୍ତିତ ହେଲା! ଆକାଉଣ୍ଟ ଖୋଲୁଛି...'
            : 'Password reset successful! Logging into your account...'
        );
        setTimeout(() => {
          navigate('/dashboard');
        }, 800);
      } else {
        setResetSuccess(lang === 'or' ? 'ପାସୱାର୍ଡ ବଦଳିଲା । ଏବେ ଲଗ୍-ଇନ୍ କରନ୍ତୁ ।' : 'Password reset successful! Please sign in.');
        setTimeout(() => {
          setMode('login');
          setPassword(newPassword);
          setEmail(resetEmail);
        }, 1200);
      }
    } catch (err) {
      setResetLoading(false);
      setResetError(
        err.response?.data?.message ||
        (lang === 'or' ? 'ପାସୱାର୍ଡ ପରିବର୍ତ୍ତନରେ ତ୍ରୁଟି । ଦୟାକରି ପୁଣି ଚେଷ୍ଟା କରନ୍ତୁ ।' : 'Failed to reset password.')
      );
    }
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center px-4 py-12 gradient-bg">
      <div className="w-full max-w-md">
        
        {/* Top Back & Home Navigation */}
        <div className="mb-4 flex items-center justify-between">
          <button
            type="button"
            onClick={handleBack}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-300 text-xs font-extrabold text-brand-navy hover:bg-slate-50 hover:border-brand-teal transition-all shadow-xs cursor-pointer group"
          >
            <ChevronLeft className="w-4 h-4 text-brand-teal group-hover:-translate-x-1 transition-transform" />
            <span>
              {mode === 'forgot'
                ? (lang === 'or' ? '← ଲଗ୍-ଇନ୍ କୁ ଫେରନ୍ତୁ' : '← Back to Sign In')
                : (lang === 'or' ? '← ପଛକୁ ଫେରନ୍ତୁ' : '← Back')}
            </span>
          </button>

          <Link
            to="/"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/90 border border-slate-200 text-xs font-bold text-slate-600 hover:text-brand-navy hover:bg-white transition-all shadow-2xs"
          >
            <Home className="w-3.5 h-3.5 text-brand-teal" />
            <span>{lang === 'or' ? 'ମୂଳପୃଷ୍ଠା (Home)' : 'Home'}</span>
          </Link>
        </div>

        {/* Card */}
        <div className="glass-panel p-8 sm:p-10 rounded-3xl shadow-xl border border-slate-200/90 space-y-6">
          
          {/* ============================================================= */}
          {/* REGULAR SIGN-IN FORM VIEW                                     */}
          {/* ============================================================= */}
          {mode === 'login' ? (
            <>
              {/* Header */}
              <div className="relative text-center space-y-2">
                <div className="w-16 h-16 rounded-2xl bg-brand-navy p-1.5 mx-auto shadow-lg border border-brand-teal/30 flex items-center justify-center overflow-hidden">
                  <img
                    src="/logo.png"
                    alt="Vidyora AI"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy">
                  {t('auth.loginTitle')}
                </h2>
                <p className="text-xs sm:text-sm text-brand-muted">
                  {lang === 'or' ? 'ନିଜର ଇମେଲ୍ ଓ ପାସୱାର୍ଡ ଦେଇ ପାଠପଢା ଜାରି ରଖନ୍ତୁ' : 'Enter your credentials to continue your learning journey'}
                </p>
              </div>

              {/* Quick Demo Student Fill Button */}
              <div className="p-3.5 rounded-2xl bg-brand-teal/10 border border-brand-teal/30 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <UserCheck className="w-5 h-5 text-brand-teal" />
                  <div>
                    <div className="text-xs font-bold text-brand-navy">Hackathon Reviewer?</div>
                    <div className="text-[11px] text-slate-500">Auto-fill demo student profile</div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleDemoLogin}
                  className="px-3 py-1.5 rounded-xl bg-brand-navy text-white text-xs font-extrabold hover:bg-brand-navyLight shadow-xs cursor-pointer"
                >
                  One-Click Login
                </button>
              </div>

              {error && (
                <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              {/* Form */}
              <form onSubmit={handleLoginSubmit} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-brand-navy">{t('auth.email')}</label>
                  <div className="relative flex items-center">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="student@vidyora.ai"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-slate-200 text-sm font-medium focus:ring-2 focus:ring-brand-teal/40 focus:border-brand-teal outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold text-brand-navy">{t('auth.password')}</label>
                    <button
                      type="button"
                      onClick={handleStartForgotPassword}
                      className="text-[11px] font-extrabold text-brand-teal hover:text-brand-navy transition-colors cursor-pointer"
                    >
                      {lang === 'or' ? 'ପାସୱାର୍ଡ ଭୁଲିଯାଇଛନ୍ତି କି?' : 'Forgot Password?'}
                    </button>
                  </div>
                  <div className="relative flex items-center">
                    <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full pl-10 pr-10 py-3 rounded-xl bg-white border border-slate-200 text-sm font-medium focus:ring-2 focus:ring-brand-teal/40 focus:border-brand-teal outline-none transition-all"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3.5 text-slate-400 hover:text-slate-600 cursor-pointer"
                      title={showPassword ? 'Hide password' : 'Show password'}
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-xl bg-brand-navy text-white font-extrabold text-sm shadow-md btn-3d hover:bg-brand-navyLight flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <span>{loading ? 'Signing in...' : t('auth.btnSignIn')}</span>
                  <ArrowRight className="w-4 h-4 text-brand-teal" />
                </button>
              </form>

              {/* Footer Note */}
              <div className="text-center text-xs text-slate-500 pt-2">
                <span>{lang === 'or' ? 'ଖାତା ନାହିଁ କି? ' : "Don't have an account? "}</span>
                <Link to="/register" className="font-extrabold text-brand-teal hover:underline">
                  {t('auth.btnSignUp')}
                </Link>
              </div>
            </>
          ) : (
            /* ============================================================= */
            /* FORGOT PASSWORD 3-STEP FLOW                                   */
            /* ============================================================= */
            <div className="space-y-5 animate-fadeIn">
              
              {/* Header */}
              <div className="text-center space-y-1.5">
                <div className="w-14 h-14 rounded-2xl bg-teal-500/10 text-brand-teal p-3 mx-auto flex items-center justify-center shadow-xs border border-teal-500/20">
                  <KeyRound className="w-7 h-7" />
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-brand-navy">
                  {lang === 'or' ? 'ପାସୱାର୍ଡ ପୁନରୁଦ୍ଧାର' : 'Reset Your Password'}
                </h2>
                <p className="text-xs text-brand-muted">
                  {resetStep === 1 && (lang === 'or' ? 'ନିଜର ଇମେଲ୍ ଦିଅନ୍ତୁ, ସେଥିରେ ୬-ଅଙ୍କ ବିଶିଷ୍ଟ କୋଡ୍ ପଠାଯିବ' : 'Enter your email to receive a 6-digit verification code')}
                  {resetStep === 2 && (lang === 'or' ? 'ଇମେଲ୍ ରେ ଆସିଥିବା ୬-ଅଙ୍କ ବିଶିଷ୍ଟ କୋଡ୍ ପ୍ରବେଶ କରନ୍ତୁ' : 'Enter the 6-digit code sent to your email address')}
                  {resetStep === 3 && (lang === 'or' ? 'ନୂଆ ପାସୱାର୍ଡ ସେଭ୍ କରି ତୁରନ୍ତ ଆକାଉଣ୍ଟ ଆକ୍ସେସ୍ କରନ୍ତୁ' : 'Set your new password to regain instant account access')}
                </p>
              </div>

              {/* Step Progress Indicators */}
              <div className="flex items-center justify-center gap-2 py-1">
                {[
                  { num: 1, label: lang === 'or' ? 'ଇମେଲ୍' : 'Email' },
                  { num: 2, label: lang === 'or' ? 'କୋଡ୍' : 'Code' },
                  { num: 3, label: lang === 'or' ? 'ପାସୱାର୍ଡ' : 'Password' },
                ].map((s) => (
                  <div key={s.num} className="flex items-center gap-1.5">
                    <span
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-black transition-all ${
                        resetStep === s.num
                          ? 'bg-brand-navy text-white shadow-xs ring-2 ring-brand-teal/40'
                          : resetStep > s.num
                          ? 'bg-emerald-500 text-white'
                          : 'bg-slate-100 text-slate-400'
                      }`}
                    >
                      {resetStep > s.num ? '✓' : s.num}
                    </span>
                    <span className="text-[11px] font-bold text-slate-600 hidden sm:inline">{s.label}</span>
                    {s.num < 3 && <span className="w-5 h-0.5 bg-slate-200" />}
                  </div>
                ))}
              </div>

              {/* Status Alerts */}
              {resetError && (
                <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{resetError}</span>
                </div>
              )}

              {resetSuccess && (
                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
                  <span>{resetSuccess}</span>
                </div>
              )}

              {/* STEP 1: ENTER EMAIL */}
              {resetStep === 1 && (
                <form onSubmit={handleSendResetCode} className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-brand-navy">
                      {lang === 'or' ? 'ପଞ୍ଜୀକୃତ ଇମେଲ୍ ଠିକଣା' : 'Registered Student Email'}
                    </label>
                    <div className="relative flex items-center">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
                      <input
                        type="email"
                        required
                        value={resetEmail}
                        onChange={(e) => setResetEmail(e.target.value)}
                        placeholder="student@example.com"
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-slate-200 text-sm font-medium focus:ring-2 focus:ring-brand-teal/40 focus:border-brand-teal outline-none transition-all"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={resetLoading}
                    className="w-full py-3.5 rounded-xl bg-brand-navy text-white font-extrabold text-sm shadow-md btn-3d hover:bg-brand-navyLight flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    {resetLoading ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin text-brand-teal" />
                        <span>{lang === 'or' ? 'କୋଡ୍ ପ୍ରେରିତ ହେଉଛି...' : 'Sending Code...'}</span>
                      </>
                    ) : (
                      <>
                        <Mail className="w-4 h-4 text-brand-teal" />
                        <span>{lang === 'or' ? 'କୋଡ୍ ପଠାନ୍ତୁ' : 'Send Verification Code'}</span>
                      </>
                    )}
                  </button>
                </form>
              )}

              {/* STEP 2: ENTER VERIFICATION CODE */}
              {resetStep === 2 && (
                <form onSubmit={handleVerifyCode} className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-brand-navy">
                      {lang === 'or' ? '୬-ଅଙ୍କ ବିଶିଷ୍ଟ କୋଡ୍' : '6-Digit Verification Code'}
                    </label>
                    <div className="relative flex items-center">
                      <ShieldCheck className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
                      <input
                        type="text"
                        required
                        maxLength={6}
                        value={resetCode}
                        onChange={(e) => setResetCode(e.target.value.replace(/\D/g, ''))}
                        placeholder="123456"
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-slate-200 text-center font-mono tracking-widest text-lg font-black focus:ring-2 focus:ring-brand-teal/40 focus:border-brand-teal outline-none transition-all"
                      />
                    </div>
                    <div className="flex items-center justify-between pt-1">
                      <span className="text-[11px] text-slate-400">
                        {lang === 'or' ? 'କୋଡ୍ ପାଇନାହାନ୍ତି କି?' : 'Did not receive code?'}
                      </span>
                      <button
                        type="button"
                        onClick={handleSendResetCode}
                        disabled={resendCooldown > 0 || resetLoading}
                        className={`text-[11px] font-bold cursor-pointer ${
                          resendCooldown > 0
                            ? 'text-slate-400 cursor-not-allowed'
                            : 'text-brand-teal hover:underline'
                        }`}
                      >
                        {resendCooldown > 0
                          ? `${lang === 'or' ? 'ପୁଣି ପଠାନ୍ତୁ' : 'Resend in'} (${resendCooldown}s)`
                          : (lang === 'or' ? 'ପୁଣି କୋଡ୍ ପଠାନ୍ତୁ' : 'Resend Code')}
                      </button>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={resetLoading || resetCode.length < 6}
                    className="w-full py-3.5 rounded-xl bg-brand-navy text-white font-extrabold text-sm shadow-md btn-3d hover:bg-brand-navyLight flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-50"
                  >
                    {resetLoading ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin text-brand-teal" />
                        <span>{lang === 'or' ? 'ଯାଞ୍ଚ ହେଉଛି...' : 'Verifying...'}</span>
                      </>
                    ) : (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-brand-teal" />
                        <span>{lang === 'or' ? 'କୋଡ୍ ଯାଞ୍ଚ କରନ୍ତୁ' : 'Verify Code'}</span>
                      </>
                    )}
                  </button>
                </form>
              )}

              {/* STEP 3: SET NEW PASSWORD & AUTO-LOGIN */}
              {resetStep === 3 && (
                <form onSubmit={handleResetPassword} className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-brand-navy">
                      {lang === 'or' ? 'ନୂଆ ପାସୱାର୍ଡ' : 'New Password'}
                    </label>
                    <div className="relative flex items-center">
                      <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
                      <input
                        type={showNewPassword ? 'text' : 'password'}
                        required
                        minLength={6}
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full pl-10 pr-10 py-3 rounded-xl bg-white border border-slate-200 text-sm font-medium focus:ring-2 focus:ring-brand-teal/40 focus:border-brand-teal outline-none transition-all"
                      />
                      <button
                        type="button"
                        onClick={() => setShowNewPassword(!showNewPassword)}
                        className="absolute right-3.5 text-slate-400 hover:text-slate-600 cursor-pointer"
                      >
                        {showNewPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-brand-navy">
                      {lang === 'or' ? 'ପାସୱାର୍ଡ ନିଶ୍ଚିତ କରନ୍ତୁ' : 'Confirm New Password'}
                    </label>
                    <div className="relative flex items-center">
                      <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
                      <input
                        type={showNewPassword ? 'text' : 'password'}
                        required
                        minLength={6}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-slate-200 text-sm font-medium focus:ring-2 focus:ring-brand-teal/40 focus:border-brand-teal outline-none transition-all"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={resetLoading}
                    className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    {resetLoading ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin text-white" />
                        <span>{lang === 'or' ? 'ସେଭ୍ ହେଉଛି...' : 'Saving & Logging in...'}</span>
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4 text-amber-300" />
                        <span>{lang === 'or' ? 'ପାସୱାର୍ଡ ବଦଳାନ୍ତୁ ଓ ଲଗ୍-ଇନ୍ କରନ୍ତୁ' : 'Save Password & Access Account'}</span>
                      </>
                    )}
                  </button>
                </form>
              )}

              {/* Cancel / Back to Login */}
              <div className="text-center pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setMode('login');
                    setResetStep(1);
                    setResetError('');
                    setResetSuccess('');
                  }}
                  className="text-xs font-extrabold text-slate-500 hover:text-brand-navy flex items-center gap-1 mx-auto cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>{lang === 'or' ? 'ମନେ ପଡିଗଲା? ଲଗ୍-ଇନ୍ କରନ୍ତୁ' : 'Remembered your password? Sign in'}</span>
                </button>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
}
