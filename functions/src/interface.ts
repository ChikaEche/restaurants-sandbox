export interface Restaurant {
  name: string;
  rating: number;
  categories: Array<{title: string}>;
  review_count: number;
  location: {display_address: Array<string>},
  id: number
};