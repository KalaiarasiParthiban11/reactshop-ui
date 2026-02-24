export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  description: string;
  sizes?: string[];
  colors?: string[];
  badge?: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Classic Leather Tote",
    price: 189,
    originalPrice: 249,
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&h=750&fit=crop",
    category: "Bags",
    description: "Handcrafted from premium Italian leather, this timeless tote combines elegance with everyday functionality.",
    sizes: ["S", "M", "L"],
    colors: ["Black", "Tan", "Burgundy"],
    badge: "Sale",
  },
  {
    id: 2,
    name: "Minimalist Watch",
    price: 295,
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&h=750&fit=crop",
    category: "Accessories",
    description: "Swiss-made movement with a clean dial and sapphire crystal glass. Understated luxury for the modern individual.",
    colors: ["Silver", "Gold", "Rose Gold"],
  },
  {
    id: 3,
    name: "Cashmere Knit Sweater",
    price: 165,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&h=750&fit=crop",
    category: "Clothing",
    description: "Ultra-soft Mongolian cashmere in a relaxed fit. Perfect for layering through the cooler months.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Cream", "Charcoal", "Camel"],
  },
  {
    id: 4,
    name: "Linen Blazer",
    price: 320,
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=750&fit=crop",
    category: "Clothing",
    description: "Lightweight linen blend with a modern silhouette. Effortlessly polished for warm-weather occasions.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Sand", "Navy"],
    badge: "New",
  },
  {
    id: 5,
    name: "Leather Chelsea Boots",
    price: 275,
    image: "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?w=600&h=750&fit=crop",
    category: "Shoes",
    description: "Full-grain leather with a cushioned insole and durable rubber sole. A wardrobe essential.",
    sizes: ["7", "8", "9", "10", "11", "12"],
    colors: ["Black", "Brown"],
  },
  {
    id: 6,
    name: "Silk Scarf",
    price: 89,
    image: "https://images.unsplash.com/photo-1601924921557-45e8e0c21157?w=600&h=750&fit=crop",
    category: "Accessories",
    description: "Hand-rolled edges on pure mulberry silk. An artful accent that elevates any ensemble.",
    colors: ["Ivory", "Terracotta", "Sage"],
    badge: "Bestseller",
  },
  {
    id: 7,
    name: "Canvas Weekender",
    price: 145,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=750&fit=crop",
    category: "Bags",
    description: "Waxed canvas with leather accents. Spacious enough for a weekend getaway, stylish enough for daily use.",
    sizes: ["One Size"],
    colors: ["Olive", "Navy", "Tan"],
  },
  {
    id: 8,
    name: "Gold Chain Necklace",
    price: 210,
    originalPrice: 260,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=750&fit=crop",
    category: "Accessories",
    description: "18k gold-plated chain with a substantial weight. Modern elegance that transitions from day to night.",
    colors: ["Gold", "Silver"],
    badge: "Sale",
  },
];

export const categories = ["All", "Clothing", "Bags", "Shoes", "Accessories"];
