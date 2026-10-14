const Subject = require('../models/Subject');
const Chapter = require('../models/Chapter');
const Lesson = require('../models/Lesson');
const Quiz = require('../models/Quiz');
const offlineSyncService = require('../services/offlineSyncService');

/**
 * Returns complete curriculum bundle (subjects, chapters, lessons, quizzes)
 * from MongoDB for offline client caching.
 */
exports.getCurriculumBundle = async (req, res) => {
  try {
    const { classLevel } = req.query;
    const filter = {};
    if (classLevel && classLevel !== 'all') {
      filter.classLevel = classLevel;
    }

    const [subjects, chapters, lessons, quizzes] = await Promise.all([
      Subject.find({}).sort({ code: 1 }),
      Chapter.find(filter).populate('subject', 'name nameOdia code color icon').sort({ order: 1 }),
      Lesson.find(filter)
        .populate('subject', 'name nameOdia code color icon')
        .populate('chapter', 'title titleOdia')
        .sort({ order: 1 }),
      Quiz.find(filter)
        .populate('subject', 'name nameOdia code color icon')
        .populate('chapter', 'title titleOdia'),
    ]);

    res.json({
      success: true,
      version: '2026.10.curriculum.v1',
      timestamp: new Date().toISOString(),
      classLevel: classLevel || 'all',
      counts: {
        subjects: subjects.length,
        chapters: chapters.length,
        lessons: lessons.length,
        quizzes: quizzes.length,
      },
      bundle: {
        subjects,
        chapters,
        lessons,
        quizzes,
      },
    });
  } catch (error) {
    console.error('Failed to retrieve curriculum bundle:', error);
    res.status(500).json({ message: 'Error retrieving curriculum bundle', error: error.message });
  }
};

/**
 * Synchronize offline quiz attempts and completed lessons when device reconnects online.
 */
exports.syncProgress = async (req, res) => {
  try {
    let attempts = [];
    let completedLessons = [];

    if (Array.isArray(req.body)) {
      // Legacy array payload: direct quiz attempts
      attempts = req.body;
    } else if (req.body && typeof req.body === 'object') {
      attempts = Array.isArray(req.body.attempts) ? req.body.attempts : [];
      completedLessons = Array.isArray(req.body.completedLessons) ? req.body.completedLessons : [];
    }

    if (attempts.length === 0 && completedLessons.length === 0) {
      return res.json({
        success: true,
        syncedCount: 0,
        syncedAttemptsCount: 0,
        syncedLessonsCount: 0,
        syncedIds: [],
        message: 'No pending items to sync',
      });
    }

    const result = await offlineSyncService.syncProgress(req.user._id, {
      attempts,
      completedLessons,
    });

    res.json(result);
  } catch (error) {
    console.error('Sync progress error:', error);
    res.status(500).json({ message: 'Sync failed', error: error.message });
  }
};
