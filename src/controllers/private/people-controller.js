const axios = require("axios");
const logger = require("../../helpers/logger");

const getAll = (req, res, next) => {
  axios({
    method: "get",
    url: "https://swapi.dev/api/people",
  })
    .then((response) => {
      if (response.status === 200) {
        logger.debug(response.data.results);
        res.status(200).json(response.data.results);
      } else {
        logger.error(`[people] getAll swapi call error`);
        next();
      }
    })
    .catch((err) => {
      logger.error(`[people] getAll error: ${err}`);
      next(err);
    });
};

module.exports = { getAll };
