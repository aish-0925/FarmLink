const Delivery = require('../models/Delivery');

// Add delivery info (Farmer)
exports.createDelivery = async (req, res) => {
    try {
        const delivery = await Delivery.create(req.body);
        res.json(delivery);
    } catch(err) {
        res.status(500).json({ message: err.message });
    }
};

// Update delivery status
exports.updateDeliveryStatus = async (req, res) => {
    try {
        const delivery = await Delivery.findById(req.params.id);
        if(!delivery) return res.status(404).json({ message: 'Delivery not found' });

        delivery.status = req.body.status; // Pending / Delivered
        delivery.deliveryDate = req.body.deliveryDate || delivery.deliveryDate;
        await delivery.save();

        res.json(delivery);
    } catch(err) {
        res.status(500).json({ message: err.message });
    }
};

// Get all deliveries
exports.getDeliveries = async (req, res) => {
    try {
        const deliveries = await Delivery.find().populate('contract');
        res.json(deliveries);
    } catch(err) {
        res.status(500).json({ message: err.message });
    }
};
