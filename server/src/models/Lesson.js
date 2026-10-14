const mongoose = require('mongoose');

const lessonSchema = new mongoose.Schema(
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
      required: true,
    },
    classLevel: {
      type: String,
      required: true,
    },
    order: {
      type: Number,
      default: 1,
    },
    durationMinutes: {
      type: Number,
      default: 15,
    },
    learningObjectives: {
      type: [String],
      default: [],
    },
    learningObjectivesOdia: {
      type: [String],
      default: [],
    },
    content: {
      type: String,
      required: true,
    },
    contentOdia: {
      type: String,
      required: true,
    },
    keyTakeaways: {
      type: [String],
      default: [],
    },
    keyTakeawaysOdia: {
      type: [String],
      default: [],
    },
    realWorldExample: {
      type: String,
    },
    realWorldExampleOdia: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

lessonSchema.index({ title: 'text', content: 'text', titleOdia: 'text', contentOdia: 'text' });

module.exports = mongoose.model('Lesson', lessonSchema);
