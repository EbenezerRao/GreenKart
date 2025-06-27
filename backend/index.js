require('dotenv').config({path: './backend/.env'});
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/connectDB')
const app = express();
const PORT = process.env.PORT || 5000;

connectDB()

app.use(cors());
app.use(express.json());

app.use('/api/products', require('./routes/products'));
app.use('/api/cart', require('./routes/cart'))
app.use('/api/orders', require('./routes/orders'))
app.use('/api/cart', require('./routes/cart'));


app.listen(PORT, () => {
    console.log(`✅ Server is running on http://localhost:${PORT}`);
});
