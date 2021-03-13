import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Veuve} from '../models/Veuve';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VeuveService {

  constructor(private http: HttpClient) { }

  addVeuve(veuve: Veuve): Observable<any>{
    return this.http.post<any>('http://localhost:8080/veuve', veuve);
  }

}
