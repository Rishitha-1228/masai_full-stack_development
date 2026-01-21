const express = require("express");
const fs = require("fs");
const router = express.Router();

// CREATE ORDER
router.post("/", (req, res) => {
  const data = JSON.parse(fs.readFileSync("db.json", "utf-8"));
  const product = data.products.find(p => p.id === req.body.productId);

  if (!product) return res.status(404).json({ message: "Product not found" });
  if (product.stock === 0 || req.body.quantity > product.stock)
    return res.status(400).json({ message: "Insufficient stock" });

  const order = {
    ...req.body,
    totalAmount: product.price * req.body.quantity,
    status: "placed",
    createdAt: new Date().toISOString().split("T")[0]
  };

  product.stock -= req.body.quantity;
  data.orders.push(order);

  fs.writeFileSync("db.json", JSON.stringify(data, null, 2));
  res.status(201).json(order);
});

// GET ALL ORDERS
router.get("/", (req, res) => {
  const data = JSON.parse(fs.readFileSync("db.json", "utf-8"));
  res.json(data.orders);
});

// CANCEL ORDER
router.delete("/:orderId", (req, res) => {
  const data = JSON.parse(fs.readFileSync("db.json", "utf-8"));
  const order = data.orders.find(o => o.id == req.params.orderId);

  if (!order) return res.status(404).json({ message: "Order not found" });
  if (order.status === "cancelled")
    return res.status(400).json({ message: "Already cancelled" });

  const today = new Date().toISOString().split("T")[0];
  if (order.createdAt !== today)
    return res.status(400).json({ message: "Cannot cancel" });

  const product = data.products.find(p => p.id === order.productId);
  product.stock += order.quantity;
  order.status = "cancelled";

  fs.writeFileSync("db.json", JSON.stringify(data, null, 2));
  res.json(order);
});

// CHANGE STATUS
router.patch("/change-status/:orderId", (req, res) => {
  const data = JSON.parse(fs.readFileSync("db.json", "utf-8"));
  const order = data.orders.find(o => o.id == req.params.orderId);

  if (!order) return res.status(404).json({ message: "Order not found" });
  if (order.status === "cancelled" || order.status === "delivered")
    return res.status(400).json({ message: "Invalid operation" });

  const flow = ["placed", "shipped", "delivered"];
  order.status = flow[flow.indexOf(order.status) + 1];

  fs.writeFileSync("db.json", JSON.stringify(data, null, 2));
  res.json(order);
});

module.exports = router;
