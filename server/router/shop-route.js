// shop-route.js
const express = require('express');
const router = express.Router();
const shopController = require('../controller/shop-controller');

// Route to get shops by category
router.get('/:category', shopController.getShopsByCategory);

module.exports = router;
