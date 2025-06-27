const ecoDecorData = [
    {
        id: 1,
        name: 'TerraGlow Bamboo Table Lamp',
        slug: 'terraglow-bamboo-table-lamp',
        price: '₹729',
        image: '/eco-decor/1.jpg',
        category: 'eco-decor',
        description: 'Illuminate your space with the warm, ambient glow of the TerraGlow Bamboo Table Lamp — a stylish, eco-friendly addition to any room.'
    },
    {
        id: 2,
        name: 'CocoBloom Wall Planters (Set of 3)',
        slug: 'cocobloom-wall-planters-set-of-3',
        price: '₹599',
        image: '/eco-decor/2.jpg',
        category: 'eco-decor',
        description: 'Add a touch of nature to your walls with this charming set of 3 wall-mounted CocoBloom coconut shell planters.'
    },
    {
        id: 3,
        name: 'RusticLeaf Wooden Wall Clock',
        slug: 'rusticleaf-wooden-wall-clock',
        price: '₹1199',
        image: '/eco-decor/3.jpg',
        height: 210,
        width: 221,
        category: 'eco-decor',
        description: 'A classic wall clock crafted from reclaimed wood, RusticLeaf blends timekeeping with rustic elegance.'
    },
    {
        id: 4,
        name: 'EcoCanvas Wall Art',
        slug: 'ecocanvas-wall-art',
        price: '₹599',
        image: '/eco-decor/4.jpg',
        category: 'eco-decor',
        description: 'EcoCanvas Wall Art features biodegradable canvas and plant-based inks — art that cares for the Earth.'
    },
    {
        id: 5,
        name: 'ClayNest Scented Candle Holder',
        slug: 'claynest-scented-candle-holder',
        price: '₹399',
        image: '/eco-decor/5.jpg',
        category: 'eco-decor',
        description: 'Infuse your home with calming aromas using this handcrafted ClayNest candle holder made from natural clay.'
    },
    {
        id: 6,
        name: 'JuteKnot Macrame Wall Hanging',
        slug: 'juteknot-macrame-wall-hanging',
        price: '₹559',
        image: '/eco-decor/6.jpg',
        category: 'eco-decor',
        description: 'Add boho vibes to your walls with our JuteKnot macrame piece, handwoven with love and sustainable jute fibers.'
    },
    {
        id: 7,
        name: 'PalmTray Decorative Bowl',
        slug: 'palmtray-decorative-bowl',
        price: '₹259',
        image: '/eco-decor/7.jpg',
        category: 'eco-decor',
        description: 'Handcrafted from palm leaves, this decorative bowl brings earthy texture and warmth to your table.'
    },
    {
        id: 8,
        name: 'EarthMat Cork Table Mat Set',
        slug: 'earthmat-cork-table-mat-set',
        price: '₹349',
        image: '/eco-decor/8.jpg',
        category: 'eco-decor',
        description: 'Dine green with EarthMat — a set of durable, stylish cork mats that protect surfaces and the environment.'
    },
    {
        id: 9,
        name: 'BloomWeave Planter Basket',
        slug: 'bloomweave-planter-basket',
        price: '₹369',
        image: '/eco-decor/9.jpg',
        category: 'eco-decor',
        description: 'Elevate your potted plants with the BloomWeave basket, made from handwoven jute and natural dyes.'
    },
    {
        id: 10,
        name: 'ReGlow Recycled Glass Vase',
        slug: 'reglow-recycled-glass-vase',
        price: '₹499',
        image: '/eco-decor/10.jpg',
        category: 'eco-decor',
        description: 'ReGlow gives discarded glass new life in this sleek, recycled vase perfect for fresh blooms or dry arrangements.'
    },
    {
        id: 11,
        name: 'BambuWave Wind Chime',
        slug: 'bambuwave-wind-chime',
        price: '₹279',
        image: '/eco-decor/11.jpg',
        category: 'eco-decor',
        description: 'Let the soothing bamboo notes of BambuWave wind chimes calm your space, sustainably handmade.'
    },
    {
        id: 12,
        name: 'CocoRoot Table Coasters (Set of 4)',
        slug: 'cocoroot-table-coasters-set-of-4',
        price: '₹149',
        image: '/eco-decor/12.jpg',
        category: 'eco-decor',
        description: 'Keep your tabletops safe in eco-style with this set of 4 CocoRoot coasters made from coconut shells.'
    },
    {
        id: 13,
        name: 'GreenTales Story Frame',
        slug: 'greentales-story-frame',
        price: '₹249',
        image: '/eco-decor/13.jpg',
        category: 'eco-decor',
        description: 'Tell your story sustainably with GreenTales — a handcrafted photo frame made from recycled wood.'
    },
    {
        id: 14,
        name: 'SunCraft Bamboo Wall Mirror',
        slug: 'suncraft-bamboo-wall-mirror',
        price: '₹449',
        image: '/eco-decor/14.jpg',
        category: 'eco-decor',
        description: 'The SunCraft mirror is a reflection of elegance, framed in hand-carved sustainable bamboo.'
    },
    {
        id: 15,
        name: 'NeemGlow Incense Holder Tray',
        slug: 'neemglow-incense-holder-tray',
        price: '₹259',
        image: '/eco-decor/15.jpg',
        category: 'eco-decor',
        description: 'Crafted from neem wood, this incense holder tray is naturally antibacterial and beautifully designed.'
    },
    {
        id: 16,
        name: 'SeedPaper Wall Calendar',
        slug: 'seedpaper-wall-calendar',
        price: '₹579',
        image: '/eco-decor/16.jpg',
        category: 'eco-decor',
        description: 'A wall calendar you can plant! Printed on seed paper with vegetable inks — sustainability meets planning.'
    },
    {
        id: 17,
        name: 'UpcyclePatch Throw Cushion',
        slug: 'upcyclepatch-throw-cushion',
        price: '₹469',
        image: '/eco-decor/17.jpg',
        category: 'eco-decor',
        description: 'Cozy up to comfort and sustainability with UpcyclePatch cushions made from reused fabric patches.'
    },
    {
        id: 18,
        name: 'EcoEcho Candle Set',
        slug: 'ecoecho-candle-set',
        price: '₹529',
        image: '/eco-decor/18.jpg',
        category: 'eco-decor',
        description: 'Set the mood naturally with this soy wax EcoEcho candle set — fragrant, soothing, and sustainable.'
    },
    {
        id: 19,
        name: 'TerraTile Name Plate',
        slug: 'terratile-name-plate',
        price: '₹639',
        image: '/eco-decor/19.jpg',
        category: 'eco-decor',
        description: 'Personalize your entrance with a handcrafted nameplate made from eco-friendly terracotta tiles.'
    },
    {
        id: 20,
        name: 'HempHaven Curtain Tiebacks',
        slug: 'hemphaven-curtain-tiebacks',
        price: '₹199',
        image: '/eco-decor/20.jpg',
        category: 'eco-decor',
        description: 'Tie your decor together with earthy elegance — HempHaven tiebacks are biodegradable and chic.'
    },
    {
        id: 21,
        name: 'ClayAura Aroma Diffuser',
        slug: 'clayaura-aroma-diffuser',
        price: '₹229',
        image: '/eco-decor/21.jpg',
        category: 'eco-decor',
        description: 'Infuse your space with serenity using ClayAura — a handmade terracotta aroma diffuser that promotes mindful living.'
    },
    {
        id: 22,
        name: 'BreathePot Hanging Planter',
        slug: 'breathepot-hanging-planter',
        price: '₹339',
        image: '/eco-decor/22.jpg',
        category: 'eco-decor',
        description: 'Bring the outdoors in with BreathePot — a minimalist, breathable clay planter perfect for small herbs and air plants.'
    },
    {
        id: 23,
        name: 'BambooWave Ceiling Pendant',
        slug: 'bamboowave-ceiling-pendant',
        price: '₹1299',
        image: '/eco-decor/23.jpg',
        category: 'eco-decor',
        description: 'Light up sustainably with BambooWave, a handwoven pendant lamp that radiates warmth and organic charm.'
    },
    {
        id: 24,
        name: 'UpNature Floating Shelf',
        slug: 'upnature-floating-shelf',
        price: '₹639',
        image: '/eco-decor/24.jpg',
        category: 'eco-decor',
        description: 'Display your décor with the rustic grace of our UpNature Shelf — crafted from reclaimed wood for a clean, floating look.'
    },
    {
        id: 25,
        name: 'GreenVibe Fabric Garland',
        slug: 'greenvibe-fabric-garland',
        price: '₹329',
        image: '/eco-decor/25.jpg',
        category: 'eco-decor',
        description: 'Celebrate sustainably with GreenVibe — a handcrafted garland made from upcycled fabric in earthy tones.'
    },
    {
        id: 26,
        name: 'WildWick Table Lantern',
        slug: 'wildwick-table-lantern',
        price: '₹559',
        image: '/eco-decor/37.jpg',
        category: 'eco-decor',
        description: 'A glowing companion for your evenings, the WildWick lantern features bamboo and recycled glass for a wild yet warm feel.'
    },
    {
        id: 27,
        name: 'CorkStone Pebble Mat',
        slug: 'corkstone-pebble-mat',
        price: '₹649',
        image: '/eco-decor/26.jpg',
        category: 'eco-decor',
        description: 'Feel nature underfoot with our CorkStone mat — combining cork and smooth stones for a spa-like touch.'
    },
    {
        id: 28,
        name: 'EarthScroll Message Banner',
        slug: 'earthscroll-message-banner',
        price: '₹599',
        image: '/eco-decor/27.jpg',
        category: 'eco-decor',
        description: 'Say it sustainably with EarthScroll — a customizable hemp and jute banner for inspirational messages and décor.'
    },
    {
        id: 29,
        name: 'EcoNest Terrarium Kit',
        slug: 'econest-terrarium-kit',
        price: '₹699',
        image: '/eco-decor/28.jpg',
        category: 'eco-decor',
        description: 'Grow your own green world with EcoNest — a complete DIY terrarium kit in a glass dome for your shelf or desk.'
    },
    {
        id: 30,
        name: 'Herbal Cold-Pressed Soap Bars',
        slug: 'herbal-cold-pressed-soap-bars',
        price: '₹399',
        image: '/eco-decor/29.jpg',
        category: 'eco-decor',
        description: 'These herbal soap bars aren’t just cleansing — they’re decorative too. Beautifully packaged and completely natural.'
    },
    {
        id: 31,
        name: 'ClayRoot Indoor Water Fountain',
        slug: 'clayroot-indoor-water-fountain',
        price: '₹1299',
        image: '/eco-decor/30.jpg',
        category: 'eco-decor',
        description: 'Tranquility at its finest — this handmade ClayRoot fountain brings soft water sounds and eco-style to your space.'
    },
    {
        id: 32,
        name: 'Plantaholic Wall Shelf Set',
        slug: 'plantaholic-wall-shelf-set',
        price: '₹849',
        image: '/eco-decor/31.jpg',
        category: 'eco-decor',
        description: 'Made for plant lovers, this shelf set brings your vertical garden to life with reclaimed wood and metal accents.'
    },
    {
        id: 33,
        name: 'LeafLines Bamboo Blinds',
        slug: 'leaflines-bamboo-blinds',
        price: '₹1249',
        image: '/eco-decor/32.jpg',
        category: 'eco-decor',
        description: 'Soften light and elevate style with LeafLines blinds — woven from fine bamboo and natural fibers.'
    },
    {
        id: 34,
        name: 'EarthBox Storage Crate',
        slug: 'earthbox-storage-crate',
        price: '₹499',
        image: '/eco-decor/33.jpg',
        category: 'eco-decor',
        description: 'Declutter consciously with EarthBox — a versatile storage crate made from reclaimed pine wood.'
    },
    {
        id: 35,
        name: 'JuteBloom Woven Rug',
        slug: 'jutebloom-woven-rug',
        price: '₹629',
        image: '/eco-decor/34.jpg',
        category: 'eco-decor',
        description: 'Woven from natural jute, this textured rug adds earthy elegance to any space. Durable, soft, and sustainable.'
    },
    {
        id: 36,
        name: 'OrganicAura Room Spray',
        slug: 'organicaura-room-spray',
        price: '₹249',
        image: '/eco-decor/35.jpg',
        category: 'eco-decor',
        description: 'Refresh your room the eco way — OrganicAura uses essential oils and zero toxins to create a healthy aroma.'
    },
    {
        id: 37,
        name: 'UpcycledJar Fairy Lights',
        slug: 'upcycledjar-fairy-lights',
        price: '₹699',
        image: '/eco-decor/36.jpg',
        category: 'eco-decor',
        description: 'Add sparkle to your nights with these handcrafted fairy lights in upcycled glass jars — rustic and radiant.'
    },
    {
        id: 38,
        name: 'MudArt Wall Mask',
        slug: 'mudart-wall-mask',
        price: '₹429',
        image: '/eco-decor/38.jpg',
        category: 'eco-decor',
        description: 'Inspired by tribal motifs, MudArt masks are handcrafted with earthen textures and natural pigments.'
    },
    {
        id: 39,
        name: 'SandDune Clay Diffuser Tiles',
        slug: 'sanddune-clay-diffuser-tiles',
        price: '₹239',
        image: '/eco-decor/39.jpg',
        category: 'eco-decor',
        description: 'Infuse drawers and rooms with natural scent using SandDune diffuser tiles made from porous baked clay.'
    },
    {
        id: 40,
        name: 'ForestStitch Cushion Cover',
        slug: 'foreststitch-cushion-cover',
        price: '₹399',
        image: '/eco-decor/40.jpg',
        category: 'eco-decor',
        description: 'Nature-inspired embroidery meets soft organic cotton in this premium cushion cover by ForestStitch.'
    }
];

module.exports = ecoDecorData;