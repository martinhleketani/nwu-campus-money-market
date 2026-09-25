/*
========================================================
NWU CAMPUS MONEY MARKET
PRODUCT CATEGORY DATABASE
========================================================
*/


const PRODUCT_CATEGORIES = {

    phones: {

        name: "Phones",

        icon: "📱",

        searchPlaceholder:
            "Search phones, brand or model...",

        brands: {

            Apple: [
                "iPhone 11",
                "iPhone 11 Pro",
                "iPhone 11 Pro Max",
                "iPhone 12",
                "iPhone 12 Mini",
                "iPhone 12 Pro",
                "iPhone 12 Pro Max",
                "iPhone 13",
                "iPhone 13 Mini",
                "iPhone 13 Pro",
                "iPhone 13 Pro Max",
                "iPhone 14",
                "iPhone 14 Plus",
                "iPhone 14 Pro",
                "iPhone 14 Pro Max",
                "iPhone 15",
                "iPhone 15 Plus",
                "iPhone 15 Pro",
                "iPhone 15 Pro Max",
                "iPhone 16",
                "iPhone 16 Plus",
                "iPhone 16 Pro",
                "iPhone 16 Pro Max",
                "iPhone 17",
                "Other"
            ],

            Samsung: [
                "Galaxy A Series",
                "Galaxy S Series",
                "Galaxy Z Fold",
                "Galaxy Z Flip",
                "Galaxy Note",
                "Other"
            ],

            Huawei: [
                "P Series",
                "Mate Series",
                "Nova Series",
                "Y Series",
                "Other"
            ],

            Xiaomi: [
                "Xiaomi Series",
                "Redmi Series",
                "POCO Series",
                "Other"
            ],

            OPPO: [
                "A Series",
                "Reno Series",
                "Find Series",
                "Other"
            ],

            Honor: [
                "Honor Number Series",
                "Honor X Series",
                "Honor Magic Series",
                "Other"
            ],

            Nokia: [
                "Nokia Smartphone",
                "Nokia Feature Phone",
                "Other"
            ],

            Motorola: [
                "Moto G",
                "Moto Edge",
                "Moto Razr",
                "Other"
            ],

            Tecno: [
                "Spark Series",
                "Camon Series",
                "Phantom Series",
                "Other"
            ],

            Infinix: [
                "Hot Series",
                "Note Series",
                "Zero Series",
                "Other"
            ],

            Other: [
                "Other"
            ]
        }
    },


    laptops: {

        name: "Laptops",

        icon: "💻",

        searchPlaceholder:
            "Search laptops, brand or type...",

        brands: {

            HP: [
                "Notebook",
                "Pavilion",
                "Envy",
                "ProBook",
                "EliteBook",
                "Victus",
                "OMEN",
                "Other"
            ],

            Dell: [
                "Inspiron",
                "Latitude",
                "XPS",
                "Vostro",
                "Precision",
                "Alienware",
                "Other"
            ],

            Lenovo: [
                "IdeaPad",
                "ThinkPad",
                "Yoga",
                "Legion",
                "LOQ",
                "Other"
            ],

            Acer: [
                "Aspire",
                "Swift",
                "TravelMate",
                "Nitro",
                "Predator",
                "Other"
            ],

            ASUS: [
                "VivoBook",
                "Zenbook",
                "TUF",
                "ROG",
                "Other"
            ],

            Apple: [
                "MacBook Air",
                "MacBook Pro",
                "Other"
            ],

            MSI: [
                "Modern",
                "Prestige",
                "Katana",
                "Stealth",
                "Other"
            ],

            Huawei: [
                "MateBook",
                "Other"
            ],

            Other: [
                "Other"
            ]
        }
    },


    electronics: {

        name: "Electronics",

        icon: "🎧",

        searchPlaceholder:
            "Search electronics...",

        types: [
            "Headphones",
            "Earphones",
            "Bluetooth Speaker",
            "Smart Watch",
            "Tablet",
            "Monitor",
            "Television",
            "Keyboard",
            "Mouse",
            "Printer",
            "Calculator",
            "Camera",
            "Power Bank",
            "Other"
        ]
    },


    accessories: {

        name: "Accessories",

        icon: "🔌",

        searchPlaceholder:
            "Search accessories...",

        types: [
            "Phone Charger",
            "Laptop Charger",
            "USB Cable",
            "USB-C Cable",
            "Lightning Cable",
            "Phone Cover",
            "Screen Protector",
            "Laptop Bag",
            "Laptop Stand",
            "USB Flash Drive",
            "Memory Card",
            "HDMI Cable",
            "Adapter",
            "Power Bank",
            "Extension Cable",
            "Other"
        ]
    },


    clothing: {

        name: "Clothing",

        icon: "👕",

        searchPlaceholder:
            "Search clothing...",

        types: [
            "T-Shirt",
            "Shirt",
            "Hoodie",
            "Sweater",
            "Jacket",
            "Jeans",
            "Pants",
            "Shorts",
            "Dress",
            "Skirt",
            "Tracksuit",
            "Shoes",
            "Sneakers",
            "Formal Shoes",
            "Cap",
            "Other"
        ],

        sizes: [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "XXL",
            "XXXL",
            "UK 3",
            "UK 4",
            "UK 5",
            "UK 6",
            "UK 7",
            "UK 8",
            "UK 9",
            "UK 10",
            "UK 11",
            "UK 12",
            "Other"
        ]
    },


    furniture: {

        name: "Furniture",

        icon: "🪑",

        searchPlaceholder:
            "Search furniture...",

        types: [
            "Study Desk",
            "Office Chair",
            "Desk Chair",
            "Table",
            "Bed",
            "Mattress",
            "Couch",
            "Bookshelf",
            "Drawer",
            "Wardrobe",
            "Lamp",
            "Other"
        ]
    },


    gaming: {

        name: "Gaming",

        icon: "🎮",

        searchPlaceholder:
            "Search gaming products...",

        platforms: {

            PlayStation: [
                "Console",
                "Controller",
                "Game",
                "Headset",
                "Charging Dock",
                "Other"
            ],

            Xbox: [
                "Console",
                "Controller",
                "Game",
                "Headset",
                "Other"
            ],

            Nintendo: [
                "Console",
                "Controller",
                "Game",
                "Accessory",
                "Other"
            ],

            PC: [
                "Gaming PC",
                "Graphics Card",
                "Controller",
                "Keyboard",
                "Mouse",
                "Headset",
                "Game",
                "Other"
            ],

            Other: [
                "Other"
            ]
        }
    },


    other: {

        name: "Other",

        icon: "📦",

        searchPlaceholder:
            "Search products..."
    }

};


/*
========================================================
CATEGORY NAME
========================================================
*/

function getProductCategoryName(category) {

    if (
        PRODUCT_CATEGORIES[category]
    ) {

        return (
            PRODUCT_CATEGORIES[
                category
            ].name
        );
    }

    return "Other";
}


/*
========================================================
CATEGORY ICON
========================================================
*/

function getProductCategoryIcon(category) {

    if (
        category === "books"
    ) {

        return "📚";
    }

    if (
        PRODUCT_CATEGORIES[category]
    ) {

        return (
            PRODUCT_CATEGORIES[
                category
            ].icon
        );
    }

    return "📦";
}


/*
========================================================
GET PHONE/LAPTOP BRAND LIST
========================================================
*/

function getCategoryBrands(category) {

    const data =
        PRODUCT_CATEGORIES[
            category
        ];

    if (
        !data ||
        !data.brands
    ) {

        return [];
    }

    return Object.keys(
        data.brands
    );
}


/*
========================================================
GET MODELS
========================================================
*/

function getCategoryModels(
    category,
    brand
) {

    const data =
        PRODUCT_CATEGORIES[
            category
        ];

    if (
        !data ||
        !data.brands ||
        !data.brands[brand]
    ) {

        return [];
    }

    return data.brands[brand];
}


/*
========================================================
GET PRODUCT TYPES
========================================================
*/

function getCategoryTypes(category) {

    const data =
        PRODUCT_CATEGORIES[
            category
        ];

    if (
        !data ||
        !data.types
    ) {

        return [];
    }

    return data.types;
}


/*
========================================================
GET CLOTHING SIZES
========================================================
*/

function getClothingSizes() {

    return (
        PRODUCT_CATEGORIES
            .clothing
            .sizes
    );
}


/*
========================================================
GET GAMING PLATFORMS
========================================================
*/

function getGamingPlatforms() {

    return Object.keys(

        PRODUCT_CATEGORIES
            .gaming
            .platforms

    );
}


/*
========================================================
GET GAMING TYPES
========================================================
*/

function getGamingTypes(
    platform
) {

    const platforms =

        PRODUCT_CATEGORIES
            .gaming
            .platforms;

    return (
        platforms[
            platform
        ] || []
    );
}
