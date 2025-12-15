const mongoose = require("mongoose");

const offerSchema = new mongoose.Schema({
  farmerId: mongoose.Schema.Types.ObjectId,
  cropName: String,
  quantity: Number,
  price: Number,
  status: { type: String, default: "available" }
});

module.exports = mongoose.model("Offer", offerSchema);
