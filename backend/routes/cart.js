const express = require('express');
const router = express.Router();
const Cart = require('../models/cart')

// GET user cart
router.get('/:userEmail', async (req, res) => {
    try {
        const cart = await Cart.findOne({ userEmail: req.params.userEmail });
        res.json(cart || { userEmail: req.params.userEmail, items: [] });
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch cart' });
    }
});

// POST update cart
router.post('/', async (req, res) => {
    const { userEmail, items } = req.body;
    try {
        let cart = await Cart.findOne({ userEmail });
        if (!cart) {
            cart = new Cart({ userEmail, items });
        } else {
            cart.items = items;
        }
        await cart.save();
        res.json(cart);
    } catch (err) {
        res.status(500).json({ error: 'Failed to save cart' });
    }
});

// DELETE cart
router.delete('/:userEmail', async (req, res) => {
    try {
        await Cart.findOneAndDelete({ userEmail: req.params.userEmail });
        res.json({ message: 'Cart cleared' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to clear cart' });
    }
});

module.exports = router;
