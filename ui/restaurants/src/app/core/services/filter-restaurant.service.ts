import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Restaurant } from '../interface/restaurant';
import { Order } from '../enums/order';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterRestaurantService {

  constructor(
    private readonly firestore: AngularFirestore
  ) { }

  filter(
    orderByRate: Order,
    cuisines: Array<string>,
    restaurantName: string
  ) {
    return from(this.firestore.collection<Restaurant>('restaurant').ref
      .where('name', '>=', restaurantName)
      .where('tags', 'array-contains-any', cuisines)
      .orderBy('rating', orderByRate).get());
  }
}
