const boom = require("@hapi/boom");
const { models } = require("../libs/sequelize");

class VehiclesService {
  constructor() {}

  async create(data) {
    const newVehicle = await models.Vehicle.create(data);
    return newVehicle;
  }

  async find() {
    const vehicles = await models.Vehicle.findAll();
    return vehicles;
  }

  async findOne(id) {
    const vehicle = await models.Vehicle.findByPk(id, {
      include: ["mutants"],
    });
    if (!vehicle) throw boom.notFound("vehicle not found");
    return vehicle;
  }

  async update(id, changes) {
    const vehicle = await this.findOne(id);
    const vehicleUpdated = await vehicle.update(changes);
    return vehicleUpdated;
  }

  async delete(id) {
    const vehicle = await this.findOne(id);
    await vehicle.destroy();
    return { status: true, message: "vehicle has been deleted", id: id };
  }
}

module.exports = VehiclesService;
