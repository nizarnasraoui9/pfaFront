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
  veuve: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  search() {
    let path: string;
    path = 'http://localhost:8080/recherche/ali/ali';
    console.log(path);
    console.log(this.veuve);
    console.log(typeof(this.veuve));
    const obs = this.http.get(path);
    let result: any[];
    obs.subscribe((response) => {
      let i = 0;
      while ( response[i]){
        console.log(response[i]);
        result.push(response[i]);
        i++;
      }


    });
  }
}
 /*
 localhost:8080/recherche/ali/ali
path = 'http://localhost:8080/recherche/' + this.nom + '/' + this.prenom;
 __proto__:

  */
