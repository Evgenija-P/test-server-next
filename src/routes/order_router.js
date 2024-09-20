const { Router } = require("express");
const { createOrder, getAllOrders, getOrderById } = require("../controllers/orders_controller");

const router = Router();

router.post("/", createOrder);
router.get("/", getAllOrders);
router.get("/:id", getOrderById);

module.exports = router;
