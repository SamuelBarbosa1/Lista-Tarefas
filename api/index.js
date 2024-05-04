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

const jwt = require("jsonwebtoken");
const moment = require("moment");


mongoose
  .connect("mongodb+srv://samuel:trav1234@todo-list.t0g5cjx.mongodb.net/")
  .then(() => {
    console.log("Conectado ao MongoDB");
  })
  .catch((error) => {
    console.log("Erro ao conectar ao MongoDB:", error);
  });
app.listen(port, () => {
  console.log("Servidor rodando na porta 3000");
});

const User = require("./models/user");
const Todo = require("./models/todo");

app.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    ///Verifique seu email
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log("E-mail já registrado");
    }

    const newUser = new User({
      name,
      email,
      password,
    });

    await newUser.save();

    res.status(202).json({ message: "Usuário cadastrado com sucesso" });
  } catch (error) {
    console.log("Erro ao registrar o usuário", error);
    res.status(500).json({ message: "Registro falhou" });
  }
});

const generateSecretKey = () => {
  const secretKey = crypto.randomBytes(32).toString("hex");

  return secretKey;
};

const secretKey = generateSecretKey();

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({email});
    if (!user) {
      return res.status(401).json({ message: "Email inválido" });
    }

    if (user.password !== password) {
      return res.status(401).json({ message: "Senha inválida" });
    }

    const token = jwt.sign({ userId: user._id }, secretKey);

    res.status(200).json({ token });
  } catch (error) {
    console.log("Falha no login", error);
    res.status(500).json({ message: "Falha no login" });
  }
});
