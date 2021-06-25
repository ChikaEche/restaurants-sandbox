import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Restaurant } from '../interface/restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  constructor(
    private readonly firestore: AngularFirestore
  ) { }

  get() {
    return this.firestore.collection<Restaurant>('restaurants').valueChanges().pipe(
      map((doc) => doc)
    )
  }
}
