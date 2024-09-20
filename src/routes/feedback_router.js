const { Router } = require("express");
const { createFeedback, getAllFeedbacks } = require("../controllers/feedback_controller");

const router = Router();

router.post("/", createFeedback);
router.get("/", getAllFeedbacks);

module.exports = router;
