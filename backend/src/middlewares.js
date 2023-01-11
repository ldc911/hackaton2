const models = require("./models");

const getReservations = (req, res, next) => {
  models.reservation
    .findReservation()
    .then(([result]) => {
      req.body.resa = result;
      next();
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = { getReservations };
