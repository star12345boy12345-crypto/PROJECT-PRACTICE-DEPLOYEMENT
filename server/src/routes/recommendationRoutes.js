const express = require('express');
const router = express.Router();
const recommendationService = require('../services/recommendationService');
const { requireAuth } = require('../middleware/auth');

router.get('/', requireAuth, async (req, res) => {
  try {
    const recommendations = await recommendationService.getUserRecommendations(req.user._id);
    res.json({ recommendations });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching recommendations', error: error.message });
  }
});

module.exports = router;
