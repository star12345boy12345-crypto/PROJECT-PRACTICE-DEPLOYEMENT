const Quiz = require('../models/Quiz');
const QuizAttempt = require('../models/QuizAttempt');
const LearningProgress = require('../models/LearningProgress');
const Lesson = require('../models/Lesson');
const quizEvaluationService = require('./quizEvaluationService');

class OfflineSyncService {
  /**
   * Synchronize pending offline quiz attempts and completed lessons
   * @param {string} userId
   * @param {Object} payload { attempts: Array, completedLessons: Array }
   */
  async syncProgress(userId, { attempts = [], completedLessons = [] } = {}) {
    const syncedIds = [];
    const errors = [];
    let syncedAttemptsCount = 0;
    let syncedLessonsCount = 0;

    // 1. Process offline quiz attempts
    if (Array.isArray(attempts)) {
      for (const item of attempts) {
        try {
          const { quizId, answers, tempId } = item;

          // Check if already synced using offlineTempId
          if (tempId) {
            const existing = await QuizAttempt.findOne({ offlineTempId: tempId });
            if (existing) {
              syncedIds.push(tempId);
              continue;
            }
          }

          let quiz = null;
          if (quizId && !String(quizId).startsWith('offline-')) {
            try {
              quiz = await Quiz.findById(quizId).populate('subject');
            } catch {
              // Ignore invalid ObjectId formats
            }
          }
          if (!quiz && item.quizTitle) {
            quiz = await Quiz.findOne({ title: item.quizTitle }).populate('subject');
          }
          if (!quiz) {
            quiz = await Quiz.findOne().populate('subject');
          }

          if (quiz) {
            await quizEvaluationService.evaluateQuizAttempt({
              userId,
              quiz,
              submittedAnswers: answers || [],
              isOffline: true,
              offlineTempId: tempId,
            });
            syncedAttemptsCount++;
          }

          if (tempId) syncedIds.push(tempId);
        } catch (err) {
          console.error(`Error syncing quiz attempt (${item.tempId}):`, err.message);
          errors.push({ tempId: item.tempId, error: err.message });
        }
      }
    }

    // 2. Process offline completed lessons
    if (Array.isArray(completedLessons) && completedLessons.length > 0) {
      let progress = await LearningProgress.findOne({ user: userId });
      if (!progress) {
        progress = new LearningProgress({ user: userId });
      }

      for (const item of completedLessons) {
        try {
          const lessonId = item.lessonId || item._id;
          const tempId = item.tempId;

          if (lessonId && !String(lessonId).startsWith('offline-')) {
            const alreadyCompleted = progress.completedLessons.some(
              (cl) => cl.lesson && cl.lesson.toString() === lessonId.toString()
            );

            if (!alreadyCompleted) {
              progress.completedLessons.push({
                lesson: lessonId,
                completedAt: item.completedAt ? new Date(item.completedAt) : new Date(),
              });
              progress.activeMinutes = (progress.activeMinutes || 0) + 15;
              syncedLessonsCount++;
            }
          }

          if (tempId) syncedIds.push(tempId);
        } catch (err) {
          console.error(`Error syncing completed lesson (${item.tempId}):`, err.message);
          errors.push({ tempId: item.tempId, error: err.message });
        }
      }

      progress.lastActivityDate = new Date();
      await progress.save();
    }

    return {
      success: true,
      syncedCount: syncedIds.length,
      syncedAttemptsCount,
      syncedLessonsCount,
      syncedIds,
      errors,
    };
  }

  // Backwards compatibility for existing calls
  async syncBatchAttempts(userId, attempts = []) {
    return this.syncProgress(userId, { attempts });
  }
}

module.exports = new OfflineSyncService();
