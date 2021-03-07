import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Veuve} from '../models/Veuve';
import {Parrain} from '../models/Parrain';

@Injectable({
  providedIn: 'root'
})
export class VeuveService {

  constructor(private http: HttpClient) { }
  ajouterVeuve(veuve: Veuve): void{
    this.http.post<Parrain>('localhost:8080/veuve', {title: 'veuve'}).subscribe(data => {
      console.log(data);
    });
  }
}
