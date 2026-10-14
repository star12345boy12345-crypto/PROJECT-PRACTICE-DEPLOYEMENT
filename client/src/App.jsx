import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { LanguageProvider } from './contexts/LanguageContext';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import OfflineBanner from './components/OfflineBanner';
import ProtectedRoute from './components/ProtectedRoute';
import FloatingChatbot from './components/FloatingChatbot';
import MobileBottomNav from './components/MobileBottomNav';
import ScrollToHashElement from './components/ScrollToHashElement';

// Pages
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import AiTutorPage from './pages/AiTutorPage';
import ScannerPage from './pages/ScannerPage';
import SubjectsPage from './pages/SubjectsPage';
import SubjectDetailsPage from './pages/SubjectDetailsPage';
import LessonPage from './pages/LessonPage';
import QuizPage from './pages/QuizPage';
import ProgressPage from './pages/ProgressPage';
import StudyPlannerPage from './pages/StudyPlannerPage';
import OfflineVaultPage from './pages/OfflineVaultPage';
import ParentReportPage from './pages/ParentReportPage';
import ProfilePage from './pages/ProfilePage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToHashElement />
      <LanguageProvider>
        <AuthProvider>
          <div className="min-h-screen flex flex-col bg-[#F3F6FA] text-[#243447]">
            <OfflineBanner />
            <Navbar />
            <main className="flex-1 pb-20 md:pb-0">
              <Routes>
                {/* Public Only Landing and Auth Routes */}
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />

                {/* Protected Student Routes - Automatically redirects to /login if unauthenticated */}
                <Route
                  path="/dashboard"
                  element={
                    <ProtectedRoute>
                      <DashboardPage />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/tutor"
                  element={
                    <ProtectedRoute>
                      <AiTutorPage />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/scanner"
                  element={
                    <ProtectedRoute>
                      <ScannerPage />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/subjects"
                  element={
                    <ProtectedRoute>
                      <SubjectsPage />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/subjects/:id"
                  element={
                    <ProtectedRoute>
                      <SubjectDetailsPage />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/lessons/:id"
                  element={
                    <ProtectedRoute>
                      <LessonPage />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/quizzes"
                  element={
                    <ProtectedRoute>
                      <QuizPage />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/quizzes/:id"
                  element={
                    <ProtectedRoute>
                      <QuizPage />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/offline-vault"
                  element={
                    <ProtectedRoute>
                      <OfflineVaultPage />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/progress"
                  element={
                    <ProtectedRoute>
                      <ProgressPage />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/study-planner"
                  element={
                    <ProtectedRoute>
                      <StudyPlannerPage />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/parent-report"
                  element={
                    <ProtectedRoute>
                      <ParentReportPage />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/profile"
                  element={
                    <ProtectedRoute>
                      <ProfilePage />
                    </ProtectedRoute>
                  }
                />

                {/* Catch All */}
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </main>
            <FloatingChatbot />
            <MobileBottomNav />
            <Footer />
          </div>
        </AuthProvider>
      </LanguageProvider>
    </BrowserRouter>
  );
}
