const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({ message: "All posts" });
});

router
  .route("/:id")
  .get((req, res) => res.json({ message: "get post id is " + req.params.id }))
  .patch((req, res) =>
    res.json({ message: "edit post id is " + req.params.id })
  )
  .delete((req, res) =>
    res.json({ message: "delete post id is " + req.params.id })
  );

module.exports = router;
