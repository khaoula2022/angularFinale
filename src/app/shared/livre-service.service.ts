import {  Livres } from './../model/livres';
import { HttpClient ,HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LivresServiceService {
  private url = "http://localhost:3000/livres";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }



  getLivres()
  {
    return this.httpClient.get<Livres[]>(this.url);
  }


  AddBook(l : Livres){
    return this.httpClient.post(this.url, l);
   }


}
