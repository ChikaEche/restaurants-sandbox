import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CuisineOptionsService {

  cuisineOptions$ = new Subject<Array<string>>();

  constructor(private readonly firestore: AngularFirestore) { 
    this.firestore.doc<{[options: string]: Array<string>}>('cuisines/options').valueChanges().pipe(
      tap((cuisines) => {
        this.cuisineOptions$.next(cuisines.options);
      })
    ).subscribe();
  }
}
