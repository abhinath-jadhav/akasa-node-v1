const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  // Your logic to handle GET /api/orders
  res.json({ message: "Get all orders" });
});

router.post("/", (req, res) => {
  // Your logic to handle POST /api/orders
  res.json({ message: "Create a new order" });
});

module.exports = router;
