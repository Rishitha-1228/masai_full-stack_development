const express = require("express");
const fs = require("fs");
const router = express.Router();

router.get("/allOrders", (req, res) => {
  const db = JSON.parse(fs.readFileSync("db.json"));
  res.json({
    count: db.orders.length,
    orders: db.orders
  });
});
module.exports = router;
