import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Restaurant } from '../interface/restaurant';
import { Subject, of, from } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Order } from '../enums/order';
import { getStars } from '../util/stars';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  restaurants$ = new Subject<Restaurant[]>();
  constructor(
    private readonly firestore: AngularFirestore
  ) {}

  filter(order?: Order, cuisine: Array<string> = []) {
    if (!cuisine?.length) {
      cuisine = [' '];
    }

    return from(
      this.firestore.collection<Restaurant>('restaurants').ref
      .where('tags', 'array-contains-any', cuisine)
      .orderBy('rating', order ?? 'asc').get()).pipe(
      tap((restaurant) => {
        let restaurantData: Restaurant[] = [];
        restaurant.forEach((docs) => {
          const stars = getStars(docs.data().rating);
          restaurantData = [...restaurantData, {...docs.data(), stars}];
        });
        this.restaurants$.next(restaurantData);
      })
    );
  }
}
