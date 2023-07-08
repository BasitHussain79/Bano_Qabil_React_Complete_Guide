const express = require("express");
const router = express.Router();

// @routes  GET /api/auth
// @desc    get login data
// access   private
router.get("/", (req, res) => {
  res.send("Get login data");
});

// @routes  POST /api/auth
// @desc    Login user
// @access  public
router.post("/", (req, res) => {
  res.send("Login user");
});

module.exports = router;
