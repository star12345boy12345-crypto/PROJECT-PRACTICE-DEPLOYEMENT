import axios from 'axios';

const isLocal = typeof window !== 'undefined' && (
  window.location.hostname === 'localhost' ||
  window.location.hostname === '127.0.0.1' ||
  window.location.hostname.startsWith('192.168.') ||
  window.location.hostname.startsWith('10.') ||
  window.location.hostname.startsWith('172.') ||
  window.location.hostname.endsWith('.local')
);

const API_BASE = import.meta.env.VITE_API_URL || (
  isLocal
    ? `http://${window.location.hostname}:5000/api`
    : 'https://vidyora-ai.onrender.com/api'
);

const api = axios.create({
  baseURL: API_BASE,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 45000,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('vidyora_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  if (typeof FormData !== 'undefined' && config.data instanceof FormData) {
    delete config.headers['Content-Type'];
  }
  return config;
}, (error) => Promise.reject(error));

export const authAPI = {
  register: (data) => api.post('/auth/register', data),
  login: (data) => api.post('/auth/login', data),
  getMe: () => api.get('/auth/me'),
  updateProfile: (data) => api.put('/auth/profile', data),
  forgotPassword: (email) => api.post('/auth/forgot-password', { email }),
  verifyResetCode: (email, code) => api.post('/auth/verify-reset-code', { email, code }),
  resetPassword: (email, code, newPassword) => api.post('/auth/reset-password', { email, code, newPassword }),
};

export const subjectsAPI = {
  getSubjects: (params) => api.get('/subjects', { params }),
  getSubjectById: (id) => api.get(`/subjects/${id}`),
  getChapters: (subjectId, params) => api.get(`/subjects/${subjectId}/chapters`, { params }),
};

export const lessonsAPI = {
  getLessons: (params) => api.get('/lessons', { params }),
  getLessonById: (id) => api.get(`/lessons/${id}`),
  searchLessons: (query, classLevel) => api.get('/lessons/search', { params: { q: query, classLevel } }),
  markCompleted: (id) => api.post(`/lessons/${id}/complete`),
};

export const quizzesAPI = {
  getQuizzes: (params) => api.get('/quizzes', { params }),
  getQuizById: (id) => api.get(`/quizzes/${id}`),
  submitQuiz: (id, answers) => api.post(`/quizzes/${id}/submit`, { answers }),
  getHistory: () => api.get('/quizzes/history'),
  generateQuiz: (data) => api.post('/quizzes/generate', data),
};

export const aiAPI = {
  askChat: (data) => api.post('/ai/chat', data),
  explainImage: (data) => {
    if (typeof FormData !== 'undefined' && data instanceof FormData) {
      return api.post('/ai/explain-image', data, {
        headers: { 'Content-Type': undefined },
      });
    }
    return api.post('/ai/explain-image', data);
  },
  generateDiagram: (data) => api.post('/ai/generate-diagram', data),
};

export const progressAPI = {
  getProgress: () => api.get('/progress'),
  getWeakTopics: () => api.get('/progress/weak-topics'),
  getAnalytics: () => api.get('/progress/analytics'),
};

export const recommendationsAPI = {
  getRecommendations: () => api.get('/recommendations'),
};

export const studyTasksAPI = {
  getTasks: () => api.get('/study-tasks'),
  createTask: (data) => api.post('/study-tasks', data),
  updateTask: (id, data) => api.patch(`/study-tasks/${id}`, data),
  deleteTask: (id) => api.delete(`/study-tasks/${id}`),
};

export const syncAPI = {
  syncProgress: (payload) => {
    if (Array.isArray(payload)) {
      return api.post('/sync/progress', { attempts: payload });
    }
    return api.post('/sync/progress', payload);
  },
  getCurriculumBundle: (params) => api.get('/sync/curriculum-bundle', { params }),
};

export const parentAPI = {
  getParentSummary: () => api.get('/parent/summary'),
  sendReportEmail: (parentEmail) => api.post('/parent/send-report', { parentEmail }),
};

export default api;
