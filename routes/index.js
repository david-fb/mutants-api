const express = require("express");
const mutantsRouter = require("./mutants.router");
const placesRouter = require("./places.router");
const vehiclesRouter = require('./vehicles.router');
const powersRouter = require('./powers.router');

function routerApi(app) {
  const router = express.Router();
  app.use("/api/v1", router);

  router.use("/mutants", mutantsRouter);
  router.use("/places", placesRouter);
  router.use("/vehicles", vehiclesRouter);
  router.use("/powers", powersRouter);
}

module.exports = routerApi;
