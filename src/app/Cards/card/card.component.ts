import { Component, OnInit, Input } from '@angular/core';
import { PeopleModel } from 'src/app/Models/PeopleModel';
import { ThemeService } from '../../Service/Internal/theme.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() cardImage: string;
  @Input() peopleModel: PeopleModel;
  isOriginalTheme: boolean = this.themeService.isOriginalTheme;

  // accordion = document.getElementsByClassName('accordion');
  statusOne: boolean = false;
  statusTwo: boolean = false;
  statusThree: boolean = false;

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {}

  onClickAccordionOne() {
    this.statusOne = !this.statusOne;
  }

  onClickAccordionTwo() {
    this.statusTwo = !this.statusTwo;
  }

  onClickAccordionThree() {
    this.statusThree = !this.statusThree;
  }
}
