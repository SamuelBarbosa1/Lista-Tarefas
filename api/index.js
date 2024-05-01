const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const crypto = require("crypto");

const app = express();
const port = 3000;
const cors = require("cors");
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
  .connect("mongodb+srv://samuel:trav1234@todo-list.t0g5cjx.mongodb.net/")
  .then(() => {
    console.log("Conectado ao MongoDB");
  })
  .catch((error) => {
    console.log("Erro ao conectar ao MongoDB:",error);
  });
app.listen(port, () => {
  console.log("Servidor rodando na porta 3000");
});
