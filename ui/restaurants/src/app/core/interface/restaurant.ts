export interface Restaurant {
  review_count: number;
  name: string;
  tags: Array<string>;
  rating: number;
  location: string;
  image_url: string;
  url: string;
  stars?: Array<number>;
}
