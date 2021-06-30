import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Parrain} from '../models/Parrain';
import {Orphelin} from '../models/Orphelin';

@Injectable({
  providedIn: 'root'
})
export class OrphelinServiceService {

  constructor(private http: HttpClient) { }
  ajouterOrphelin(orphelin: Orphelin): void{
    this.http.post<Orphelin>('localhost:8080/orphelin', {title: 'ajoutOrphelin'}).subscribe(data => {
      console.log(data);
    });

  }
  rechercheOrphelin(nom: string, prenom: string): void{
    let url: string;
    url = 'localhost:8080/recherche/' + nom + '/' + 'prenom';
    this.http.get(url).subscribe(data => {
      console.log(data);
    });

  }

}
