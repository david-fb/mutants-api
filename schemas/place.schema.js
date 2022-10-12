const Joi = require("joi");

const id = Joi.number().integer();
const name = Joi.string().min(1);

const createPlaceSchema = Joi.object({
  name: name.required(),
});

const updatePlaceSchema = Joi.object({
  name,
});

const getPlaceSchema = Joi.object({
  id,
  name,
}).xor("id", "name");

module.exports = { createPlaceSchema, updatePlaceSchema, getPlaceSchema };
