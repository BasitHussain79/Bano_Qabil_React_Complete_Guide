const express = require("express");
const auth = require("../middlewares/auth");
const { check, validationResult } = require("express-validator");

const Contact = require("../model/Contact");

const router = express.Router();

// @route   GET /api/contacts
// @desc    get all contacts
// @access  private
router.get("/", auth, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      createdAt: -1,
    });
    res.json(contacts);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({
      status: 500,
      msg: "Server Error",
    });
  }
});

// @route   POST /api/contacts
// @desc    create a new contact
// @access  private
router.post(
  "/",
  [
    auth,
    [check("name", "Please enter name").exists()],
    [check("phone", "Please enter valid mobile #").isLength({ min: 11 })],
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        status: 400,
        errors: errors.array(),
      });
    }

    const { name, email, phone, relation } = req.body;

    try {
      const newContact = new Contact({
        name,
        email,
        phone,
        relation,
        user: req.user.id,
      });

      await newContact.save();

      res.json(newContact);
    } catch (err) {
      console.error(err.message);
      res.status(500).json({
        status: 500,
        msg: "Server error",
      });
    }
  }
);

// @route   PUT /api/contacts/:id
// @desc    update contact by id
// @access  private
router.put("/:id", auth, async (req, res) => {
  const { id } = req.params;

  const { name, email, phone, relation } = req.body;

  let contact = await Contact.findById(id);

  if (!contact) {
    return res.status(404).json({
      status: 404,
      msg: "Contact not found",
    });
  }

  const contactFields = {};
  if (name) contactFields.name = name;
  if (email) contactFields.email = email;
  if (phone) contactFields.phone = phone;
  if (relation) contactFields.relation = relation;

  if (req.user.id.toString() !== contact.user.toString()) {
    return res.status(401).json({
      status: 401,
      msg: "Auhtorization denied",
    });
  }

  try {
    contact = await Contact.findByIdAndUpdate(
      id,
      { $set: contactFields },
      { new: true }
    );
    res.json({
      msg: "Contact update successfully",
      data: contact,
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({
      status: 500,
      msg: "Server error",
    });
  }
});

// @route   Delete /api/contacts
// @desc    delete contact by id
// @access  private
router.delete("/:id", auth, async (req, res) => {
  const { id } = req.params;

  const contact = await Contact.findById(id);

  if (!contact) {
    return res.status(404).json({
      status: 404,
      msg: "Contact not found",
    });
  }

  if (req.user.id.toString() !== contact.user.toString()) {
    return res.status(401).json({
      status: 401,
      msg: "Auhtorization denied",
    });
  }

  try {
    await Contact.findByIdAndDelete(id);

    res.json({
      msg: "Contact is deleted successfully",
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({
      status: 500,
      msg: "Server error",
    });
  }
});

module.exports = router;
