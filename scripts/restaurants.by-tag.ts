import db from "./firebase-config"
import { Order } from "./interface";

class RestaurantsByTags {

  public async getRestaurants(order: Order, tags: string[]) {
    try {
      const response = await db.collection('resturants')
        .where('tags', 'array-contains-any', tags)
        .orderBy('ratingCount', order).orderBy('rating', order).get();
      response.forEach((docs) => console.log(docs.data()))
    } catch(err) {
      console.log({err})
    }
  }
}

const restaurants = new RestaurantsByTags();

restaurants.getRestaurants(Order.DESCENDING, ['African'])