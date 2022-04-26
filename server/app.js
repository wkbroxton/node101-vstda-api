const express = require("express");
const morgan = require("morgan");

const app = express();

// Middelware for loggin in Morgan
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.status(200).send("ok");
});

app.get("/api/TodoItems", (req, res) => {});

app.post("api/TodoItems", (req, res) => {});

module.exports = app;
