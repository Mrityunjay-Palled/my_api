const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const user = require("./routes/test");

dotenv.config();

const app = express();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api/sample", user);

app.listen(process.env.PORT || 5000, () => {
  console.log("server started");
});
