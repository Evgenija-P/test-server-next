const express = require("express");

const router = express.Router();

const { register, login, logout, getCurrentUser } = require("../controllers/user_controller");
const { ctrlWrapper } = require("../middlewares/ctrlWrapper");
const { authenticate } = require("../middlewares/auth_middleware");

// register
router.post("/signup", ctrlWrapper(register));

// singing
router.post("/login", ctrlWrapper(login));

// current
router.get("/current", authenticate, ctrlWrapper(getCurrentUser));
router.get("/logout", authenticate, ctrlWrapper(logout));

module.exports = router;
