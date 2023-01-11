const models = require("../models");

const addUser = (req, res) => {
  const user = req.body;
  models.user
    .addUser(user)
    .then(([result]) => {
      res.location(`/user/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getAllUsers = (req, res) => {
  models.user
    .findAll()
    .then(([rows]) => {
      rows.forEach((element) => {
        const user = element;
        delete user.hashedPassword;
        return user;
      });
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const displayUser = (req, res) => {
  const boolify = Boolean(req.user.isOnline);
  req.user.isOnline = boolify;
  res.send({ user: req.user });
};

const updateUser = (req, res) => {
  const user = req.body;
  const id = parseInt(req.params.id, 10);
  models.user
    .updateUser(user, id)
    .then(([result]) => {
      res.location(`/user/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const deleteUser = (req, res) => {
  models.user
    .deleteUser(req)
    .then(() => {
      res.sendStatus(204);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  getAllUsers,
  displayUser,
  addUser,
  updateUser,
  deleteUser,
};
