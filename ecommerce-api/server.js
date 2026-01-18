const express = require("express");
const app = express();

app.use(express.json());

app.use("/products", require("./routes/products"));
app.use("/orders", require("./routes/orders"));
app.use("/analytics", require("./routes/analytics"));

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
