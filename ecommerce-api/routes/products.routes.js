const express = require("express");
const fs = require("fs");
const router = express.Router();

router.post("/", (req, res) => {
  const data = JSON.parse(fs.readFileSync("db.json", "utf-8"));
  data.products.push(req.body);
  fs.writeFileSync("db.json", JSON.stringify(data, null, 2));
  res.status(201).json(req.body);
});

module.exports = router;
