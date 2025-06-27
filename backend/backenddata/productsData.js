const productData = [
    {
        id: 1,
        name: "Bamboo Cutlery Set",
        slug: "bamboo-cutlery-set",
        price: "₹199",
        image: "/home-kitchen/bamboocutlery.jpg",
        category: "home-kitchen",
        description: "Crafted from sustainably harvested bamboo, this reusable cutlery set is lightweight, durable, and perfect for meals on the go."
    },
    {
        id: 2,
        name: "Compostable Kitchen Sponge",
        slug: "compostable-kitchen-sponge",
        price: "₹109",
        image: "/home-kitchen/Conpostablekitchensponge.jpg",
        category: "home-kitchen",
        description: "These biodegradable sponges are tough on grease but gentle on the planet. Ideal for everyday dishwashing with zero waste."
    },
    {
        id: 3,
        name: "GreenKart Tumbler Sipper",
        slug: "greenkart-tumbler-sipper",
        price: "₹229",
        image: "/home-kitchen/tumblernew.jpg",
        height: 210,
        width: 221,
        category: "home-kitchen",
        description: "Sip sustainably with our premium tumbler sipper — BPA-free, stylish, and built for your eco-conscious hydration habits."
    },
    {
        id: 4,
        name: "Beewax Food Warps",
        slug: "beewax-food-warps",
        price: "₹99",
        image: "/home-kitchen/beewaxwraps.jpg",
        category: "home-kitchen",
        description: "Wrap your food the natural way with our breathable beeswax wraps — reusable, biodegradable, and plastic-free."
    },
    {
        id: 5,
        name: " Steel/Copper Water Bottle",
        slug: "steelcopper-water-bottle",
        price: "₹399",
        image: "/home-kitchen/stellwaterbottle.jpg",
        category: "home-kitchen",
        description: "Elegant and eco-friendly, this steel and copper water bottle keeps your drinks cool while reducing single-use plastic."
    },
    {
        id: 6,
        name: "Recycled Cotton Dish Towels",
        slug: "recycled-cotton-dish-towels",
        price: "₹149",
        image: "/home-kitchen/cottondishtowels.jpg",
        category: "home-kitchen",
        description: "Made from 100% recycled cotton, these towels are absorbent, soft, and ideal for drying dishes the sustainable way."
    },
    {
        id: 7,
        name: "Wooden Dish Brush",
        slug: "wooden-dish-brush",
        price: "₹159",
        image: "/home-kitchen/woodendishbrush.jpg",
        category: "home-kitchen",
        description: "Ditch plastic scrubbers! This durable wooden dish brush features natural bristles and an ergonomic handle."
    },
    {
        id: 8,
        name: "Biodegradable Trash Bags",
        slug: "biodegradable-trash-bags",
        price: "₹89",
        image: "/home-kitchen/biodegradabledihbags.jpg",
        category: "home-kitchen",
        description: "Tough, leakproof, and fully compostable — perfect for kitchen and garden waste disposal."
    },
    {
        id: 9,
        name: "Refill Floor Cleaner (Eco)",
        slug: "refill-floor-cleaner-eco",
        price: "₹299",
        image: "/home-kitchen/refillfloorcleaner1.jpg",
        category: "home-kitchen",
        description: "Eco-friendly floor cleaner refill pouch — plant-powered and chemical-free for a safer home."
    },
    {
        id: 10,
        name: "Cork/Coaster Set",
        slug: "cork-coaster-set",
        price: "₹99",
        image: "/home-kitchen/coosterset.jpg",
        category: "home-kitchen",
        description: "Set of natural cork coasters — stylish, water-resistant, and sustainably harvested."
    },
    {
        id: 11,
        name: "Reusable Produce Bags",
        slug: "reusable-produce-bags",
        price: "₹179",
        image: "/home-kitchen/reusableproducebags .jpg",
        category: "home-kitchen",
        description: "Lightweight mesh bags for fruits and veggies — washable, breathable, and plastic-free."
    },
    {
        id: 12,
        name: "Spice Jars (Upcycled)",
        slug: "spice-jars-upcycled",
        price: "₹349",
        image: "/home-kitchen/spicejars.jpg",
        category: "home-kitchen",
        description: "Stylish upcycled spice jars made from glass with bamboo lids — sustainable kitchen storage."
    },
    {
        id: 13,
        name: "Coconut Shell Bowls (set of 2)",
        slug: "coconut-shell-bowls-set-of-2",
        price: "₹259",
        image: "/home-kitchen/CoconutBowlSet.jpg",
        category: "home-kitchen",
        description: "Hand-polished coconut bowls — great for smoothie bowls, snacks, and zero-waste living."
    },
    {
        id: 14,
        name: "Reusable Cloth Bowl Covers (Set of 3)",
        slug: "reusable-cloth-bowl-covers-set-of-3",
        price: "₹229",
        image: "/home-kitchen/clothbowlcover.jpg",
        category: "home-kitchen",
        description: "Say goodbye to plastic wrap! These reusable cloth covers keep leftovers fresh and sustainable."
    },
    {
        id: 15,
        name: "Eco Dishwashing Scrubber ",
        slug: "eco-dishwashing-scrubber",
        price: "₹189",
        image: "/home-kitchen/dishwasher.jpg",
        category: "home-kitchen",
        description: "Eco scrubbers made from natural fibers — gentle on your dishes and kind to the Earth."
    },
    {
        id: 16,
        name: "Jute Table Placemats (set of 4)",
        slug: "jute-table-placemats-set-of-4",
        price: "₹379",
        image: "/home-kitchen/jutetableplacemats.jpg",
        category: "home-kitchen",
        description: "Add rustic elegance to your dining table with handwoven jute placemats — compostable and chic."
    },
    {
        id: 17,
        name: "Bamboo Steamer Basket (2-Tier)",
        slug: "bamboo-steamer-basket-2-tier",
        price: "₹799",
        image: "/home-kitchen/bamboostreamer.jpg",
        category: "home-kitchen",
        description: "Steam veggies and dumplings naturally with this double-tiered bamboo steamer basket."
    },
    {
        id: 18,
        name: "Natural Loofah Scrubber (Pack of 3)",
        slug: "natural-loofah-scrubber-pack-of-3",
        price: "₹129",
        image: "/home-kitchen/loofah.jpg",
        category: "home-kitchen",
        description: "Biodegradable and plastic-free loofahs that clean effectively without harming the planet."
    },
    {
        id: 19,
        name: "Terracotta Oil Dispenser (650ml)",
        slug: "terracotta-oil-dispenser-650ml",
        price: "₹439",
        image: "/home-kitchen/oil.jpg",
        category: "home-kitchen",
        description: "Traditional terracotta oil pot — naturally cool, beautifully handmade, and sustainable."
    },
    {
        id: 20,
        name: "Bamboo Cutting Board",
        slug: "bamboo-cutting-board",
        price: "₹999",
        image: "/home-kitchen/bamboocuttingboard.jpg",
        category: "home-kitchen",
        description: "Durable and antibacterial bamboo cutting board for all your chopping needs."
    },
    {
        id: 21,
        name: "Bamboo Kitchen Tongs",
        slug: "bamboo-kitchen-tongs",
        price: "₹129",
        image: "/home-kitchen/OurBambooTong.jpg",
        category: "home-kitchen",
        description: "Made from sustainable bamboo, these tongs are perfect for tossing salads or flipping toast — naturally heat-resistant."
    },
    {
        id: 22,
        name: "Bamboo Bottle Cleaning Brush",
        slug: "bamboo-bottle-cleaning-brush",
        price: "₹139",
        image: "/home-kitchen/BAMBOOBOTTLEBRUSH.jpg",
        category: "home-kitchen",
        description: "Clean your reusable bottles with ease using this flexible, non-scratch bamboo brush with plant-fiber bristles."
    },
    {
        id: 23,
        name: "Terracotta Water Dispenser (5L)",
        slug: "terracotta-water-dispenser-5l",
        price: "₹1599",
        image: "/home-kitchen/teracootawaterdispenser5l.jpg",
        category: "home-kitchen",
        description: "Stay hydrated the traditional way. This terracotta dispenser keeps water naturally cool and fresh."
    },
    {
        id: 24,
        name: "Coconut Shell Tea Light Holders",
        slug: "coconut-shell-tea-light-holders",
        price: "₹399",
        image: "/home-kitchen/coconut shell tea light.jpg",
        category: "home-kitchen",
        description: "Handcrafted from real coconut shells, these tea light holders add earthy charm to any room or occasion."
    },
    {
        id: 25,
        name: "Jute Storage Basket",
        slug: "jute-storage-basket",
        price: "₹399",
        image: "/home-kitchen/jutestoragebaske.jpg",
        category: "home-kitchen",
        description: "This sturdy jute basket is perfect for organizing your essentials with eco-elegance."
    },
    {
        id: 26,
        name: "Wheat Husk Mixing Bowls (Set of 3)",
        slug: "wheat-husk-mixing-bowls-set-of-3",
        price: "₹1299",
        image: "/home-kitchen/wheathuskmixing.jpg",
        category: "home-kitchen",
        description: "Lightweight, durable mixing bowls made from wheat husk fiber — food-safe and compostable."
    },
    {
        id: 27,
        name: "Stainless Steel Reusable Ice Cubes",
        slug: "stainless-steel-reusable-ice-cubes",
        price: "₹249",
        image: "/home-kitchen/IceCubeMaterialStainlessSteelFeatures.jpg",
        category: "home-kitchen",
        description: "Chill your drinks without dilution! These steel cubes are reusable, hygienic, and ultra-cool."
    },
    {
        id: 28,
        name: "Handwoven Pot Holders/Gloves",
        slug: "handwoven-pot-holders-gloves",
        price: "₹399",
        image: "/home-kitchen/handwovenglovespot.jpg",
        category: "home-kitchen",
        description: "Protect your hands with these artisanal pot holders — handmade using natural, heat-resistant fibers."
    },
    {
        id: 29,
        name: "Bamboo Bread Box",
        slug: "bamboo-bread-box",
        price: "₹1199",
        image: "/home-kitchen/bamboobreadbox.jpg",
        category: "home-kitchen",
        description: "Keep your bread fresh and your countertop beautiful with this eco-chic bamboo box."
    },
    {
        id: 30,
        name: "Recycled Denim Apron",
        slug: "recycled-denim-apron",
        price: "₹599",
        image: "/home-kitchen/1.jpg",
        category: "home-kitchen",
        description: "Upcycled from discarded denim, this apron is strong, stylish, and sewn with sustainability in mind."
    },
    {
        id: 31,
        name: "Terracotta Pickle Jars (Set of 2)",
        slug: "terracotta-pickle-jars-set-of-2",
        price: "₹349",
        image: "/home-kitchen/picklejars.jpg",
        category: "home-kitchen",
        description: "Perfect for storing homemade pickles or condiments — breathable and authentic Indian pottery."
    },
    {
        id: 32,
        name: "Reclaimed Wood Serving Tray",
        slug: "reclaimed-wood-serving-tray",
        price: "₹849",
        image: "/home-kitchen/woodservingtay.jpg",
        category: "home-kitchen",
        description: "Elevate your presentation game with this serving tray, crafted from reclaimed wood with rustic charm."
    },
    {
        id: 33,
        name: "Bamboo Sink Organizer",
        slug: "bamboo-sink-organizer",
        price: "₹199",
        image: "/home-kitchen/bamboosinkorganizer.jpg",
        category: "home-kitchen",
        description: "Neatly store your sponges and soaps with this moisture-resistant bamboo caddy for your sink."
    },
    {
        id: 34,
        name: "Hemp Dish Drying Mat",
        slug: "hemp-dish-drying-mat",
        price: "₹129",
        image: "/home-kitchen/dishdryingmat.jpg",
        category: "home-kitchen",
        description: "Fast-drying and antibacterial, this hemp mat is a zero-waste alternative to synthetic drying mats."
    },
    {
        id: 35,
        name: "Neem Wood Chopping Knife",
        slug: "neem-wood-chopping-knife",
        price: "₹239",
        image: "/home-kitchen/neemwoodknife.jpg",
        category: "home-kitchen",
        description: "Crafted from neem wood, this knife is naturally antibacterial — ideal for chopping herbs or fruits."
    },
    {
        id: 36,
        name: "Terracotta Frying Pan",
        slug: "terracotta-frying-pan",
        price: "₹699",
        image: "/home-kitchen/TERRACOTTASERVINGPAN.jpg",
        category: "home-kitchen",
        description: "Rediscover traditional cooking with this hand-thrown terracotta pan — adds earthy flavor and charm."
    },
    {
        id: 37,
        name: "Nature Wood Dining Bowl Set – 8 Pcs",
        slug: "nature-wood-dining-bowl-set-8-pcs",
        price: "₹1599",
        image: "/home-kitchen/wooddiningset.jpg",
        category: "home-kitchen",
        description: "An elegant set of 8 bowls carved from natural wood — perfect for everyday meals or festive occasions."
    },
    {
        id: 38,
        name: "Wooden Egg Holder Tray",
        slug: "wooden-egg-holder-tray",
        price: "₹429",
        image: "/home-kitchen/eggholder.jpg",
        category: "home-kitchen",
        description: "Keep your eggs secure and stylish with this wooden tray made for modern minimalists."
    },
    {
        id: 39,
        name: "Rice Husk Measuring Cups Set",
        slug: "rice-husk-measuring-cups-set",
        price: "₹339",
        image: "/home-kitchen/ricehuskmeasuringcups.jpg",
        category: "home-kitchen",
        description: "A smart kitchen essential made from rice husk — durable, non-toxic, and biodegradable."
    },
    {
        id: 40,
        name: "Bamboo Dish Drying Rack",
        slug: "bamboo-dish-drying-rack",
        price: "₹1399",
        image: "/home-kitchen/bamboodishdryingrack.jpg",
        category: "home-kitchen",
        description: "Foldable and functional, this bamboo rack air-dries your dishes while keeping your counter aesthetic."
    }
];

module.exports = productData;
