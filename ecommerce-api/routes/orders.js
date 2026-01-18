const express = require("express");
const fs = require("fs");
const router = express.Router();

// Helper function to read DB
const readDB = () => {
  return JSON.parse(fs.readFileSync("db.json", "utf-8"));
};

// Helper function to write DB
const writeDB = (data) => {
  fs.writeFileSync("db.json", JSON.stringify(data, null, 2));
};

/**
 * ----------------------------------------------------
 * 1️⃣ CREATE ORDER
 * POST /orders
 * ----------------------------------------------------
 */
router.post("/", (req, res) => {
  const { productId, quantity } = req.body;
  const db = readDB();

  // Find product
  const product = db.products.find(p => p.id === productId);
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  // Stock validation
  if (product.stock === 0 || quantity > product.stock) {
    return res.status(400).json({ message: "Insufficient stock" });
  }

  // Revenue formula
  const totalAmount = product.price * quantity;

  // Reduce stock
  product.stock -= quantity;

  // Create order
  const order = {
    id: Date.now(),
    productId,
    quantity,
    totalAmount,
    status: "placed",
    createdAt: new Date().toISOString().split("T")[0]
  };

  db.orders.push(order);
  writeDB(db);

  return res.status(201).json(order);
});

/**
 * ----------------------------------------------------
 * 2️⃣ GET ALL ORDERS
 * GET /orders
 * ----------------------------------------------------
 */
router.get("/", (req, res) => {
  const db = readDB();
  return res.status(200).json(db.orders);
});

/**
 * ----------------------------------------------------
 * 3️⃣ CANCEL ORDER (SOFT DELETE)
 * DELETE /orders/:orderId
 * ----------------------------------------------------
 */
router.delete("/:orderId", (req, res) => {
  const db = readDB();
  const order = db.orders.find(o => o.id == req.params.orderId);

  if (!order) {
    return res.status(404).json({ message: "Order not found" });
  }

  if (order.status === "cancelled") {
    return res.status(400).json({ message: "Order already cancelled" });
  }

  // Allow cancellation only on same date
  const today = new Date().toISOString().split("T")[0];
  if (order.createdAt !== today) {
    return res.status(400).json({ message: "Cancellation not allowed" });
  }

  // Change status to cancelled
  order.status = "cancelled";

  // Restore product stock
  const product = db.products.find(p => p.id === order.productId);
  if (product) {
    product.stock += order.quantity;
  }

  writeDB(db);
  return res.status(200).json({ message: "Order cancelled successfully" });
});

/**
 * ----------------------------------------------------
 * 4️⃣ CHANGE ORDER STATUS
 * PATCH /orders/change-status/:orderId
 * ----------------------------------------------------
 */
router.patch("/change-status/:orderId", (req, res) => {
  const { status } = req.body;
  const db = readDB();

  const order = db.orders.find(o => o.id == req.params.orderId);
  if (!order) {
    return res.status(404).json({ message: "Order not found" });
  }

  // Cannot update cancelled or delivered orders
  if (order.status === "cancelled" || order.status === "delivered") {
    return res.status(400).json({ message: "Status change not allowed" });
  }

  // Valid status flow
  const flow = ["placed", "shipped", "delivered"];
  const currentIndex = flow.indexOf(order.status);

  if (flow[currentIndex + 1] !== status) {
    return res.status(400).json({ message: "Invalid status flow" });
  }

  order.status = status;
  writeDB(db);

  return res.status(200).json(order);
});

module.exports = router;
