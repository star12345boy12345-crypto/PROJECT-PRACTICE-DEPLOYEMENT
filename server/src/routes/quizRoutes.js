const express = require('express');
const router = express.Router();
const quizController = require('../controllers/quizController');
const { requireAuth } = require('../middleware/auth');

router.get('/', quizController.getQuizzes);
router.post('/generate', quizController.generateAiQuiz);
router.get('/history', requireAuth, quizController.getQuizHistory);
router.get('/:id', quizController.getQuizById);
router.post('/:id/submit', requireAuth, quizController.submitQuiz);

module.exports = router;
