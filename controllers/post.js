const getAll = async (req, res, next) => {
  res.json({ message: "All posts" });
};

const getOne = async (req, res, next) => {
  res.json({ message: "get post id is " + req.params.id });
};

const post = async (req, res, next) => {
  res.json({ message: "Add new post" });
};

const patch = async (req, res, next) => {
  res.json({ message: "edit post id is " + req.params.id });
};

const drop = async (req, res, next) => {
  res.json({ message: "delete post id is " + req.params.id });
};

module.exports = {
  getAll,
  getOne,
  post,
  patch,
  drop,
};
