"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Player extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Player.init(
    {
      player_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      player_name: {
        type: DataTypes.STRING,
      },
      player_number: {
        type: DataTypes.INTEGER,
      },
      dob: {
        type: DataTypes.DATEONLY,
      },
      position: {
        type: DataTypes.STRING,
      },
      country: {
        type: DataTypes.STRING,
      },
      games_played: {
        type: DataTypes.INTEGER,
      },
      goals: {
        type: DataTypes.INTEGER,
      },
      asists: {
        type: DataTypes.INTEGER,
      },
      yellow_cards: {
        type: DataTypes.INTEGER,
      },
      red_cards: {
        type: DataTypes.INTEGER,
      },
      profile_pic: {
        type: DataTypes.STRING,
      },
      player_pic1: {
        type: DataTypes.STRING,
      },
      player_pic2: {
        type: DataTypes.STRING,
      },
      player_pic3: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Player",
      tableName: "players",
      timestamps: false,
    }
  );
  return Player;
};
