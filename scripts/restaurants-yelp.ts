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

    const cuisineOptions: Array<string> = []

    const restaurants = businesses.map(({id, name, rating, location, review_count, categories, image_url, url}: Restaurant) => {
      const { display_address } = location;
      const tags: Array<string> = [];
      categories.forEach(({title}) => {
        tags.push(title)
        if(cuisineOptions.indexOf(title) < 0) cuisineOptions.push(title)
      })
      tags.push(' ');
      const data = {
        name,
        rating,
        location: display_address.join(''),
        review_count,
        tags,
        url,
        image_url
      }
      const restaurantRef = db.doc(`restaurants/${id}`);
      const cuisineOptionRef = db.doc('cuisines/options');
      batch.set(cuisineOptionRef, {options: cuisineOptions}, {merge: true})
      //batch.set(restaurantRef, data);
      return {...data, id};
    });

    //const response = await this.client.index('restaurants').addDocuments(restaurants);
    batch.commit();
  }
}

const restaurants = new RestaurantsFromYelp();
restaurants.getRestaurants();