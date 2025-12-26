const Cart = require("../models/Cart");

// ADD TO CART
exports.addToCart = async (req, res) => {
  const { userId, product } = req.body;

  let cart = await Cart.findOne({ userId });

  if (!cart) {
    cart = new Cart({ userId, products: [product] });
  } else {
    cart.products.push(product);
  }

  await cart.save();
  res.json({ message: "Added to cart" });
};

// GET CART
exports.getCart = async (req, res) => {
  const cart = await Cart.findOne({ userId: req.params.userId });
  res.json(cart);
};

// REMOVE FROM CART
exports.removeFromCart = async (req, res) => {
  const { userId, productId } = req.body;

  const cart = await Cart.findOne({ userId });
  cart.products = cart.products.filter(p => p.productId !== productId);

  await cart.save();
  res.json({ message: "Removed from cart" });
};
