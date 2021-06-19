import db from "../config/firebase-config"
import { Restaurant } from "../interfaces/interface";
import axios from "axios";
import { MeiliSearch } from 'meilisearch';
import { meiliSearchAPI, yelpAPI } from "../config/env";

/**
 * Template method design pattern
 * 
 * 
 */

class RestaurantsFromYelp {
  private readonly client = new MeiliSearch({host: 'http://meilisearch-aws-instance.chikaokafor.dev/', apiKey: meiliSearchAPI});
  private readonly url = "https://api.yelp.com/v3/businesses/search?location=IE&categories=restaurants&limit=50";
  private readonly authToken = yelpAPI;

  async getRestaurants() {
    const { businesses } = (await axios.get(this.url, {
      headers: {
        Authorization: this.authToken
      }
    })).data;

    const batch = db.batch();

    const restaurants = businesses.map(({id, name, rating, location, review_count, categories}: Restaurant) => {
      const { display_address } = location;
      const tags = categories.map(({title}) => title)
      const data = {
        id,
        name,
        rating,
        location: display_address.join(' '),
        review_count,
        tags
      }
      const restaurantRef = db.doc(`restaurants/${id}`);
      batch.set(restaurantRef, data);
      return data;
    });

    const response = await this.client.index('restaurants').addDocuments(restaurants);
    batch.commit();
  }
}

const restaurants = new RestaurantsFromYelp();
restaurants.getRestaurants();