"use strict";
const { MUTANTS_TABLE } = require("../models/mutant.model");

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
    await queryInterface.bulkInsert(MUTANTS_TABLE, [
      {
        name: "Peter Parker",
        alias: "Spiderman",
        type: "hero",
        condition: "freedom",
        image: "https://www.superherodb.com/gallery2/075/531/53129.webp",
        place_id: 1,
        created_at: new Date(),
      },
    ]);
    await queryInterface.bulkInsert(MUTANTS_TABLE, [
      {
        name: "Thor Odinson",
        alias: "Thor",
        type: "hero",
        condition: "freedom",
        image: "https://www.superherodb.com/gallery2/075/388/38879.webp",
        place_id: 2,
        created_at: new Date(),
      },
    ]);
    await queryInterface.bulkInsert(MUTANTS_TABLE, [
      {
        name: "Norman Osborn",
        alias: "Green Goblin",
        type: "villain",
        condition: "arrested",
        image: "https://www.superherodb.com/gallery2/075/51/5194.webp",
        place_id: 1,
        created_at: new Date(),
      },
    ]);
    await queryInterface.bulkInsert(MUTANTS_TABLE, [
      {
        name: "Bruce Wayne",
        alias: "Batman",
        type: "hero",
        condition: "freedom",
        image: "https://www.superherodb.com/gallery2/075/543/54346.webp",
        place_id: 3,
        vehicle_id: 1,
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
    await queryInterface.bulkDelete(MUTANTS_TABLE, null, {});
  },
};
