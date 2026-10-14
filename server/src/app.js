const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');

// Routes
const authRoutes = require('./routes/authRoutes');
const subjectRoutes = require('./routes/subjectRoutes');
const lessonRoutes = require('./routes/lessonRoutes');
const quizRoutes = require('./routes/quizRoutes');
const aiRoutes = require('./routes/aiRoutes');
const progressRoutes = require('./routes/progressRoutes');
const studyTaskRoutes = require('./routes/studyTaskRoutes');
const syncRoutes = require('./routes/syncRoutes');
const parentRoutes = require('./routes/parentRoutes');
const recommendationRoutes = require('./routes/recommendationRoutes');

const app = express();

// Security & Middleware
app.use(cors({
  origin: '*', // Allows local dev and preview
  credentials: true,
}));
app.use(express.json({ limit: '20mb' }));
app.use(express.urlencoded({ extended: true, limit: '20mb' }));

// Auth rate limiter
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: { message: 'Too many requests from this IP, please try again after 15 minutes' },
  standardHeaders: true,
  legacyHeaders: false,
});
app.use('/api/auth/login', authLimiter);
app.use('/api/auth/register', authLimiter);

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/subjects', subjectRoutes);
app.use('/api/lessons', lessonRoutes);
app.use('/api/quizzes', quizRoutes);
app.use('/api/ai', aiRoutes);
app.use('/api/progress', progressRoutes);
app.use('/api/study-tasks', studyTaskRoutes);
app.use('/api/sync', syncRoutes);
app.use('/api/parent', parentRoutes);
app.use('/api/recommendations', recommendationRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    app: 'Vidyora AI Backend API',
    hackathon: 'NEXTECH 2.0 | NMIET | NIRMIT 2026',
    team: 'AgniX',
    timestamp: new Date().toISOString(),
  });
});

// Diagnostic Email Test Endpoint
app.get('/api/test-email', async (req, res) => {
  const targetEmail = req.query.to || process.env.EMAIL_USER || 'vidyorai@gmail.com';
  const emailService = require('./services/emailService');
  const result = await emailService.dispatchMail({
    from: `"Vidyora AI Diagnostic" <${process.env.EMAIL_USER || 'vidyorai@gmail.com'}>`,
    to: targetEmail,
    subject: '🔔 Vidyora AI System Test: Email Delivery Operational',
    html: `
      <div style="font-family: sans-serif; padding: 25px; border-radius: 12px; background: #0E1B30; color: #ffffff;">
        <h2 style="color: #26C4B1; margin-top: 0;">Vidyora AI Email Engine Verified ✅</h2>
        <p>This email confirms that your Vidyora AI email notification system is completely active and delivering messages properly.</p>
        <p style="color: #94a3b8; font-size: 12px;">Dispatched at: ${new Date().toISOString()}</p>
      </div>
    `
  });

  res.json({
    attemptedTo: targetEmail,
    result,
    configuredOnHost: {
      EMAIL_USER: !!process.env.EMAIL_USER,
      EMAIL_PASS: !!process.env.EMAIL_PASS,
      CLIENT_URL: process.env.CLIENT_URL || 'not set'
    }
  });
});

// 404 handler
app.use('/api/*', (req, res) => {
  res.status(404).json({ message: `API route not found: ${req.originalUrl}` });
});

// Centralized error handler
app.use((err, req, res, next) => {
  console.error('Unhandled Server Error:', err);
  res.status(err.status || 500).json({
    message: err.message || 'Internal Server Error',
    error: process.env.NODE_ENV === 'development' ? err.stack : undefined,
  });
});

module.exports = app;
