const { Schema, model } = require("mongoose");

const OrderProductSchema = new Schema({
  product: { type: Schema.Types.ObjectId, ref: "Product", required: true },
  quantity: { type: Number, required: true },
});

const OrderSchema = new Schema({
  order_number: { type: Number, required: true, unique: true },
  products: [OrderProductSchema],
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  country: { type: String, required: true },
  city: { type: String, required: true },
  street: { type: String, required: true },
  apartment: { type: String, required: true },
  state: { type: String, required: true },
  zip: { type: Number, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  message: { type: String },
  summa: { type: Number, required: true },
  delivery_cost: { type: Number, required: true },
  total_cost: { type: Number, required: true },
});

module.exports = model("Order", OrderSchema);
