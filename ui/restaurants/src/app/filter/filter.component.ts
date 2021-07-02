import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';
import { RestaurantsService } from '../core/services/restaurants.service';
import { Order } from '../core/enums/order';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  constructor(
    private readonly route: ActivatedRoute,
    private readonly restaurantService: RestaurantsService
  ) {
    this.route.queryParams.pipe(
      tap((params) => {
        restaurantService.filter(params.order, params.cuisine);
      })
    ).subscribe();
  }

  ngOnInit(): void {
  }

}
