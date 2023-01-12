const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  addUser(user) {
    const {
      drivingLicenseNumber,
      lastName,
      firstName,
      birthday,
      city,
      hashedPassword,
      email,
    } = user;
    return this.connection.query(
      `insert into ${this.table} (drivingLicenseNumber,lastName,firstName,birthday,city,hashedPassword,email) values (?,?,?,?,?,?,?)`,
      [
        drivingLicenseNumber,
        lastName,
        firstName,
        birthday,
        city,
        hashedPassword,
        email,
      ]
    );
  }

  updateUser(user, id) {
    const {
      drivingLicenseNumber,
      lastName,
      firstName,
      birthday,
      city,
      email,
      isAdmin,
    } = user;
    return this.connection
      .query(
        `update ${this.table} set drivingLicenseNumber=?,lastName=?,firstName=?,birthday=?,city=?,email=?,isAdmin=? where id=?`,
        [
          drivingLicenseNumber,
          lastName,
          firstName,
          birthday,
          city,
          email,
          isAdmin,
          id,
        ]
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
