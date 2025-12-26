const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  userId: String,
  items: Array,
  totalAmount: Number,
  status: { type: String, default: "Placed" }
});

module.exports = mongoose.model("Order", OrderSchema);
