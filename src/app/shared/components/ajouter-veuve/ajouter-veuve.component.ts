import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Veuve} from '../../models/Veuve';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};
@Component({
  selector: 'app-ajouter-veuve',
  templateUrl: './ajouter-veuve.component.html',
  styleUrls: ['./ajouter-veuve.component.css']
})
export class AjouterVeuveComponent implements OnInit {
  nom: string;
  prenom: string;
  dateDeNaissance: string;
  adresse: string;
  numTel: number;
  cin: string;
  rib: string;
  dateOuvertureDossier: string;
  niveauScolaire: string;
  infoTravail: string;
  revenueMonsuel: number;
  montantAideMonsuelle: number;
  siutationSanitaire: string;
  typeCouvertureSociale: string;
  coutMedicaments: number;
  nombreEnfants: number;
  nombreEnfantsParrainees: number;
  dateDecesMari: string;
  jourNaissance: string;
  moisNaissance: string;
  anneeNaissance: string;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  submit() {
    console.log(this.nom);
    let veuve: Veuve = {
      CIN: 0,
      dateOuvertureDossier: '2015-03-31',
      nom: 'ali',
      prenom: 'ali',
      dateDeNaissance: '2015-03-31',
      numTel: 0,
      adresse: '',
      niveauScolaire: '',
      infoTravail: 'aaa',
      revenueMonsuel: 0,
      montantAideMonsuelle: 0,
      siutationSanitaire: '',
      typeCouvertureSociale: '',
      coutMedicaments: 0,
      nombreEnfants: 0,
      nombreEnfantsParrainees: 0,
      RIB: 0,
      dateDecesMari: ''
    };

    console.log(JSON.stringify(veuve));
    this.http.post<Veuve>('localhost:8080/veuve', JSON.stringify(veuve), httpOptions)
    .subscribe(response => {
      console.log(response);
    });

  }
}
