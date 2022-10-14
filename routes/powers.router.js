const express = require("express");
const validatorHandler = require("../middlewares/validatorHandler");
const {
  createPowerSchema,
  updatePowerSchema,
  getPowerSchema,
} = require("../schemas/power.schema");
const PowersService = require("../services/powers.services");

const router = express.Router();
const service = new PowersService();

router.get("/", async (req, res, next) => {
  try {
    const powers = await service.find();
    res.status(200).json(powers);
  } catch (error) {
    next(error);
  }
});

router.get(
  "/:id",
  validatorHandler(getPowerSchema, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const power = await service.findOne(id);
      res.status(200).json(power);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  "/",
  validatorHandler(createPowerSchema, "body"),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newPower = await service.create(body);
      res.status(201).json(newPower);
    } catch (error) {
      next(error);
    }
  }
);

router.patch(
  "/:id",
  validatorHandler(getPowerSchema, "params"),
  validatorHandler(updatePowerSchema, "body"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const power = await service.update(id, body);
      res.status(200).json(power);
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  "/:id",
  validatorHandler(getPowerSchema, "params"),
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
