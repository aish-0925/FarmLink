const express = require('express');
const router = express.Router();
const { createRequest, getRequests, getRequestById } = require('../controllers/requestController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, createRequest);
router.get('/', authMiddleware, getRequests);
router.get('/:id', authMiddleware, getRequestById);

module.exports = router;
