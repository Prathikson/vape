export interface ProductVariant {
  id: string;
  label: string;
  price: number;
  inStock: boolean;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  badge?: string;
  description: string;
  longDescription: string;
  price: number;
  variants: ProductVariant[];
  specs: Record<string, string>;
  tags: string[];
  featured: boolean;
  new: boolean;
  color: string; // card accent color
}

export const categories = [
  "All",
  "Devices",
  "E-Liquids",
  "Disposables",
  "Accessories",
  "Pods",
];

export const products: Product[] = [
  {
    id: "lost-mary-bm600",
    name: "BM600 Disposable",
    brand: "Lost Mary",
    category: "Disposables",
    badge: "Bestseller",
    description: "600 puffs of smooth, flavour-packed satisfaction.",
    longDescription:
      "The Lost Mary BM600 is a compact, draw-activated disposable vape delivering up to 600 puffs per device. Pre-filled with 2ml of premium salt nicotine e-liquid in a wide range of flavours. No charging, no refilling — just pure flavour from first puff to last.",
    price: 12.99,
    variants: [
      { id: "bm600-bluerazz", label: "Blueberry Razz", price: 12.99, inStock: true },
      { id: "bm600-mango", label: "Mango Ice", price: 12.99, inStock: true },
      { id: "bm600-strawkiwi", label: "Strawberry Kiwi", price: 12.99, inStock: true },
      { id: "bm600-watermelon", label: "Watermelon Ice", price: 12.99, inStock: false },
      { id: "bm600-peach", label: "Peach Ice", price: 12.99, inStock: true },
    ],
    specs: {
      Puffs: "~600",
      Nicotine: "20mg (2%)",
      Capacity: "2ml",
      Battery: "500mAh (non-rechargeable)",
      Type: "Draw-activated",
    },
    tags: ["disposable", "salt nic", "compact"],
    featured: true,
    new: false,
    color: "#8B5CF6",
  },
  {
    id: "vaporesso-xros4",
    name: "XROS 4 Pod Kit",
    brand: "Vaporesso",
    category: "Pods",
    badge: "New",
    description: "Ultra-portable pod system with COREX heating tech.",
    longDescription:
      "The Vaporesso XROS 4 is the latest evolution of the iconic XROS series. Featuring COREX ceramic heating technology for the purest flavour, a 1000mAh battery, and a sleek zinc-alloy build. Adjustable airflow, leak-proof pod design, and USB-C fast charging make this the ideal everyday carry.",
    price: 44.99,
    variants: [
      { id: "xros4-black", label: "Matte Black", price: 44.99, inStock: true },
      { id: "xros4-silver", label: "Silver", price: 44.99, inStock: true },
      { id: "xros4-blue", label: "Space Blue", price: 44.99, inStock: true },
      { id: "xros4-pink", label: "Cherry Pink", price: 49.99, inStock: false },
    ],
    specs: {
      Battery: "1000mAh",
      Capacity: "2ml pod",
      Coil: "0.6Ω / 1.0Ω",
      Charging: "USB-C 5V/1A",
      Dimensions: "112 × 24 × 14mm",
    },
    tags: ["pod", "refillable", "everyday carry"],
    featured: true,
    new: true,
    color: "#0EA5E9",
  },
  {
    id: "naked100-lava-flow",
    name: "Lava Flow 60ml",
    brand: "Naked 100",
    category: "E-Liquids",
    badge: "Fan Fav",
    description: "Coconut, strawberry & pineapple. Tropical perfection.",
    longDescription:
      "Naked 100's Lava Flow is a legendary tropical blend that tastes like a holiday in a bottle. Ripe strawberries meet creamy coconut with a wave of fresh pineapple on the exhale. Available in a 60ml unicorn bottle, compatible with sub-ohm tanks and RDAs.",
    price: 27.99,
    variants: [
      { id: "lava-0mg", label: "0mg", price: 27.99, inStock: true },
      { id: "lava-3mg", label: "3mg", price: 27.99, inStock: true },
      { id: "lava-6mg", label: "6mg", price: 27.99, inStock: true },
    ],
    specs: {
      Size: "60ml",
      VG: "70%",
      PG: "30%",
      Profile: "Freebase nicotine",
      Origin: "USA",
    },
    tags: ["e-liquid", "freebase", "tropical"],
    featured: true,
    new: false,
    color: "#F97316",
  },
  {
    id: "smok-rpm5",
    name: "RPM 5 Pro Kit",
    brand: "SMOK",
    category: "Devices",
    badge: null,
    description: "80W box mod with 2000mAh battery and RPM pod system.",
    longDescription:
      "The SMOK RPM 5 Pro is a powerful yet compact box mod delivering up to 80W output with an integrated 2000mAh battery. Features a 0.96\" colour display, adjustable wattage, and is compatible with the full RPM coil range. Perfect for cloud chasers who want portability without compromise.",
    price: 69.99,
    variants: [
      { id: "rpm5-black", label: "Matte Black", price: 69.99, inStock: true },
      { id: "rpm5-red", label: "Red & Black", price: 69.99, inStock: true },
      { id: "rpm5-cyan", label: "Cyan", price: 69.99, inStock: false },
    ],
    specs: {
      Power: "5–80W",
      Battery: "2000mAh built-in",
      Display: '0.96" color TFT',
      Capacity: "6ml pod",
      Charging: "USB-C",
    },
    tags: ["box mod", "high power", "cloud"],
    featured: false,
    new: false,
    color: "#EF4444",
  },
  {
    id: "elf-bar-bc5000",
    name: "BC5000 Disposable",
    brand: "Elf Bar",
    category: "Disposables",
    badge: "Top Pick",
    description: "5000 puffs, rechargeable, massive flavour range.",
    longDescription:
      "The Elf Bar BC5000 sets a new standard for disposable vapes with up to 5000 puffs, a rechargeable 650mAh battery via USB-C, and 13ml of pre-filled e-liquid. Available in 30+ flavours with rich, consistent flavour delivery from start to finish.",
    price: 24.99,
    variants: [
      { id: "bc5000-strawice", label: "Strawberry Ice", price: 24.99, inStock: true },
      { id: "bc5000-bluemint", label: "Blue Mint", price: 24.99, inStock: true },
      { id: "bc5000-grape", label: "Grape", price: 24.99, inStock: true },
      { id: "bc5000-cola", label: "Cola Ice", price: 24.99, inStock: false },
      { id: "bc5000-passion", label: "Passionfruit", price: 24.99, inStock: true },
    ],
    specs: {
      Puffs: "~5000",
      Nicotine: "50mg (5%)",
      Capacity: "13ml",
      Battery: "650mAh (rechargeable)",
      Charging: "USB-C",
    },
    tags: ["disposable", "rechargeable", "high capacity"],
    featured: true,
    new: false,
    color: "#10B981",
  },
  {
    id: "allo-ultra-2500",
    name: "Ultra 2500 Disposable",
    brand: "Allo",
    category: "Disposables",
    badge: null,
    description: "Canadian-made. 2500 puffs of clean, crisp flavour.",
    longDescription:
      "Allo's Ultra 2500 is proudly Canadian-made and compliance-ready. 2500 puffs of clean, consistent flavour with a 1000mAh rechargeable battery and USB-C port. Available in a curated range of Canadian-favourite flavours.",
    price: 19.99,
    variants: [
      { id: "allo-peach", label: "Peach Mango", price: 19.99, inStock: true },
      { id: "allo-mint", label: "Mint", price: 19.99, inStock: true },
      { id: "allo-berry", label: "Mixed Berry", price: 19.99, inStock: true },
    ],
    specs: {
      Puffs: "~2500",
      Nicotine: "20mg (2%)",
      Capacity: "7ml",
      Battery: "1000mAh",
      Origin: "Canada",
    },
    tags: ["disposable", "canadian", "compliant"],
    featured: false,
    new: false,
    color: "#F59E0B",
  },
  {
    id: "vuse-epod2",
    name: "ePod 2 Starter Kit",
    brand: "Vuse",
    category: "Pods",
    badge: null,
    description: "Slim, satisfying, and regulated. Canada's #1 pod vape.",
    longDescription:
      "The Vuse ePod 2 is a closed pod system known for its ease of use and consistent flavour delivery. Simply click in a pod and vape — no buttons, no settings. Charges quickly via USB-C and features SmartDraw™ technology that senses your inhale.",
    price: 34.99,
    variants: [
      { id: "epod2-grey", label: "Gun Metal Grey", price: 34.99, inStock: true },
      { id: "epod2-black", label: "Midnight Black", price: 34.99, inStock: true },
    ],
    specs: {
      System: "Closed pod",
      Battery: "750mAh",
      Technology: "SmartDraw™",
      Charging: "USB-C 45min",
      Pods: "1.9ml pre-filled",
    },
    tags: ["pod", "closed system", "easy use"],
    featured: false,
    new: false,
    color: "#64748B",
  },
  {
    id: "coil-cleaning-kit",
    name: "Pro Cleaning Kit",
    brand: "DRIPD",
    category: "Accessories",
    badge: null,
    description: "Everything you need to keep your device pristine.",
    longDescription:
      "Our DRIPD Pro Cleaning Kit includes cleaning brushes, cotton swabs, isopropyl wipes, a coil-change tool, and a microfibre cloth — all the essentials to maintain your device and extend its lifespan.",
    price: 14.99,
    variants: [
      { id: "kit-single", label: "Single Kit", price: 14.99, inStock: true },
      { id: "kit-bundle", label: "3-Pack Bundle", price: 39.99, inStock: true },
    ],
    specs: {
      Contents: "Brush, swabs, wipes, tool, cloth",
      Brand: "DRIPD",
      Compatibility: "Universal",
    },
    tags: ["accessory", "maintenance", "cleaning"],
    featured: false,
    new: false,
    color: "#6366F1",
  },
];

export const featuredProducts = products.filter((p) => p.featured);
export const newProducts = products.filter((p) => p.new);
