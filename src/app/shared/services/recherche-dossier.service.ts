import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RechercheDossierService {

  constructor(private http: HttpClient) { }
  searchByNomAndPrenom(nom: string, prenom: string): Observable<any>{
    let path: string;
    path = 'http://localhost:8080/recherche/' + nom + '/' + prenom;
    return this.http.get(path);
  }
  searchByMatricule(matricule: number){
    let path: string;
    path = 'http://localhost:8080/recherche/' + matricule;
    return this.http.get(path);
  }
}
