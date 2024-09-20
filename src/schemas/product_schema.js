const { Schema, model } = require("mongoose");

const ProductSchema = new Schema(
  {
    category: { type: String },
    title: { type: String },
    img: { type: String },
    old_price: { type: Number },
    current_price: { type: Number },
    stars: { type: Number, required: true },
    slug: { type: String, required: true },
    quantity: { type: Number, required: true },
    short_text: { type: String, required: true },
    full_text: { type: String, required: true },
    additional_info: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = model("Product", ProductSchema);
