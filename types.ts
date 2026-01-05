
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

export type CategoryType = 'cafe' | 'hat' | 'matong' | 'giavi' | 'all';

export interface Category {
  id: CategoryType;
  name: string;
  icon: string;
}

export interface Review {
  id: number;
  author: string;
  avatar: string;
  rating: number;
  comment: string;
}

export interface ContactForm {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Address {
  id: string;
  label: string; // Vd: Nhà riêng, Công ty
  recipientName: string;
  phone: string;
  fullAddress: string;
  isDefault: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  password: string; // Lưu ý: Trong thực tế password phải được mã hóa
  phone: string;
  avatar?: string;
  addresses: Address[];
}

export type PaymentMethod = 'cod' | 'banking' | 'momo' | 'zalopay' | 'card';

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  subtotal: number;
  shippingFee: number;
  discount: number;
  totalAmount: number;
  shippingAddress: Address;
  paymentMethod: PaymentMethod;
  status: 'pending' | 'shipping' | 'delivered' | 'cancelled';
  note?: string;
  createdAt: string;
}

export interface Promotion {
  id: number;
  name: string;
  discountPercent: number;
  productIds: number[];
  isActive: boolean;
  startDate?: string;
  endDate?: string;
}

export type BlogCategory = 'news' | 'recipe' | 'story';

export interface BlogPost {
  id: number;
  title: string;
  category: BlogCategory;
  image: string;
  author: string;
  date: string;
  summary: string;
  content: string; // Có thể chứa HTML cơ bản hoặc text
}
