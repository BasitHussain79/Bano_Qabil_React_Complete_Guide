const express = require("express");
const connectDB = require("./config/db");

const app = express();

// connect to the db
connectDB();

app.use("/", (req, res) => {
  res.send("Welcome to the Contact Management App.");
});

// define routes
// app.use("/api/users", require("./routes/users"));
// app.use("/api/auth", require("./routes/auth"));
// app.use("/api/contacts", require("./routes/contacts"));

// PORT
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`);
});
