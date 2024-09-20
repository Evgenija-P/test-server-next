const { Router } = require("express");

const router = Router();

router.get("/", (reg, res, next) => {
  res.send({ ok: "team page" });
});

module.exports = router;
