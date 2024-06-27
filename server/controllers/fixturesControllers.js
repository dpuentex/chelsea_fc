const express = require("express");
const fixtures = express.Router();
const db = require("../models");
const { Fixture } = db;

// Get all fixtures
fixtures.get("/", async (req, res) => {
  try {
    const fixtureData = await Fixture.findAll();
    console.log("/fixtures/ was hit in your fixturesController");
    res.send(fixtureData);
  } catch (error) {
    console.error("ERROR while fetching fixture data", error);
    res.status(500).send({ message: "Internal server error" });
  }
});

// Get a fixture by ID
fixtures.get("/:id", async (req, res) => {
  try {
    const fixtureId = req.params.id;
    const fixtureData = await Fixture.findByPk(fixtureId);
    if (fixtureData) {
      console.log(`/fixtures/${fixtureId} was hit in your fixturesController`);
      res.send(fixtureData);
    } else {
      res.status(404).send({ message: "Fixture not found" });
    }
  } catch (error) {
    console.error("ERROR while fetching fixture", error);
    res.status(500).send({ message: "Internal server error" });
  }
});

module.exports = fixtures;
