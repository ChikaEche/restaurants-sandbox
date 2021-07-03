import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from '../core/services/restaurants.service';
import { Restaurant } from '../core/interface/restaurant';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { BreakPointService } from '../core/services/breakpoint.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent {

  constructor(
    public readonly restaurantsService: RestaurantsService,
    public readonly breakPointService: BreakPointService
  ) { }

}
