const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    userEmail: { type: String, required: true },
    items: [
        {
            productId: { type: String, required: true },
            name: { type: String, required: true },
            price: { type: String, required: true },
            quantity: { type: Number, required: true },
        }
    ],
    totalAmount: { type: Number, required: true },
    address: { type: String },
    status: { type: String, default: 'pending' },
    createdAt: { type: Date, default: Date.now }
})

const Order = mongoose.model('Order', orderSchema)
module.exports = Order