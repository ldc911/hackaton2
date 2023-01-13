const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  addUser(user) {
    const {
      drivingLicense,
      nom,
      prenom,
      dateNaissance,
      ville,
      hashedPassword,
      email,
      profilePicture,
    } = user;
    return this.connection.query(
      `insert into ${this.table} (NumeroPermis,nom,prenom,dateNaissance,ville,hashedPassword,email, avatar) values (?,?,?,?,?,?,?,?)`,
      [
        drivingLicense,
        nom,
        prenom,
        dateNaissance,
        ville,
        hashedPassword,
        email,
        profilePicture,
      ]
    );
  }

  updateUser(user, id) {
    const { NumeroPermis, nom, prenom, dateNaissance, ville, email, estAdmin } =
      user;
    return this.connection
      .query(
        `update ${this.table} set NumeroPermis=?,nom=?,prenom=?,dateNaissance=?,ville=?,email=?,estAdmin=? where id=?`,
        [NumeroPermis, nom, prenom, dateNaissance, ville, email, estAdmin, id]
      )
      .then((result) => {
        return result;
      })
      .catch(() => {
        throw new Error("Error updating user");
      });
  }

  deleteUser({ params, payload }) {
    const parsedId = parseInt(params.id, 10);
    if (payload.sub !== parsedId) {
      throw new Error("Forbidden credentials");
    }
    return this.connection
      .query(`delete from ${this.table} where id = ?`, [parsedId])
      .then(([result]) => {
        if (result.affectedRows === 0) {
          throw new Error("User not found");
        } else {
          return true;
        }
      })
      .catch(() => {
        throw new Error("Error deleting user");
      });
  }
}
module.exports = UserManager;
