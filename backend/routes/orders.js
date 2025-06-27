const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// POST /api/orders => Place an order
router.post('/', async (req, res) => {
    try {
        const { userEmail, items, totalAmount, address } = req.body;

        const newOrder = new Order({ userEmail, items, totalAmount, address });
        await newOrder.save();

        res.status(201).json({ message: '✅ Order placed successfully', order: newOrder });
    } catch (error) {
        console.error("❌ Error placing order:", error);
        res.status(500).json({ message: 'Server Error' });
    }
});

router.get('/', async (req, res) => {
    try {
        const orders = await Order.find();
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching orders' });
    }
});

module.exports = router;
