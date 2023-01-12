const express = require("express");

const router = express.Router();
const vehicleControllers = require("./controllers/vehicleControllers");
const userControllers = require("./controllers/userControllers");
const reservationControllers = require("./controllers/reservationControllers");

const middlewares = require("./services/middlewares");
const auth = require("../auth");

// cars routes
// récupérer toutes les voitures
router.get(
  "/vehicles",
  middlewares.getReservations,
  vehicleControllers.getAllVehicles
);

<<<<<<< HEAD
=======
// récupérer une seule voiture
router.get(
  "/cardetails/:id",
  middlewares.getReservations,
  vehicleControllers.getOneVehicle
);
>>>>>>> fce43ab4ce14e0b09bac10474cae5346c488348c
// users routes
router.get("/users/", userControllers.getAllUsers);
router.put("/user/:id", userControllers.updateUser);
router.delete("/user/:id", userControllers.deleteUser);

// owners routes
// récupérer les voitures d'un owner
router.get(
  "/owners/:id/vehicles",
  middlewares.getReservations,
  vehicleControllers.getVehicleByOwnerId
);

// Vérification si le owner qui veut supprimer la voiture possède la voiture
router.delete(
  "/vehicles/:id",
  auth.getloggedInIdFromToken,
  middlewares.getVehicleById,
  vehicleControllers.deleteVehicle
);

// ajout d'une voiture
router.post("/owners/:id/vehicles", vehicleControllers.createVehicle);

// reservations routes
router.post(
  "/cardetails/:id/reservations",
  auth.getloggedInIdFromToken,
  reservationControllers.createReservation
);

module.exports = router;
