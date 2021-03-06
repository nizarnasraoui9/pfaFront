import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Parrain} from '../models/Parrain';

@Injectable({
  providedIn: 'root'
})
export class ParrainServiceService {

  constructor(private http: HttpClient) { }
  ajouterParrain(parrain: Parrain): void{
    this.http.post<Parrain>('localhost:8080/parrain', {title: 'ajoutParrain'}).subscribe(data => {
      console.log(data);
    });
  }
}
