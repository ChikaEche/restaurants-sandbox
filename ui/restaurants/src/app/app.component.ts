import { Component } from '@angular/core';
import { RestaurantsService } from './core/services/restaurants.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor(
    private readonly restaurantsService: RestaurantsService
  ) {
    //restaurantsService.get()
  }
}
