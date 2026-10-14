const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    classLevel: {
      type: String,
      default: 'Class 8',
      enum: ['Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10'],
    },
    schoolName: {
      type: String,
      default: 'Government High School',
      trim: true,
    },
    parentName: {
      type: String,
      default: 'Guardian',
      trim: true,
    },
    parentEmail: {
      type: String,
      trim: true,
      lowercase: true,
    },
    preferredLanguage: {
      type: String,
      default: 'or',
      enum: ['en', 'or', 'odia', 'english'],
    },
    role: {
      type: String,
      default: 'student',
      enum: ['student', 'parent', 'admin'],
    },
    resetPasswordCode: {
      type: String,
    },
    resetPasswordExpires: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('User', userSchema);
