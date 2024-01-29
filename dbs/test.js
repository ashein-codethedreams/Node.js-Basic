const mongoose = require("mongoose");
const { Schema } = mongoose;

const TestScheme = new Schema({
  name: { type: String, required: true },
  phone: { type: Number, required: true, unique: true },
  password: { type: String, required: true },
});

const Test = mongoose.model("test", TestScheme);

module.exports = Test;