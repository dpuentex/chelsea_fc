"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("fixtures", {
      fixture_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      homeTeam: {
        type: Sequelize.STRING,
      },
      awayTeam: {
        type: Sequelize.STRING,
      },
      location: {
        type: Sequelize.STRING,
      },
      kick_off: {
        type: Sequelize.DATE,
      },
      competition: {
        type: Sequelize.STRING,
      },
      homeTeam_logo: {
        type: Sequelize.STRING,
      },
      awayTeam_logo: {
        type: Sequelize.STRING,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("fixtures");
  },
};
