const personalCareProducts = [
    {
        id: 1,
        name: "Aloe Vera Face Gel",
        slug: "aloe-vera-face-gel",
        price: "₹129",
        image: "/Personal-Care/1.jpg",
        category: "personal-care",
        description: "Soothe and hydrate your skin with this refreshing aloe vera gel. Ideal for daily use, it's free from harmful additives and packed with nature’s healing touch."
    },
    {
        id: 2,
        name: "Organic Lip Balm",
        slug: "organic-lip-balm",
        price: "₹149",
        image: "/Personal-Care/2.jpg",
        category: "personal-care",
        description: "Keep your lips soft, supple, and naturally protected with this chemical-free lip balm enriched with shea butter and beeswax."
    },
    {
        id: 3,
        name: "Herbal Shampoo Bar",
        slug: "herbal-shampoo-bar",
        price: "₹199",
        image: "/Personal-Care/3.jpg",
        height: 210,
        width: 221,
        category: "personal-care",
        description: "A solid shampoo bar made with herbs like shikakai and hibiscus. Lathers well, cleans deeply, and leaves no plastic waste behind!"
    },
    {
        id: 4,
        name: "Bamboo Toothbrush",
        slug: "bamboo-toothbrush",
        price: "₹159",
        image: "/Personal-Care/4.jpg",
        category: "personal-care",
        description: "Eco-friendly toothbrush made with natural bamboo handle and soft bristles for gentle oral care."
    },
    {
        id: 5,
        name: "Natural Deodorant Stick",
        slug: "natural-deodorant-stick",
        price: "₹299",
        image: "/Personal-Care/5.jpg",
        category: "personal-care",
        description: "Stay fresh naturally with this chemical-free deodorant infused with essential oils."
    },
    {
        id: 6,
        name: "Organic Under Eye Serum",
        slug: "organic-under-eye-serum",
        price: "₹349",
        image: "/Personal-Care/6.jpg",
        category: "personal-care",
        description: "Hydrate and revive tired eyes with this lightweight organic serum, perfect for dark circles and puffiness."
    },
    {
        id: 7,
        name: "Neem & Turmeric Face Wash",
        slug: "neem-turmeric-face-wash",
        price: "₹159",
        image: "/Personal-Care/7.jpg",
        category: "personal-care",
        description: "A natural cleanser powered by neem and turmeric to reduce acne and purify your skin."
    },
    {
        id: 8,
        name: "Herbal Hair Oil Blend",
        slug: "herbal-hair-oil-blend",
        price: "₹289",
        image: "/Personal-Care/8.jpg",
        category: "personal-care",
        description: "A nourishing mix of herbs and oils that strengthens hair, boosts growth, and reduces dandruff."
    },
    {
        id: 9,
        name: "Rosa Water Facial Mist",
        slug: "rosa-water-facial-mist",
        price: "₹169",
        image: "/Personal-Care/9.jpg",
        category: "personal-care",
        description: "A gentle rosewater mist that refreshes and tones your skin any time of the day."
    },
    {
        id: 10,
        name: "Clay Face Mask Jar",
        slug: "clay-face-mask-jar",
        price: "₹399",
        image: "/Personal-Care/10.jpg",
        category: "personal-care",
        description: "Detox your skin with this mineral-rich clay mask that draws out impurities and leaves your face glowing."
    },
    {
        id: 11,
        name: "Organic Beard Oil",
        slug: "organic-beard-oil",
        price: "₹379",
        image: "/Personal-Care/11.jpg",
        category: "personal-care",
        description: "Soften and condition your beard with this blend of nourishing oils and earthy aroma."
    },
    {
        id: 12,
        name: "Ayurvedic Tooth Powder",
        slug: "ayurvedic-tooth-powder",
        price: "₹149",
        image: "/Personal-Care/12.jpg",
        category: "personal-care",
        description: "Natural blend of herbs and minerals to strengthen teeth and promote healthy gums."
    },
    {
        id: 13,
        name: "Charcoal Face Wash",
        slug: "charcoal-face-wash",
        price: "₹249",
        image: "/Personal-Care/13.jpg",
        category: "personal-care",
        description: "A deep-cleansing formula with activated charcoal to remove dirt, oil, and blackheads."
    },
    {
        id: 14,
        name: "Ayurvedic Bath Powder",
        slug: "ayurvedic-bath-powder",
        price: "₹169",
        image: "/Personal-Care/14.jpg",
        category: "personal-care",
        description: "Revitalize your body with this age-old ayurvedic bath mix for smooth and glowing skin."
    },
    {
        id: 15,
        name: "Organic Body Butter",
        slug: "organic-body-butter",
        price: "₹459",
        image: "/Personal-Care/15.jpg",
        category: "personal-care",
        description: "Rich, creamy, and deeply moisturizing body butter made with organic butters and oils."
    },
    {
        id: 16,
        name: "Eco-Friendly Cotton Pads",
        slug: "eco-friendly-cotton-pads",
        price: "₹279",
        image: "/Personal-Care/16.jpg",
        category: "personal-care",
        description: "Reusable cotton rounds perfect for makeup removal, toning, or cleansing."
    },
    {
        id: 17,
        name: "Herbal Foot Cream",
        slug: "herbal-foot-cream",
        price: "₹149",
        image: "/Personal-Care/17.jpg",
        category: "personal-care",
        description: "Soothe tired feet with this herbal cream that softens cracked heels and dry skin."
    },
    {
        id: 18,
        name: "Organic Bath Bombs (Set of 3)",
        slug: "organic-bath-bombs-set-of-3",
        price: "₹329",
        image: "/Personal-Care/18.jpg",
        category: "personal-care",
        description: "Relax in a fizzy bath with these handmade, skin-friendly bath bombs."
    },
    {
        id: 19,
        name: "Lip & Cheek Tint (Natural)",
        slug: "lip-cheek-tint-natural",
        price: "₹139",
        image: "/Personal-Care/19.jpg",
        category: "personal-care",
        description: "A multipurpose stain for a subtle flush of color on your lips and cheeks."
    },
    {
        id: 20,
        name: "Hair Serum with Argan Oil",
        slug: "hair-serum-with-argan-oil",
        price: "₹299",
        image: "/Personal-Care/20.jpg",
        category: "personal-care",
        description: "Smooth frizz and add shine with this non-greasy serum enriched with argan oil."
    },
    {
        id: 21,
        name: "Plant-Based Menstrual Pads",
        slug: "plant-based-menstrual-pads",
        price: "₹129",
        image: "/Personal-Care/21.jpg",
        category: "personal-care",
        description: "Biodegradable, gentle-on-skin pads made from plant fibers. Kind to you and the planet."
    },
    {
        id: 22,
        name: "Organic Intimate Wash",
        slug: "organic-intimate-wash",
        price: "₹239",
        image: "/Personal-Care/22.jpg",
        category: "personal-care",
        description: "pH-balanced intimate wash made with natural ingredients for daily freshness."
    },
    {
        id: 23,
        name: "Underarm Detox Balm",
        slug: "underarm-detox-balm",
        price: "₹299",
        image: "/Personal-Care/23.jpg",
        category: "personal-care",
        description: "Detox and brighten your underarms with this clay and herbal balm."
    },
    {
        id: 24,
        name: "Natural Mouthwash",
        slug: "natural-mouthwash",
        price: "₹299",
        image: "/Personal-Care/24.jpg",
        category: "personal-care",
        description: "Alcohol-free mouthwash with herbal extracts to fight bad breath and promote oral hygiene."
    },
    {
        id: 25,
        name: "Organic Baby Massage Oil",
        slug: "organic-baby-massage-oil",
        price: "₹329",
        image: "/Personal-Care/25.jpg",
        category: "personal-care",
        description: "A gentle massage oil made with love and organic oils to nourish delicate baby skin."
    },
    {
        id: 26,
        name: "Herbal Hair Pack",
        slug: "herbal-hair-pack",
        price: "₹199",
        image: "/Personal-Care/37.jpg",
        category: "personal-care",
        description: "A rejuvenating blend of herbs for conditioning, strengthening, and detoxifying the scalp."
    },
    {
        id: 27,
        name: "Neem Comb (Wide Tooth)",
        slug: "neem-comb-wide-tooth",
        price: "₹159",
        image: "/Personal-Care/26.jpg",
        category: "personal-care",
        description: "Naturally antibacterial neem comb that prevents scalp infections and reduces hair fall."
    },
    {
        id: 28,
        name: "Organic Shaving Cream",
        slug: "organic-shaving-cream",
        price: "₹249",
        image: "/Personal-Care/27.jpg",
        category: "personal-care",
        description: "A smooth, creamy shaving cream made from botanical oils and butters for a clean shave."
    },
    {
        id: 29,
        name: "Herbal Kajal (Kohl)",
        slug: "herbal-kajal-kohl",
        price: "₹199",
        image: "/Personal-Care/28.jpg",
        category: "personal-care",
        description: "Traditional kajal made from natural ingredients, safe for sensitive eyes."
    },
    {
        id: 30,
        name: "Herbal Cold-Pressed Soap Bars",
        slug: "herbal-cold-pressed-soap-bars",
        price: "₹199",
        image: "/Personal-Care/29.jpg",
        category: "personal-care",
        description: "Cold-processed soaps with herbal extracts to gently cleanse and nourish your skin."
    },
    {
        id: 31,
        name: "Organic Stretch Mark Oil",
        slug: "organic-stretch-mark-oil",
        price: "₹399",
        image: "/Personal-Care/30.jpg",
        category: "personal-care",
        description: "Heal and fade stretch marks with this rich oil blend packed with vitamin E and botanicals."
    },
    {
        id: 32,
        name: "Aloe-Infused Face Wipes",
        slug: "aloe-infused-face-wipes",
        price: "₹249",
        image: "/Personal-Care/31.jpg",
        category: "personal-care",
        description: "Soothing wipes for instant freshness and cleansing while on the go."
    },
    {
        id: 33,
        name: "Organic Beard Balm",
        slug: "organic-beard-balm",
        price: "₹249",
        image: "/Personal-Care/32.jpg",
        category: "personal-care",
        description: "Style and condition your beard with this balm infused with beeswax and essential oils."
    },
    {
        id: 34,
        name: "Caffeine-Infused Eye Patches",
        slug: "caffeine-infused-eye-patches",
        price: "₹399",
        image: "/Personal-Care/33.jpg",
        category: "personal-care",
        description: "Say goodbye to puffy eyes and dark circles with these energizing under-eye patches."
    },
    {
        id: 35,
        name: "Organic Talc-Free Baby Powder",
        slug: "organic-talc-free-baby-powder",
        price: "₹229",
        image: "/Personal-Care/34.jpg",
        category: "personal-care",
        description: "Talc-free, gentle baby powder made with cornstarch and calming botanicals."
    },
    {
        id: 36,
        name: "Fruit Enzyme Peel Mask",
        slug: "fruit-enzyme-peel-mask",
        price: "₹249",
        image: "/Personal-Care/35.jpg",
        category: "personal-care",
        description: "A brightening exfoliating mask that removes dead skin and promotes cell turnover."
    },
    {
        id: 37,
        name: "Eco Cotton Buds (Pack of 200)",
        slug: "eco-cotton-buds-pack-of-200",
        price: "₹99",
        image: "/Personal-Care/36.jpg",
        category: "personal-care",
        description: "Biodegradable bamboo cotton swabs, safe for the environment and everyday use."
    },
    {
        id: 38,
        name: "Ayurvedic Face Ubtan",
        slug: "ayurvedic-face-ubtan",
        price: "₹229",
        image: "/Personal-Care/38.jpg",
        category: "personal-care",
        description: "A traditional face pack that gently exfoliates and improves complexion naturally."
    },
    {
        id: 39,
        name: "Vegan Nail Serum",
        slug: "vegan-nail-serum",
        price: "₹239",
        image: "/Personal-Care/39.jpg",
        category: "personal-care",
        description: "Strengthen and nourish brittle nails with this all-natural, fast-absorbing serum."
    },
    {
        id: 40,
        name: "Herbal Facial Steam Pack",
        slug: "herbal-facial-steam-pack",
        price: "₹199",
        image: "/Personal-Care/40.jpg",
        category: "personal-care",
        description: "Open your pores and cleanse deeply with this herbal steam blend for spa-like relaxation."
    }
]
module.exports = personalCareProducts;
