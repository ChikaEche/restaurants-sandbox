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
      map((restaurants) => this.restaurants = [...restaurants]),
      catchError((err) => {
        console.error({err})
        return of(null)
      })
    ).subscribe();
  }

}
