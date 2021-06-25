import * as functions from 'firebase-functions';
import { firestore, search } from './config';
import axios from "axios";
import{ Restaurant } from "./interface";

export const onResaturantCreate = functions.firestore
  .document('restaurants/{id}')
  .onCreate(async (snapshot, ctx) => {
    const restaurant = snapshot.data();
    await search.index('restaurants').addDocuments([{restaurant, id: snapshot.id}]);
  })

export const onRestaurantUpdate = functions.firestore
  .document('restaurants/{id}')
  .onUpdate(async (snapshot, ctx) => {
    const restaurant = snapshot.after.data();
    const data = {
      id: snapshot.after.id,
      ...restaurant
    }
    await search.index('restaurants').updateDocuments([data])
  })

export const weeklyUpdate = functions.pubsub.schedule('every 7 days').onRun(async () => {
  const yelpUrl = functions.config().yelp.host;
  const yelpApi = functions.config().yelp.api_key;

  try {
    const { businesses } = (await axios.get(yelpUrl, {
      headers: {
        Authorization: yelpApi
      }
    })).data;
  
    const batch = firestore.batch();
  
    businesses.map(({id, name, rating, location, review_count, categories}: Restaurant) => {
      const { display_address } = location;
      const tags = categories.map(({title}) => title)
      const data = {
        name,
        rating,
        location: display_address.join(' '),
        review_count,
        tags
      }
      const restaurantRef = firestore.doc(`restaurants/${id}`);
      batch.set(restaurantRef, data);
    });
  
    await batch.commit();

  } catch(e) {
    console.log(e)
  }
})