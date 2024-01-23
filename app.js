const express = require("express");
const app = express();

app.get("/user", (req, res, next) => {
  res.json({ name: "Ashein", age: 25, subject: "Node js" });
});

app.post("/user", (req, res, next) => {
  res.json({ message: "user registeration succeeded" });
});

//we have to write the following line after all destinated routes
app.get("*", (req, res) => {
  res.json({ message: "No Route Found" });
});

app.listen(3000, console.log("Server is running at port 3000 ..."));
