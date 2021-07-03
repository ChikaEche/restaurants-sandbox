import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchField = new FormControl();

  constructor() {
    this.searchField.valueChanges.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      tap((result) => console.log(result))
    ).subscribe();
  }

}
