const express = require("express");
const app = express();

app.use(express.json()); // JSON parsing

const userRoute = require("./routes/user");
app.use("/users", userRoute);

const postRoute = require("./routes/post");
app.use("/posts", postRoute);

app.listen(3000, console.log("Server is running at port 3000 ..."));
