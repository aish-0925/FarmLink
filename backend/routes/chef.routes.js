const router = require("express").Router();
const Request = require("../models/Request");
const Offer = require("../models/Offer");
const auth = require("../middleware/auth");

// Create request
router.post("/request", auth(["chef"]), async (req, res) => {
  await Request.create({
    ...req.body,
    chefId: req.user.id
  });
  res.json({ message: "Request created" });
});

// View all offers
router.get("/offers", auth(["chef"]), async (req, res) => {
  const offers = await Offer.find({ status: "available" });
  res.json(offers);
});

module.exports = router;
