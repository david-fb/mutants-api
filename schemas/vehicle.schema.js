const Joi = require("joi");

const id = Joi.number().integer();
const name = Joi.string().min(1);

const createVehicleSchema = Joi.object({
  name: name.required(),
});

const updateVehicleSchema = Joi.object({
  name,
});

const getVehicleSchema = Joi.object({
  id,
  name,
}).xor("id", "name");

module.exports = { createVehicleSchema, updateVehicleSchema, getVehicleSchema };
