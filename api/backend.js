const express = require('express');
const cors = require('cors');
const connectDB = require('../backend/config/connectDB');
const productsRoute = require('../backend/routes/products');
const cartRoute = require('../backend/routes/cart');
const ordersRoute = require('../backend/routes/orders');

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/products', productsRoute);
app.use('/api/cart', cartRoute);
app.use('/api/orders', ordersRoute);

// Export the handler for Vercel
module.exports = app;