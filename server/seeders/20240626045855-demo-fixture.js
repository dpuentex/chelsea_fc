"use strict";

const fixture = require("../models/fixture");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("fixtures", [
      {
        fixture_id: 1,
        opponent: "Liverpool FC",
        location: "Stamford Bridge, London",
        kick_off: "",
        competition: "Premier League",
      },
      {
        fixture_id: 2,
        opponent: "West-Ham FC",
        location: "Londo Stadium, London",
        kick_off: "",
        competition: "Premier League",
      },
      {
        fixture_id: 3,
        opponent: "Luton Town FC",
        location: "Londo Stadium, London",
        kick_off: "",
        competition: "Premier League",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("fixtures"),
      {
        fixture_id: [1],
      };
  },
};
