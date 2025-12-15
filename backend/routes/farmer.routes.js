const router = require("express").Router();
const Offer = require("../models/Offer");
const auth = require("../middleware/auth");

// Create offer
router.post("/offer", auth(["farmer"]), async (req, res) => {
  await Offer.create({
    ...req.body,
    farmerId: req.user.id
  });
  res.json({ message: "Offer created" });
});

// View own offers
router.get("/offers", auth(["farmer"]), async (req, res) => {
  const offers = await Offer.find({ farmerId: req.user.id });
  res.json(offers);
});

module.exports = router;
