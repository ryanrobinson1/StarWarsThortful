import { Component, OnInit, Input } from '@angular/core';
import { ThemeService } from 'src/app/Service/Internal/theme.service';

@Component({
  selector: 'app-simple-card',
  templateUrl: './simple-card.component.html',
  styleUrls: ['./simple-card.component.css'],
})
export class SimpleCardComponent implements OnInit {
  @Input() imgSrc: string;
  @Input() simpleCardTitle: string;
  @Input() navigationLink: string;
  isOriginalTheme: boolean = this.themeService.isOriginalTheme;

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.themeObservable.subscribe((res) => {
      this.isOriginalTheme = res;
    });
  }
}
