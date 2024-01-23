const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({ message: "All posts" });
});

module.exports = router;
