
import type { ReferenceImage } from './types.ts';

export const BACKGROUND_COLOR = '#4a5568'; // gray-700

export const PALETTE: string[] = [
  BACKGROUND_COLOR, // Eraser
  '#FFFFFF', // White
  '#cbd5e0', // gray-400
  '#718096', // gray-600
  '#000000', // Black
  '#f56565', // red-400
  '#e53e3e', // red-600
  '#ed8936', // orange-400
  '#dd6b20', // orange-600
  '#f6e05e', // yellow-300
  '#d69e2e', // yellow-500
  '#9ae6b4', // green-200
  '#38a169', // green-600
  '#63b3ed', // blue-300
  '#3182ce', // blue-600
  '#9f7aea', // purple-400
  '#6b46c1', // purple-700
  '#fbb6ce', // pink-200
  '#d53f8c', // pink-600
  '#e9d8a6', // skin tone light
  '#b7791f', // brown dark
  '#9c4221', // brown medium
];

export const GRID_SIZES: number[] = [8, 16, 32, 64];
export const DEFAULT_GRID_SIZE: number = 16;

export const REFERENCE_IMAGES: ReferenceImage[] = [
  { id: 1, title: 'An', url: 'https://api.dicebear.com/8.x/pixel-art/svg?seed=1&size=64' },
  { id: 2, title: 'Bảo', url: 'https://api.dicebear.com/8.x/pixel-art/svg?seed=2&size=64' },
  { id: 3, title: 'Châu', url: 'https://api.dicebear.com/8.x/pixel-art/svg?seed=3&size=64' },
  { id: 4, title: 'Duy', url: 'https://api.dicebear.com/8.x/pixel-art/svg?seed=4&size=64' },
  { id: 5, title: 'Giang', url: 'https://api.dicebear.com/8.x/pixel-art/svg?seed=5&size=64' },
  { id: 6, title: 'Hải', url: 'https://api.dicebear.com/8.x/pixel-art/svg?seed=6&size=64' },
  { id: 7, title: 'Khanh', url: 'https://api.dicebear.com/8.x/pixel-art/svg?seed=7&size=64' },
  { id: 8, title: 'Lâm', url: 'https://api.dicebear.com/8.x/pixel-art/svg?seed=8&size=64' },
  { id: 9, title: 'My', url: 'https://api.dicebear.com/8.x/pixel-art/svg?seed=9&size=64' },
  { id: 10, title: 'Ngọc', url: 'https://api.dicebear.com/8.x/pixel-art/svg?seed=10&size=64' },
];