const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const feedback_router = require("./routes/feedback_router");
const news_router = require("./routes/news_router");
const order_router = require("./routes/order_router");
const product_router = require("./routes/product_router");
const team_router = require("./routes/team_router");
const blog_router = require("./routes/blog_router");
const auth_router = require("./routes/auth_router");

app.use(
  cors({
    origin: "http://localhost:3000", // URL вашого фронтенду
    credentials: true, // Дозволяє надсилати куки
  })
);
app.use(express.json());

app.use("/feedback", feedback_router);
app.use("/news", news_router);
app.use("/order", order_router);
app.use("/product", product_router);
app.use("/team", team_router);
app.use("/blog", blog_router);
app.use("/auth", auth_router);

// Налаштовуємо середовище для статичних файлів (зображень)
app.use("/images", express.static(__dirname + "/images"));

app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

const { SECRET_KEY } = process.env;
console.log(SECRET_KEY);

console.clear();
module.exports = app;
