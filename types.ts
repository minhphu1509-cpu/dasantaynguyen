// Type Definitions for rtao-website

export type CategoryType = 'cafe' | 'tra' | 'mat-ong' | 'hat' | 'sua' | 'banh-keo' | 'do-kho';

export interface Product {
  id: number;
  name: string;
  category: CategoryType;
  price: number;
  oldPrice?: number;
  image: string;
  description: string;
  rating: number;
  reviews: number;
  isBestSeller?: boolean;
}

export interface Review {
  id: number;
  author: string;
  avatar: string;
  rating: number;
  comment: string;
}

export interface Promotion {
  id: number;
  name: string;
  discountPercent: number;
  productIds: number[];
  isActive: boolean;
  startDate: string;
  endDate: string;
}

export type BlogCategory = 'news' | 'tips' | 'recipes' | 'stories';

export interface BlogPost {
  id: number;
  title: string;
  category: BlogCategory;
  image: string;
  author: string;
  date: string;
  summary: string;
  content: string;
}

export interface Config {
  siteName: string;
  siteDescription: string;
  contactEmail: string;
  contactPhone: string;
  address: string;
  facebookUrl?: string;
  youtubeUrl?: string;
  zaloUrl?: string;
  mapUrl?: string;
}

export interface ShippingAddress {
  recipientName: string;
  phone: string;
  address: string;
  city: string;
  district: string;
  ward: string;
  notes?: string;
}

export interface OrderItem {
  productId: number;
  productName: string;
  productImage: string;
  quantity: number;
  price: number;
}

export type OrderStatus = 'pending' | 'shipping' | 'delivered' | 'cancelled';
export type PaymentMethod = 'cod' | 'banking' | 'momo' | 'zalopay' | 'card';

export interface Order {
  id: string;
  items: OrderItem[];
  shippingAddress: ShippingAddress;
  paymentMethod: PaymentMethod;
  totalAmount: number;
  status: OrderStatus;
  createdAt: string;
  updatedAt?: string;
}
