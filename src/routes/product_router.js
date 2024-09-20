const { Router } = require("express");
const {
  getAllProducts,
  getProductBySlug,
  createProduct,
} = require("../controllers/product_controller");

const router = Router();

router.post("/", createProduct);
router.get("/", getAllProducts);
router.get("/:slug", getProductBySlug);

module.exports = router;
