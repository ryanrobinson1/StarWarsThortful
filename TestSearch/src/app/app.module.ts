import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/header/header.component';
import { PeopleComponent } from './People/people/people.component';
import { PlanetsComponent } from './Planets/planets/planets.component';
import { HomeComponent } from './Home/home/home.component';
import { SimpleCardComponent } from './Home/simple-card/simple-card.component';
import { CardComponent } from './Cards/card/card.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, PeopleComponent, PlanetsComponent, HomeComponent, SimpleCardComponent, CardComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
