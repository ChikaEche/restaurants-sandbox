import firebase from "firebase";
import { Seeder, Restaurant } from "./interface";
import { TAGS, CITIES } from "./utils";

const projectId = "myportfolio-2f9e2";
const config = {
  databaseURL: 'http://localhost:8080?ns=emulatorui',
  projectId
}
firebase.initializeApp(config);
const db = firebase.firestore();
db.useEmulator("localhost", 8080);

class RestaurantSeeder implements Seeder<Restaurant>{

  private readonly maxTagsAllowed = 3;

  private readonly maxReviews = 600;

  private createRestaurant() {
    let name = '';
    const numberOfTags = Math.floor(Math.random() * this.maxTagsAllowed) + 1;
    const resturantNameLength = Math.floor(Math.random() * 6) + 2;
    for (let i = 0; i < resturantNameLength; i++) {
      const charCode = Math.floor(Math.random() * 25) + 97;
      name = `${name}${String.fromCharCode(charCode)}`
    }

    const tags: string[] = [];

    const city = CITIES[Math.floor(Math.random() * CITIES.length)];



    for (let i = 0; i < numberOfTags; i++) {
      let assignedTag = TAGS[Math.floor(Math.random() * TAGS.length)];
      while(tags.indexOf(assignedTag) !== -1) {
        assignedTag = TAGS[Math.floor(Math.random() * TAGS.length)];
      }
      tags.push(assignedTag);
    }

    const rating = +((Math.random() * 4) + 1).toFixed(2);

    const ratingCount = Math.floor((Math.random() * this.maxReviews) + 1);

    return { name, tags, rating, ratingCount, city } as Restaurant;
  }

  public seed(count: number) {
    try {
      new Array(count).fill(null).map(() => {
        const restaurant = this.createRestaurant()
        db.doc(`resturants/${restaurant.name}`).set(restaurant)
      });
    } catch(err) {
      console.log({err})
    }
  }
}

const restaurant = new RestaurantSeeder();
restaurant.seed(100);



