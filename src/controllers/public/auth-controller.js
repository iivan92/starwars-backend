const jwt = require("jsonwebtoken");
const logger = require("../../helpers/logger");

// users hardcoded for simplicity
const users = [
  {
    id: 1,
    email: "ivan@gmail.com",
    password: "test1234",
    firstName: "Test",
    lastName: "User",
  },
  {
    id: 2,
    email: "diego@gmail.com",
    password: "test1234",
    firstName: "TestD",
    lastName: "UserD",
  },
  {
    id: 3,
    email: "mateen@gmail.com",
    password: "test1234",
    firstName: "TestM",
    lastName: "UserM",
  },
];

const authenticate = (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = users.find(
      (u) => u.email === email && u.password === password
    );
    if (user) {
      const token = jwt.sign({ email }, process.env.TOKEN_KEY, {
        expiresIn: "2h",
      });
      user.token = token;
      const { password, ...userWithoutPassword } = user;
      logger.info(`[auth] login correct: ${email}`);
      res.status(200).json(userWithoutPassword);
    } else {
      logger.error(`[auth] login incorrect`);
      res.status(400).json({ message: "Username or password is incorrect" });
    }
  } catch (err) {
    logger.error(`[auth] error: ${err}`);
    next(err);
  }
};

module.exports = { authenticate };
