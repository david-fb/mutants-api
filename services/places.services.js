const boom = require("@hapi/boom");
const { models } = require("../libs/sequelize");

class PlacesService {
  constructor() {}

  async create(data) {
    const newPlace = await models.Place.create(data);
    return newPlace;
  }

  async find() {
    const places = await models.Place.findAll();
    return places;
  }

  async findOne(id) {
    const place = await models.Place.findByPk(id, {
      include: ["mutants"],
    });
    if (!place) {
      throw boom.notFound("place not found");
    }
    return place;
  }

  async update(id, changes) {
    const place = await this.findOne(id);
    const placeUpdated = await place.update(changes);
    return placeUpdated;
  }

  async delete(id) {
    const place = await this.findOne(id);
    await place.destroy();
    return { status: true, message: "place has been deleted", id: id };
  }
}

module.exports = PlacesService;
