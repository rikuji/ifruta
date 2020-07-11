const mongose = require("mongoose");

const FruitSchema = new mongose.Schema({
  nome: String,
  quantidade: {
    type: Number,
    default: 0,
  },
  preco: {
    type: Number,
    default: 0.0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongose.model("Fruit", FruitSchema);
