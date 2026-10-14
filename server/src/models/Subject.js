const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    nameOdia: {
      type: String,
      required: true,
      trim: true,
    },
    code: {
      type: String,
      required: true,
      unique: true,
    },
    icon: {
      type: String,
      default: 'BookOpen',
    },
    color: {
      type: String,
      default: '#26C4B1',
    },
    classLevels: {
      type: [String],
      default: ['Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10'],
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

module.exports = mongoose.model('Subject', subjectSchema);
