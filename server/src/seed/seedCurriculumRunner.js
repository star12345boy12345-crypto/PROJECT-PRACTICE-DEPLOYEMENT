require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('../config/db');
const Subject = require('../models/Subject');
const Chapter = require('../models/Chapter');
const Lesson = require('../models/Lesson');
const Quiz = require('../models/Quiz');
const { subjectsData } = require('./seedData');

const { class6Data } = require('./curriculumDataClass6');
const { class7Data } = require('./curriculumDataClass7');
const { class8Data } = require('./curriculumDataClass8');
const { class9Data } = require('./curriculumDataClass9');
const { class10Data } = require('./curriculumDataClass10');

const seedCurriculum = async () => {
  try {
    console.log('[Curriculum Seed] Connecting to database...');
    await connectDB();

    // 1. Ensure all 5 subjects exist
    console.log('[Curriculum Seed] Verifying subjects...');
    for (const sub of subjectsData) {
      await Subject.findOneAndUpdate(
        { code: sub.code },
        {
          name: sub.name,
          nameOdia: sub.nameOdia,
          code: sub.code,
          icon: sub.icon,
          color: sub.color,
          description: sub.description,
          descriptionOdia: sub.descriptionOdia,
          classLevels: ['Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10'],
        },
        { upsert: true, new: true }
      );
    }

    const allSubjects = await Subject.find({});
    const subjectMap = {};
    allSubjects.forEach((s) => {
      subjectMap[s.code] = s;
    });

    console.log(`[Curriculum Seed] Registered ${allSubjects.length} subjects: ${Object.keys(subjectMap).join(', ')}`);

    // 2. Aggregate all curriculum data
    const allDatasets = [
      ...class6Data,
      ...class7Data,
      ...class8Data,
      ...class9Data,
      ...class10Data,
    ];

    console.log(`[Curriculum Seed] Total curriculum items to process: ${allDatasets.length} chapters.`);

    let chapterCount = 0;
    let lessonCount = 0;
    let quizCount = 0;

    const classStats = {
      'Class 6': 0,
      'Class 7': 0,
      'Class 8': 0,
      'Class 9': 0,
      'Class 10': 0,
    };

    const subjectStats = {
      SCI: 0,
      MATH: 0,
      ENG: 0,
      SST: 0,
      CS: 0,
    };

    for (const item of allDatasets) {
      const subjectDoc = subjectMap[item.subjectCode];
      if (!subjectDoc) {
        console.warn(`[Warning] Unknown subject code: ${item.subjectCode} for chapter: ${item.title}`);
        continue;
      }

      // Upsert Chapter
      const chapterDoc = await Chapter.findOneAndUpdate(
        {
          subject: subjectDoc._id,
          classLevel: item.classLevel,
          order: item.order,
        },
        {
          title: item.title,
          titleOdia: item.titleOdia,
          subject: subjectDoc._id,
          classLevel: item.classLevel,
          order: item.order,
          description: item.description,
          descriptionOdia: item.descriptionOdia,
        },
        { upsert: true, new: true }
      );
      chapterCount++;
      classStats[item.classLevel] = (classStats[item.classLevel] || 0) + 1;
      subjectStats[item.subjectCode] = (subjectStats[item.subjectCode] || 0) + 1;

      // Upsert Lesson
      const lessonDoc = await Lesson.findOneAndUpdate(
        {
          chapter: chapterDoc._id,
        },
        {
          title: item.lesson.title || item.title,
          titleOdia: item.lesson.titleOdia || item.titleOdia,
          subject: subjectDoc._id,
          chapter: chapterDoc._id,
          classLevel: item.classLevel,
          order: 1,
          durationMinutes: item.lesson.durationMinutes || 20,
          learningObjectives: item.lesson.objectives || [],
          learningObjectivesOdia: item.lesson.objectivesOdia || [],
          content: item.lesson.content,
          contentOdia: item.lesson.contentOdia,
          keyTakeaways: item.lesson.takeaways || [],
          keyTakeawaysOdia: item.lesson.takeawaysOdia || [],
        },
        { upsert: true, new: true }
      );
      lessonCount++;

      // Upsert Quiz
      if (item.quiz && item.quiz.length > 0) {
        await Quiz.findOneAndUpdate(
          {
            chapter: chapterDoc._id,
          },
          {
            title: `${item.title} - Chapter Quiz`,
            titleOdia: `${item.titleOdia} - ଅଧ୍ୟାୟ କୁଇଜ୍`,
            subject: subjectDoc._id,
            chapter: chapterDoc._id,
            lesson: lessonDoc._id,
            classLevel: item.classLevel,
            difficulty: 'Medium',
            durationMinutes: 10,
            questions: item.quiz.map((q) => ({
              question: q.question,
              questionOdia: q.questionOdia,
              options: q.options,
              optionsOdia: q.optionsOdia,
              correctAnswerIndex: q.correctAnswerIndex,
              explanation: q.explanation || '',
              explanationOdia: q.explanationOdia || '',
              topic: q.topic || item.title,
            })),
          },
          { upsert: true, new: true }
        );
        quizCount++;
      }
    }

    console.log('========================================================');
    console.log('   VIDYORA AI CURRICULUM SEEDING COMPLETED SUCCESSFULLY  ');
    console.log('========================================================');
    console.log(`Total Chapters Processed : ${chapterCount}`);
    console.log(`Total Lessons Processed  : ${lessonCount}`);
    console.log(`Total Quizzes Processed  : ${quizCount}`);
    console.log('--------------------------------------------------------');
    console.log('Class Breakdown:');
    for (const [cls, count] of Object.entries(classStats)) {
      console.log(`  - ${cls}: ${count} chapters`);
    }
    console.log('--------------------------------------------------------');
    console.log('Subject Breakdown:');
    for (const [subCode, count] of Object.entries(subjectStats)) {
      console.log(`  - ${subCode}: ${count} chapters`);
    }
    console.log('========================================================');

    process.exit(0);
  } catch (error) {
    console.error('[Curriculum Seed] Error running curriculum seed:', error);
    process.exit(1);
  }
};

seedCurriculum();
