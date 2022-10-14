const Joi = require("joi");

const id = Joi.number().integer();
const name = Joi.string().min(1);
const alias = Joi.string().min(1);
const type = Joi.string().valid("hero", "villain");
const condition = Joi.string().valid("freedom", "arrested", "unknown");
const image = Joi.string().uri();
const vehicle_id = Joi.number().integer();
const placeId = Joi.number().integer();
const powersId = Joi.array().items(Joi.number().integer()).unique();

const createMutantSchema = Joi.object({
  name: name.required(),
  alias: alias.required(),
  type: type.required(),
  condition: condition.required(),
  image: image.required(),
  vehicle_id,
  powersId,
  placeId: placeId.required(),
});

const updateMutantSchema = Joi.object({
  name,
  alias,
  type,
  condition,
  image,
  vehicle_id,
  placeId,
  powersId,
});

const getMutantByIdSchema = Joi.object({
  id: id.required(),
});

const getMutantSchema = Joi.object({
  query: Joi.string().min(1).required(),
});
module.exports = {
  createMutantSchema,
  updateMutantSchema,
  getMutantSchema,
  getMutantByIdSchema,
};
