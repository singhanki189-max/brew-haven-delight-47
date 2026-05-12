import heroCafe from "@/assets/hero-cafe.jpg";
import menuLatte from "@/assets/menu-latte.jpg";
import menuCroissant from "@/assets/menu-croissant.jpg";
import menuAvocado from "@/assets/menu-avocado.jpg";
import menuMatcha from "@/assets/menu-matcha.jpg";
import menuDessert from "@/assets/menu-dessert.jpg";
import baristaOne from "@/assets/barista-1.jpg";
import chefOne from "@/assets/chef-1.jpg";
import galleryOne from "@/assets/gallery-1.jpg";
import galleryTwo from "@/assets/gallery-2.jpg";
import galleryThree from "@/assets/gallery-3.jpg";

export const siteMeta = {
  name: "Brew Haven Café",
  description:
    "Brew Haven Café is a premium cozy café serving handcrafted coffee, fresh pastries, and warm moments.",
};

export const heroImage = heroCafe;

export const featuredItems = [
  {
    name: "Signature Latte",
    description: "Silky microfoam with single-origin espresso and rosette art.",
    price: "$5.80",
    image: menuLatte,
  },
  {
    name: "Butter Croissant",
    description: "Freshly baked, flaky layers with cultured butter richness.",
    price: "$4.50",
    image: menuCroissant,
  },
  {
    name: "Avocado Sunrise Toast",
    description: "Sourdough, smashed avocado, poached egg, and chili drizzle.",
    price: "$8.90",
    image: menuAvocado,
  },
];

export const testimonials = [
  {
    quote:
      "Brew Haven Café has the most comforting atmosphere in town. Their coffee is consistently perfect.",
    name: "Sophia M.",
    role: "Local Designer",
  },
  {
    quote:
      "From breakfast meetings to evening catchups, this is my favorite café spot for quality and calm.",
    name: "Daniel R.",
    role: "Startup Founder",
  },
  {
    quote:
      "Warm service, elegant menu, and beautiful presentation. It feels like a hidden European café.",
    name: "Nora K.",
    role: "Travel Blogger",
  },
];

export const galleryImages = [
  { src: galleryOne, alt: "Cozy seating corner at Brew Haven Café" },
  { src: galleryTwo, alt: "Coffee and pastries arranged on a wooden table" },
  { src: galleryThree, alt: "Pour-over brewing setup with fresh coffee beans" },
];

export const teamMembers = [
  {
    name: "Ethan Vale",
    role: "Head Barista",
    image: baristaOne,
    bio: "Specialized in latte artistry and precision brewing for balanced flavor.",
  },
  {
    name: "Maya Loren",
    role: "Pastry Chef",
    image: chefOne,
    bio: "Crafts seasonal pastries using premium ingredients and artisanal techniques.",
  },
];

export const historyTimeline = [
  { year: "2016", title: "The First Brew", description: "Started as a small neighborhood coffee nook." },
  { year: "2019", title: "Community Favorite", description: "Expanded menu and hosted local creative events." },
  { year: "2022", title: "Premium Redesign", description: "Reimagined interiors with cozy modern warmth." },
  { year: "2026", title: "Brew Haven Today", description: "A refined café experience with heart and craft." },
];

export const menuItems = [
  {
    category: "breakfast",
    name: "Avocado Sunrise Toast",
    description: "Sourdough, avocado, poached egg, olive oil.",
    price: "$8.90",
    image: menuAvocado,
  },
  {
    category: "breakfast",
    name: "Croissant Duo",
    description: "Classic butter croissant with fruit preserve.",
    price: "$6.20",
    image: menuCroissant,
  },
  {
    category: "lunch",
    name: "Roasted Veg Panini",
    description: "Ciabatta, grilled vegetables, pesto aioli.",
    price: "$11.40",
    image: menuAvocado,
  },
  {
    category: "lunch",
    name: "Turkey Club Melt",
    description: "Smoked turkey, cheddar, tomato, herb mayo.",
    price: "$12.10",
    image: menuCroissant,
  },
  {
    category: "coffee",
    name: "Signature Latte",
    description: "Double espresso, velvety milk microfoam.",
    price: "$5.80",
    image: menuLatte,
  },
  {
    category: "coffee",
    name: "Pour Over Reserve",
    description: "Single-origin beans, clean bright profile.",
    price: "$6.90",
    image: menuLatte,
  },
  {
    category: "cold-drinks",
    name: "Iced Matcha Velvet",
    description: "Ceremonial-grade matcha with chilled milk.",
    price: "$6.30",
    image: menuMatcha,
  },
  {
    category: "cold-drinks",
    name: "Citrus Cold Brew",
    description: "Slow-steeped cold brew with orange zest.",
    price: "$5.90",
    image: menuMatcha,
  },
  {
    category: "desserts",
    name: "Chocolate Noir Slice",
    description: "Rich cocoa cake with berry garnish.",
    price: "$7.20",
    image: menuDessert,
  },
  {
    category: "desserts",
    name: "Caramel Almond Tart",
    description: "Toasted almonds and salted caramel glaze.",
    price: "$6.80",
    image: menuDessert,
  },
] as const;
