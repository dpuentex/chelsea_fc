const express = require("express");
const app = express();
require("dotenv").config();

const db = require("./models");
const players = require("./controllers/playersController");
const shops = require("./controllers/shopsController");

const { Player, Shop } = db;

//Middleware config
app.use(express.json());

app.use("/api/players", players);
app.use("/api/shops", shops);

//ROUTES
app.get("/", async (req, res) => {
  try {
    const [players, shops] = await Promise.all([
      Player.findAll(),
      Shop.findAll(),
    ]);

    const data = { players, shops };
    res.send(data);
  } catch (error) {
    console.log("ERROR while fetching DATA", error);
    res.status(505).send({ message: "Internal server error" });
  }
});

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
