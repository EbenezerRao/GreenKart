const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
    productId: String,
    name: String,
    price: Number,
    quantity: Number,
});

const cartSchema = new mongoose.Schema({
    userEmail: { type: String, required: true, unique: true },
    items: [cartItemSchema],
}, { timestamps: true });

module.exports = mongoose.model('Cart', cartSchema);
