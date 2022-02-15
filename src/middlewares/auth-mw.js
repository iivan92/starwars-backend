const jwt = require("jsonwebtoken");
const logger = require("../helpers/logger");

module.exports = auth;

async function auth(req, res, next) {
  // make authenticate path public
  if (req.path === "/api/auth/login") {
    return next();
  }

  const config = process.env;

  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const decoded = jwt.verify(token, config.TOKEN_KEY);
    req.user = decoded;
  } catch (err) {
    logger.error(`[auth] error: ${err}`);
    return res.status(401).send("Invalid Token");
  }
  return next();
}
