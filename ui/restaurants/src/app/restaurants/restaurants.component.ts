import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from '../core/services/restaurants.service';
import { Restaurant } from '../core/interface/restaurant';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {

  restaurants: Restaurant[];

  constructor(
    private readonly restaurantsService: RestaurantsService
  ) { }

  ngOnInit() {
    this.restaurantsService.get().pipe(
      map((restaurants) => {
        this.restaurants = restaurants.map((restaurant) => {
          let stars = [
            ...new Array(Math.floor(restaurant.rating)).fill(1),
            ...new Array(Math.round(restaurant.rating) - Math.floor(restaurant.rating)).fill(0.5)
          ];
          stars = [...stars, ...new Array(Math.floor(5 - stars.length)).fill(0)];
          return {...restaurant, stars};
        });
      }),
      catchError((err) => {
        console.error({err});
        return of(null);
      })
    ).subscribe();

  }

}
