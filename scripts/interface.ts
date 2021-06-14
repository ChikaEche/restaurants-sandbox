export interface Seeder<T> {
  seed: (count: number) => any
}

export interface TopRated<T> {
  topRated: (limit: number, order: Order) => any
}

export interface Restaurant {
  name: string;
  rating: number;
  tags: Array<string>;
  ratingCount: number;
}

export enum Order {
  DESCENDING = "desc",
  ASCENDING = "asc"
}