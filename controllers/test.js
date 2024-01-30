const DB = require("../dbs/test");
const Helper = require("../utils/helper");

const getAll = async (req, res, next) => {
  let tests = await DB.find();
  Helper.formattedMessage(res, "All Tests", tests);
};

const getOne = async (req, res) => {
  res.json({ message: "get test id is " + req.params.id });
};

const add = async (req, res) => {
  let newTest = new DB(req.body);
  let result = await newTest.save();
  Helper.formattedMessage(res, "Add New Test", result);
};

const patch = async (req, res) => {
  res.json({ message: "edit test id is " + req.params.id });
};

const drop = async (req, res) => {
  res.json({ message: "delete test id is " + req.params.id });
};

module.exports = {
  getAll,
  getOne,
  add,
  patch,
  drop,
};
