import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { PeopleModel } from '../../Models/PeopleModel';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  subject = new Subject<PeopleModel>();
  dummyDataObservable = this.subject.asObservable();

  constructor(private http: HttpClient) {}

  searchPeople(query: string): Observable<PeopleModel> {
    let peopleSearchURL: string = 'https://swapi.dev/api/people';
    let params = new HttpParams().set('search', query);

    return this.http
      .get<PeopleModel>(peopleSearchURL, { params })
      .pipe(
        map((data: any) => {
          return data.results[0];
        })
      );
  }
}
