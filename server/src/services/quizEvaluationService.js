const QuizAttempt = require('../models/QuizAttempt');
const LearningProgress = require('../models/LearningProgress');
const recommendationService = require('./recommendationService');

class QuizEvaluationService {
  async evaluateQuizAttempt({ userId, quiz, submittedAnswers, isOffline = false, offlineTempId = null }) {
    if (!quiz || !quiz.questions || quiz.questions.length === 0) {
      throw new Error('Invalid quiz provided for evaluation');
    }

    let correctCount = 0;
    const totalQuestions = quiz.questions.length;
    const detailedAnswers = [];
    const topicMap = {};

    quiz.questions.forEach((q, index) => {
      const selectedOption = submittedAnswers[index] !== undefined ? Number(submittedAnswers[index]) : -1;
      const isCorrect = selectedOption === q.correctAnswerIndex;
      if (isCorrect) correctCount++;

      const topicName = q.topic || 'General';
      if (!topicMap[topicName]) {
        topicMap[topicName] = { correct: 0, total: 0 };
      }
      topicMap[topicName].total += 1;
      if (isCorrect) {
        topicMap[topicName].correct += 1;
      }

      detailedAnswers.push({
        questionIndex: index,
        selectedOption,
        isCorrect,
        topic: topicName,
      });
    });

    const percentage = Math.round((correctCount / totalQuestions) * 100);
    const topicBreakdown = Object.keys(topicMap).map((topic) => ({
      topic,
      correct: topicMap[topic].correct,
      total: topicMap[topic].total,
    }));

    // Record quiz attempt in database
    const quizAttempt = new QuizAttempt({
      user: userId,
      quiz: quiz._id,
      score: correctCount,
      totalQuestions,
      percentage,
      answers: detailedAnswers,
      topicBreakdown,
      syncedFromOffline: isOffline,
      offlineTempId,
    });
    await quizAttempt.save();

    // Update Student Learning Progress & Weak Topics
    let progress = await LearningProgress.findOne({ user: userId });
    if (!progress) {
      progress = new LearningProgress({ user: userId });
    }

    progress.totalQuizzesTaken = (progress.totalQuizzesTaken || 0) + 1;
    progress.averageScore = progress.averageScore
      ? Math.round((progress.averageScore * (progress.totalQuizzesTaken - 1) + percentage) / progress.totalQuizzesTaken)
      : percentage;
    progress.lastActivityDate = new Date();

    // Extract weak topics (accuracy < 60%)
    const newlyIdentifiedWeak = [];
    topicBreakdown.forEach((tb) => {
      const acc = tb.total > 0 ? (tb.correct / tb.total) * 100 : 0;
      if (acc < 60) {
        newlyIdentifiedWeak.push(tb.topic);
        const existingIdx = progress.weakTopics.findIndex((w) => w.topic.toLowerCase() === tb.topic.toLowerCase());
        if (existingIdx >= 0) {
          progress.weakTopics[existingIdx].failureCount += 1;
          progress.weakTopics[existingIdx].totalAttempts += tb.total;
          progress.weakTopics[existingIdx].lastIdentifiedAt = new Date();
        } else {
          progress.weakTopics.push({
            topic: tb.topic,
            subject: quiz.subject?.name || 'Science',
            failureCount: 1,
            totalAttempts: tb.total,
            lastIdentifiedAt: new Date(),
          });
        }
      }
    });

    await progress.save();

    // Generate personalized recommendations for newly identified weak topics
    if (newlyIdentifiedWeak.length > 0) {
      await recommendationService.generateForWeakTopics(userId, newlyIdentifiedWeak, quiz.subject?.name || 'Science');
    }

    return {
      attemptId: quizAttempt._id,
      score: correctCount,
      totalQuestions,
      percentage,
      answers: detailedAnswers,
      topicBreakdown,
      newlyIdentifiedWeak,
      averageScore: progress.averageScore,
    };
  }
}

module.exports = new QuizEvaluationService();
