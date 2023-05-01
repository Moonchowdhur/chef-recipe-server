const express = require("express");
const app = express();
var cors = require("cors");
const port = process.env.port || 5000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Recipe is coming");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
