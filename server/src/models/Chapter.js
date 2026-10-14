const mongoose = require('mongoose');

const chapterSchema = new mongoose.Schema(
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
    classLevel: {
      type: String,
      required: true,
    },
    order: {
      type: Number,
      default: 1,
    },
    description: {
      type: String,
    },
    descriptionOdia: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Chapter', chapterSchema);
