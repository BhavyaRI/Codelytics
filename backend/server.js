const express = require("express");
const app = require("./app");
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config({ path: "./config.env" });

const port = process.env.PORT || 3000;

app.use(cors());

app.listen(port, () => {
  console.log("Server started at port:", port);
});
