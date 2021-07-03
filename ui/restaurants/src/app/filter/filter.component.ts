import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { RestaurantsService } from '../core/services/restaurants.service';
import { Order } from '../core/enums/order';
import { CuisineOptionsService } from '../core/services/cuisine-options.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router,
    private readonly restaurantService: RestaurantsService,
    public readonly cuisineOptionsService: CuisineOptionsService
  ) {
    this.activatedRoute.queryParams.pipe(
      switchMap((params) => {
        return this.restaurantService.filter(params.order, params.cuisine ? JSON.parse(params.cuisine) : null);
      })
    ).subscribe();
  }

  cuisine = new FormControl();
  selectedSort = '';

  search() {
    const queryParams = {
      cuisine: JSON.stringify(this.cuisine.value),
      order: this.selectedSort === 'Ascending' ? 'asc' : 'desc'
    };
    this.router.navigate(['/'], {queryParams});
  }

}
