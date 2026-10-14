const parentReportService = require('../services/parentReportService');

exports.getParentSummary = async (req, res) => {
  try {
    const report = await parentReportService.getStudentReport(req.user._id);
    res.json({ report });
  } catch (error) {
    res.status(500).json({ message: 'Failed to generate parent summary', error: error.message });
  }
};

exports.sendReportEmail = async (req, res) => {
  try {
    const { parentEmail } = req.body;
    const result = await parentReportService.sendReportEmail(req.user._id, parentEmail);
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: 'Failed to dispatch report', error: error.message });
  }
};
