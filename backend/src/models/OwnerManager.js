const AbstractManager = require("./AbstractManager");

class OwnerManager extends AbstractManager {
  constructor() {
    super({ table: "owner" });
  }

  findOwners() {
    return this.connection.query(
      `select entreprise, email, ville, estValide, logo from  ${this.table}`
    );
  }
}

module.exports = OwnerManager;
