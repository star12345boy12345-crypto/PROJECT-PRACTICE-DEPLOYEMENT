const StudyTask = require('../models/StudyTask');

exports.getTasks = async (req, res) => {
  try {
    const tasks = await StudyTask.find({ user: req.user._id }).sort({ dueDate: 1, priority: -1 });
    res.json({ tasks });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching study tasks', error: error.message });
  }
};

exports.createTask = async (req, res) => {
  try {
    const { title, subject, topic, dueDate, priority } = req.body;
    if (!title || title.trim() === '') {
      return res.status(400).json({ message: 'Task title is required' });
    }

    const task = new StudyTask({
      user: req.user._id,
      title: title.trim(),
      subject: subject || 'Science',
      topic: topic || '',
      dueDate: dueDate || new Date(Date.now() + 24 * 60 * 60 * 1000),
      priority: priority || 'Medium',
    });
    await task.save();

    res.status(201).json({ message: 'Study task created', task });
  } catch (error) {
    res.status(500).json({ message: 'Failed to create task', error: error.message });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const task = await StudyTask.findOne({ _id: req.params.id, user: req.user._id });
    if (!task) return res.status(404).json({ message: 'Task not found' });

    const { title, subject, topic, dueDate, priority, completed } = req.body;
    if (title !== undefined) task.title = title;
    if (subject !== undefined) task.subject = subject;
    if (topic !== undefined) task.topic = topic;
    if (dueDate !== undefined) task.dueDate = dueDate;
    if (priority !== undefined) task.priority = priority;
    if (completed !== undefined) task.completed = completed;

    await task.save();
    res.json({ message: 'Task updated', task });
  } catch (error) {
    res.status(500).json({ message: 'Failed to update task', error: error.message });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const task = await StudyTask.findOneAndDelete({ _id: req.params.id, user: req.user._id });
    if (!task) return res.status(404).json({ message: 'Task not found' });
    res.json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete task', error: error.message });
  }
};
