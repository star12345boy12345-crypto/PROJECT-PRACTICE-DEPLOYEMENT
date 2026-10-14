const Quiz = require('../models/Quiz');
const QuizAttempt = require('../models/QuizAttempt');
const User = require('../models/User');
const quizEvaluationService = require('../services/quizEvaluationService');
const emailService = require('../services/emailService');

const Subject = require('../models/Subject');
const mongoose = require('mongoose');

exports.getQuizzes = async (req, res) => {
  try {
    const { subjectId, chapterId, lessonId, classLevel } = req.query;
    const filter = {};
    if (chapterId) filter.chapter = chapterId;
    if (lessonId) filter.lesson = lessonId;

    if (subjectId) {
      if (mongoose.Types.ObjectId.isValid(subjectId)) {
        filter.subject = subjectId;
      } else {
        const sub = await Subject.findOne({
          $or: [
            { code: subjectId.toUpperCase() },
            { name: new RegExp(`^${subjectId}$`, 'i') },
          ],
        });
        if (sub) filter.subject = sub._id;
      }
    }

    if (classLevel && classLevel !== 'all') filter.classLevel = classLevel;

    const quizzes = await Quiz.find(filter)
      .populate('subject', 'name nameOdia color code')
      .populate('chapter', 'title titleOdia')
      .select('-questions.correctAnswerIndex') // Hide answers in list
      .sort({ createdAt: -1 });

    res.json({ quizzes });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching quizzes', error: error.message });
  }
};

exports.getQuizById = async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id)
      .populate('subject', 'name nameOdia color')
      .populate('chapter', 'title titleOdia');
    if (!quiz) return res.status(404).json({ message: 'Quiz not found' });

    // Client receives quiz questions, but we omit the correctAnswerIndex so they cannot cheat on client side
    const clientQuiz = quiz.toObject();
    clientQuiz.questions = clientQuiz.questions.map((q) => {
      const { correctAnswerIndex, explanation, explanationOdia, ...clientQ } = q;
      return clientQ;
    });

    res.json({ quiz: clientQuiz });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching quiz', error: error.message });
  }
};

exports.submitQuiz = async (req, res) => {
  try {
    const { answers } = req.body;
    const quizId = req.params.id;
    const userId = req.user._id;

    if (!answers || !Array.isArray(answers)) {
      return res.status(400).json({ message: 'Answers array is required' });
    }

    const quiz = await Quiz.findById(quizId).populate('subject');
    if (!quiz) return res.status(404).json({ message: 'Quiz not found' });

    const evaluationResult = await quizEvaluationService.evaluateQuizAttempt({
      userId,
      quiz,
      submittedAnswers: answers,
    });

    // Provide full answer explanations with the evaluated results
    const fullQuestionsWithExplanations = quiz.questions.map((q, idx) => ({
      index: idx,
      correctAnswerIndex: q.correctAnswerIndex,
      explanation: q.explanation,
      explanationOdia: q.explanationOdia,
      topic: q.topic,
    }));

    // Send real-time quiz result email to parent via vidyorai@gmail.com
    User.findById(userId).then((student) => {
      if (student && student.parentEmail) {
        emailService.sendQuizResultEmailToParent({
          studentName: student.name,
          parentEmail: student.parentEmail,
          quizTitle: quiz.title,
          quizTitleOdia: quiz.titleOdia,
          score: evaluationResult.score,
          totalQuestions: evaluationResult.totalQuestions,
          percentage: evaluationResult.percentage,
          weakTopics: evaluationResult.newlyIdentifiedWeak || [],
        }).catch((e) => console.warn('Background parent quiz email error:', e.message));
      }
    }).catch((e) => console.warn('Could not fetch student for parent email alert:', e.message));

    res.json({
      message: 'Quiz evaluated successfully',
      result: {
        ...evaluationResult,
        solutionKeys: fullQuestionsWithExplanations,
      },
    });
  } catch (error) {
    console.error('Quiz submission error:', error);
    res.status(500).json({ message: 'Failed to evaluate quiz', error: error.message });
  }
};

exports.getQuizHistory = async (req, res) => {
  try {
    const history = await QuizAttempt.find({ user: req.user._id })
      .populate('quiz', 'title titleOdia subject difficulty')
      .sort({ createdAt: -1 })
      .limit(20);
    res.json({ history });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch history', error: error.message });
  }
};

exports.generateAiQuiz = async (req, res) => {
  try {
    const { topic, subjectName = 'Science', classLevel = req.user?.classLevel || 'Class 8', count = 3 } = req.body;
    if (!topic || topic.trim() === '') {
      return res.status(400).json({ message: 'Topic is required for AI quiz generation' });
    }

    const Subject = require('../models/Subject');
    const aiTutoringService = require('../services/aiTutoringService');

    let subject = await Subject.findOne({ name: new RegExp(subjectName, 'i') });
    if (!subject) {
      subject = await Subject.findOne();
    }

    const aiGenerated = await aiTutoringService.generateQuizWithAi({
      topic: topic.trim(),
      subjectName: subject?.name || subjectName,
      classLevel,
      count: Math.min(Math.max(parseInt(count) || 3, 1), 5),
    });

    const newQuiz = await Quiz.create({
      title: aiGenerated.title,
      titleOdia: aiGenerated.titleOdia,
      subject: subject._id,
      classLevel,
      difficulty: 'Medium',
      questions: aiGenerated.questions,
    });

    await newQuiz.populate('subject', 'name nameOdia color');

    res.status(201).json({
      message: 'Quiz generated successfully with Vidyora AI',
      quiz: newQuiz,
      isAiLive: aiGenerated.isAiLive,
      modelUsed: aiGenerated.modelUsed,
    });
  } catch (error) {
    console.error('AI Quiz Generation Error:', error);
    res.status(500).json({ message: 'Failed to generate AI quiz', error: error.message });
  }
};

