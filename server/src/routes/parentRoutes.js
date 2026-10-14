const express = require('express');
const router = express.Router();
const parentController = require('../controllers/parentController');
const { requireAuth } = require('../middleware/auth');

router.get('/summary', requireAuth, parentController.getParentSummary);
router.post('/send-report', requireAuth, parentController.sendReportEmail);

module.exports = router;
