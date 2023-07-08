const express = require("express");
const router = express.Router();

// @route   POST /api/users
// @desc    Register new user
// @access  public
router.post("/", (req, res) => {
  res.send("Register a new user.");
});

module.exports = router;
