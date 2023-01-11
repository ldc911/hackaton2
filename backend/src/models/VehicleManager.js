const AbstractManager = require("./AbstractManager");

class VehicleManager extends AbstractManager {
  constructor() {
    super({ table: "vehicule" });
  }

  findVehicle() {
    return this.connection.query(`SELECT * FROM ${this.table}`);
  }
}
module.exports = VehicleManager;
