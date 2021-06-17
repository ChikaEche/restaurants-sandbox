import db from "./firebase-config"
import { Restaurant } from "./interface";
import axios from "axios";

class RestaurantsFromYelp {
  private readonly url = "https://api.yelp.com/v3/businesses/search?location=IE&categories=restaurants&limit=50";
  private readonly authToken = "Bearer FowdXnE190MvB9P6oyiI_G7NIO5si_zVXsPxB7Th0ymh9kH5vPOmF-xIZX-AMstjiTQRihkzAwWVdcjV8X-_xsOzi2f6RGRmozd49OnRkcqJZT3YSw5_wQwrzgW8XnYx";

  async getRestaurants() {
    const { businesses } = (await axios.get(this.url, {
      headers: {
        Authorization: this.authToken
      }
    })).data;

    businesses.forEach(({name, rating, location, review_count, categories}: Restaurant) => {
      const { display_address } = location;
      const tags = categories.map(({title}) => title)
      db.doc(`restaurants/${name}`).set({
        name,
        rating,
        location: display_address.join(' '),
        review_count,
        tags
      })
    });
  }
}

const restaurants = new RestaurantsFromYelp();
restaurants.getRestaurants();