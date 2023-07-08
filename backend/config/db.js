const mongoose = require("mongoose");
const config = require("config");

const db = config.get("mongoURI");

function connectDB() {
  mongoose
    .connect(db)
    .then(() => {
      console.log("DB is connected successfully!");
    })
    .catch((err) => {
      console.log(err.message);
      process.exit(1);
    });
}

module.exports = connectDB;
