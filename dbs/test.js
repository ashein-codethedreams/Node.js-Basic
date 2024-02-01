const mongoose = require("mongoose");
const { Schema } = mongoose;

const TestScheme = new Schema({
  user:{type:Schema.Types.ObjectId,required:true,ref:"user"},
  title: { type: String, required: true },
  description: { type: String, required: true },
});

const Test = mongoose.model("test", TestScheme);

module.exports = Test;
