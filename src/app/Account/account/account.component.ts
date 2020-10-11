import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../Service/Internal/theme.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit {
  isOriginalTheme: boolean = this.themeService.isOriginalTheme;

  darkMode: string = '#2e2e2e';
  lightMode: string = '#f7f5f5';

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.themeObservable.subscribe((res) => {
      this.isOriginalTheme = res;
      this.updateBody();
    });
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  updateBody() {
    this.isOriginalTheme
      ? (document.body.style.background = this.lightMode)
      : (document.body.style.background = this.darkMode);
  }
}
