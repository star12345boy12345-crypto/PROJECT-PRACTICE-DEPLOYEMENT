const mongoose = require('mongoose');

const conversationSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true,
    },
    title: {
      type: String,
      default: 'New Learning Session',
    },
    subject: {
      type: String,
      default: 'General',
    },
    classLevel: {
      type: String,
      default: 'Class 8',
    },
    messages: [
      {
        role: {
          type: String,
          enum: ['user', 'assistant', 'system'],
          required: true,
        },
        content: {
          type: String,
          required: true,
        },
        language: {
          type: String,
          default: 'or',
        },
        workflowSteps: [
          {
            step: String,
            status: String,
          },
        ],
        timestamp: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Conversation', conversationSchema);
