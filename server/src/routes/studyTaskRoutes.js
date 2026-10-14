const express = require('express');
const router = express.Router();
const studyTaskController = require('../controllers/studyTaskController');
const { requireAuth } = require('../middleware/auth');

router.get('/', requireAuth, studyTaskController.getTasks);
router.post('/', requireAuth, studyTaskController.createTask);
router.patch('/:id', requireAuth, studyTaskController.updateTask);
router.delete('/:id', requireAuth, studyTaskController.deleteTask);

module.exports = router;
