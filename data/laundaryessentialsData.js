const laundryEssentials = [
    {
        id: 1,
        name: "NatureDrop Liquid Detergent",
        slug: "naturedrop-liquid-detergent",
        price: "₹229",
        image: "/laundry-essentials/1.jpg",
        category: "laundry-essentials",
        description: "A plant-based detergent that fights tough stains while being gentle on fabrics and the planet. Safe for both machine and hand wash."
    },
    {
        id: 2,
        name: "EcoSphere Wool Dryer Balls",
        slug: "ecosphere-wool-dryer-balls",
        price: "₹399",
        image: "/laundry-essentials/2.jpg",
        category: "laundry-essentials",
        description: "Ditch single-use dryer sheets with these reusable wool balls that soften fabrics and reduce drying time naturally."
    },
    {
        id: 3,
        name: "LeafyFresh Laundry Bar",
        slug: "leafyfresh-laundry-bar",
        price: "₹199",
        image: "/laundry-essentials/3.jpg",
        height: 210,
        width: 221,
        category: "laundry-essentials",
        description: "Ideal for delicate garments, this eco-friendly bar soap is crafted from coconut oil and herbal extracts for gentle handwashing."
    },
    {
        id: 4,
        name: "SoapBerry Wash Nuts",
        slug: "soapberry-wash-nuts",
        price: "₹59",
        image: "/laundry-essentials/4.jpg",
        category: "laundry-essentials",
        description: "Natural, chemical-free soap nuts that can be reused for multiple loads. A zero-waste solution for clean, fresh laundry."
    },
    {
        id: 5,
        name: "ZeroSuds Detergent Sheets",
        slug: "zerosuds-detergent-sheets",
        price: "₹299",
        image: "/laundry-essentials/5.jpg",
        category: "laundry-essentials",
        description: "Compact and lightweight detergent sheets that dissolve in water. Perfect for travel or minimalist laundry routines."
    },
    {
        id: 6,
        name: "Bamboo Mesh Laundry Bag",
        slug: "bamboo-mesh-laundry-bag",
        price: "₹149",
        image: "/laundry-essentials/6.jpg",
        category: "laundry-essentials",
        description: "Protect your delicates with this breathable, reusable mesh laundry bag made from sustainable bamboo fibers."
    },
    {
        id: 7,
        name: "GentleGrove Fabric Softener",
        slug: "gentlegrove-fabric-softener",
        price: "₹259",
        image: "/laundry-essentials/7.jpg",
        category: "laundry-essentials",
        description: "An eco-conscious softener infused with essential oils that leaves clothes irresistibly soft and fresh-smelling."
    },
    {
        id: 8,
        name: "EarthEssence Stain Remover Stick",
        slug: "earthessence-stain-remover-stick",
        price: "₹279",
        image: "/laundry-essentials/8.jpg",
        category: "laundry-essentials",
        description: "Tackle stains with a powerful blend of baking soda and plant oils, perfect for pre-treating spills on-the-go."
    },
    {
        id: 9,
        name: "WashWise Laundry Pods",
        slug: "washwise-laundry-pods",
        price: "₹369",
        image: "/laundry-essentials/9.jpg",
        category: "laundry-essentials",
        description: "Eco-friendly pods packed with plant enzymes for stain-fighting action. Safe for sensitive skin and septic systems."
    },
    {
        id: 10,
        name: "SootheSoak Hand Wash Detergent",
        slug: "soothesoak-hand-wash-detergent",
        price: "₹199",
        image: "/laundry-essentials/10.jpg",
        category: "laundry-essentials",
        description: "Mild on your hands but tough on dirt, this liquid detergent is crafted for gentle hand-washing of delicate fabrics."
    },
    {
        id: 11,
        name: "BubbleRoot Detergent Powder",
        slug: "bubbleroot-detergent-powder",
        price: "₹179",
        image: "/laundry-essentials/11.jpg",
        category: "laundry-essentials",
        description: "A biodegradable detergent powder with neem and lemon extracts that’s tough on grime, gentle on nature."
    },
    {
        id: 12,
        name: "CitrusClean Fabric Refresher Spray",
        slug: "citrusclean-fabric-refresher-spray",
        price: "₹249",
        image: "/laundry-essentials/12.jpg",
        category: "laundry-essentials",
        description: "A quick-dry spray to refresh fabrics between washes with a zesty citrus aroma. No harsh chemicals included."
    },
    {
        id: 13,
        name: "CitrusTwist Anti-Odour Gel",
        slug: "citrustwist-anti-odour-gel",
        price: "₹249",
        image: "/laundry-essentials/25.jpg",
        category: "laundry-essentials",
        description: "Tuck this herbal anti-odour gel into your closet or laundry basket to keep odors at bay, naturally."
    },
    {
        id: 14,
        name: "FabCare Combo Box",
        slug: "fabcare-combo-box",
        price: "₹669",
        image: "/laundry-essentials/26.jpg",
        category: "laundry-essentials",
        description: "An all-in-one kit for your laundry needs: includes detergent sheets, fragrance oil, and stain remover."
    },
    {
        id: 15,
        name: "ClayBloom Stain Lifter",
        slug: "claybloom-stain-lifter",
        price: "₹159",
        image: "/laundry-essentials/27.jpg",
        category: "laundry-essentials",
        description: "Powered by kaolin clay and lemon oil, this paste-based stain lifter is perfect for collars, cuffs, and stubborn dirt."
    },
    {
        id: 16,
        name: "ForestDew Fragrance Oil Drops",
        slug: "forestdew-fragrance-oil-drops",
        price: "₹179",
        image: "/laundry-essentials/40.jpg",
        category: "laundry-essentials",
        description: "Add a few drops to your rinse cycle or dryer balls for a forest-fresh aroma in your clothes."
    },
    {
        id: 17,
        name: "EcoLoom Dryer Sheets",
        slug: "ecoloom-dryer-sheets",
        price: "₹169",
        image: "/laundry-essentials/13.jpg",
        category: "laundry-essentials",
        description: "Reusable and biodegradable dryer sheets made with organic fabric softeners and subtle herbal scent."
    },
    {
        id: 18,
        name: "TerraWipe Stain Towels",
        slug: "terrawipe-stain-towels",
        price: "₹229",
        image: "/laundry-essentials/14.jpg",
        category: "laundry-essentials",
        description: "Infused with natural enzymes, these towels are great for blotting and pre-treating spills and messes."
    },
    {
        id: 19,
        name: "GreenPouch Refill Pack",
        slug: "greenpouch-refill-pack",
        price: "₹339",
        image: "/laundry-essentials/15.jpg",
        category: "laundry-essentials",
        description: "Eco-refill your detergent or spray bottles with this compostable pouch made from cornstarch plastic."
    },
    {
        id: 20,
        name: "SoftStone Scrub Bar",
        slug: "softstone-scrub-bar",
        price: "₹99",
        image: "/laundry-essentials/16.jpg",
        category: "laundry-essentials",
        description: "Perfect for hand-scrubbing collars and cuffs, this bar contains baking soda and clay for a gentle clean."
    },
    {
        id: 21,
        name: "NeemGuard Anti-Fungal Rinse",
        slug: "neemguard-anti-fungal-rinse",
        price: "₹199",
        image: "/laundry-essentials/28.jpg",
        category: "laundry-essentials",
        description: "A neem-infused natural fabric rinse that prevents odor and fungal buildup in damp laundry."
    },
    {
        id: 22,
        name: "BlissBalls Wool Dryer Balls",
        slug: "blissballs-wool-dryer-balls",
        price: "₹439",
        image: "/laundry-essentials/29.jpg",
        category: "laundry-essentials",
        description: "Natural wool balls that reduce wrinkles, static, and drying time — a long-lasting alternative to dryer sheets."
    },
    {
        id: 23,
        name: "UrbanRinse Reusable Pouch",
        slug: "urbanrinse-reusable-pouch",
        price: "₹299",
        image: "/laundry-essentials/30.jpg",
        category: "laundry-essentials",
        description: "Leakproof and durable, this pouch is perfect for carrying detergent pods or DIY fabric softener."
    },
    {
        id: 24,
        name: "OceanFoam Refill Pack",
        slug: "oceanfoam-refill-pack",
        price: "₹329",
        image: "/laundry-essentials/31.jpg",
        category: "laundry-essentials",
        description: "Plant-based refill pouch for your OceanFoam liquid detergent. Reduces plastic waste and ocean pollution."
    },
    {
        id: 25,
        name: "FreshFibre Essential Kit",
        slug: "freshfibre-essential-kit",
        price: "₹729",
        image: "/laundry-essentials/17.jpg",
        category: "laundry-essentials",
        description: "A full starter pack of detergent, refresher spray, and fragrance oils. Ideal for new eco-laundry converts."
    },
    {
        id: 26,
        name: "AirDry Bamboo Cloth Clips",
        slug: "airdry-bamboo-cloth-clips",
        price: "₹159",
        image: "/laundry-essentials/18.jpg",
        category: "laundry-essentials",
        description: "Sturdy yet lightweight cloth clips made from bamboo. Say goodbye to plastic pegs!"
    },
    {
        id: 27,
        name: "RainDrop Liquid Blue",
        slug: "raindrop-liquid-blue",
        price: "₹59",
        image: "/laundry-essentials/19.jpg",
        category: "laundry-essentials",
        description: "A traditional laundry enhancer in a natural, chemical-free formulation to brighten whites."
    },
    {
        id: 28,
        name: "EcoArmor Washing Machine Cleaner",
        slug: "ecoarmor-washing-machine-cleaner",
        price: "₹199",
        image: "/laundry-essentials/20.jpg",
        category: "laundry-essentials",
        description: "Natural citrus enzyme formula that keeps your washing machine fresh, clean, and mold-free."
    },
    {
        id: 29,
        name: "LinenLift Spray",
        slug: "linenlift-spray",
        price: "₹199",
        image: "/laundry-essentials/21.jpg",
        category: "laundry-essentials",
        description: "A mist for wrinkled clothes that softens and smoothens fabric without ironing. Travel-ready and quick!"
    },
    {
        id: 30,
        name: "NatureMesh Laundry Sack",
        slug: "naturemesh-laundry-sack",
        price: "₹299",
        image: "/laundry-essentials/22.jpg",
        category: "laundry-essentials",
        description: "Made from organic mesh, this sack is ideal for dirty laundry or packing delicates for travel."
    },
    {
        id: 31,
        name: "CocoSoak Fabric Cleanser",
        slug: "cocosoak-fabric-cleanser",
        price: "₹249",
        image: "/laundry-essentials/23.jpg",
        category: "laundry-essentials",
        description: "Formulated with coconut oil and plant enzymes, this cleanser keeps clothes soft and skin-safe."
    },
    {
        id: 32,
        name: "PetalWash Floral Detergent",
        slug: "petalwash-floral-detergent",
        price: "₹309",
        image: "/laundry-essentials/24.jpg",
        category: "laundry-essentials",
        description: "An elegant floral-scented detergent that’s biodegradable, gentle, and packed in a recycled bottle."
    },
    {
        id: 33,
        name: "SmartSoak Presoak Powder",
        slug: "smartsoak-presoak-powder",
        price: "₹299",
        image: "/laundry-essentials/32.jpg",
        category: "laundry-essentials",
        description: "Perfect for soaking tough stains and whites overnight with natural enzymes and baking soda."
    },
    {
        id: 34,
        name: "BambuLine Drying Rope",
        slug: "bambuline-drying-rope",
        price: "₹179",
        image: "/laundry-essentials/33.jpg",
        category: "laundry-essentials",
        description: "Tough yet eco-friendly drying rope made from biodegradable bamboo fiber. Indoor and outdoor use."
    },
    {
        id: 35,
        name: "SunnySheet Drying Mat",
        slug: "sunnysheet-drying-mat",
        price: "₹279",
        image: "/laundry-essentials/34.jpg",
        category: "laundry-essentials",
        description: "Water-absorbent and antibacterial, this mat is ideal for drying wet clothes or delicate laundry."
    },
    {
        id: 36,
        name: "SteamSafe Ironing Spray",
        slug: "steamsafe-ironing-spray",
        price: "₹699",
        image: "/laundry-essentials/35.jpg",
        category: "laundry-essentials",
        description: "An ironing spray that eases wrinkles, reduces static, and adds a soft herbal fragrance."
    },
    {
        id: 37,
        name: "WashCube Detergent Tablets",
        slug: "washcube-detergent-tablets",
        price: "₹189",
        image: "/laundry-essentials/36.jpg",
        category: "laundry-essentials",
        description: "Pre-measured detergent tablets packed with plant enzymes. No mess, no plastic, just drop & wash!"
    },
    {
        id: 38,
        name: "NaturalWash Clay Powder",
        slug: "naturalwash-clay-powder",
        price: "₹139",
        image: "/laundry-essentials/38.jpg",
        category: "laundry-essentials",
        description: "A traditional clay and soapnut-based wash powder for deep cleansing without chemicals."
    },
    {
        id: 39,
        name: "LinenLove Sachets",
        slug: "linenlove-sachets",
        price: "₹99",
        image: "/laundry-essentials/39.jpg",
        category: "laundry-essentials",
        description: "Tuck these herbal sachets into your drawers to leave a soft, natural scent on clothes and linens."
    },
    {
        id: 40,
        name: "EcoTumble Drying Pouch",
        slug: "ecotumble-drying-pouch",
        price: "₹189",
        image: "/laundry-essentials/37.jpg",
        category: "laundry-essentials",
        description: "A reusable drying pouch filled with lavender and eucalyptus to leave laundry smelling garden-fresh."
    }
];

export default laundryEssentials;
