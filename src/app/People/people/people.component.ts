import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../Service/People/people.service';
import { PeopleModel } from 'src/app/Models/PeopleModel';
import { ThemeService } from 'src/app/Service/Internal/theme.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
})
export class PeopleComponent implements OnInit {
  cardImage: string = '../../../assets/images/people.jpg';
  peopleModel: PeopleModel;

  searchType: string = 'People';
  searchForCharacters: string = 'Search For Characters';
  isOriginalTheme: boolean = this.themeService.isOriginalTheme;

  constructor(
    private peopleService: PeopleService,
    private themeService: ThemeService
  ) {}

  ngOnInit(): void {
    // this.peopleService.searchPeople('obi').subscribe((res) => {
    //   this.peopleModel = res;
    // });
    this.peopleModel = this.loadDummyData();
  }

  updatePeopleModelData(event) {
    this.peopleModel = event;
  }

  loadDummyData() {
    let dummyData = new PeopleModel();
    dummyData.name = 'Ryan Robinson';
    dummyData.gender = 'Male';
    dummyData.birth_year = '1700';
    dummyData.mass = 200;
    dummyData.height = 212;
    dummyData.hair_color = 'Pink';
    dummyData.skin_color = 'Magenta';
    dummyData.eye_color = 'Brown';

    return dummyData;
  }
}
