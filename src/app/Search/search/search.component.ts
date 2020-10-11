import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PeopleService } from '../../Service/People/people.service';
import { PeopleModel } from 'src/app/Models/PeopleModel';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  @Input() searchType: string;
  @Output() updatedSearchDataEvent = new EventEmitter<any>();
  placeholderText: string = 'Search For Characters....';

  constructor(private peopleService: PeopleService) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    switch (this.searchType) {
      case 'People':
        this.peopleService
          .searchPeople(form.value.searchTerm)
          .subscribe((res) => {
            this.updatedSearchDataEvent.emit(res);
          });
        break;
      default:
        break;
    }
  }
}
