const express = require("express");
const app = express();

app.get("/users", (req, res, next) => {
  res.status(200).json([
    { name: "Ashein", age: 25, subject: "Node js" },
    { name: "Oak Oak", age: 25, subject: "Java" },
  ]);
});

app.post("/users", (req, res, next) => {
  res.status(200).json({ message: "user registeration succeeded" });
});

app.patch("/users/:id/:name", (req, res, next) => {
  let id = req.params.id;
  let name = req.params.name;
  res.status(200).json({ id, name });
});
app.delete("/users/:id", (req, res, next) => {
  let id = req.params.id;
  res.status(200).json({ message: `Delete user id is ${id}` });
});

//we have to write the following line after all destinated routes
app.get("*", (req, res) => {
  res.json({ message: "No Route Found" });
});

app.listen(3000, console.log("Server is running at port 3000 ..."));
