import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Loader2 } from 'lucide-react';

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F3F6FA]">
        <div className="flex flex-col items-center gap-3">
          <Loader2 className="w-8 h-8 text-brand-teal animate-spin" />
          <span className="text-sm font-semibold text-brand-navy">Initializing Vidyora AI Session...</span>
        </div>
      </div>
    );
  }

  if (!user) {
    if (
      location.pathname.startsWith('/offline-vault') ||
      location.pathname.includes('/offline-')
    ) {
      return children;
    }
    return <Navigate to="/login" replace />;
  }

  return children;
}
