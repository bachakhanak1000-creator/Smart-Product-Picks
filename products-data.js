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

const AMAZON_TAG = "YOUR_AMAZON_ASSOCIATE_TAG"; // replace once Associates account exists

const PRODUCTS = [
  {
    id: "sony-wh1000xm5",
    name: "WH-1000XM5 Wireless Noise Cancelling Headphones",
    brand: "Sony",
    model: "WH-1000XM5",
    asin: "B0DDV3FRHR",
    category: "Audio",
    description: "Over-ear wireless headphones built around Sony's dual-processor noise cancellation system, with multipoint Bluetooth connection and a lighter redesign compared to the previous XM4 generation.",
    keyFeatures: [
      "Active noise cancellation using two processors (QN1 + V1)",
      "Multipoint connection to two Bluetooth devices at once",
      "Speak-to-chat auto-pause",
      "Touch controls on the right ear cup"
    ],
    specifications: {
      "Driver size": "30mm",
      "Bluetooth version": "5.2",
      "Battery life (ANC on)": "Up to 30 hours",
      Charging: "USB-C, quick charge (3 min ≈ 3 hours playback)",
      Weight: "≈250g"
    },
    pros: [
      "Widely regarded as class-leading noise cancellation in its category",
      "Multipoint pairing works reliably between laptop and phone",
      "Comfortable padding for long listening sessions"
    ],
    cons: [
      "No IP water-resistance rating",
      "Case is not as compact as some competitors",
      "Touch controls can register accidental taps"
    ],
    image: "",
    imageAlt: "Sony WH-1000XM5 wireless headphones",
    productUrl: "https://www.amazon.com/dp/B0DDV3FRHR",
    amazonUrl: "https://amzn.to/4cvKVkP",
    price: null,
    currency: "USD",
    rating: null,
    reviewCount: null,
    lastVerified: ""
  },
  {
    id: "apple-airpods-pro-2",
    name: "AirPods Pro (2nd generation)",
    brand: "Apple",
    model: "AirPods Pro 2",
    asin: "B0CHWRXH8B",
    category: "Audio",
    description: "Apple's second-generation in-ear noise cancelling earbuds, built around the H2 chip, with a USB-C charging case on current shipping units and Adaptive Audio support on compatible devices.",
    keyFeatures: [
      "H2 chip for noise cancellation and audio processing",
      "Adaptive Transparency mode",
      "IP54 dust/sweat/water resistance (earbuds and case)",
      "Find My integration with the charging case"
    ],
    specifications: {
      Chip: "Apple H2",
      "Water resistance": "IP54 (earbuds + case)",
      "Battery life (ANC on)": "Up to 6 hours per charge, ~30 hours with case",
      Charging: "USB-C / MagSafe / Qi",
      "Ear tip sizes": "4 included (XS, S, M, L)"
    },
    pros: [
      "Deep integration with iOS/iPadOS/macOS (auto-switching, Find My)",
      "Compact, in-ear form factor",
      "Effective transparency mode for hearing surroundings"
    ],
    cons: [
      "Fewer customization options on Android devices",
      "In-ear fit isn't ideal for every ear shape",
      "Case charging port depends on model/region purchased"
    ],
    image: "",
    imageAlt: "Apple AirPods Pro 2nd generation with charging case",
    productUrl: "https://www.amazon.com/dp/B0CHWRXH8B",
    amazonUrl: "https://amzn.to/3TTBW6N",
    price: null,
    currency: "USD",
    rating: 4.7,
reviewCount: 28853,
    lastVerified: ""
  },
  {
    id: "anker-313-powerbank",
    name: "PowerCore Slim 10000 Power Bank",
    brand: "Anker",
    model: "313 (A1246)",
    asin: "",
    category: "Mobile Accessories",
    description: "A slim, pocket-sized 10,000mAh USB-C power bank from Anker's PowerCore line, designed for topping up a phone one to two times while traveling light.",
    keyFeatures: [
      "10,000mAh capacity",
      "USB-C input and output",
      "Slim form factor (under 15mm thick on most units)",
      "Trickle-charging mode for low-power accessories"
    ],
    specifications: {
      Capacity: "10,000mAh",
      Ports: "USB-C in/out, USB-A out (varies by revision)",
      Output: "Up to 12W typical (model dependent)",
      Weight: "≈180g"
    },
    pros: [
      "Genuinely pocketable compared to bulkier 10,000mAh banks",
      "Reliable brand with a multi-year warranty history",
      "Simple LED charge indicator"
    ],
    cons: [
      "Output wattage is modest — not built for fast-charging laptops",
      "No wireless charging pad on this model",
      "Charging the bank itself can take several hours"
    ],
    image: "",
    imageAlt: "Anker PowerCore Slim 10000 power bank",
    productUrl: "",
    amazonUrl: "#",
    price: null,
    currency: "USD",
    rating: null,
    reviewCount: null,
    lastVerified: ""
  },
  {
    id: "apple-magsafe-charger",
    name: "MagSafe Charger",
    brand: "Apple",
    model: "MagSafe Charger (1m)",
    asin: "",
    category: "Mobile Accessories",
    description: "Apple's magnetic wireless charging puck that snaps to the back of MagSafe-compatible iPhones for aligned, cable-based wireless charging.",
    keyFeatures: [
      "Magnetic alignment ring for one-handed attachment",
      "Compatible with Qi charging on non-MagSafe phones at lower wattage",
      "Braided charging cable"
    ],
    specifications: {
      "Max output": "Up to 15W (MagSafe-compatible iPhone + compatible power adapter)",
      "Cable length": "1 meter",
      Connector: "USB-C (power adapter sold separately on most listings)"
    },
    pros: [
      "Reliable magnetic alignment — no more missed charging pads",
      "Works as a stand-friendly charger with some third-party accessories",
      "Cable is more durable than typical wireless charging pads"
    ],
    cons: [
      "Requires a separate USB-C power adapter for full-speed charging",
      "Charging speed drops significantly on non-MagSafe phones",
      "Higher price than generic Qi pads"
    ],
    image: "",
    imageAlt: "Apple MagSafe Charger",
    productUrl: "",
    amazonUrl: "#",
    price: null,
    currency: "USD",
    rating: null,
    reviewCount: null,
    lastVerified: ""
  },
  {
    id: "logitech-mx-master-3s",
    name: "MX Master 3S Wireless Mouse",
    brand: "Logitech",
    model: "MX Master 3S",
    asin: "",
    category: "Computers",
    description: "A productivity-focused wireless mouse with an 8K DPI optical sensor, quiet clicks, and Logitech's MagSpeed electromagnetic scroll wheel, aimed at professionals who switch between multiple computers.",
    keyFeatures: [
      "MagSpeed electromagnetic scroll wheel (ratchet or free-spin)",
      "Multi-device pairing via Bluetooth or Logi Bolt receiver",
      "App-specific customizable buttons via Logi Options+",
      "Quiet click switches compared to the previous MX Master 3"
    ],
    specifications: {
      Sensor: "8,000 DPI optical",
      Connectivity: "Bluetooth Low Energy or USB Logi Bolt receiver",
      Battery: "Rechargeable via USB-C, quoted up to 70 days on a full charge",
      Buttons: "7 programmable buttons"
    },
    pros: [
      "Scroll wheel is genuinely faster for long documents/spreadsheets",
      "Can pair with up to three devices and switch between them",
      "Comfortable for extended use for most hand sizes"
    ],
    cons: [
      "Premium price relative to standard wireless mice",
      "Shaped for right-hand use only",
      "Software (Logi Options+) is required to unlock full customization"
    ],
    image: "",
    imageAlt: "Logitech MX Master 3S wireless mouse",
    productUrl: "",
    amazonUrl: "#",
    price: null,
    currency: "USD",
    rating: null,
    reviewCount: null,
    lastVerified: ""
  },
  {
    id: "keychron-k2",
    name: "K2 Wireless Mechanical Keyboard",
    brand: "Keychron",
    model: "K2 (Version 2)",
    asin: "",
    category: "Computers",
    description: "A compact 75%-layout mechanical keyboard with Bluetooth and wired connectivity, hot-swappable switch options on newer revisions, and both Mac and Windows key layouts included.",
    keyFeatures: [
      "75% layout — retains arrow keys and function row in a compact frame",
      "Bluetooth 5.1 with multi-device pairing, or wired USB-C mode",
      "RGB or white backlighting depending on configuration",
      "Mac/Windows switchable key layout"
    ],
    specifications: {
      Layout: "75% (84 keys)",
      Connectivity: "Bluetooth 5.1 or USB-C wired",
      "Switch types": "Gateron mechanical (varies by SKU); hot-swap on newer versions",
      Battery: "4000mAh, rated by Keychron in the multi-week range with backlight off"
    },
    pros: [
      "Good typing feel for the price point in the mechanical keyboard category",
      "Works well across Mac and Windows without extra software",
      "Compact footprint compared to full-size mechanical boards"
    ],
    cons: [
      "Stock stabilizers are less refined than higher-end custom boards",
      "RGB versions use more battery in wireless mode",
      "No dedicated volume knob on the base K2"
    ],
    image: "",
    imageAlt: "Keychron K2 wireless mechanical keyboard",
    productUrl: "",
    amazonUrl: "#",
    price: null,
    currency: "USD",
    rating: null,
    reviewCount: null,
    lastVerified: ""
  },
  {
    id: "echo-dot-5",
    name: "Echo Dot (5th Gen)",
    brand: "Amazon",
    model: "Echo Dot 5th Generation",
    asin: "",
    category: "Smart Home",
    description: "Amazon's compact smart speaker with Alexa built in, used for voice control of smart-home devices, music playback, and basic routines.",
    keyFeatures: [
      "Built-in Alexa voice assistant",
      "Temperature sensor for routines like auto-fan control",
      "Works as a hub for compatible smart-home skills",
      "Physical mic-off switch"
    ],
    specifications: {
      Speaker: "1.73-inch driver",
      Connectivity: "Wi-Fi, Bluetooth",
      Power: "Wired power adapter (included)",
      Sensors: "Temperature sensor"
    },
    pros: [
      "Low entry price for a full Alexa smart speaker",
      "Compact size fits on most shelves or nightstands",
      "Frequent software feature updates via Amazon"
    ],
    cons: [
      "Sound quality is basic compared to larger Echo models",
      "Deepest smart-home integration favors Alexa-compatible ecosystems",
      "Relies on cloud connectivity for most voice features"
    ],
    image: "",
    imageAlt: "Amazon Echo Dot 5th generation smart speaker",
    productUrl: "",
    amazonUrl: "#",
    price: null,
    currency: "USD",
    rating: null,
    reviewCount: null,
    lastVerified: ""
  },
  {
    id: "philips-hue-white-color",
    name: "Hue White and Color Ambiance A19 Smart Bulb",
    brand: "Philips Hue",
    model: "White and Color Ambiance A19",
    asin: "",
    category: "Smart Home",
    description: "A color-changing smart LED bulb that works through the Philips Hue Bridge (or Bluetooth directly), supporting a wide color range and integration with major voice assistants.",
    keyFeatures: [
      "Wide color range plus tunable white light",
      "Works via Hue Bridge (Zigbee) or direct Bluetooth",
      "Compatible with Alexa, Google Assistant, and Apple Home",
      "Supports scheduling and scene automation in the Hue app"
    ],
    specifications: {
      Socket: "E26 (standard US bulb base)",
      Connectivity: "Zigbee (via Bridge) or Bluetooth direct",
      Lumens: "Approx. 800 lumens (bulb dependent)",
      Lifespan: "Rated around 25,000 hours by the manufacturer"
    },
    pros: [
      "One of the more mature smart-lighting ecosystems for reliability",
      "Wide voice-assistant compatibility",
      "Bridge setup unlocks more advanced automations than Bluetooth-only bulbs"
    ],
    cons: [
      "Full feature set requires buying a separate Hue Bridge",
      "More expensive per bulb than basic smart bulb alternatives",
      "Bluetooth-only mode has a shorter range and fewer automation options"
    ],
    image: "",
    imageAlt: "Philips Hue White and Color Ambiance smart bulb",
    productUrl: "",
    amazonUrl: "#",
    price: null,
    currency: "USD",
    rating: null,
    reviewCount: null,
    lastVerified: ""
  },
  {
    id: "razer-deathadder-v3",
    name: "DeathAdder V3 Wired Gaming Mouse",
    brand: "Razer",
    model: "DeathAdder V3",
    asin: "",
    category: "Gaming",
    description: "A lightweight update to Razer's long-running DeathAdder ergonomic gaming mouse line, built around Razer's Focus Pro sensor and a redesigned lighter shell.",
    keyFeatures: [
      "Focus Pro 30K optical sensor",
      "Redesigned shell — lighter than earlier DeathAdder generations",
      "Braided cable wired design",
      "Third-generation mechanical switches rated for tens of millions of clicks"
    ],
    specifications: {
      Sensor: "Focus Pro 30K DPI",
      Weight: "Approx. 59g",
      Connection: "Wired (USB); a separate wireless V3 Pro model exists",
      Switches: "Razer Optical Gen-3 (model dependent)"
    },
    pros: [
      "Ergonomic shape favored by many right-handed FPS players",
      "Significant weight reduction versus older DeathAdder models",
      "Consistent sensor tracking at high DPI"
    ],
    cons: [
      "Right-hand-only ergonomic shape",
      "Wired-only on the base V3 (wireless requires the Pro variant)",
      "Razer Synapse software required for full customization"
    ],
    image: "",
    imageAlt: "Razer DeathAdder V3 gaming mouse",
    productUrl: "",
    amazonUrl: "#",
    price: null,
    currency: "USD",
    rating: null,
    reviewCount: null,
    lastVerified: ""
  },
  {
    id: "elgato-stream-deck-mk2",
    name: "Stream Deck MK.2",
    brand: "Elgato",
    model: "Stream Deck MK.2",
    asin: "",
    category: "Creator Gear",
    description: "A 15-key LCD macro pad used by streamers, podcasters, and editors to trigger scenes, shortcuts, and app actions through Elgato's Stream Deck software.",
    keyFeatures: [
      "15 customizable LCD keys",
      "Adjustable stand, detachable USB-C cable",
      "Plugin ecosystem for OBS, Twitch, Discord, and other creator tools",
      "Multi-action and folder support for nested shortcuts"
    ],
    specifications: {
      Keys: "15 LCD keys",
      Connection: "USB-C (wired)",
      Software: "Elgato Stream Deck app (Windows/Mac)",
      Mounting: "Built-in adjustable stand"
    },
    pros: [
      "Large third-party plugin library covers most streaming/editing tools",
      "Physical, tactile control is faster than clicking through menus mid-stream",
      "Folder/multi-action support scales well for complex setups"
    ],
    cons: [
      "Wired-only — no wireless variant of the MK.2 itself",
      "Learning curve to configure advanced multi-actions",
      "Desk space required for the stand"
    ],
    image: "",
    imageAlt: "Elgato Stream Deck MK.2 macro keypad",
    productUrl: "",
    amazonUrl: "#",
    price: null,
    currency: "USD",
    rating: null,
    reviewCount: null,
    lastVerified: ""
  },
  {
    id: "anker-7in1-usbc-hub",
    name: "7-in-1 USB-C Hub",
    brand: "Anker",
    model: "PowerExpand 7-in-1 (A83xx series)",
    asin: "",
    category: "Home & Office",
    description: "A USB-C dock that adds HDMI, additional USB-A/USB-C ports, an SD/microSD card reader, and pass-through charging to a single laptop port.",
    keyFeatures: [
      "HDMI output, commonly up to 4K on supported laptops",
      "USB-C power delivery pass-through charging",
      "SD and microSD card slots",
      "Multiple USB-A data ports"
    ],
    specifications: {
      Ports: "HDMI, USB-C PD, 2–3x USB-A, SD, microSD (varies by exact SKU)",
      "Video output": "Up to 4K depending on host device support",
      Connector: "USB-C"
    },
    pros: [
      "Consolidates several dongles into one hub",
      "Pass-through charging avoids needing a separate charging cable",
      "Reasonably compact for travel"
    ],
    cons: [
      "Video output resolution/refresh rate depends heavily on the host laptop",
      "Can run warm under sustained high-bandwidth use",
      "Not all ports run at full speed simultaneously on every model"
    ],
    image: "",
    imageAlt: "Anker 7-in-1 USB-C hub",
    productUrl: "",
    amazonUrl: "#",
    price: null,
    currency: "USD",
    rating: null,
    reviewCount: null,
    lastVerified: ""
  },
  {
    id: "tile-mate",
    name: "Tile Mate Bluetooth Tracker",
    brand: "Tile",
    model: "Mate (2022)",
    asin: "",
    category: "Everyday Gadgets",
    description: "A small Bluetooth tracker that attaches to keys, bags, or other everyday items and works with the Tile app's find/ring and community-finding network.",
    keyFeatures: [
      "Ring-to-find via the Tile app",
      "Community Find network for items outside direct Bluetooth range",
      "Replaceable battery on the Mate model",
      "Integration with Amazon Alexa for voice-based finding"
    ],
    specifications: {
      Connectivity: "Bluetooth",
      Range: "Roughly 250 ft direct Bluetooth range (manufacturer figure, environment-dependent)",
      Battery: "Replaceable, roughly 3-year manufacturer estimate",
      "Water resistance": "Water-resistant (not fully waterproof)"
    },
    pros: [
      "Simple, well-established app experience",
      "Replaceable battery avoids e-waste of sealed trackers",
      "Community Find network can help locate items beyond Bluetooth range"
    ],
    cons: [
      "No built-in precision-finding (UWB) like some competing trackers",
      "Community Find network density varies by region",
      "Requires the Tile app running/updated to work reliably"
    ],
    image: "",
    imageAlt: "Tile Mate Bluetooth tracker",
    productUrl: "",
    amazonUrl: "#",
    price: null,
    currency: "USD",
    rating: null,
    reviewCount: null,
    lastVerified: ""
  }
];

const CATEGORIES = [
  {
    id: "tech",
    name: "Tech",
    match: [
      "Audio",
      "Computers",
      "Mobile Accessories"
    ]
  },
  {
    id: "computers",
    name: "Computers",
    match: [
      "Computers"
    ]
  },
  {
    id: "audio",
    name: "Audio",
    match: [
      "Audio"
    ]
  },
  {
    id: "smart-home",
    name: "Smart Home",
    match: [
      "Smart Home"
    ]
  },
  {
    id: "gaming",
    name: "Gaming",
    match: [
      "Gaming"
    ]
  },
  {
    id: "mobile-accessories",
    name: "Mobile Accessories",
    match: [
      "Mobile Accessories"
    ]
  },
  {
    id: "home-office",
    name: "Home & Office",
    match: [
      "Home & Office"
    ]
  },
  {
    id: "creator-gear",
    name: "Creator Gear",
    match: [
      "Creator Gear"
    ]
  },
  {
    id: "everyday-gadgets",
    name: "Everyday Gadgets",
    match: [
      "Everyday Gadgets"
    ]
  }
];
