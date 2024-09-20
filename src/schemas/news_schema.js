const { Schema, model } = require("mongoose");

const NewsSchema = new Schema(
  {
    author: { type: String, required: true },
    date: { type: String, required: true },
    title: { type: String },
    img: { type: String },
    short_text: { type: String, required: true },
    first_subtitle: { type: String, required: true },
    first_text: { type: String, required: true },
    second_subtitle: { type: String, required: true },
    second_text: { type: String, required: true },
    quote: { type: String, required: true },
    slug: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = model("News", NewsSchema);
