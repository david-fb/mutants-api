const Joi = require("joi");

const id = Joi.number().integer();
const name = Joi.string().min(1);

const createPowerSchema = Joi.object({
  name: name.required(),
});

const updatePowerSchema = Joi.object({
  name,
});

const getPowerSchema = Joi.object({
  id,
  name,
}).xor("id", "name");

module.exports = { createPowerSchema, updatePowerSchema, getPowerSchema };
