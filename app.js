const express = require("express");
const app = express();

app.use(express.json()); // JSON parsing

let users = [
  { id: 1, name: "Ashein", age: 23, subject: "Node js" },
  { id: 2, name: "Oak Oak", age: 25, subject: "Java" },
  { id: 3, name: "Mg Khant", age: 21, subject: "Flutter" },
];

app.get("/users", (req, res) => {
  res.status(200).json(users);
});

app.get("/users/:id", (req, res) => {
  let id = req.params.id;
  let user = users.find((u) => u.id == id);
  if (user) {
    res.status(200).json(user);
  } else {
    res.send({ message: "user with that id not found" });
  }
});

app.post("/user", (req, res) => {
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

//we have to write the following line after all destinated routes
app.get("*", (req, res) => {
  res.json({ message: "No Route Found" });
});

app.listen(3000, console.log("Server is running at port 3000 ..."));
