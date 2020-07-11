const express = require("express");
const FruitController = require("./controllers/FruitController");

const routes = express.Router();

routes.get("/", FruitController.index);
routes.post("/", FruitController.store);

module.exports = routes;
