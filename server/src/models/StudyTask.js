const mongoose = require('mongoose');

const studyTaskSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    subject: {
      type: String,
      default: 'Science',
    },
    topic: {
      type: String,
      trim: true,
    },
    dueDate: {
      type: Date,
      default: () => new Date(Date.now() + 24 * 60 * 60 * 1000),
    },
    priority: {
      type: String,
      enum: ['High', 'Medium', 'Low'],
      default: 'Medium',
    },
    completed: {
      type: Boolean,
      default: false,
    },
    isAiRecommended: {
      type: Boolean,
      default: false,
    },
    recommendedReason: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('StudyTask', studyTaskSchema);
