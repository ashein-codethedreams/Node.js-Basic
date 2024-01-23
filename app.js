const express = require("express");
const app = express();

app.get("/", () => {
  console.log("you will get testing ..");
});

app.post("/post", () => {
  console.log("you are requesting post route");
});

//we have to write the following line after all destinated routes
app.get("*", (req, res) => {
  res.json({ message: "No Route Found" });
});

app.listen(3000, console.log("Server is running at port 3000 ..."));
