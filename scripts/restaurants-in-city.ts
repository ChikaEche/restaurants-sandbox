import db from "../config/firebase-config"
import { Order } from "../interfaces/interface";

class RestaurantsInCity {

  public async getRestaurant(limit: number, order: Order, cities: string[]) {
    try {
      const response = await db.collection('resturants')
        .where('city', 'in', cities)
        .orderBy('city', order)
        .orderBy('ratingCount', order).orderBy('rating', order).get();
      response.forEach((docs) => console.log(docs.data()))
    } catch(err) {
      console.log({err})
    }
  }
}

const restaurants = new RestaurantsInCity();

restaurants.getRestaurant(7, Order.ASCENDING, ['Dublin', 'Kildare'])