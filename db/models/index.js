const { Mutant, MutantSchema } = require("./mutant.model");
const { Vehicle, VehicleSchema } = require("./vehicle.model");
const { Power, PowerSchema } = require("./power.model");
const { Place, PlaceSchema } = require("./place.model");
const { MutantPower, MutantPowerSchema } = require("./mutant_power.model");

function setupModels(sequelize) {
  Vehicle.init(VehicleSchema, Vehicle.config(sequelize));
  Place.init(PlaceSchema, Place.config(sequelize));
  Power.init(PowerSchema, Power.config(sequelize));
  Mutant.init(MutantSchema, Mutant.config(sequelize));
  MutantPower.init(MutantPowerSchema, MutantPower.config(sequelize));

  Vehicle.associate(sequelize.models);
  Place.associate(sequelize.models);
  Mutant.associate(sequelize.models);
  Power.associate(sequelize.models);
}

module.exports = setupModels;
