"use strict";
const { PLACES_TABLE } = require("../models/place.model");

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
    await queryInterface.bulkInsert(PLACES_TABLE, [
      {
        name: "New York",
        created_at: new Date(),
      },
    ]);
    await queryInterface.bulkInsert(PLACES_TABLE, [
      {
        name: "Asgard",
        created_at: new Date(),
      },
    ]);
    await queryInterface.bulkInsert(PLACES_TABLE, [
      {
        name: "Gotham",
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
    await queryInterface.bulkDelete(PLACES_TABLE, null, {});
  },
};
