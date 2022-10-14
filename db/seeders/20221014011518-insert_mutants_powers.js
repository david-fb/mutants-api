"use strict";
const { MUTANT_POWER_TABLE } = require("../models/mutant_power.model");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    //Agilidad        id      1
    //Resistencia     id      2
    //Inteligencia    id      3
    //Sigilo          id      4
    //Acrobacia       id      5
    //Reflejos        id      6

    //Spiderman id 1
    await queryInterface.bulkInsert(MUTANT_POWER_TABLE, [
      {
        mutant_id: 1,
        power_id: 1,
      },
    ]);
    await queryInterface.bulkInsert(MUTANT_POWER_TABLE, [
      {
        mutant_id: 1,
        power_id: 2,
      },
    ]);
    await queryInterface.bulkInsert(MUTANT_POWER_TABLE, [
      {
        mutant_id: 1,
        power_id: 5,
      },
    ]);

    //Thor id 2
    await queryInterface.bulkInsert(MUTANT_POWER_TABLE, [
      {
        mutant_id: 2,
        power_id: 1,
      },
    ]);
    await queryInterface.bulkInsert(MUTANT_POWER_TABLE, [
      {
        mutant_id: 2,
        power_id: 2,
      },
    ]);
    await queryInterface.bulkInsert(MUTANT_POWER_TABLE, [
      {
        mutant_id: 2,
        power_id: 6,
      },
    ]);

    //Green Goblin id 3
    await queryInterface.bulkInsert(MUTANT_POWER_TABLE, [
      {
        mutant_id: 3,
        power_id: 3,
      },
    ]);
    await queryInterface.bulkInsert(MUTANT_POWER_TABLE, [
      {
        mutant_id: 3,
        power_id: 4,
      },
    ]);

    //Batman id 4
    await queryInterface.bulkInsert(MUTANT_POWER_TABLE, [
      {
        mutant_id: 4,
        power_id: 4,
      },
    ]);
    await queryInterface.bulkInsert(MUTANT_POWER_TABLE, [
      {
        mutant_id: 4,
        power_id: 5,
      },
    ]);
    await queryInterface.bulkInsert(MUTANT_POWER_TABLE, [
      {
        mutant_id: 4,
        power_id: 3,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete(MUTANT_POWER_TABLE, null, {});
  },
};
