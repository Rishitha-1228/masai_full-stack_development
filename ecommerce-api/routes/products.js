const express = require("express");
const fs = require("fs");
const router = express.Router();

router.post("/", (req, res) => {
  const db = JSON.parse(fs.readFileSync("db.json"));
  const product = {
    id: Date.now(),
    ...req.body
  };

  db.products.push(product);
  fs.writeFileSync("db.json", JSON.stringify(db, null, 2));

  res.status(201).json(product);
});

module.exports = router;
