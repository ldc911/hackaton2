/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const database = require("./database");

// options de hash pour argon
const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 2 ** 16,
  timeCost: 5,
  parallelism: 1,
};

// function to hash password
const hashPassword = (req, res, next) => {
  argon2
    .hash(req.body.password, hashingOptions)
    .then((hashedPassword) => {
      req.body.hashedPassword = hashedPassword;
      delete req.body.password;
      next();
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
};

const verifyToken = (req, res, next) => {
  try {
    const authorizationHeader = req.get("Authorization");
    if (authorizationHeader == null) {
      throw new Error("Authorization header is missing");
    }
    const [type, token] = authorizationHeader.split(" ");
    if (type !== "Bearer") {
      throw new Error("Authorization header has not the 'Bearer' type");
    }
    req.payload = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (error) {
    console.error(error);
    res.sendStatus(401);
  }
};

const verifyPassword = (req, res, next) => {
  const { email } = req.body;
  database
    .query("SELECT * FROM user WHERE EMAIL = ?", [email])
    .then(([user]) => {
      if (user[0] != null) {
        const verifiedUser = user[0];
        req.user = verifiedUser;
        argon2
          .verify(req.user.hashedPassword, req.body.password)
          .then((isVerified) => {
            if (isVerified) {
              const payload = { sub: req.user.id };
              const token = jwt.sign(payload, process.env.JWT_SECRET, {
                expiresIn: "2h",
              });
              delete req.user.hashedPassword;
              req.user.token = token;
              next();
            } else {
              res.status(401).send("Wrong password");
            }
          })
          .catch((error) => {
            console.error(error);
            res.sendStatus(401);
          });
      } else {
        database
          .query("SELECT * FROM owner WHERE EMAIL = ?", [email])
          .then(([owner]) => {
            if (owner[0] != null) {
              const verifiedOwner = owner[0];
              req.user = verifiedOwner;
              argon2
                .verify(req.user.hashedPassword, req.body.password)
                .then((isVerified) => {
                  if (isVerified) {
                    const payload = { sub: req.user.id, isOwner: 1 };
                    const token = jwt.sign(payload, process.env.JWT_SECRET, {
                      expiresIn: "2h",
                    });
                    delete req.user.hashedPassword;
                    req.user.token = token;
                    next();
                  } else {
                    res.status(401).send("Wrong password");
                  }
                })
                .catch((error) => {
                  console.error(error);
                  res.sendStatus(401);
                });
            } else {
              throw new Error();
            }
          })
          .catch((error) => {
            console.error(error);
            res.sendStatus(500);
          });
      }
    });
};

const getloggedInIdFromToken = (req, res, next) => {
  const authorization = req.get("Authorization");
  const [type, token] = authorization.split(" ");
  const payload = jwt.decode(token);
  req.body.id_loggedIn = payload.sub;
  payload.isOwner ? (req.body.isOwner = 1) : (req.body.isOwner = 0);
  next();
};

module.exports = {
  hashPassword,
  verifyToken,
  verifyPassword,
  getloggedInIdFromToken,
};
