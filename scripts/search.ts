import axios from "axios";
import { MeiliSearch } from 'meilisearch';

class searchRestaurants {
  private readonly client = new MeiliSearch({host: 'http://meilisearch-aws-instance.chikaokafor.dev/', apiKey: 'ODQ2NDY0NjU0ZWQ0YjI4MzhjNmMzYTQ3'});

  async search(searchQuery: string) {
    const response = await this.client.index('restaurants').search(searchQuery);
    console.log(response.hits)
  }
}

const restaurants = new searchRestaurants();
restaurants.search('veg');