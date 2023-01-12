const AbstractManager = require("./AbstractManager");

class VehicleManager extends AbstractManager {
  constructor() {
    super({ table: "vehicule" });
  }

  findVehicle() {
    return this.connection.query(
      `SELECT v.id, v.manufacturer, v.model, v.type, v.year, v.color, v.seats, v.mileage, v.city, v.price, v.id_owner, v.isAvailable, v.maintenanceStartDate, v.maintenanceEndDate, v.isValidate, v.insuranceCompany, v.insuranceNumber, v.picture FROM ${this.table} AS v INNER JOIN owner ON owner.id = v.id_owner
      WHERE v.isValidate=1 AND owner.isValidate = 1`
    );
  }

  findByOwnerId(id) {
    return this.connection.query(
      `SELECT * FROM ${this.table} WHERE id_owner = ?`,
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
      `INSERT INTO ${this.table} (manufacturer, model, type, year, color, seats, mileage, city, price, id_owner, isAvailable, isValidate, insuranceCompany, insuranceNumber, picture) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
      [
        vehicle.manufacturer,
        vehicle.model,
        vehicle.type,
        vehicle.year,
        vehicle.color,
        vehicle.seats,
        vehicle.mileage,
        vehicle.city,
        vehicle.price,
        vehicle.id_owner,
        vehicle.isAvailable,
        vehicle.isValidate,
        vehicle.insuranceCompany,
        vehicle.insuranceNumber,
        vehicle.picture,
      ]
    );
  }

  deleteVehicle(id) {
    return this.connection.query(`DELETE FROM ${this.table} WHERE id =?`, [id]);
  }
}

module.exports = VehicleManager;
