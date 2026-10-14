const mongoose = require('mongoose');

const recommendationSchema = new mongoose.Schema(
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
    },
    titleOdia: {
      type: String,
      required: true,
    },
    reason: {
      type: String,
      required: true,
    },
    reasonOdia: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ['revision', 'quiz', 'lesson', 'practice'],
      default: 'revision',
    },
    targetId: {
      type: String,
    },
    subject: {
      type: String,
      default: 'General',
    },
    priority: {
      type: String,
      enum: ['High', 'Medium', 'Low'],
      default: 'Medium',
    },
    isDismissed: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Recommendation', recommendationSchema);
