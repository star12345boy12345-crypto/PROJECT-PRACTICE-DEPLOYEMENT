const Subject = require('../models/Subject');
const Chapter = require('../models/Chapter');

const mongoose = require('mongoose');

exports.getSubjects = async (req, res) => {
  try {
    const { classLevel } = req.query;
    const filter = {};
    if (classLevel && classLevel !== 'all') {
      filter.classLevels = classLevel;
    }
    const subjects = await Subject.find(filter).sort({ code: 1, name: 1 });
    res.json({ subjects });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching subjects', error: error.message });
  }
};

exports.getSubjectById = async (req, res) => {
  try {
    const { id } = req.params;
    let subject = null;
    if (mongoose.Types.ObjectId.isValid(id)) {
      subject = await Subject.findById(id);
    }
    if (!subject) {
      subject = await Subject.findOne({
        $or: [
          { code: id.toUpperCase() },
          { name: new RegExp(`^${id}$`, 'i') },
        ],
      });
    }
    if (!subject) return res.status(404).json({ message: 'Subject not found' });
    res.json({ subject });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching subject', error: error.message });
  }
};

exports.getChaptersBySubject = async (req, res) => {
  try {
    const { id } = req.params;
    const { classLevel } = req.query;
    let subjectId = id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      const sub = await Subject.findOne({
        $or: [
          { code: id.toUpperCase() },
          { name: new RegExp(`^${id}$`, 'i') },
        ],
      });
      if (sub) subjectId = sub._id;
    }

    const filter = { subject: subjectId };
    if (classLevel && classLevel !== 'all') filter.classLevel = classLevel;

    const chapters = await Chapter.find(filter).sort({ order: 1 });
    res.json({ chapters });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching chapters', error: error.message });
  }
};
