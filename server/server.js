const express = require("express");
const app = express();
require("dotenv").config();

const db = require("./models");
const players = require("./controllers/playersController");

const { Player } = db;

//Middlewear config
app.use(express.json());

app.use("/api/players", players);

//ROUTES
app.get("/", async (req, res) => {
  try {
    const players = await Player.findAll();
    res.send({ players });
  } catch (error) {
    console.error("ERROR while fetching DATA", error);
    res.status(500).send({ message: "Internal server error" });
  }
});

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
