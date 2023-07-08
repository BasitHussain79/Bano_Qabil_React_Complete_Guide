const express = require("express");
const router = express.Router();

// @route   GET /api/contacts
// @desc    get all contacts
// @access  private
router.get("/", (req, res) => {
  res.send("Get all contacts");
});

// @route   POST /api/contacts
// @desc    create a new contact
// @access  private
router.post("/", (req, res) => {
  res.send("Create a new contact");
});

// @route   PUT /api/contacts/:id
// @desc    update contact by id
// @access  private
router.put("/:id", (req, res) => {
  res.send("update contact by id");
});

// @route   Delete /api/contacts
// @desc    delete contact by id
// @access  private
router.delete("/:id", (req, res) => {
  res.send("Delete Contact by id");
});

module.exports = router;
