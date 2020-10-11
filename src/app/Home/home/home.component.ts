import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  people: string = '../../../assets/images/people.jpg';
  planets: string = '../../../assets/images/account.jpg';

  peopleText: string = 'Search Characters';
  accountText: string = 'Account';
  linkToPeople: string = '/people';
  linkToAccount: string = '/account';
  constructor() {}

  ngOnInit(): void {}
}
