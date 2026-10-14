import React, { createContext, useContext, useState, useEffect } from 'react';
import { authAPI, syncAPI } from '../services/api';
import {
  getPendingSyncItems,
  clearPendingSyncItem,
  downloadCurriculumBundleFromServer
} from '../services/offlineStorage';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem('vidyora_token'));
  const [user, setUser] = useState(() => {
    try {
      const cached = localStorage.getItem('vidyora_cached_user');
      return cached ? JSON.parse(cached) : null;
    } catch {
      return null;
    }
  });
  // Only show blocking loader if a token exists but user profile has never been cached
  const [loading, setLoading] = useState(() => {
    const hasToken = !!localStorage.getItem('vidyora_token');
    const hasCached = !!localStorage.getItem('vidyora_cached_user');
    return hasToken && !hasCached;
  });
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [syncStatus, setSyncStatus] = useState({ pendingCount: 0, lastSynced: null });

  // On first access / app open on this device: automatically download all classes curriculum
  useEffect(() => {
    const initOfflineStorage = async () => {
      try {
        if (navigator.onLine) {
          await downloadCurriculumBundleFromServer({ classLevel: 'all' });
        }
      } catch (err) {
        console.warn('Initial offline bundle caching check:', err);
      }
    };
    initOfflineStorage();
  }, []);

  // Handle online/offline events, auto-sync on reconnect & periodic background sync
  useEffect(() => {
    const handleOnline = async () => {
      setIsOnline(true);
      // Trigger synchronization of offline progress to MongoDB
      await triggerOfflineSync();
      // Also ensure offline curriculum cache is complete across all classes
      downloadCurriculumBundleFromServer({ classLevel: 'all' }).catch(() => {});
    };
    const handleOffline = () => {
      setIsOnline(false);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Initial sync check & auto-sync if token exists
    checkPendingSync();
    if (navigator.onLine && (token || localStorage.getItem('vidyora_token'))) {
      triggerOfflineSync().catch(() => {});
    }

    // Periodic background sync checker (runs every 30s when online to auto-sync any queued offline progress)
    const syncInterval = setInterval(() => {
      if (navigator.onLine && (token || localStorage.getItem('vidyora_token'))) {
        triggerOfflineSync().catch(() => {});
      }
    }, 30000);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      clearInterval(syncInterval);
    };
  }, [token]);

  const checkPendingSync = async () => {
    try {
      const pending = await getPendingSyncItems();
      setSyncStatus((prev) => ({ ...prev, pendingCount: pending.length }));
    } catch {
      // IndexedDB might not be available
    }
  };

  const triggerOfflineSync = async () => {
    const activeToken = token || localStorage.getItem('vidyora_token');
    if (!activeToken) return;
    try {
      const pending = await getPendingSyncItems();
      if (pending.length > 0) {
        const attempts = pending.filter((item) => item.type === 'quiz_attempt' || (!item.type && item.answers));
        const completedLessons = pending.filter((item) => item.type === 'lesson_completed');

        const res = await syncAPI.syncProgress({ attempts, completedLessons });
        if (res.data && res.data.syncedIds) {
          for (const tempId of res.data.syncedIds) {
            await clearPendingSyncItem(tempId);
          }
          setSyncStatus({
            pendingCount: 0,
            lastSynced: new Date().toLocaleTimeString(),
            syncedCount: res.data.syncedCount || pending.length
          });
          console.log('[Offline Sync] Successfully synced offline progress to MongoDB server:', res.data);
        }
      }
    } catch (err) {
      console.warn('Sync attempt note (will retry automatically):', err?.message || err);
    }
  };

  // Load user on token change
  useEffect(() => {
    const fetchUser = async () => {
      if (!token) {
        setUser(null);
        setLoading(false);
        return;
      }
      try {
        const res = await authAPI.getMe();
        if (res.data?.user) {
          setUser(res.data.user);
          localStorage.setItem('vidyora_cached_user', JSON.stringify(res.data.user));
        }
      } catch (err) {
        console.warn('Failed to verify token:', err.message);
        // Only invalidate session on explicit 401 Unauthorized
        if (err.response?.status === 401) {
          localStorage.removeItem('vidyora_token');
          localStorage.removeItem('vidyora_cached_user');
          setToken(null);
          setUser(null);
        } else {
          // Network error or cold-start: keep cached user so student experience is uninterrupted
          const cachedUser = localStorage.getItem('vidyora_cached_user');
          if (cachedUser) {
            try {
              setUser(JSON.parse(cachedUser));
            } catch {
              // ignore
            }
          }
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [token]);

  const login = async (email, password) => {
    try {
      const res = await authAPI.login({ email, password });
      const { token: newToken, user: userData } = res.data;
      localStorage.setItem('vidyora_token', newToken);
      localStorage.setItem('vidyora_cached_user', JSON.stringify(userData));
      setToken(newToken);
      setUser(userData);

      // Automatically download full curriculum bundle across all classes into device storage
      downloadCurriculumBundleFromServer({ classLevel: 'all' }).catch(() => {});
      // Automatically sync any offline progress queued on this device
      triggerOfflineSync().catch(() => {});

      return { success: true, user: userData };
    } catch (err) {
      return {
        success: false,
        message: err.response?.data?.message || 'Login failed. Please check credentials.'
      };
    }
  };

  const register = async (formData) => {
    try {
      const res = await authAPI.register(formData);
      const { token: newToken, user: userData } = res.data;
      localStorage.setItem('vidyora_token', newToken);
      localStorage.setItem('vidyora_cached_user', JSON.stringify(userData));
      setToken(newToken);
      setUser(userData);

      // Automatically download full curriculum bundle across all classes into device storage (forced)
      downloadCurriculumBundleFromServer({ classLevel: 'all', force: true }).catch(() => {});
      // Automatically sync any offline progress queued on this device
      triggerOfflineSync().catch(() => {});

      return { success: true, user: userData };
    } catch (err) {
      return {
        success: false,
        message: err.response?.data?.message || 'Registration failed. Please try again.'
      };
    }
  };

  const quickDemoLogin = async () => {
    const res = await login('demo.student@vidyora.ai', 'vidyora123');
    return res;
  };

  const setAuthSession = (newToken, userData) => {
    localStorage.setItem('vidyora_token', newToken);
    localStorage.setItem('vidyora_cached_user', JSON.stringify(userData));
    setToken(newToken);
    setUser(userData);

    // Automatically ensure full offline bundle is present
    downloadCurriculumBundleFromServer({ classLevel: 'all' }).catch(() => {});
    triggerOfflineSync().catch(() => {});
  };

  const logout = () => {
    localStorage.removeItem('vidyora_token');
    localStorage.removeItem('vidyora_cached_user');
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        isOnline,
        syncStatus,
        login,
        register,
        quickDemoLogin,
        logout,
        setAuthSession,
        checkPendingSync,
        triggerOfflineSync
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
