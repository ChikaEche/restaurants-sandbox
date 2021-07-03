import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, tap, switchMap } from 'rxjs/operators';
import { SearchService } from '../core/services/search.service';
import { getStars } from '../core/util/stars';
import { Restaurant } from '../core/interface/restaurant';
import { Subject, of } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchField = new FormControl();

  constructor(
    private readonly searchService: SearchService
  ) {
    this.searchField.valueChanges.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      switchMap((result) => {
        return this.searchService.get(result);
      }),
      tap((searchResult) => {
        let searchData: Array<Restaurant> = null;
        if (searchResult) {
          searchData = searchResult.hits.map((result) => {
            const stars = getStars(result.rating);
            return {...result, stars};
          });
        }
        this.searchService.restaurants$.next(searchData ??  null);
      })
    ).subscribe();
  }

}
