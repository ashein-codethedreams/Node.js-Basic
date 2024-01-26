let users = [
  { id: 1, name: "Ashein", age: 23, subject: "Node js" },
  { id: 2, name: "Oak Oak", age: 25, subject: "Java" },
  { id: 3, name: "Mg Khant", age: 21, subject: "Flutter" },
];

const getAll = async (req, res, next) => {
  res.status(200).json(users);
};

const getOne = async (req, res, next) => {
  let id = req.params.id;
  let user = users.find((u) => u.id == id);
  if (user) {
    res.status(200).json(user);
  } else {
    res.send({ message: "user with that id not found" });
  }
};

const post = async (req, res, next) => {
  let id = req.body.id;
  let name = req.body.name;
  let age = req.body.age;
  let subject = req.body.subject;
  let newUser = {
    id: id,
    name: name,
    age: age,
    subject: subject,
  };
  console.log(newUser);
  users.push(newUser);
  res.json({ users });
};

const patch = async (req, res, next) => {
  let id = req.params.id;
  let editUser = users.find((u) => u.id == id);
  if (editUser) {
    editUser.name = req.body.name;
    res.json({ users });
  } else {
    res.send({ message: "user with that id not found" });
  }
};

const drop = async (req, res, next) => {
  let id = req.params.id;
  users = users.filter((u) => u.id != id);
  res.json({ users });
};

module.exports = {
  getAll,
  getOne,
  post,
  patch,
  drop,
};
