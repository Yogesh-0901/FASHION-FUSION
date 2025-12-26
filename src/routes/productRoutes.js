const express = require("express");
const {
  getAllProducts,
  getProductsByCategory,
  addProduct
} = require("../controllers/productController");

const router = express.Router();

// get all products
router.get("/", getAllProducts);

// get products by category
router.get("/category/:category", getProductsByCategory);

// add product (testing)
router.post("/add", addProduct);

module.exports = router;
