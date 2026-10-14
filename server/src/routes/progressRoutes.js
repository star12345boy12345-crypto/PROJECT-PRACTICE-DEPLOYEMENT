const express = require('express');
const router = express.Router();
const progressController = require('../controllers/progressController');
const { requireAuth } = require('../middleware/auth');

router.get('/', requireAuth, progressController.getProgress);
router.get('/weak-topics', requireAuth, progressController.getWeakTopics);
router.get('/analytics', requireAuth, progressController.getAnalytics);

module.exports = router;
