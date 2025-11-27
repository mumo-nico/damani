export interface NavLink {
  name: string;
  href: string;
}

export interface HeroSlide {
  title: string;
  subtitle: string;
  description: string;
  cta: string;
  image: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service?: string;
  message: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt?: string;
  image?: string;
  authorId: string;
  category: string;
  status: "draft" | "published" | "archived";
  featured: boolean;
  views: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface ShopProduct {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  image?: string;
  images: string[];
  category: string;
  vendorId: string;
  stock: number;
  rating: number;
  reviews: number;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface User {
  id: string;
  name?: string;
  email?: string;
  image?: string;
  role: "user" | "admin" | "vendor" | "blogger";
  createdAt: Date;
  updatedAt: Date;
}

