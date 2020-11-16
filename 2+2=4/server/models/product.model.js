const mongoose = require('mongoose');
const PersonSchema = new mongoose.Schema({
    title: { type: String },
    price: { type: String },
	desc: { type: String }
}, { timestamps: true });
module.exports.Product = mongoose.model('Product', PersonSchema);