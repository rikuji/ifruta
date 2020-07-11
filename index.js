const express = require("express");
const routes = require("./routes");
const connectDB = require("./config/db");
const cors = require("cors");
const server = express();

connectDB();

server.use(express.json());

server.use(cors());

server.use(routes);

const PORT = 5000;

server.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
