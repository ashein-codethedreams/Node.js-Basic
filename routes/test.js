const router = require("express").Router();
const controller = require("../controllers/test");

router.get("/", controller.getAll);

router.post("/", controller.add);

router
  .route("/:id")
  .get(controller.getOne)
  .patch(controller.patch)
  .delete(controller.drop);

module.exports = router;
