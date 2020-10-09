import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './Home/home/home.component';
import { PeopleComponent } from './People/people/people.component';
import { PlanetsComponent } from './Planets/planets/planets.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'people', component: PeopleComponent },
  { path: 'planets', component: PlanetsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
