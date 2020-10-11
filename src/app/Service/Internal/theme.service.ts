import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  subject = new Subject<boolean>();
  themeObservable = this.subject.asObservable();
  public isOriginalTheme: boolean;

  constructor() {}

  toggleTheme() {
    this.isOriginalTheme = !this.isOriginalTheme;
    this.subject.next(this.isOriginalTheme);
  }

  initTheme() {
    this.isOriginalTheme = true;
  }
}
