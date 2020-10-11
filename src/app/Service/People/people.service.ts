import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpErrorResponse,
} from '@angular/common/http';
import { PeopleModel } from '../../Models/PeopleModel';
import { Observable, throwError, Subject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

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

  searchPeopleStubbed() {
    this.subject.next(this.loadDummyData());
  }

  loadDummyData() {
    let dummyData = new PeopleModel();
    dummyData.name = 'Ryan Robinson';
    dummyData.gender = 'Male';
    dummyData.birth_year = '1700';
    dummyData.mass = 200;
    dummyData.height = 212;
    dummyData.hair_color = 'Pink';
    dummyData.skin_color = 'Magenta';
    dummyData.eye_color = 'Brown';

    return dummyData;
  }
}
