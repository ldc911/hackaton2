const express = require("express");

const router = express.Router();
const vehicleControllers = require("./controllers/vehicleControllers");
const middlewares = require("./middlewares");
const userControllers = require("./controllers/userControllers");

// cars routes
router.get(
  "/vehicles",
  middlewares.getReservations,
  vehicleControllers.getAllVehicles
);
// users routes
router.delete("/user/:id", userControllers.deleteUser);

module.exports = router;
