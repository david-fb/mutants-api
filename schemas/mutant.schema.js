const Joi = require("joi");

const id = Joi.number().integer();
const name = Joi.string().min(1);
const alias = Joi.string().min(1);
const type = Joi.string().valid("Heroe", "Villano");
const condition = Joi.string().valid("Libertad", "Detenido", "Desconocido");
const image = Joi.string().uri();
const vehicle_id = Joi.number().integer();
const place_id = Joi.number().integer();

const createMutantSchema = Joi.object({
  name: name.required(),
  alias: alias.required(),
  type: type.required(),
  condition: condition.required(),
  image: image.required(),
  vehicle_id,
  place_id: place_id.required(),
});

const updateMutantSchema = Joi.object({
  name,
  alias,
  type,
  condition,
  image,
  vehicle_id,
  place_id,
});

const getMutantSchema = Joi.object({
  id,
  name,
  place: Joi.string().min(1),
}).xor("id", "name", "place");

module.exports = { createMutantSchema, updateMutantSchema, getMutantSchema };
