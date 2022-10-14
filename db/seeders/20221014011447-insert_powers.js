"use strict";

const { POWERS_TABLE } = require("../models/power.model");

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
    await queryInterface.bulkInsert(POWERS_TABLE, [
      {
        name: "Agilidad",
        created_at: new Date(),
      },
    ]);
    await queryInterface.bulkInsert(POWERS_TABLE, [
      {
        name: "Resistencia",
        created_at: new Date(),
      },
    ]);
    await queryInterface.bulkInsert(POWERS_TABLE, [
      {
        name: "Inteligencia",
        created_at: new Date(),
      },
    ]);
    await queryInterface.bulkInsert(POWERS_TABLE, [
      {
        name: "Sigilo",
        created_at: new Date(),
      },
    ]);
    await queryInterface.bulkInsert(POWERS_TABLE, [
      {
        name: "Acrobacia",
        created_at: new Date(),
      },
    ]);
    await queryInterface.bulkInsert(POWERS_TABLE, [
      {
        name: "Reflejos",
        created_at: new Date(),
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
    await queryInterface.bulkDelete(POWERS_TABLE, null, {});
  },
};
