import firebase from "firebase";
import { TopRated, Restaurant, Order } from "./interface";

const projectId = "myportfolio-2f9e2";
const config = {
  databaseURL: 'http://localhost:8080?ns=emulatorui',
  projectId
}
firebase.initializeApp(config);
const db = firebase.firestore();
db.useEmulator("localhost", 8080);

class TopRatedRestaurant implements TopRated<Restaurant> {

  public async topRated(limit: number, order: Order) {
    try {
      const response = await db.collection('resturants')
        .orderBy('rating', order).orderBy('ratingCount', order).limit(limit).get();
      response.forEach((docs) => console.log(docs.data()))
    } catch(err) {
      console.log({err})
    }
  }
}

const topRatedRestaurant = new TopRatedRestaurant();
console.log(topRatedRestaurant.topRated(7, Order.ASCENDING))