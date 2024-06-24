"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("shops", {
      product_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      product_name: {
        type: Sequelize.STRING,
      },
      maker: {
        type: Sequelize.STRING,
      },
      sizeSInven: {
        type: Sequelize.INTEGER,
      },
      sizeMInven: {
        type: Sequelize.INTEGER,
      },
      sizeLInven: {
        type: Sequelize.INTEGER,
      },
      product_pic: {
        type: Sequelize.STRING,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("shops");
  },
};
