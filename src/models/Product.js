const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,   // men, women, kids
  image: String,      // image URL
  description: String
});

module.exports = mongoose.model("Product", ProductSchema);
