import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/Service/Internal/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  githubLink = 'https://github.com/ryanrobinson1';
  starWarsLogoSrc = '../../../assets/images/starWarsLogo.png';
  isOriginalTheme: boolean = this.themeService.isOriginalTheme;

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.isOriginalTheme = true;
    this.themeService.themeObservable.subscribe((res) => {
      this.isOriginalTheme = res;
    });
  }
}
