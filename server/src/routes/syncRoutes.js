const express = require('express');
const router = express.Router();
const syncController = require('../controllers/syncController');
const { requireAuth } = require('../middleware/auth');

// Public route to download offline curriculum bundle from MongoDB
router.get('/curriculum-bundle', syncController.getCurriculumBundle);

// Authenticated route to sync offline quiz attempts and completed lessons when online
router.post('/progress', requireAuth, syncController.syncProgress);

module.exports = router;
