/* ==========================================================================
   Smart Product Picks — product data
   RULE: name, brand, model, category, description, keyFeatures,
   specifications, pros, and cons may only contain real, verifiable
   information about real products. price, rating, reviewCount, asin,
   image, and lastVerified are left null/empty until pulled from an
   authorized, current source (e.g. the Amazon Product Advertising API
   once the Associates account is approved). Never hand-fill these with
   guessed numbers.
   ========================================================================== */
const AMAZON_TAG = "YOUR_AMAZON_ASSOCIATE_TAG";

const PRODUCTS = [
  {
    id: "sony-wh1000xm5",
    name: "WH-1000XM5 Wireless Noise Cancelling Headphones",
    brand: "Sony",
    model: "WH-1000XM5",
    asin: "B09Z2S9FSX",
    category: "Audio",
    description: "Sony WH-1000XM5 over-ear wireless noise-cancelling headphones.",
    keyFeatures: [
      "Active noise cancellation",
      "Multipoint Bluetooth connection",
      "Speak-to-chat",
      "Touch controls"
    ],
    specifications: {
      "Driver size": "30mm",
      "Bluetooth": "5.2",
      "Battery life": "Up to 30 hours",
      "Charging": "USB-C",
      "Weight": "Approx. 250g"
    },
    pros: [
      "Strong noise cancellation",
      "Multipoint connection",
      "Comfortable for long listening"
    ],
    cons: [
      "No water-resistance rating",
      "Premium price"
    ],
    image: "",
    imageAlt: "Sony WH-1000XM5 wireless headphones",
    productUrl: "https://www.amazon.com/dp/B09Z2S9FSX",
    amazonUrl: "https://amzn.to/45B3zUI",
    price: null,
    currency: "USD",
    rating: 4.5,
    reviewCount: 623,
    lastVerified: ""
  },

  {
    id: "apple-airpods-pro-2",
    name: "AirPods Pro (2nd generation)",
    brand: "Apple",
    model: "AirPods Pro 2",
    asin: "B0BJQWYLYN",
    category: "Audio",
    description: "Apple AirPods Pro 2 wireless noise-cancelling earbuds.",
    keyFeatures: [
      "Apple H2 chip",
      "Active noise cancellation",
      "Adaptive Transparency",
      "Find My support"
    ],
    specifications: {
      "Chip": "Apple H2",
      "Water resistance": "IP54",
      "Battery life": "Up to 6 hours",
      "Charging": "USB-C / MagSafe / Qi"
    },
    pros: [
      "Excellent Apple ecosystem integration",
      "Compact design",
      "Effective transparency mode"
    ],
    cons: [
      "Best experience is with Apple devices",
      "In-ear fit varies by user"
    ],
    image: "",
    imageAlt: "Apple AirPods Pro 2",
    productUrl: "https://www.amazon.com/dp/B0BJQWYLYN",
    amazonUrl: "https://amzn.to/4x8jAh3",
    price: null,
    currency: "USD",
    rating: 4.7,
    reviewCount: 28853,
    lastVerified: ""
  },

  {
    id: "ugreen-pb507",
    name: "UGREEN PB507 10000mAh Power Bank",
    brand: "UGREEN",
    model: "PB507",
    asin: "B0DZ1TGX6T",
    category: "Mobile Accessories",
    description: "UGREEN PB507 portable 10,000mAh power bank.",
    keyFeatures: [
      "10,000mAh capacity",
      "USB-C charging",
      "Compact portable design"
    ],
    specifications: {
      "Capacity": "10,000mAh",
      "Model": "PB507",
      "Mfr Part Number": "75131",
      "Battery": "Lithium Polymer"
    },
    pros: [
      "Compact",
      "Large battery capacity",
      "USB-C support"
    ],
    cons: [
      "Not designed for high-power laptop charging"
    ],
    image: "",
    imageAlt: "UGREEN PB507 power bank",
    productUrl: "https://www.amazon.com/dp/B0DZ1TGX6T",
    amazonUrl: "https://amzn.to/4wViVyF",
    price: null,
    currency: "USD",
    rating: 4.4,
    reviewCount: 734,
    lastVerified: ""
  },

  {
    id: "tndaji-jlm-j6",
    name: "TNDAJI 15W Magnetic Wireless Charger 2-Pack",
    brand: "TNDAJI",
    model: "JLM-J6",
    asin: "B0DLP157QH",
    category: "Mobile Accessories",
    description: "TNDAJI magnetic wireless charger set with two charging pads, USB-A adapters and Type-C charging cables.",
    keyFeatures: [
      "15W wireless charging",
      "Two magnetic charging pads",
      "USB-A adapters included",
      "Type-C charging cables"
    ],
    specifications: {
      "Output": "15W",
      "Model": "JLM-J6",
      "Quantity": "2",
      "Warranty": "18 months"
    },
    pros: [
      "Two charging pads",
      "Adapters included",
      "Useful multi-device setup"
    ],
    cons: [
      "Charging speed depends on the device and adapter"
    ],
    image: "",
    imageAlt: "TNDAJI JLM-J6 magnetic wireless charger",
    productUrl: "https://www.amazon.com/dp/B0DLP157QH",
    amazonUrl: "https://amzn.to/4qmv3Xy",
    price: null,
    currency: "USD",
    rating: 4.3,
    reviewCount: 10353,
    lastVerified: ""
  },

  {
    id: "logitech-mx-master-3s",
    name: "MX Master 3S Wireless Mouse",
    brand: "Logitech",
    model: "MX Master 3S",
    asin: "B0BS9VVQPD",
    category: "Computer Accessories",
    description: "Logitech MX Master 3S wireless productivity mouse.",
    keyFeatures: [
      "8,000 DPI sensor",
      "MagSpeed scrolling",
      "Multi-device support",
      "Quiet clicks",
      "USB-C rechargeable"
    ],
    specifications: {
      "Sensor": "8,000 DPI",
      "Connectivity": "Bluetooth / Logi Bolt",
      "Battery": "Rechargeable",
      "Buttons": "7 programmable buttons"
    },
    pros: [
      "Excellent scrolling",
      "Multi-device support",
      "Comfortable ergonomic design"
    ],
    cons: [
      "Right-hand design",
      "Premium price"
    ],
    image: "",
    imageAlt: "Logitech MX Master 3S wireless mouse",
    productUrl: "https://www.amazon.com/dp/B0BS9VVQPD",
    amazonUrl: "https://amzn.to/45Co6In",
    price: null,
    currency: "USD",
    rating: 4.5,
    reviewCount: 958,
    lastVerified: ""
  },

  {
    id: "keychron-k2-ultra",
    name: "Keychron K2 Ultra",
    brand: "Keychron",
    model: "K2U-J4",
    asin: "B0GQLPYDLQ",
    category: "Computer Keyboards",
    description: "Keychron K2 Ultra mechanical keyboard for everyday use, programming and gaming.",
    keyFeatures: [
      "Mechanical keyboard",
      "Compact layout",
      "Mac and Windows support",
      "Wireless and wired connectivity"
    ],
    specifications: {
      "Model": "K2U-J4",
      "Weight": "2.4 pounds",
      "Quantity": "1",
      "Warranty": "1 year"
    },
    pros: [
      "Compact design",
      "Mechanical switches",
      "Suitable for work and gaming"
    ],
    cons: [
      "Features can vary by exact configuration"
    ],
    image: "",
    imageAlt: "Keychron K2 Ultra mechanical keyboard",
    productUrl: "https://www.amazon.com/dp/B0GQLPYDLQ",
    amazonUrl: "https://amzn.to/4wx0WOz",
    price: null,
    currency: "USD",
    rating: 4.5,
    reviewCount: 23,
    lastVerified: ""
  },

  {
    id: "echo-dot-5-bundle",
    name: "Echo Dot Bundle (5th Gen) with Battery Base",
    brand: "Amazon",
    model: "Echo Dot (5th Gen)",
    asin: "B0BF2HCMJB",
    category: "Smart Home",
    description: "Amazon Echo Dot 5th generation bundle with charcoal battery base.",
    keyFeatures: [
      "Alexa voice assistant",
      "Temperature sensor",
      "Battery base",
      "Smart-home controls"
    ],
    specifications: {
      "Generation": "5th Gen",
      "Color": "Charcoal",
      "Connectivity": "Wi-Fi / Bluetooth"
    },
    pros: [
      "Compact",
      "Alexa integration",
      "Portable bundle design"
    ],
    cons: [
      "Most voice features require internet connectivity"
    ],
    image: "",
    imageAlt: "Amazon Echo Dot 5th Gen bundle",
    productUrl: "https://www.amazon.com/dp/B0BF2HCMJB",
    amazonUrl: "https://amzn.to/45EVsGD",
    price: null,
    currency: "USD",
    rating: 4.4,
    reviewCount: 282,
    lastVerified: ""
  },

  {
    id: "philips-hue-essential-a19-4-pack",
    name: "Philips Hue Essential 60W WCA A19 4-Pack",
    brand: "Philips Hue",
    model: "Hue Essential- 60W WCA A19 4P",
    asin: "B0FMGP1P6W",
    category: "Smart Home",
    description: "Four-pack of Philips Hue Essential A19 smart LED bulbs.",
    keyFeatures: [
      "Four smart bulbs",
      "White and color lighting",
      "Smart control",
      "Hue ecosystem support"
    ],
    specifications: {
      "Quantity": "4",
      "Model": "592592",
      "Type": "A19 LED bulb",
      "Manufacturer": "Signify North America Inc."
    },
    pros: [
      "Four bulbs in one pack",
      "Smart lighting features",
      "White and color options"
    ],
    cons: [
      "Some advanced Hue features require additional equipment"
    ],
    image: "",
    imageAlt: "Philips Hue Essential A19 smart bulbs",
    productUrl: "https://www.amazon.com/dp/B0FMGP1P6W",
    amazonUrl: "https://amzn.to/4qrIK7B",
    price: null,
    currency: "USD",
    rating: 4.6,
    reviewCount: 890,
    lastVerified: ""
  },

  {
    id: "razer-deathadder-v4-pro",
    name: "Razer DeathAdder V4 Pro",
    brand: "Razer",
    model: "RZ01-05330100-R3U1",
    asin: "B0F3QCXL82",
    category: "Gaming Mice",
    description: "Razer DeathAdder V4 Pro gaming mouse.",
    keyFeatures: [
      "Gaming-focused ergonomic design",
      "Razer HyperSpeed wireless Gen-2 dongle",
      "Mouse grip tape",
      "USB Type-A to USB Type-C cable"
    ],
    specifications: {
      "Model": "RZ01-05330100-R3U1",
      "UPC": "840272920718",
      "Warranty": "2 years"
    },
    pros: [
      "Gaming-focused design",
      "Wireless dongle included",
      "Grip tape included"
    ],
    cons: [
      "Designed primarily for gaming"
    ],
    image: "",
    imageAlt: "Razer DeathAdder V4 Pro gaming mouse",
    productUrl: "https://www.amazon.com/dp/B0F3QCXL82",
    amazonUrl: "https://amzn.to/3UryyQB",
    price: null,
    currency: "USD",
    rating: 4.4,
    reviewCount: 486,
    lastVerified: ""
  },

  {
    id: "elgato-stream-deck-mk2",
    name: "Stream Deck MK.2",
    brand: "Elgato",
    model: "10GBA9901",
    asin: "B09738CV2G",
    category: "PC Accessories",
    description: "Elgato Stream Deck MK.2 customizable control deck for streaming and content creation.",
    keyFeatures: [
      "15 customizable LCD keys",
      "USB-C cable",
      "Desktop stand",
      "Stream Deck software"
    ],
    specifications: {
      "Keys": "15",
      "Model": "10GBA9901",
      "Connection": "USB-C",
      "Warranty": "2 years"
    },
    pros: [
      "Highly customizable",
      "Useful for streaming",
      "Large plugin ecosystem"
    ],
    cons: [
      "Requires a wired USB connection"
    ],
    image: "",
    imageAlt: "Elgato Stream Deck MK.2",
    productUrl: "https://www.amazon.com/dp/B09738CV2G",
    amazonUrl: "https://amzn.to/468wvDz",
    price: null,
    currency: "USD",
    rating: 4.8,
    reviewCount: 10265,
    lastVerified: ""
  },

  {
    id: "hiearcool-ucn3286",
    name: "Hiearcool USB-C Hub",
    brand: "Hiearcool",
    model: "UCN3286",
    asin: "B07WPTG7NX",
    category: "USB Hubs",
    description: "Hiearcool multiport USB-C hub for compatible computers and devices.",
    keyFeatures: [
      "USB-C connectivity",
      "Multiport expansion",
      "HDMI support",
      "USB ports"
    ],
    specifications: {
      "Model": "UCN3286",
      "Mfr Part Number": "UCN3286",
      "Warranty": "2 years",
      "Quantity": "1"
    },
    pros: [
      "Adds multiple ports",
      "Compact",
      "Useful for laptops"
    ],
    cons: [
      "Exact port capabilities depend on the device configuration"
    ],
    image: "",
    imageAlt: "Hiearcool USB-C hub",
    productUrl: "https://www.amazon.com/dp/B07WPTG7NX",
    amazonUrl: "https://amzn.to/3UmhOdt",
    price: null,
    currency: "USD",
    rating: 4.6,
    reviewCount: 51886,
    lastVerified: ""
  },

  {
    id: "life360-tile-mate-2-pack",
    name: "Life360 Tile Mate Bluetooth Tracker 2-Pack",
    brand: "Life360",
    model: "T1801A",
    asin: "B0D63573CF",
    category: "Item Finders",
    description: "Two-pack of Tile Mate Bluetooth trackers for keys, bags and other everyday items.",
    keyFeatures: [
      "Two Tile Mate trackers",
      "Bluetooth tracking",
      "Tile app support",
      "Black and white trackers"
    ],
    specifications: {
      "Quantity": "2",
      "Model": "T1801A",
      "Part Number": "RE-60122",
      "Warranty": "1 year"
    },
    pros: [
      "Two trackers included",
      "Useful for keys and bags",
      "Established tracking ecosystem"
    ],
    cons: [
      "Bluetooth range depends on environment"
    ],
    image: "",
    imageAlt: "Life360 Tile Mate Bluetooth trackers",
    productUrl: "https://www.amazon.com/dp/B0D63573CF",
    amazonUrl: "https://amzn.to/4gGcU3G",
    price: null,
    currency: "USD",
    rating: 4.2,
    reviewCount: 10601,
    lastVerified: ""
  }
];

const CATEGORIES = [
  {
    id: "audio",
    name: "Audio",
    match: ["Audio"]
  },
  {
    id: "mobile-accessories",
    name: "Mobile Accessories",
    match: ["Mobile Accessories"]
  },
  {
    id: "computer-accessories",
    name: "Computer Accessories",
    match: ["Computer Accessories"]
  },
  {
    id: "computer-keyboards",
    name: "Computer Keyboards",
    match: ["Computer Keyboards"]
  },
  {
    id: "smart-home",
    name: "Smart Home",
    match: ["Smart Home"]
  },
  {
    id: "gaming-mice",
    name: "Gaming Mice",
    match: ["Gaming Mice"]
  },
  {
    id: "pc-accessories",
    name: "PC Accessories",
    match: ["PC Accessories"]
  },
  {
    id: "usb-hubs",
    name: "USB Hubs",
    match: ["USB Hubs"]
  },
  {
    id: "item-finders",
    name: "Item Finders",
    match: ["Item Finders"]
  }

