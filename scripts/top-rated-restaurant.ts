import db from "../config/firebase-config"
import { TopRated, Restaurant, Order } from "../interfaces/interface";

class TopRatedRestaurant implements TopRated<Restaurant> {

  public async topRated(limit: number, order: Order) {
    try {
      const response = await db.collection('resturants')
        .orderBy('ratingCount', order).orderBy('rating', order).limit(limit).get();
      response.forEach((docs) => console.log(docs.data()))
    } catch(err) {
      console.log({err})
    }
  }
}

const topRatedRestaurant = new TopRatedRestaurant();
topRatedRestaurant.topRated(7, Order.DESCENDING)