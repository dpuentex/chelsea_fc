const express = require("express");
const app = express();
require("dotenv").config();

const path = require("path");
const db = require("./models");
const players = require("./controllers/playersController");
const shops = require("./controllers/shopsController");
const comments = require("./controllers/commentsController"); // Add this line
const fixtures = require("./controllers/fixturesControllers");
const { Player, Shop, Fixture } = db;

//Middleware config
app.use(express.json());

//Routes
app.use("/api/players", players);
app.use("/api/shops", shops);
app.use("/api/fixtures", fixtures);
app.use("/api/comments", comments); // Add this line
// Wildcard route for "/api/*"
app.get("/api/*", (req, res) => {
  res.send("Wildcard route matched!");
});

app.use(express.static(path.join(__dirname, "../client/dist")));

app.get("*", (req, res) => {
  const options = {
    root: path.join(__dirname),
  };

  const fileName = "../client/dist/index.html";
  res.sendFile(fileName, options, function (err) {
    if (err) {
      console.error("Error sending file:", err);
    } else {
      console.log("Sent:", fileName);
    }
  });
});

//ROOT ROUTES
// app.get("/", async (req, res) => {
//   try {
//     const [players, shops, fixtures] = await Promise.all([
//       Player.findAll(),
//       Shop.findAll(),
//       Fixture.findAll(),
//     ]);

//     const data = { players, shops, fixtures };
//     res.send(data);
//   } catch (error) {
//     console.log("ERROR while fetching DATA", error);
//     res.status(505).send({ message: "Internal server error" });
//   }
// });

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
