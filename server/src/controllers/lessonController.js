const Lesson = require('../models/Lesson');
const LearningProgress = require('../models/LearningProgress');

const Subject = require('../models/Subject');
const mongoose = require('mongoose');

exports.getLessons = async (req, res) => {
  try {
    const { chapterId, subjectId, classLevel } = req.query;
    const filter = {};
    if (chapterId) filter.chapter = chapterId;

    if (subjectId) {
      if (mongoose.Types.ObjectId.isValid(subjectId)) {
        filter.subject = subjectId;
      } else {
        const sub = await Subject.findOne({
          $or: [
            { code: subjectId.toUpperCase() },
            { name: new RegExp(`^${subjectId}$`, 'i') },
          ],
        });
        if (sub) filter.subject = sub._id;
      }
    }

    if (classLevel && classLevel !== 'all') filter.classLevel = classLevel;

    const lessons = await Lesson.find(filter)
      .populate('subject', 'name nameOdia color code')
      .populate('chapter', 'title titleOdia')
      .sort({ order: 1 });
    res.json({ lessons });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching lessons', error: error.message });
  }
};

exports.getLessonById = async (req, res) => {
  try {
    const lesson = await Lesson.findById(req.params.id)
      .populate('subject', 'name nameOdia color code')
      .populate('chapter', 'title titleOdia');
    if (!lesson) return res.status(404).json({ message: 'Lesson not found' });
    res.json({ lesson });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching lesson', error: error.message });
  }
};

exports.searchLessons = async (req, res) => {
  try {
    const { q, classLevel } = req.query;
    if (!q || q.trim() === '') {
      return res.json({ results: [] });
    }

    const regex = new RegExp(q.trim(), 'i');
    const filter = {
      $or: [
        { title: regex },
        { titleOdia: regex },
        { content: regex },
        { contentOdia: regex },
        { keyTakeaways: regex },
      ],
    };
    if (classLevel) filter.classLevel = classLevel;

    const results = await Lesson.find(filter)
      .populate('subject', 'name nameOdia color')
      .populate('chapter', 'title titleOdia')
      .limit(10);

    res.json({ results });
  } catch (error) {
    res.status(500).json({ message: 'Search error', error: error.message });
  }
};

exports.completeLesson = async (req, res) => {
  try {
    const lessonId = req.params.id;
    const userId = req.user._id;

    let progress = await LearningProgress.findOne({ user: userId });
    if (!progress) {
      progress = new LearningProgress({ user: userId });
    }

    const alreadyCompleted = progress.completedLessons.some(
      (item) => item.lesson && item.lesson.toString() === lessonId
    );

    if (!alreadyCompleted) {
      progress.completedLessons.push({
        lesson: lessonId,
        completedAt: new Date(),
      });
      progress.activeMinutes = (progress.activeMinutes || 0) + 15;
      progress.lastActivityDate = new Date();
      await progress.save();
    }

    res.json({
      message: 'Lesson marked as completed',
      completedCount: progress.completedLessons.length,
      activeMinutes: progress.activeMinutes,
    });
  } catch (error) {
    res.status(500).json({ message: 'Failed to complete lesson', error: error.message });
  }
};
