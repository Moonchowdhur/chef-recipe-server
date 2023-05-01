const express = require("express");
const app = express();
var cors = require("cors");
const port = process.env.port || 5000;

app.use(cors());

const chefs = require("./chefs.json");

app.get("/", (req, res) => {
  res.send("Recipe is coming");
});

app.get("/chefs", (req, res) => {
  res.send(chefs);
});

app.get("/chefs/:id", (req, res) => {
  const id = req.params.id;
  const chef = chefs.find((ch) => ch.id === id);
  res.send(chef);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
