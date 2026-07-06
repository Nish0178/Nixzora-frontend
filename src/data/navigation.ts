// ============================================================
// NIXZORA — "Elevating Everyday Clothing"
// Navigation + Product Catalog Data
// Modeled on category structures used by Bewakoof, Snitch,
// The Souled Store & Newme, adapted to NIXZORA's oversized
// streetwear + dark editorial / gold-accent identity.
// ============================================================

// ---------- TYPES ----------

export interface NavSection {
  title: string;
  items: string[];
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  gender: "Men" | "Women" | "Unisex";
  category: string;
  subCategory: string;
  price: number;
  mrp: number;
  discountPercent: number;
  colors: string[];
  sizes: string[];
  fabric: string;
  fit: string;
  images: string[];
  rating: number;
  reviewCount: number;
  tags: string[];
  isNew?: boolean;
  isBestSeller?: boolean;
  isTrending?: boolean;
  inStock: boolean;
}

// ---------- NAVIGATION ----------

export const menNavigation: NavSection[] = [
  {
    title: "Topwear",
    items: [
      "Oversized T-Shirts",
      "Graphic T-Shirts",
      "Plain T-Shirts",
      "Full Sleeve T-Shirts",
      "Shirts",
      "Polos",
      "Hoodies",
      "Sweatshirts",
      "Jackets",
    ],
  },
  {
    title: "Bottomwear",
    items: [
      "Cargo Pants",
      "Joggers",
      "Jeans",
      "Track Pants",
      "Shorts",
      "Co-ord Sets",
    ],
  },
  {
    title: "Footwear",
    items: ["Sneakers", "Slides", "Casual Shoes", "Sports Shoes"],
  },
  {
    title: "Accessories",
    items: ["Caps", "Beanies", "Belts", "Socks", "Bags", "Wallets", "Sunglasses"],
  },
  {
    title: "Collections",
    items: ["New Drops", "Best Sellers", "KD Signature Edit", "Oversized Fits"],
  },
];

export const womenNavigation: NavSection[] = [
  {
    title: "Topwear",
    items: [
      "Oversized T-Shirts",
      "Crop Tops",
      "Tops",
      "Shirts",
      "Graphic T-Shirts",
      "Hoodies",
      "Sweatshirts",
    ],
  },
  {
    title: "Bottomwear",
    items: ["Jeans", "Cargo Pants", "Trousers", "Joggers", "Shorts", "Skirts"],
  },
  {
    title: "Dresses & Sets",
    items: ["Mini Dresses", "Maxi Dresses", "Party Wear", "Co-ord Sets"],
  },
  {
    title: "Footwear",
    items: ["Sneakers", "Sandals", "Casual Shoes"],
  },
  {
    title: "Accessories",
    items: ["Bags", "Caps", "Belts", "Jewelry", "Sunglasses", "Scrunchies"],
  },
  {
    title: "Collections",
    items: ["New Drops", "Best Sellers", "KD Signature Edit", "Oversized Fits"],
  },
];

export const unisexNavigation: NavSection[] = [
  {
    title: "Streetwear Essentials",
    items: ["Oversized T-Shirts", "Hoodies", "Sweatshirts", "Cargo Pants"],
  },
  {
    title: "Limited Drops",
    items: ["Capsule Collection", "Collab Series", "Festive Edit"],
  },
];

// ---------- PRODUCTS ----------

export const products: Product[] = [
  {
    id: "NX-M-001",
    slug: "onyx-oversized-tee",
    name: "Onyx Oversized T-Shirt",
    gender: "Men",
    category: "Topwear",
    subCategory: "Oversized T-Shirts",
    price: 799,
    mrp: 1299,
    discountPercent: 38,
    colors: ["Black", "Charcoal", "Off White"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    fabric: "240 GSM Cotton",
    fit: "Oversized Drop-Shoulder",
    images: ["/products/onyx-oversized-tee-1.jpg", "/products/onyx-oversized-tee-2.jpg"],
    rating: 4.5,
    reviewCount: 212,
    tags: ["oversized", "essentials", "gold-tag"],
    isBestSeller: true,
    inStock: true,
  },
  {
    id: "NX-M-002",
    slug: "gilded-crest-graphic-tee",
    name: "Gilded Crest Graphic T-Shirt",
    gender: "Men",
    category: "Topwear",
    subCategory: "Graphic T-Shirts",
    price: 899,
    mrp: 1499,
    discountPercent: 40,
    colors: ["Black", "Maroon"],
    sizes: ["S", "M", "L", "XL"],
    fabric: "220 GSM Cotton",
    fit: "Oversized",
    images: ["/products/gilded-crest-tee-1.jpg"],
    rating: 4.6,
    reviewCount: 158,
    tags: ["graphic", "gold-print", "new-drop"],
    isNew: true,
    inStock: true,
  },
  {
    id: "NX-M-003",
    slug: "midnight-hoodie",
    name: "Midnight Pullover Hoodie",
    gender: "Men",
    category: "Topwear",
    subCategory: "Hoodies",
    price: 1699,
    mrp: 2599,
    discountPercent: 35,
    colors: ["Black", "Grey Melange"],
    sizes: ["M", "L", "XL", "XXL"],
    fabric: "320 GSM Fleece",
    fit: "Oversized",
    images: ["/products/midnight-hoodie-1.jpg", "/products/midnight-hoodie-2.jpg"],
    rating: 4.7,
    reviewCount: 301,
    tags: ["hoodie", "winter", "gold-zipper"],
    isBestSeller: true,
    isTrending: true,
    inStock: true,
  },
  {
    id: "NX-M-004",
    slug: "vault-cargo-pants",
    name: "Vault Cargo Pants",
    gender: "Men",
    category: "Bottomwear",
    subCategory: "Cargo Pants",
    price: 1499,
    mrp: 2199,
    discountPercent: 32,
    colors: ["Black", "Olive", "Beige"],
    sizes: ["30", "32", "34", "36"],
    fabric: "Cotton Twill",
    fit: "Relaxed",
    images: ["/products/vault-cargo-1.jpg"],
    rating: 4.4,
    reviewCount: 189,
    tags: ["cargo", "utility", "streetwear"],
    isTrending: true,
    inStock: true,
  },
  {
    id: "NX-M-005",
    slug: "kd-signature-sweatshirt",
    name: "KD Signature Sweatshirt",
    gender: "Men",
    category: "Topwear",
    subCategory: "Sweatshirts",
    price: 1399,
    mrp: 1999,
    discountPercent: 30,
    colors: ["Black", "Cream"],
    sizes: ["S", "M", "L", "XL"],
    fabric: "280 GSM Fleece",
    fit: "Oversized",
    images: ["/products/kd-signature-sweatshirt-1.jpg"],
    rating: 4.8,
    reviewCount: 97,
    tags: ["signature", "gold-embroidery", "limited"],
    isNew: true,
    inStock: true,
  },
  {
    id: "NX-W-001",
    slug: "aurum-crop-top",
    name: "Aurum Ribbed Crop Top",
    gender: "Women",
    category: "Topwear",
    subCategory: "Crop Tops",
    price: 699,
    mrp: 1099,
    discountPercent: 36,
    colors: ["Black", "White", "Dusty Pink"],
    sizes: ["XS", "S", "M", "L"],
    fabric: "Ribbed Cotton Lycra",
    fit: "Fitted",
    images: ["/products/aurum-crop-top-1.jpg"],
    rating: 4.5,
    reviewCount: 143,
    tags: ["crop-top", "ribbed", "casual"],
    inStock: true,
  },
  {
    id: "NX-W-002",
    slug: "noir-oversized-tee-women",
    name: "Noir Oversized T-Shirt",
    gender: "Women",
    category: "Topwear",
    subCategory: "Oversized T-Shirts",
    price: 799,
    mrp: 1299,
    discountPercent: 38,
    colors: ["Black", "White", "Lavender"],
    sizes: ["S", "M", "L", "XL"],
    fabric: "240 GSM Cotton",
    fit: "Oversized",
    images: ["/products/noir-oversized-tee-women-1.jpg"],
    rating: 4.6,
    reviewCount: 176,
    tags: ["oversized", "essentials"],
    isBestSeller: true,
    inStock: true,
  },
  {
    id: "NX-W-003",
    slug: "gold-line-co-ord",
    name: "Gold Line Co-ord Set",
    gender: "Women",
    category: "Dresses & Sets",
    subCategory: "Co-ord Sets",
    price: 1899,
    mrp: 2799,
    discountPercent: 32,
    colors: ["Black/Gold", "Beige/Gold"],
    sizes: ["S", "M", "L"],
    fabric: "Poly Cotton",
    fit: "Regular",
    images: ["/products/gold-line-co-ord-1.jpg", "/products/gold-line-co-ord-2.jpg"],
    rating: 4.7,
    reviewCount: 88,
    tags: ["co-ord", "gold-accent", "new-drop"],
    isNew: true,
    isTrending: true,
    inStock: true,
  },
  {
    id: "NX-W-004",
    slug: "velour-maxi-dress",
    name: "Velour Editorial Maxi Dress",
    gender: "Women",
    category: "Dresses & Sets",
    subCategory: "Maxi Dresses",
    price: 2199,
    mrp: 3299,
    discountPercent: 33,
    colors: ["Black", "Wine"],
    sizes: ["S", "M", "L"],
    fabric: "Velour",
    fit: "A-Line",
    images: ["/products/velour-maxi-dress-1.jpg"],
    rating: 4.5,
    reviewCount: 64,
    tags: ["party-wear", "editorial", "premium"],
    inStock: true,
  },
  {
    id: "NX-W-005",
    slug: "amber-cargo-pants-women",
    name: "Amber Cargo Pants",
    gender: "Women",
    category: "Bottomwear",
    subCategory: "Cargo Pants",
    price: 1399,
    mrp: 2099,
    discountPercent: 33,
    colors: ["Black", "Khaki"],
    sizes: ["26", "28", "30", "32"],
    fabric: "Cotton Twill",
    fit: "Relaxed",
    images: ["/products/amber-cargo-women-1.jpg"],
    rating: 4.4,
    reviewCount: 121,
    tags: ["cargo", "utility"],
    inStock: true,
  },
  {
    id: "NX-U-001",
    slug: "kd-luxe-capsule-hoodie",
    name: "KD Luxe Capsule Hoodie",
    gender: "Unisex",
    category: "Streetwear Essentials",
    subCategory: "Hoodies",
    price: 1999,
    mrp: 2999,
    discountPercent: 33,
    colors: ["Black/Gold"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    fabric: "340 GSM French Terry",
    fit: "Oversized",
    images: ["/products/kd-luxe-capsule-hoodie-1.jpg"],
    rating: 4.9,
    reviewCount: 42,
    tags: ["capsule", "limited-edition", "gold-embroidery"],
    isNew: true,
    isTrending: true,
    inStock: true,
  },
];

// ---------- HELPERS ----------

export const getProductsByGender = (gender: Product["gender"]) =>
  products.filter((p) => p.gender === gender || p.gender === "Unisex");

export const getProductsByCategory = (category: string) =>
  products.filter((p) => p.category === category);

export const getBestSellers = () => products.filter((p) => p.isBestSeller);

export const getNewDrops = () => products.filter((p) => p.isNew);

export const getTrending = () => products.filter((p) => p.isTrending);

export const getProductBySlug = (slug: string) =>
  products.find((p) => p.slug === slug);