const express = require("express");
const router = express.Router();
const controller = require("../controllers/user");

router.get("/", controller.getAll);

router.get("/:id", controller.getOne);

router.post("/", controller.post);

router.patch("/:id", controller.patch);

router.delete("/:id", controller.drop);

//we have to write the following line after all destinated routes
router.get("*", (req, res) => {
  res.json({ message: "No Route Found" });
});

module.exports = router;
