const players = require("express").Router();
const db = require("../models");
const { Shop } = db;

players.get("/", async (req, res) => {
  try {
    const shopData = await Shop.findAll();
    console.log("/shops/ was hit in your shopsController");
    res.send(shopData);
  } catch (error) {
    console.error("ERROR while fetching shop data", error);
    res.status(500).send({ message: "Internal server error" });
  }
});

players.get("/:id", async (req, res) => {
  try {
    const shopId = req.params.id;
    const shopData = await Shop.findByPk(shopId);
    if (shopData) {
      console.log(`/shop/${shopId} was hit in your playersController`);
      res.send(shopData);
    } else {
      res.status(404).send({ message: "Shop not found" });
    }
  } catch (error) {
    console.error("ERROR while fetching Shop", error);
    res.status(500).send({ message: "Internal server error" });
  }
});

module.exports = players;
