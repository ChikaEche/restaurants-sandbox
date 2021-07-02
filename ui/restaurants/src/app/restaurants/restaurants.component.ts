import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from '../core/services/restaurants.service';
import { Restaurant } from '../core/interface/restaurant';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent {

  constructor(
    public readonly restaurantsService: RestaurantsService
  ) { }

}
