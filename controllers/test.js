const DB = require("../dbs/test");
const Helper = require("../utils/helper");

const getAll = async (req, res, next) => {
  let tests = await DB.find();
  Helper.formattedMessage(res, "All Tests", tests);
};

const getOne = async (req, res) => {
  res.json({ message: "get test id is " + req.params.id });
};

const post = async (req, res) => {
  res.json({ message: "Add new post", result: req.body });
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
  post,
  patch,
  drop,
};
