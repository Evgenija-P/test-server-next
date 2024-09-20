const { Router } = require("express");
const { createNews, getNewsBySlug, getAllNews } = require("../controllers/news_controller");

const router = Router();

router.get("/", getAllNews);
router.post("/", createNews);
router.get("/:slug", getNewsBySlug);

module.exports = router;
