const AbstractManager = require("./AbstractManager");

class VehicleManager extends AbstractManager {
  constructor() {
    super({ table: "vehicule" });
  }

  findVehicle() {
    return this.connection.query(
      `SELECT v.id, v.marque, v.modele, v.type, v.annee, v.couleur, v.places, v.kilometrage, v.ville, v.prix, v.id_loueur, v.estDisponible, v.entretienDateDebut, v.entretienDateFin, v.estValide, v.compagnieAssurance, v.numeroAssurance, v.image FROM ${this.table} AS v INNER JOIN owner ON owner.id = v.id_loueur
      WHERE v.estValide=1 AND owner.estValide = 1`
    );
  }

  findByOwnerId(id) {
    return this.connection.query(
      `SELECT * FROM ${this.table} WHERE id_loueur = ?`,
      [id]
    );
  }

  findById(id) {
    return this.connection.query(`SELECT * FROM ${this.table} WHERE id = ?`, [
      id,
    ]);
  }

  addVehicle(vehicle) {
    return this.connection.query(
      `INSERT INTO ${this.table} (marque, modele, type, annee, couleur, places, kilometrage, ville, prix, id_loueur, estDisponible, estValide, compagnieAssurance, numeroAssurance, image) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
      [
        vehicle.marque,
        vehicle.modele,
        vehicle.type,
        vehicle.annee,
        vehicle.couleur,
        vehicle.places,
        vehicle.kilometrage,
        vehicle.ville,
        vehicle.prix,
        vehicle.id_loueur,
        vehicle.estDisponible,
        vehicle.estValide,
        vehicle.compagnieAssurance,
        vehicle.numeroAssurance,
        vehicle.image,
      ]
    );
  }

  deleteVehicle(id) {
    return this.connection.query(`DELETE FROM ${this.table} WHERE id =?`, [id]);
  }
}

module.exports = VehicleManager;
