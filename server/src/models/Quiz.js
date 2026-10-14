const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  questionOdia: {
    type: String,
    required: true,
  },
  options: {
    type: [String],
    required: true,
    validate: (v) => Array.isArray(v) && v.length >= 2,
  },
  optionsOdia: {
    type: [String],
    required: true,
    validate: (v) => Array.isArray(v) && v.length >= 2,
  },
  correctAnswerIndex: {
    type: Number,
    required: true,
  },
  explanation: {
    type: String,
    default: '',
  },
  explanationOdia: {
    type: String,
    default: '',
  },
  topic: {
    type: String,
    required: true,
  },
});

const quizSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    titleOdia: {
      type: String,
      required: true,
      trim: true,
    },
    subject: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Subject',
      required: true,
    },
    chapter: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Chapter',
    },
    lesson: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Lesson',
    },
    classLevel: {
      type: String,
      required: true,
    },
    difficulty: {
      type: String,
      enum: ['Easy', 'Medium', 'Hard'],
      default: 'Medium',
    },
    questions: {
      type: [questionSchema],
      required: true,
      validate: (v) => Array.isArray(v) && v.length > 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Quiz', quizSchema);
