const axios = require("axios");
const logger = require("../../helpers/logger");

const getAll = (req, res, next) => {
  axios({
    method: "get",
    url: "https://swapi.dev/api/planets",
  })
    .then((response) => {
      if (response.status === 200) {
        logger.debug(response.data.results);
        res.status(200).json(response.data.results);
      } else {
        logger.error(`[planets] getAll swapi call error`);
        next();
      }
    })
    .catch((err) => {
      logger.error(`[planets] getAll error: ${err}`);
      next(err);
    });
};

module.exports = { getAll };
