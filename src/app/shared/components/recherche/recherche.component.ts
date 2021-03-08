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
  veuve: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  search() {
    let tab: object[];
    let path: string;
    path = 'http://localhost:8080/recherche/ali/ali';
    let obs = this.http.get(path);
    obs.subscribe((response) => {
      this.result = response;
      console.log(this.result[0]);
    });

  }

  viewPerson(i: object) {

  }
}
 /*
 localhost:8080/recherche/ali/ali
path = 'http://localhost:8080/recherche/' + this.nom + '/' + this.prenom;
 __proto__:

  */
