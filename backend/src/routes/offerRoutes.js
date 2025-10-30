const express = require('express');
const router = express.Router();
const { createOffer, getOffersByRequest, acceptOffer } = require('../controllers/offerController');
const authMiddleware = require('../middleware/authMiddleware');

// Routes
router.post('/', authMiddleware, createOffer);               // Create new offer
router.get('/request/:requestId', authMiddleware, getOffersByRequest); // Get offers for a request
router.put('/:id/accept', authMiddleware, acceptOffer);      // Accept an offer

module.exports = router;
