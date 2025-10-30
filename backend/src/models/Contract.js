const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contractSchema = new Schema({
    chef: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    farmer: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    offer: { type: Schema.Types.ObjectId, ref: 'Offer', required: true },
    status: { type: String, enum: ['Active','Completed','Cancelled'], default: 'Active' },
    totalPrice: Number
}, { timestamps: true });

module.exports = mongoose.model('Contract', contractSchema);
