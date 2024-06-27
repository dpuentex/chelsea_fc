"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Shop extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  Shop.init(
    {
      product_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      product_name: {
        type: DataTypes.STRING,
      },
      maker: {
        type: DataTypes.STRING,
      },
      price: {
        type: DataTypes.INTEGER,
      },
      sizeSInven: {
        type: DataTypes.INTEGER,
      },
      sizeMInven: {
        type: DataTypes.INTEGER,
      },
      sizeLInven: {
        type: DataTypes.INTEGER,
      },
      category: {
        type: DataTypes.STRING,
      },
      product_pic: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Shop",
      tableName: "shops",
      timestamps: false,
    }
  );

  return Shop;
};
