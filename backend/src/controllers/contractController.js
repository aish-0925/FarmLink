const Contract = require('../models/Contract');
const Offer = require('../models/Offer');
const Request = require('../models/Request');

// Create contract when chef accepts an offer
exports.createContract = async (req, res) => {
    try {
        const { offerId } = req.body;

        const offer = await Offer.findById(offerId);
        if(!offer) return res.status(404).json({ message: 'Offer not found' });

        offer.status = 'Accepted';
        await offer.save();

        const request = await Request.findById(offer.requestId);

        const contract = await Contract.create({
            requestId: request._id,
            offerId: offer._id,
            chefId: req.user.id,
            farmerId: offer.farmerId,
            status: 'Accepted'
        });

        res.status(201).json(contract);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get contracts for user dashboard
exports.getContracts = async (req, res) => {
    try {
        let contracts;
        if(req.user.role === 'chef') {
            contracts = await Contract.find({ chefId: req.user.id })
                .populate('offerId').populate('requestId').populate('farmerId', 'name');
        } else if(req.user.role === 'farmer') {
            contracts = await Contract.find({ farmerId: req.user.id })
                .populate('offerId').populate('requestId').populate('chefId', 'name');
        }
        res.json(contracts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update delivery status
exports.updateDelivery = async (req, res) => {
    try {
        const { contractId, status, deliveryDate } = req.body;
        const contract = await Contract.findById(contractId);
        if(!contract) return res.status(404).json({ message: 'Contract not found' });

        contract.status = status || contract.status;
        if(deliveryDate) contract.deliveryDate = deliveryDate;

        await contract.save();
        res.json(contract);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
