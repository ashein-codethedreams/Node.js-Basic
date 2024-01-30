const DB = require("../dbs/test");
const Helper = require("../utils/helper");

const getAll = async (req, res, next) => {
  let tests = await DB.find();
  Helper.formattedMessage(res, "All Tests", tests);
};

const getOne = async (req, res) => {
  let id = req.params.id;
  let test = await DB.findById(id);
  Helper.formattedMessage(res, "Get Test by id", test);
};

const add = async (req, res) => {
  let newTest = new DB(req.body);
  let result = await newTest.save();
  Helper.formattedMessage(res, "Add New Test", result);
};

const patch = async (req, res, next) => {
  let test = await DB.findById(req.params.id);
  if (test) {
    await DB.findByIdAndUpdate(test._id, req.body);
    let updatedTest = await DB.findById(test._id);
    Helper.formattedMessage(res, "Update Test", updatedTest);
  } else {
    next(new Error("Error , id not found!"));
  }
};

const drop = async (req, res, next) => {
  await DB.findByIdAndDelete(req.params.id);
  Helper.formattedMessage(res, "Delete Test");
};

module.exports = {
  getAll,
  getOne,
  add,
  patch,
  drop,
};
