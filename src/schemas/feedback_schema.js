const { Schema, model } = require("mongoose");

const FeedbackSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    company: { type: String, required: true },
    subject: { type: String, required: true },
    message: { type: String },
  },
  { timestamps: true }
);

module.exports = model("Feedback", FeedbackSchema);
