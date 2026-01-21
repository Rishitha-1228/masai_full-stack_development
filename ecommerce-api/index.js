const express = require("express");
const app = express();

app.use(express.json());

const productRoutes = require("./routes/products.routes");
const orderRoutes = require("./routes/orders.routes");
const analyticsRoutes = require("./routes/analytics.routes");

app.use("/products", productRoutes);
app.use("/orders", orderRoutes);
app.use("/analytics", analyticsRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
