const mongoose = require("mongoose");
const { Schema } = mongoose;

const TestScheme = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
});

const Test = mongoose.model("test", TestScheme);

module.exports = Test;
