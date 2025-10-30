const express = require('express');
const router = express.Router();
const { createContract, getContracts, updateDelivery } = require('../controllers/contractController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/accept', authMiddleware, createContract);      // Chef accepts offer
router.get('/', authMiddleware, getContracts);              // Get contracts for user
router.put('/delivery', authMiddleware, updateDelivery);    // Update delivery status

module.exports = router;
