require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.connect(`mongodb://127.0.0.1:27017/${process.env.DB_NAME}`);

app.use(express.json()); // JSON parsing

const userRoute = require("./routes/user");
app.use("/users", userRoute);

const postRoute = require("./routes/post");
app.use("/posts", postRoute);

const testroute = require("./routes/test");
app.use("/tests", testroute);

app.use((err, req, res, next) => {
  err.status = err.status || 500;
  res.status(err.status).json({
    condition: false,
    message: err.message,
  });
});

app.listen(
  process.env.PORT,
  console.log(`Server is running at port ${process.env.PORT} ...`)
);
