import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/header/header.component';
import { PeopleComponent } from './People/people/people.component';
import { HomeComponent } from './Home/home/home.component';
import { SimpleCardComponent } from './Cards/simple-card/simple-card.component';
import { CardComponent } from './Cards/card/card.component';
import { SearchComponent } from './Search/search/search.component';
import { AccountComponent } from './Account/account/account.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PeopleComponent,
    HomeComponent,
    SimpleCardComponent,
    CardComponent,
    SearchComponent,
    AccountComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
