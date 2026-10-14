const express = require('express');
const router = express.Router();
const multer = require('multer');
const aiController = require('../controllers/aiController');
const { requireAuth } = require('../middleware/auth');

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
});

// Strict authentication: AI tutor and scanner are only accessible when user is logged in
router.post('/chat', requireAuth, aiController.chat);
router.post('/explain-image', requireAuth, upload.single('image'), aiController.explainImage);
router.post('/generate-diagram', requireAuth, aiController.generateDiagram);

// Speech synthesis endpoint (publicly accessible for HTML5 Audio streaming)
router.get('/tts', aiController.textToSpeech);
router.post('/tts', aiController.textToSpeech);

module.exports = router;
