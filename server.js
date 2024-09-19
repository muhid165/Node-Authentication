require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose"); 
const {login} = require("./Routes/AuthRoute");
const {signup} = require("./Routes/AuthRoute")

const isAuthenticated = require("./middleware/authMiddleware");

const PORT = process.env.PORT || 8080;
const JWT_SECRET = "abcd123";
const app = express();
app.use(express.json());

//connecting to the mongoDb database
mongoose
  .connect(process.env.MONGO_URI, {
    dbName: "backend",
  })
  .then(() => {
    console.log("connected to the database successfully ");
  })
  .catch((e) => {
    console.log("Error connecting to the database");
  });


app.get("/verify-user", isAuthenticated, (req, res) => {
  try {
    return res.status(200).send({
      message: "User verified successfully!!!",
    });
  } catch (error) {
    console.log("error verifying the token");
    return res
      .status(500)
      .send({ message: "Something went wrong!", error: error.message });
  }
});


app.get("/", async (req, res) => {
  const result = await userModel.find();
  console.log(result);
  res.end("hello");
});

app.post("/login", login);

app.post("/signup", signup);

app.listen(PORT, () => {
  console.log(`Listining to port ${PORT}`);
});
