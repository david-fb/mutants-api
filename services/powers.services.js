const boom = require("@hapi/boom");
const { models } = require("../libs/sequelize");

class PowersService {
  constructor() {}

  async create(data) {
    const power = await models.Power.create(data);
    return power;
  }

  async find() {
    const powers = await models.Power.findAndCountAll();
    return powers;
  }

  async findOne(id) {
    const power = await models.Power.findByPk(id);
    if (!power) throw boom.notFound("power not found");
    return power;
  }

  async update(id, changes) {
    const power = await this.findOne(id);
    const powerUpdated = await power.update(changes);
    return powerUpdated;
  }

  async delete(id) {
    const power = await this.findOne(id);
    await power.destroy();
    return { status: true, message: "power has been deleted", id: id };
  }
}

module.exports = PowersService;