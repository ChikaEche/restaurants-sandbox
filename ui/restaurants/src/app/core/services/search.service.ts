import { Injectable } from '@angular/core';
import { MeiliSearch, SearchResponse, SearchParams } from 'meilisearch';
import { from, Subject, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Restaurant } from '../interface/restaurant';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  restaurants$ = new Subject<Restaurant[]>();
  meiliSearch = new MeiliSearch({host: environment.meiliSearch.host, apiKey: environment.meiliSearch.apiKey});

  constructor() { }

  get(searchKeyWord) {
    return searchKeyWord === '' ? of(null) :
       from(this.meiliSearch.index('restaurants').search(searchKeyWord) as Promise<SearchResponse<Restaurant, SearchParams<any>> > );
  }
}
