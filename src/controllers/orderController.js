const Order = require("../models/Order");

// PLACE ORDER
exports.placeOrder = async (req, res) => {
  const order = new Order(req.body);
  await order.save();
  res.json({ message: "Order placed successfully" });
};

// GET ORDERS
exports.getOrders = async (req, res) => {
  const orders = await Order.find({ userId: req.params.userId });
  res.json(orders);
};
