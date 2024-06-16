const players = require("express").Router();
const db = require("../models");
const { Player } = db;

players.get("/", async (req, res) => {
  try {
    const playerData = await Player.findAll();
    console.log("/players/ was hit in your playersController");
    res.send(playerData);
  } catch (error) {
    console.error("ERROR while fetching player data", error);
    res.status(500).send({ message: "Internal server error" });
  }
});

players.get("/:id", async (req, res) => {
  try {
    const playerId = req.params.id;
    const playerData = await Player.findByPk(playerId);
    if (playerData) {
      console.log(`/player/${playerId} was hit in your playersController`);
      res.send(playerData);
    } else {
      res.status(404).send({ message: "Player not found" });
    }
  } catch (error) {
    console.error("ERROR while fetching player", error);
    res.status(500).send({ message: "Internal server error" });
  }
});

module.exports = players;
