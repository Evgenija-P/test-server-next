const express = require("express");
const app = express();
const cors = require("cors");
const feedback_router = require("./routes/feedback_router");
const news_router = require("./routes/news_router");
const order_router = require("./routes/order_router");
const product_router = require("./routes/product_router");
const team_router = require("./routes/team_router");
const blog_router = require("./routes/blog_router");

app.use(cors());
app.use(express.json());

app.use("/feedback", feedback_router);
app.use("/news", news_router);
app.use("/order", order_router);
app.use("/product", product_router);
app.use("/team", team_router);
app.use("/blog", blog_router);

// Налаштовуємо середовище для статичних файлів (зображень)
app.use("/images", express.static(__dirname + "/images"));

app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

console.clear();
module.exports = app;
