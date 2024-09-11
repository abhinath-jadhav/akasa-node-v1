const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  // Your logic to handle GET /api/users
  res.json({ message: "Get all users" });
});

router.post("/", (req, res) => {
  // Your logic to handle POST /api/users
  res.json({ message: "Create a new user" });
});

module.exports = router;
