import firebase from "firebase";
import { Restaurant, Order } from "./interface";

const projectId = "myportfolio-2f9e2";
const config = {
  databaseURL: 'http://localhost:8080?ns=emulatorui',
  projectId
}
firebase.initializeApp(config);
const db = firebase.firestore();
db.useEmulator("localhost", 8080);

class RestaurantsInCity {

  public async getRestaurant(limit: number, order: Order, cities: string[]) {
    try {
      console.log('here')
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