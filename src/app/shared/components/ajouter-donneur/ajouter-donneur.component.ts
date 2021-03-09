import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Parrain} from '../../models/Parrain';

@Component({
  selector: 'app-ajouter-donneur',
  templateUrl: './ajouter-donneur.component.html',
  styleUrls: ['./ajouter-donneur.component.css']
})
export class AjouterDonneurComponent implements OnInit {
  nom: string;
  prenom: string;
  telephone: number;
  cin: number;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  submit() {
    let parrain: Parrain = {
      cin : this.cin,
      nom: this.nom,
      prenom: this.prenom,
      telephone: this.telephone,
    };

    this.http.post<any>('http://localhost:8080/parrain', parrain)
      .subscribe(response => {
        console.log(response);
      });

  }
}
