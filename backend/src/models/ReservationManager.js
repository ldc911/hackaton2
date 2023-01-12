const AbstractManager = require("./AbstractManager");

class ReservationManager extends AbstractManager {
  constructor() {
    super({ table: "reservation" });
  }

  findReservation() {
    return this.connection.query(
      `SELECT id_vehicule, CONCAT(user.firstName, ' ', user.lastname) AS user_renter, rentStart, rentEnd FROM ${this.table}
      INNER JOIN user ON  user.id = reservation.id_user`
    );
  }
}
module.exports = ReservationManager;
