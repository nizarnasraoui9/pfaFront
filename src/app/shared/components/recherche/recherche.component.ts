import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {
  nom: string;
  prenom: string;
  result: object;
  viewSearch: boolean;
  viewResult: boolean;
  selectedPerson: object;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.viewSearch = true;
  }

  search() {
    let tab: object[];
    let path: string;
    path = 'http://localhost:8080/recherche/' + this.nom + '/' + this.prenom;
    let obs = this.http.get(path);
    obs.subscribe((response) => {
      this.result = response;
    });

  }

  viewPerson(i: object) {
    this.viewSearch = false;
    this.selectedPerson = i;
    this.viewResult = true;


  }
}
 /*
 localhost:8080/recherche/ali/ali

 __proto__:

  */
