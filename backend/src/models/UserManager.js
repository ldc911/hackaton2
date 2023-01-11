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

  getUsersByCompany({ query }) {
    return this.connection
      .query(
        "select u.id,u.username,c.name as companyName,u.firstname,u.lastname,u.isOnline,u.profile_picture,u.email from `company` c JOIN `user` u on u.id_company=c.id where c.name = ?",
        [query.company]
      )
      .then((result) => {
        return result;
      })
      .catch(() => {
        throw new Error("No users in this company");
      });
  }

  updateUser(user, id) {
    const {
      userName,
      firstName,
      lastName,
      isOnline,
      email,
      profilePicture,
      idCompany,
      companyName,
    } = user;
    return this.connection
      .query(
        `update ${this.table} set userName=?,firstName=?,lastName=?,isOnline=?,email=?,profilePicture=?,id_company=?,companyName=? where id=?`,
        [
          userName,
          firstName,
          lastName,
          isOnline,
          email,
          profilePicture,
          idCompany,
          companyName,
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
