"use strict";

const { VehicleSchema, VEHICLES_TABLE } = require("../models/vehicle.model");
const { PlaceSchema, PLACES_TABLE } = require("../models/place.model");
const { PowerSchema, POWERS_TABLE } = require("../models/power.model");
const { MutantSchema, MUTANTS_TABLE } = require("../models/mutant.model");
const {
  MutantPowerSchema,
  MUTANT_POWER_TABLE,
} = require("../models/mutant_power.model");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(PLACES_TABLE, PlaceSchema);
    await queryInterface.createTable(VEHICLES_TABLE, VehicleSchema);
    await queryInterface.createTable(POWERS_TABLE, PowerSchema);
    await queryInterface.createTable(MUTANTS_TABLE, MutantSchema);
    await queryInterface.createTable(MUTANT_POWER_TABLE, MutantPowerSchema);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(MUTANT_POWER_TABLE, MutantPowerSchema);
    await queryInterface.dropTable(MUTANTS_TABLE, MutantSchema);
    await queryInterface.dropTable(POWERS_TABLE, PowerSchema);
    await queryInterface.dropTable(PLACES_TABLE, PlaceSchema);
    await queryInterface.dropTable(VEHICLES_TABLE, VehicleSchema);
  },
};
