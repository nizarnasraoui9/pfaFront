import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
