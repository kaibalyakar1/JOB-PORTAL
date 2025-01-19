const express = require("express");
const app = express();

const cors = require("cors");
const { default: mongoose } = require("mongoose");

app.use(cors());

app.use(express.json());

mongoose
  .connect("mongodb+srv://admin:K4H0w@example.com/?retryWrites=true&w=majority")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
