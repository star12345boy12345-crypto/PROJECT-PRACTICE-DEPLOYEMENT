const express = require('express');
const router = express.Router();
const lessonController = require('../controllers/lessonController');
const { requireAuth } = require('../middleware/auth');

router.get('/', lessonController.getLessons);
router.get('/search', lessonController.searchLessons);
router.get('/:id', lessonController.getLessonById);
router.post('/:id/complete', requireAuth, lessonController.completeLesson);

module.exports = router;
