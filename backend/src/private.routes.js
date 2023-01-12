const express = require("express");

const router = express.Router();
const vehicleControllers = require("./controllers/vehicleControllers");

const middlewares = require("./services/middlewares");
const auth = require("../auth");

const userControllers = require("./controllers/userControllers");

// cars routes
// récupérer toutes les voitures
router.get(
  "/vehicles",
  middlewares.getReservations,
  vehicleControllers.getAllVehicles
);
// users routes
router.delete("/user/:id", userControllers.deleteUser);

module.exports = router;

// récupérer une seule voiture
router.get(
  "/cardetails/:id",
  middlewares.getReservations,
  vehicleControllers.getOneVehicle
);

// récupérer les voitures d'un owner
router.get(
  "/owners/:id/vehicles",
  middlewares.getReservations,
  vehicleControllers.getVehicleByOwnerId
);

// Vérification si le owner qui veut supprimer la voiture possède la voiture
router.delete(
  "/vehicles/:id",
  auth.getOwnerIdFromToker,
  middlewares.getVehicleById,
  vehicleControllers.deleteVehicle
);

// ajout d'une voiture
router.post("/owners/:id/vehicles", vehicleControllers.createVehicle);
