const mongoose = require('mongoose');

const learningProgressSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      unique: true,
      index: true,
    },
    completedLessons: [
      {
        lesson: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Lesson',
        },
        completedAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    activeMinutes: {
      type: Number,
      default: 0,
    },
    streakDays: {
      type: Number,
      default: 1,
    },
    lastActivityDate: {
      type: Date,
      default: Date.now,
    },
    weakTopics: [
      {
        topic: { type: String, required: true },
        subject: { type: String, default: 'General' },
        failureCount: { type: Number, default: 1 },
        totalAttempts: { type: Number, default: 1 },
        lastIdentifiedAt: { type: Date, default: Date.now },
      },
    ],
    averageScore: {
      type: Number,
      default: 0,
    },
    totalQuizzesTaken: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('LearningProgress', learningProgressSchema);
