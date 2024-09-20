const FeedbackModel = require("../schemas/feedback_schema");

exports.createFeedback = async (req, res) => {
  try {
    const { name, email, company, message, subject } = req.body;
    const feedback = new FeedbackModel({ name, email, company, message, subject });
    const result = await feedback.save();
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAllFeedbacks = async (req, res) => {
  try {
    const allFeedbacks = await FeedbackModel.find();
    res.status(200).json(allFeedbacks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
