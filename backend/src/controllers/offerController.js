const Offer = require('../models/Offer');
const Request = require('../models/Request');

// ✅ Create Offer (Farmer)
exports.createOffer = async (req, res, next) => {
  try {
    const { requestId, price, deliveryTime } = req.body;

    if (!requestId || !price || !deliveryTime) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const offer = new Offer({
      requestId,
      farmerId: req.user.id,
      price,
      deliveryTime,
      status: 'Pending'
    });

    await offer.save();
    res.status(201).json({ message: 'Offer submitted successfully', offer });
  } catch (err) {
    next(err);
  }
};

// ✅ Get Offers for a Specific Request
exports.getOffersByRequest = async (req, res, next) => {
  try {
    const offers = await Offer.find({ requestId: req.params.requestId });
    res.json(offers);
  } catch (err) {
    next(err);
  }
};

// ✅ Accept an Offer (Farmer or Chef)
exports.acceptOffer = async (req, res, next) => {
  try {
    const offer = await Offer.findById(req.params.id);
    if (!offer) return res.status(404).json({ message: 'Offer not found' });

    // Accept current offer
    offer.status = 'Accepted';
    await offer.save();

    // Reject others
    await Offer.updateMany(
      { requestId: offer.requestId, _id: { $ne: offer._id } },
      { $set: { status: 'Rejected' } }
    );

    // Update request status
    await Request.findByIdAndUpdate(offer.requestId, { status: 'Accepted' });

    res.json({ message: 'Offer accepted successfully', offer });
  } catch (err) {
    next(err);
  }
};
