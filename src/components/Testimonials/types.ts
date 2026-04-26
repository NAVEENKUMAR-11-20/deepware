export interface Review {
  identity: number;
  name: string;
  company?: string;
  rating: number;
  message: string;
  created_at: string;
}

export type SortOption = 'latest' | 'highest';
export type FilterOption = 'all' | '5-star';
