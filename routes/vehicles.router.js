const express = require("express");
const validatorHandler = require("../middlewares/validatorHandler");

const {
  createVehicleSchema,
  updateVehicleSchema,
  getVehicleSchema,
} = require("../schemas/vehicle.schema");

const VehiclesService = require("../services/vehicles.services");

const router = express.Router();
const service = new VehiclesService();

router.get("/", async (req, res, next) => {
  try {
    const vehicles = await service.find();
    res.status(200).json(vehicles);
  } catch (error) {
    next(error);
  }
});

router.post(
  "/",
  validatorHandler(createVehicleSchema, "body"),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newVehicle = await service.create(body);
      res.status(201).json(newVehicle);
    } catch (error) {
      next(error);
    }
  }
);

router.get(
  "/:id",
  validatorHandler(getVehicleSchema, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const vehicle = await service.findOne(id);
      res.status(200).json(vehicle);
    } catch (error) {
      next(error);
    }
  }
);

router.patch(
  "/:id",
  validatorHandler(getVehicleSchema, "params"),
  validatorHandler(updateVehicleSchema, "body"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const vehicle = await service.update(id, body);
      res.status(200).json(vehicle);
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  "/:id",
  validatorHandler(getVehicleSchema, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const response = await service.delete(id);
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
