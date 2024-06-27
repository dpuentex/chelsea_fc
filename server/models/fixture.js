"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Fixture extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Fixture.init(
    {
      fixture_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      homeTeam: {
        type: DataTypes.STRING,
      },
      awayTeam: {
        type: DataTypes.STRING,
      },
      location: {
        type: DataTypes.STRING,
      },
      kick_off: {
        type: DataTypes.DATE,
      },
      competition: {
        type: DataTypes.STRING,
      },
      homeTeam_logo: {
        type: DataTypes.STRING,
      },
      awayTeam_logo: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Fixture",
      tableName: "fixtures",
      timestamps: false,
    }
  );
  return Fixture;
};
