require("rootpath")();
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const auth = require("./middlewares/auth-mw");
const errorHandler = require("./middlewares/error-mw");
const logger = require("./helpers/logger");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use(auth);

// public api routes
app.use("/api/auth", require("./routes/public/auth-router"));

// private api routes
app.use("/api/people", require("./routes/private/people-router"));
app.use("/api/planets", require("./routes/private/planets-router"));
app.use("/api/starships", require("./routes/private/starships-router"));

// global error handler
app.use(errorHandler);

// start server
const { API_PORT, NODE_ENV } = process.env;
const port = NODE_ENV === "production" ? process.env.PORT : API_PORT;
const server = app.listen(port, function () {
  logger.info(`Server started at PORT ${port}`);
});
