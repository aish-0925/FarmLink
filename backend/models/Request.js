const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema({
  chefId: mongoose.Schema.Types.ObjectId,
  cropName: String,
  quantity: Number,
  status: { type: String, default: "open" }
});

module.exports = mongoose.model("Request", requestSchema);
