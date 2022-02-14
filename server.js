require("rootpath")();
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const basicAuth = require("_helpers/basic-auth");
const errorHandler = require("_helpers/error-handler");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// use basic HTTP auth to secure the api
app.use(basicAuth);

// api routes
app.use("/api/auth", require("./users/users.controller"));

// global error handler
app.use(errorHandler);

// start server
const { API_PORT, NODE_ENV } = process.env;
const port = NODE_ENV === "production" ? 80 : API_PORT;
const server = app.listen(port, function () {
  console.log("Server listening on port " + port);
});
