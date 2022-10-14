const express = require("express");

const validatorHandler = require("../middlewares/validatorHandler");
const {
  createMutantSchema,
  updateMutantSchema,
  getMutantSchema,
  getMutantByIdSchema,
} = require("../schemas/mutant.schema");
const MutantsServices = require("../services/mutants.services");

const router = express.Router();
const service = new MutantsServices();

router.get("/", async (req, res, next) => {
  try {
    const mutants = await service.find();
    res.status(200).json(mutants);
  } catch (error) {
    next(error);
  }
});

router.post(
  "/",
  validatorHandler(createMutantSchema, "body"),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newMutant = await service.create(body);
      res.status(201).json(newMutant);
    } catch (error) {
      next(error);
    }
  }
);

router.patch(
  "/:id",
  validatorHandler(getMutantByIdSchema, "params"),
  validatorHandler(updateMutantSchema, "body"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const mutant = await service.update(id, body);
      res.status(200).json(mutant);
    } catch (error) {
      console.log("entra");
      next(error);
    }
  }
);

router.get(
  "/search",
  validatorHandler(getMutantSchema, "query"),
  async (req, res, next) => {
    try {
      const response = await service.findByAny(req.query);
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }
);

router.get(
  "/:id",
  validatorHandler(getMutantByIdSchema, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const mutant = await service.findById(id);
      res.status(200).json(mutant);
    } catch (error) {
      console.log("entra");
      next(error);
    }
  }
);

router.delete(
  "/:id",
  validatorHandler(getMutantSchema, "params"),
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
