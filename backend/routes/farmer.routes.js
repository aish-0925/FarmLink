const router = require("express").Router();
const Offer = require("../models/Offer");
const Request = require("../models/Request");
const auth = require("../middleware/auth");

/**
 * CREATE OFFER (Farmer)
 * Linked to a Chef Request
 */
router.post("/offers", auth(["farmer"]), async (req, res) => {
  try {
    const { requestId, price, quantity, notes } = req.body;

    // Validate request exists
    const request = await Request.findById(requestId);
    if (!request) {
      return res.status(404).json({ error: "Request not found" });
    }

    const offer = await Offer.create({
      requestId,
      farmerId: req.user.id,
      price,
      quantity,
      notes,
      status: "available"
    });

    res.json(offer);
  } catch (err) {
    res.status(500).json({ error: "Failed to create offer" });
  }
});

/**
 * VIEW OWN OFFERS (Farmer)
 */
router.get("/offers", auth(["farmer"]), async (req, res) => {
  try {
    const offers = await Offer.find({ farmerId: req.user.id })
      .populate("requestId", "ingredient quantity location");

    res.json(offers);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch offers" });
  }
});

module.exports = router;
