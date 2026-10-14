const mongoose = require('mongoose');

const quizAttemptSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true,
    },
    quiz: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Quiz',
      required: true,
    },
    score: {
      type: Number,
      required: true,
    },
    totalQuestions: {
      type: Number,
      required: true,
    },
    percentage: {
      type: Number,
      required: true,
    },
    answers: [
      {
        questionIndex: Number,
        selectedOption: Number,
        isCorrect: Boolean,
        topic: String,
      },
    ],
    topicBreakdown: [
      {
        topic: String,
        correct: Number,
        total: Number,
      },
    ],
    syncedFromOffline: {
      type: Boolean,
      default: false,
    },
    offlineTempId: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('QuizAttempt', quizAttemptSchema);
