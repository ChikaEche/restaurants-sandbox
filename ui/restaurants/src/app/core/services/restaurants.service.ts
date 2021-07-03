import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Restaurant } from '../interface/restaurant';
import { Subject, of, from } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Order } from '../enums/order';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  restaurants$ = new Subject<Restaurant[]>();
  constructor(
    private readonly firestore: AngularFirestore
  ) {}

  filter(order?: Order, cuisine?: Array<string>) {
    if (cuisine === null || !cuisine.length) {
      cuisine = [' '];
    }
    return from(
      this.firestore.collection<Restaurant>('restaurants').ref
      .where('tags', 'array-contains-any', cuisine)
      .orderBy('rating', order ?? 'asc').get()).pipe(
      tap((restaurant) => {
        let restaurantData: Restaurant[] = [];
        restaurant.forEach((docs) => {
          let stars = [
            ...new Array(Math.floor(docs.data().rating)).fill(1),
            ...new Array(Math.round(docs.data().rating) - Math.floor(docs.data().rating)).fill(0.5)
          ];
          stars = [...stars, ...new Array(Math.floor(5 - stars.length)).fill(0)];
          restaurantData = [...restaurantData, {...docs.data(), stars}];
        });
        this.restaurants$.next(restaurantData);
      })
    );
  }
}
