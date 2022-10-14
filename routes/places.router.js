const express = require("express");
const validatorHandler = require("../middlewares/validatorHandler");
const {
  createPlaceSchema,
  updatePlaceSchema,
  getPlaceSchema,
} = require("../schemas/place.schema");

const PlacesService = require("../services/places.services");

const router = express.Router();
const service = new PlacesService();

router.get("/", async (req, res, next) => {
  try {
    const places = await service.find();
    res.status(200).json(places);
  } catch (error) {
    next(error);
  }
});

router.post(
  "/",
  validatorHandler(createPlaceSchema, "body"),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newPlace = await service.create(body);
      res.status(201).json(newPlace);
    } catch (error) {
      next(error);
    }
  }
);

router.get(
  "/:id",
  validatorHandler(getPlaceSchema, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const place = await service.findOne(id);
      res.status(200).json(place);
    } catch (error) {
      next(error);
    }
  }
);

router.patch(
  "/:id",
  validatorHandler(getPlaceSchema, "params"),
  validatorHandler(updatePlaceSchema, "body"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const place = await service.update(id, body);
      res.status(200).json(place);
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  "/:id",
  validatorHandler(getPlaceSchema, "params"),
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
