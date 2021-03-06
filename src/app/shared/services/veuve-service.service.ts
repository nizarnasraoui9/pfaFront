import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Parrain} from '../models/Parrain';
import {Veuve} from '../models/Veuve';

@Injectable({
  providedIn: 'root'
})
export class VeuveServiceService {

  constructor(private http: HttpClient) { }
  ajouterVeuve(veuve: Veuve): void{
    this.http.post<Parrain>('localhost:8080/veuve', {title: 'veuve'}).subscribe(data => {
      console.log(data);
    });
  }
}
