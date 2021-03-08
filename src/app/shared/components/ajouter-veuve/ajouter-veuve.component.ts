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
  cin: number;
  rib: number;
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
  jourDeces: string;
  moisDeces: string;
  anneeDeces: string;
  jourOuverture: string;
  moisOuverture: string;
  anneeOuverture: string;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  submit() {
    let veuve: Veuve = {
      cin : this.cin,
      dateOuvertureDossier: this.anneeOuverture + '-' + this.moisOuverture + '-' + this.jourOuverture ,
      nom: this.nom,
      prenom: this.prenom,
      dateDeNaissance: this.anneeNaissance + '-' + this.moisNaissance + '-' + this.jourNaissance,
      numTel: this.numTel,
      adresse: this.adresse,
      niveauScolaire: this.niveauScolaire,
      infoTravail: this.infoTravail,
      revenueMonsuel: this.revenueMonsuel,
      montantAideMonsuelle: this.montantAideMonsuelle,
      siutationSanitaire: this.siutationSanitaire,
      typeCouvertureSociale: this.typeCouvertureSociale,
      coutMedicaments: this.coutMedicaments,
      nombreEnfants: this.nombreEnfants,
      nombreEnfantsParrainees: this.nombreEnfantsParrainees,
      rib: this.rib,
      dateDecesMari: this.anneeDeces + '-' + this.moisDeces + '-' + this.jourDeces
    };

    this.http.post<any>('http://localhost:8080/veuve', veuve)
    .subscribe(response => {
      console.log(response);
    });

  }
}
 /*
 let veuve: Veuve = {
      CIN : this.cin,
      dateOuvertureDossier: this.anneeOuverture + '-' + this.moisOuverture + '-' + this.jourOuverture ,
      nom: this.nom,
      prenom: this.prenom,
      dateDeNaissance: this.anneeNaissance + '-' + this.moisNaissance + '-' + this.jourNaissance ,
      numTel: this.numTel,
      adresse: this.adresse,
      niveauScolaire: this.niveauScolaire,
      infoTravail: this.infoTravail,
      revenueMonsuel: this.revenueMonsuel,
      montantAideMonsuelle: this.montantAideMonsuelle,
      siutationSanitaire: this.siutationSanitaire,
      typeCouvertureSociale: this.typeCouvertureSociale,
      coutMedicaments: this.coutMedicaments,
      nombreEnfants: this.nombreEnfants,
      nombreEnfantsParrainees: this.nombreEnfantsParrainees,
      RIB: this.rib,
      dateDecesMari: this.anneeDeces + '-' + this.moisDeces + '-' + this.jourDeces
    };*/
