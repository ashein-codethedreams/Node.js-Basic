const express = require("express");
const router = express.Router();

let users = [
  { id: 1, name: "Ashein", age: 23, subject: "Node js" },
  { id: 2, name: "Oak Oak", age: 25, subject: "Java" },
  { id: 3, name: "Mg Khant", age: 21, subject: "Flutter" },
];

router.get("/", (req, res) => {
  res.status(200).json(users);
});

router.get("/:id", (req, res) => {
  let id = req.params.id;
  let user = users.find((u) => u.id == id);
  if (user) {
    res.status(200).json(user);
  } else {
    res.send({ message: "user with that id not found" });
  }
});

router.post("/", (req, res) => {
  let id = req.body.id;
  let name = req.body.name;
  let age = req.body.age;
  let subject = req.body.subject;
  let newUser = {
    id: id,
    name: name,
    age: age,
    subject: subject,
  };
  console.log(newUser);
  users.push(newUser);
  res.json({ users });
});

router.patch("/:id", (req, res) => {
  let id = req.params.id;
  let editUser = users.find((u) => u.id == id);
  if (editUser) {
    editUser.name = req.body.name;
    res.json({ users });
  } else {
    res.send({ message: "user with that id not found" });
  }
});

router.delete("/:id", (req, res) => {
  let id = req.params.id;
  users = users.filter((u) => u.id != id);
  res.json({ users });
});

//we have to write the following line after all destinated routes
router.get("*", (req, res) => {
  res.json({ message: "No Route Found" });
});

module.exports = router;
