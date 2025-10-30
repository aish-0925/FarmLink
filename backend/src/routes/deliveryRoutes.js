const express = require('express');
const router = express.Router();
const { createDelivery, updateDeliveryStatus, getDeliveries } = require('../controllers/deliveryController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, createDelivery);
router.put('/:id', authMiddleware, updateDeliveryStatus);
router.get('/', authMiddleware, getDeliveries);

module.exports = router;
