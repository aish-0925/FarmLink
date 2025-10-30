const Request = require('../models/Request');

// Create new ingredient request (Chef)
exports.createRequest = async (req, res, next) => {
  try {
    const { ingredient, quantity } = req.body;
    if (!ingredient || !quantity) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newRequest = new Request({
      chefId: req.user.id,
      ingredient,
      quantity,
    });

    await newRequest.save();
    res.status(201).json(newRequest);
  } catch (err) {
    next(err);
  }
};

// Get all requests for logged-in chef
exports.getRequests = async (req, res, next) => {
  try {
    // ✅ If this dashboard is for FARMER, they should see ALL chef requests
    const requests = await Request.find().sort({ createdAt: -1 });
    res.json(requests);
  } catch (err) {
    next(err);
  }
};

// Get single request by ID
exports.getRequestById = async (req, res, next) => {
  try {
    const request = await Request.findById(req.params.id);
    if (!request) return res.status(404).json({ message: 'Request not found' });
    res.json(request);
  } catch (err) {
    next(err);
  }
};
