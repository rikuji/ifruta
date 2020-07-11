const Fruit = require("../models/Fruit");

class FruitController {
  async index(req, res) {
    const fruits = await Fruit.find({}).sort("-createdAt");

    return res.json(fruits);
  }

  async store(req, res) {
    const fruit = await Fruit.create(req.body);

    return res.status(201).json(fruit);
  }
}

module.exports = new FruitController();
