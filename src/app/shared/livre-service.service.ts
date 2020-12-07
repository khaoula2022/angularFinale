import {  Livres } from './../model/livres';
import { HttpClient ,HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LivresServiceService {
  private url = "http://localhost:3001";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  test = "How r u?";
  constructor(private httpClient: HttpClient) { }
  create(livre): Observable<Livres> {
    return this.httpClient.post<Livres>(this.url + '/livres/', JSON.stringify(livre), this.httpOptions);

  }

  getAll(): Observable<Livres[]> {
    return this.httpClient.get<Livres[]>(this.url + '/livres/');

  }

  getByType(type): Observable<Livres> {
    return this.httpClient.get<Livres>(this.url + '/list/' + type);

  }

}
