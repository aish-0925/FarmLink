const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const connectDB = require('./src/config/db');
const authRoutes = require('./src/routes/authRoutes');
const requestRoutes = require('./src/routes/requestRoutes');
const offerRoutes = require('./src/routes/offerRoutes');
const contractRoutes = require('./src/routes/contractRoutes');
const deliveryRoutes = require('./src/routes/deliveryRoutes');
const errorHandler = require('./src/middleware/errorHandler');

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/requests', requestRoutes);
app.use('/api/offers', offerRoutes);
app.use('/api/contracts', contractRoutes);
app.use('/api/deliveries', deliveryRoutes);

// Error Handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
