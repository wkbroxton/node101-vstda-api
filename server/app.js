const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const app = express();

const data = [
  {
    todoItemId: 0,
    name: "an item",
    priority: 3,
    completed: false,
  },
  {
    todoItemId: 1,
    name: "another item",
    priority: 2,
    completed: false,
  },
  {
    todoItemId: 2,
    name: "a done item",
    priority: 1,
    completed: true,
  },
];

// Middelware for logging in Morgan
app.use(morgan("dev"));
app.use(bodyParser.json());

// Routes
app.get("/", (req, res) => {
  res.status(200).send({ status: "ok" });
});

app.get("/api/TodoItems", (req, res) => {
  res.status(200).json(data);
});

app.get("/api/TodoItems/:id", (req, res) => {
  res
    .status(200)
    .json(data.filter((todoItem) => todoItem.todoItemId == req.params.id)[0]);
});

app.post("api/TodoItems/:id", (req, res) => {});

app.post("/api/TodoItems/:number", (req, res) => {});

app.delete("/api/TodoItems/:number", (req, res) => {});

module.exports = app;
