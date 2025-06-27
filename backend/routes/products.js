const express = require('express')
const router = express.Router()
const path = require('path')

const homeKitchen = require(path.resolve(__dirname, '../backenddata/productsData.js'));
const personalCare = require(path.resolve(__dirname, '../backenddata/personalcareData.js'));
const laundaryessentials = require(path.resolve(__dirname, '../backenddata/laundaryessentialsData.js'));
const ecodecor = require(path.resolve(__dirname, '../backenddata/ecoDecorData.js'));
const greenOffice = require(path.resolve(__dirname, '../backenddata/greenofficeData.js'));

const allProducts = [...homeKitchen, ...personalCare, ...laundaryessentials, ...ecodecor, ...greenOffice]

router.get('/:category', (req, res) => {
    const { category } = req.params;
    const categoryProducts = allProducts.filter(
        (p) => p.category === category
    );

    if (categoryProducts.length === 0) {
        return res.status(404).json({ message: 'Category not found' });
    }

    res.json(categoryProducts);
});

router.get('/:category/:slug', (req,res) => {
    const {category, slug} = req.params
    const product = allProducts.find(
        (p) => p.category === category && p.slug === slug
    )
    if (!product) return res.status(404).json({ message: 'Product not found' })
    res.json(product)
})

module.exports = router