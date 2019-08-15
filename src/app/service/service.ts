import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Registration } from '../models/registration';

@Injectable()
export class Service {

  constructor(private http: HttpClient) {

  }

  peopleUrl = 'http://localhost:52253/api/person';

  getConfig() {
    return this.http.get(this.peopleUrl);
  }

  /** GET heroes from the server */
  getPeople(): Observable<Registration[]> {
    return this.http.get<Registration[]>(this.peopleUrl)
      .pipe(
      );
  }

  getPerson(id: number): Observable<Registration> {
    return this.http.get<Registration>(this.peopleUrl + "/" + id)
      .pipe(
      );
  }

  addPerson(registration: Registration): Observable<Registration> {
    return this.http.post<Registration>(this.peopleUrl, registration)
      .pipe(
        //catchError(this.handleError('addHero', hero))
      );
  }

  updatePerson(registration: Registration): Observable<Registration> {
    return this.http.put<Registration>(this.peopleUrl + "/" + registration.id, registration)
      .pipe(
        //catchError(this.handleError('updateHero', hero))
      );
  }

  deletePerson(id: number): Observable<{}> {
    return this.http.delete(this.peopleUrl + "/" + id)
      .pipe(
        //catchError(this.handleError('deleteHero'))
      );
  }
}