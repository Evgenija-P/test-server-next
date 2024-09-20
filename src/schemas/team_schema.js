const { Schema, model } = require("mongoose");

const SocLinksSchema = new Schema({
  fb: { type: String },
  insta: { type: String },
  tiktok: { type: String },
});

const TeamSchema = new Schema(
  {
    name: { type: String, required: true },
    position: { type: String, required: true },
    img: { type: String },
    socLinks: [SocLinksSchema],
  },
  { timestamps: true }
);

module.exports = model("Team", TeamSchema);
