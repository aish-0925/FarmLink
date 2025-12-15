const router = require("express").Router();
const Request = require("../models/Request");
const Offer = require("../models/Offer");
const auth = require("../middleware/auth");

/**
 * CREATE INGREDIENT REQUEST (Chef)
 */
router.post("/requests", auth(["chef"]), async (req, res) => {
  try {
    const request = await Request.create({
      ingredient: req.body.ingredient,
      quantity: req.body.quantity,
      frequency: req.body.frequency,
      location: req.body.location,
      chefId: req.user.id
    });

    res.json(request);
  } catch (err) {
    res.status(500).json({ error: "Failed to create request" });
  }
});

/**
 * GET CHEF REQUESTS
 */
router.get("/requests", auth(["chef"]), async (req, res) => {
  try {
    const requests = await Request.find({ chefId: req.user.id });
    res.json(requests);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch requests" });
  }
});

/**
 * GET OFFERS FOR CHEF REQUESTS
 */
router.get("/offers", auth(["chef"]), async (req, res) => {
  try {
    // Find requests created by this chef
    const requests = await Request.find({ chefId: req.user.id }).select("_id");

    const requestIds = requests.map(r => r._id);

    // Find offers linked to those requests
    const offers = await Offer.find({
      requestId: { $in: requestIds },
      status: "available"
    });

    res.json(offers);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch offers" });
  }
});

module.exports = router;
