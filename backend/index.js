require('dotenv').config({ path: './backend/.env' });
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/connectDB');

const app = express();

// 🧠 Vercel will run this file as a serverless function, so we export app instead of app.listen
connectDB();

app.use(cors());
app.use(express.json());

// ✅ All routes stay exactly the same
app.use('/api/products', require('./routes/products'));
app.use('/api/cart', require('./routes/cart'));
app.use('/api/orders', require('./routes/orders'));

// ✅ Do not call app.listen here in a serverless environment
module.exports = app;
