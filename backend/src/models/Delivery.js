const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const deliverySchema = new Schema({
    contract: { type: Schema.Types.ObjectId, ref: 'Contract', required: true },
    deliveryDate: Date,
    status: { type: String, enum: ['Pending','Delivered'], default: 'Pending' },
    notes: String
}, { timestamps: true });

module.exports = mongoose.model('Delivery', deliverySchema);
