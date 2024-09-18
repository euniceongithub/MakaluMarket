const express = require('express');
const router = express.Router();

// Example array to represent items (this will be replaced by MongoDB data in the future)
let items = [
  { id: 1, name: 'Item 1', price: 10 },
  { id: 2, name: 'Item 2', price: 20 },
];

// Get all items
router.get('/', (req, res) => {
  res.json(items);
});

// Add a new item
router.post('/', (req, res) => {
  const newItem = req.body;
  items.push(newItem);
  res.json(newItem);
});

module.exports = router;
