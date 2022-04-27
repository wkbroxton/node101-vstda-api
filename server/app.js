const express = require("express");
const morgan = require("morgan");

const app = express();

// Middelware for logging in Morgan
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.status(200).send("ok");
});

app.get("/api/TodoItems", (req, res) => {});

app.post("api/TodoItems/{id}", (req, res) => {});

app.post("/api/TodoItems/:number", (req, res) => {});

app.delete("/api/TodoItems/:number", (req, res) => {});

module.exports = app;
