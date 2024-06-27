"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("fixtures", [
      {
        fixture_id: 1,
        homeTeam: "Chelsea FC",
        awayTeam: "Liverpool FC",
        location: "Stamford Bridge, London",
        kick_off: new Date("1987-08-19"),
        competition: "Premier League",
        homeTeam_logo:
          "https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/1200px-Chelsea_FC.svg.png",
        awayTeam_logo:
          "https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg",
      },
      {
        fixture_id: 2,
        homeTeam: "West Ham FC",
        awayTeam: "Chelsea",
        location: "London Stadium, London",
        kick_off: new Date("1987-08-19"),
        competition: "Premier League",
        homeTeam_logo:
          "https://upload.wikimedia.org/wikipedia/sco/thumb/c/c2/West_Ham_United_FC_logo.svg/922px-West_Ham_United_FC_logo.svg.png",
        awayTeam_logo:
          "https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/1200px-Chelsea_FC.svg.png",
      },
      {
        fixture_id: 3,
        homeTeam: "Chelsea FC",
        awayTeam: "Luton Town FC",
        location: "Stamford Bridge, London",
        kick_off: new Date("1987-08-19"),
        competition: "Premier League",
        homeTeam_logo:
          "https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/1200px-Chelsea_FC.svg.png",
        awayTeam_logo:
          "https://upload.wikimedia.org/wikipedia/en/9/9d/Luton_Town_logo.svg",
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
