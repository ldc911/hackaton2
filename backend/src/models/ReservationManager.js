const AbstractManager = require("./AbstractManager");

class ReservationManager extends AbstractManager {
  constructor() {
    super({ table: "reservation" });
  }

  findReservation() {
    return this.connection.query(
      `SELECT id_vehicule, rentStart, rentEnd FROM ${this.table}`
    );
  }
}
module.exports = ReservationManager;
