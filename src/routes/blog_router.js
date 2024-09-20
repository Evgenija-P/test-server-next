const { Router } = require("express");
const {} = require("../controllers/blog_controller");
const { createNote } = require("../controllers/blog_controller");
const { getAllNotation } = require("../controllers/blog_controller");
const { getNoteBySlug } = require("../controllers/blog_controller");
const { deleteNote } = require("../controllers/blog_controller");
const { updateNote } = require("../controllers/blog_controller");

const router = Router();

router.post("/", createNote);
router.get("/", getAllNotation);
router.get("/:slug", getNoteBySlug);
router.delete("/:id", deleteNote);
router.put("/:id", updateNote);

module.exports = router;
