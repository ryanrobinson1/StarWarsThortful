import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { PeopleModel } from '../../Models/PeopleModel';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  constructor(private http: HttpClient) {}

  searchPeople(query: string): Observable<PeopleModel> {
    console.log('***** BEGIN SEARCH PEOPLE ****** with query', query);
    let peopleSearchURL: string = 'https://swapi.dev/api/people'; // URL to web api
    let params = new HttpParams().set('search', query);

    return this.http
      .get<PeopleModel>(peopleSearchURL, { params })
      .pipe(
        map((data: any) => {
          // console.log(data.results[0]);
          return data.results[0];
        })
      );
  }
}
