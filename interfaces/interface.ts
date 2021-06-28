export interface Seeder<T> {
  seed: (count: number) => any
}

export interface TopRated<T> {
  topRated: (limit: number, order: Order) => any
}

export interface Restaurant {
  name: string;
  rating: number;
  categories: Array<{title: string}>;
  review_count: number;
  location: {display_address: Array<string>},
  id: number,
  image_url: string,
  url: string
}

export enum Order {
  DESCENDING = "desc",
  ASCENDING = "asc"
}