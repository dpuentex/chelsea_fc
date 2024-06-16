"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("players", {
      player_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      player_name: {
        type: Sequelize.STRING,
      },
      player_number: {
        type: Sequelize.INTEGER,
      },
      dob: {
        type: Sequelize.DATEONLY,
      },
      position: {
        type: Sequelize.STRING,
      },
      country: {
        type: Sequelize.STRING,
      },
      games_played: {
        type: Sequelize.INTEGER,
      },
      goals: {
        type: Sequelize.INTEGER,
      },
      asists: {
        type: Sequelize.INTEGER,
      },
      yellow_cards: {
        type: Sequelize.INTEGER,
      },
      red_cards: {
        type: Sequelize.INTEGER,
      },
      profile_pic: {
        type: Sequelize.STRING,
      },
      player_pic1: {
        type: Sequelize.STRING,
      },
      player_pic2: {
        type: Sequelize.STRING,
      },
      player_pic3: {
        type: Sequelize.STRING,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("players");
  },
};
