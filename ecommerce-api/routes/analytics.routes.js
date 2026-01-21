const express = require("express");
const fs = require("fs");
const router = express.Router();

router.get("/allorders", (req, res) => {
  const { orders } = JSON.parse(fs.readFileSync("db.json"));
  res.json({ count: orders.length, orders });
});

router.get("/cancelled-orders", (req, res) => {
  const { orders } = JSON.parse(fs.readFileSync("db.json"));
  const cancelled = orders.filter(o => o.status === "cancelled");
  res.json({ count: cancelled.length, orders: cancelled });
});

router.get("/shipped", (req, res) => {
  const { orders } = JSON.parse(fs.readFileSync("db.json"));
  const shipped = orders.filter(o => o.status === "shipped");
  res.json({ count: shipped.length, orders: shipped });
});

router.get("/total-revenue/:productId", (req, res) => {
  const data = JSON.parse(fs.readFileSync("db.json"));
  const product = data.products.find(p => p.id == req.params.productId);

  const revenue = data.orders
    .filter(o => o.productId == req.params.productId && o.status !== "cancelled")
    .reduce((sum, o) => sum + o.quantity * product.price, 0);

  res.json({ totalRevenue: revenue });
});

router.get("/alltotalrevenue", (req, res) => {
  const data = JSON.parse(fs.readFileSync("db.json"));

  const revenue = data.orders
    .filter(o => o.status !== "cancelled")
    .reduce((sum, o) => {
      const product = data.products.find(p => p.id === o.productId);
      return sum + o.quantity * product.price;
    }, 0);

  res.json({ totalRevenue: revenue });
});

module.exports = router;
