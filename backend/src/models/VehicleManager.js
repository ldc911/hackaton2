const AbstractManager = require("./AbstractManager");

class VehicleManager extends AbstractManager {
  constructor() {
    super({ table: "vehicule" });
  }

  findVehicle() {
    return this.connection.query(
      `SELECT * FROM ${this.table} WHERE isValidate=1`
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
