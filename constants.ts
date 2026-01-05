// Constants for rtao-website

import { CategoryType } from './types';

export interface Category {
    id: CategoryType;
    name: string;
    icon?: string;
}

export const CATEGORIES: Category[] = [
    { id: 'cafe', name: 'Cà phê' },
    { id: 'tra', name: 'Trà' },
    { id: 'mat-ong', name: 'Mật ong' },
    { id: 'hat', name: 'Hạt dinh dưỡng' },
    { id: 'sua', name: 'Sữa' },
    { id: 'banh-keo', name: 'Bánh kẹo' },
    { id: 'do-kho', name: 'Đồ khô' },
];

export const BLOG_CATEGORIES = [
    { id: 'news', name: 'Tin tức' },
    { id: 'tips', name: 'Mẹo hay' },
    { id: 'recipes', name: 'Công thức' },
    { id: 'stories', name: 'Câu chuyện' },
];

export const DEFAULT_ADMIN_PASSWORD = 'admin';
