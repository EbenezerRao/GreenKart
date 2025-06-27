const products = [
    {
        id: 1,
        name: 'SeedNote Plantable Notebook',
        slug: 'seednote-plantable-notebook',
        category: 'green-office',
        price: '₹279',
        image: '/green-office/1.jpg',
        description: 'Eco-friendly and plantable, this notebook contains seeds in each page—write, then plant to grow herbs or flowers.'
    },
    {
        id: 2,
        name: 'CorkEase Mouse Pad',
        slug: 'corkease-mouse-pad',
        category: 'green-office',
        price: '₹299',
        image: '/green-office/2.jpg',
        description: 'A stylish, durable mouse pad made from sustainable cork, offering smooth tracking and natural aesthetics.'
    },
    {
        id: 3,
        name: 'BambooGrip Gel Pen Set',
        slug: 'bamboogrip-gel-pen-set',
        category: 'green-office',
        price: '₹199',
        image: '/green-office/3.jpg',
        height: 210,
        width: 221,
        description: 'Set of smooth-writing bamboo-bodied gel pens that are both ergonomic and biodegradable.'
    },
    {
        id: 4,
        name: 'JuteMate Pen Pouch',
        slug: 'jutemate-pen-pouch',
        category: 'green-office',
        price: '₹249',
        image: '/green-office/4.jpg',
        description: 'Keep your stationery tidy with this hand-stitched jute pouch, perfect for eco-conscious professionals.'
    },
    {
        id: 5,
        name: 'PaperTrail Recycled Notepad',
        slug: 'papertrail-recycled-notepad',
        category: 'green-office',
        price: '₹149',
        image: '/green-office/5.jpg',
        description: 'Made from 100% recycled paper, this notepad is ideal for jotting down your greenest ideas.'
    },
    {
        id: 6,
        name: 'EcoDesk Organizer Tray',
        slug: 'ecodesk-organizer-tray',
        category: 'green-office',
        price: '₹499',
        image: '/green-office/6.jpg',
        description: 'Declutter your workspace with this sleek, sustainable organizer made from bamboo and cork.'
    },
    {
        id: 7,
        name: 'LeafPrint File Folder',
        slug: 'leafprint-file-folder',
        category: 'green-office',
        price: '₹239',
        image: '/green-office/7.jpg',
        description: 'Stay organized in style with this recycled paper folder decorated with leaf-inspired prints.'
    },
    {
        id: 8,
        name: 'PlanterPen Holder',
        slug: 'planterpen-holder',
        category: 'green-office',
        price: '₹289',
        image: '/green-office/8.jpg',
        description: 'A dual-purpose pen holder and mini-planter, designed to green up your desk while keeping it tidy.'
    },
    {
        id: 9,
        name: 'TerraTidy Cord Wrap',
        slug: 'terratidy-cord-wrap',
        category: 'green-office',
        price: '₹99',
        image: '/green-office/9.jpg',
        description: 'Organize your charging cables with this biodegradable cord wrap made from plant-based materials.'
    },
    {
        id: 10,
        name: 'ClayTime Desk Clock',
        slug: 'claytime-desk-clock',
        category: 'green-office',
        price: '₹599',
        image: '/green-office/10.jpg',
        description: 'Handcrafted with natural clay, this desk clock brings timeless charm to your eco workspace.'
    },
    {
        id: 11,
        name: 'ReInk Refill Pens (Set of 5)',
        slug: 'reink-refill-pens-set-of-5',
        category: 'green-office',
        price: '₹279',
        image: '/green-office/11.jpg',
        description: 'Reduce plastic waste with these refillable pens—smooth ink, sustainable body.'
    },
    {
        id: 12,
        name: 'NeemBoard Whiteboard',
        slug: 'neemboard-whiteboard',
        category: 'green-office',
        price: '₹849',
        image: '/green-office/12.jpg',
        description: 'Crafted from neem wood and natural resin, this whiteboard is toxin-free and elegant.'
    },
    {
        id: 13,
        name: 'GreenGrid Monthly Planner',
        slug: 'greengrid-monthly-planner',
        category: 'green-office',
        price: '₹349',
        image: '/green-office/13.jpg',
        description: 'Stay on top of tasks with this grid-based recycled paper planner, ideal for home or office.'
    },
    {
        id: 14,
        name: 'EcoSit Laptop Stand',
        slug: 'ecoset-laptop-stand',
        category: 'green-office',
        price: '₹749',
        image: '/green-office/14.jpg',
        description: 'Made from sustainable bamboo, this ergonomic laptop stand improves posture and productivity.'
    },
    {
        id: 15,
        name: 'HempCo Clipboard Folder',
        slug: 'hempco-clipboard-folder',
        category: 'green-office',
        price: '₹259',
        image: '/green-office/15.jpg',
        description: 'A rugged clipboard folder made with hemp fabric, ideal for meetings or eco presentations.'
    },
    {
        id: 16,
        name: 'BreezeBox Table Fan',
        slug: 'breezebox-table-fan',
        category: 'green-office',
        price: '₹679',
        image: '/green-office/16.jpg',
        description: 'Keep cool sustainably with this energy-efficient bamboo-framed desk fan.'
    },
    {
        id: 17,
        name: 'ZenLine Sticky Notes',
        slug: 'zenline-sticky-notes',
        category: 'green-office',
        price: '₹169',
        image: '/green-office/17.jpg',
        description: 'Earth-toned sticky notes made from recycled pulp—write, stick, and compost guilt-free.'
    },
    {
        id: 18,
        name: 'UpWood Desk Lamp',
        slug: 'upwood-desk-lamp',
        category: 'green-office',
        price: '₹999',
        image: '/green-office/18.jpg',
        description: 'Rustic elegance meets sustainability in this reclaimed wood LED desk lamp.'
    },
    {
        id: 19,
        name: 'SoulPatch Keyboard Mat',
        slug: 'soulpatch-keyboard-mat',
        category: 'green-office',
        price: '₹239',
        image: '/green-office/19.jpg',
        description: 'This soft-touch, biodegradable mat adds comfort and mindfulness to your typing experience.'
    },
    {
        id: 20,
        name: 'NatureType Keyboard Brush',
        slug: 'naturetype-keyboard-brush',
        category: 'green-office',
        price: '₹149',
        image: '/green-office/20.jpg',
        description: 'Keep your tech tidy with this eco-friendly keyboard cleaning brush made of bamboo and coir.'
    },
    {
        id: 21,
        name: "LeafLit Bookmark Set",
        slug: "leaflit-bookmark-set",
        price: "₹129",
        image: "/green-office/21.jpg",
        category: "green-office",
        description: "Keep your reading green and organized with this handcrafted bookmark set made from recycled materials."
    },
    {
        id: 22,
        name: "TerraPins Push Pin Set",
        slug: "terrapins-push-pin-set",
        price: "₹149",
        image: "/green-office/22.jpg",
        category: "green-office",
        description: "Eco-friendly cork push pins to pin your goals without poking the planet."
    },
    {
        id: 23,
        name: "WrapUp Document Roll",
        slug: "wrapup-document-roll",
        price: "₹399",
        image: "/green-office/23.jpg",
        category: "green-office",
        description: "Keep your blueprints, documents, or artworks secure in this handmade jute roll folder."
    },
    {
        id: 24,
        name: "AromaNote Workspace Spray",
        slug: "aromanote-workspace-spray",
        price: "₹299",
        image: "/green-office/24.jpg",
        category: "green-office",
        description: "Infuse your workspace with calming aromas made from natural essential oils—breathe and focus."
    },
    {
        id: 25,
        name: "ClayCool Mug Warmer",
        slug: "claycool-mug-warmer",
        price: "₹199",
        image: "/green-office/25.jpg",
        category: "green-office",
        description: "Traditional clay meets modern need—keep your drinks warm, the natural way."
    },
    {
        id: 26,
        name: "Upcycled Jar Desk Light",
        slug: "upcycled-jar-desk-light",
        price: "₹749",
        image: "/green-office/26.jpg",
        category: "green-office",
        description: "Rustic charm and eco design—this desk light brings recycled glass and warmth to your space."
    },
    {
        id: 27,
        name: "EcoTag Name Plate",
        slug: "ecotag-name-plate",
        price: "₹349",
        image: "/green-office/27.jpg",
        category: "green-office",
        description: "Personalize your space with this elegant, hand-crafted bamboo nameplate."
    },
    {
        id: 28,
        name: "PaperPod Recycled Pen Box",
        slug: "paperpod-recycled-pen-box",
        price: "₹179",
        image: "/green-office/28.jpg",
        category: "green-office",
        description: "Tidy up sustainably—this pen box is crafted from paper pulp and wrapped in upcycled charm."
    },
    {
        id: 29,
        name: "GreenCarton Drawer Tray",
        slug: "greencarton-drawer-tray",
        price: "₹399",
        image: "/green-office/29.jpg",
        category: "green-office",
        description: "Sort your essentials neatly with this sturdy, eco-conscious storage tray."
    },
    {
        id: 30,
        name: "HempString Lanyard",
        slug: "hempstring-lanyard",
        price: "₹149",
        image: "/green-office/30.jpg",
        category: "green-office",
        description: "A lanyard made from strong, sustainable hemp—perfect for your ID cards or badges."
    },
    {
        id: 31,
        name: "EarthBoard Cork Bulletin Board",
        slug: "earthboard-cork-bulletin-board",
        price: "₹699",
        image: "/green-office/31.jpg",
        category: "green-office",
        description: "Pin ideas and inspiration on this renewable cork board with a natural wooden frame."
    },
    {
        id: 32,
        name: "PlantNest Desktop Planter",
        slug: "plantnest-desktop-planter",
        price: "₹349",
        image: "/green-office/32.jpg",
        category: "green-office",
        description: "Bring greenery to your workspace with this compact, earthy planter pot."
    },
    {
        id: 33,
        name: "SootheLight Desk Diffuser",
        slug: "soothelight-desk-diffuser",
        price: "₹899",
        image: "/green-office/33.jpg",
        category: "green-office",
        description: "A USB-powered essential oil diffuser that elevates your mood and decor alike."
    },
    {
        id: 34,
        name: "MindSpace Journaling Kit",
        slug: "mindspace-journaling-kit",
        price: "₹479",
        image: "/green-office/34.jpg",
        category: "green-office",
        description: "Stay mindful with this eco journaling kit, crafted to help you slow down and reflect."
    },
    {
        id: 35,
        name: "ReThink Combo Box",
        slug: "rethink-combo-box",
        price: "₹799",
        image: "/green-office/35.jpg",
        category: "green-office",
        description: "A curated set of green office goodies to jumpstart your eco-working experience."
    },
    {
        id: 36,
        name: "BioErase Whiteboard Duster",
        slug: "bioerase-whiteboard-duster",
        price: "₹149",
        image: "/green-office/36.jpg",
        category: "green-office",
        description: "Erases like a pro—this biodegradable duster is gentle on boards and the Earth."
    },
    {
        id: 37,
        name: "EcoWipe Screen Cleaner",
        slug: "ecowipe-screen-cleaner",
        price: "₹199",
        image: "/green-office/37.jpg",
        category: "green-office",
        description: "Streak-free and safe—cleans your screens with natural ingredients, no harsh chemicals."
    },
    {
        id: 38,
        name: "FocusZen Hourglass Timer",
        slug: "focuszen-hourglass-timer",
        price: "₹289",
        image: "/green-office/38.jpg",
        category: "green-office",
        description: "Pomodoro-friendly and beautiful—this hourglass helps you stay productive, the mindful way."
    },
    {
        id: 39,
        name: "ChillMat Footrest Pad",
        slug: "chillmat-footrest-pad",
        price: "₹239",
        image: "/green-office/39.jpg",
        category: "green-office",
        description: "Relax your feet during long hours with this natural coir and cotton woven foot mat."
    },
    {
        id: 40,
        name: "ThoughtTree Wall Planner",
        slug: "thoughttree-wall-planner",
        price: "₹799",
        image: "/green-office/40.jpg",
        category: "green-office",
        description: "Eco-crafted wall planner to track goals, tasks, and your green progress in style."
    }
];

module.exports = products;