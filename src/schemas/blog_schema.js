const { Schema, model } = require("mongoose");

const BlogSchema = new Schema(
  {
    title: { type: String, required: true },
    text: { type: String, required: true },
    slug: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = model("Blog", BlogSchema);
