import { Component, OnInit } from '@angular/core';
import {Veuve} from '../../models/Veuve';
import {VeuveService} from '../../services/veuve.service';
import {Router} from '@angular/router';

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
  matricule: number;
  sexe: string;
  situationConjugale: string;


  constructor(private veuveService: VeuveService, private router: Router) { }

  ngOnInit(): void {
  }

  submit() {
    let veuve: Veuve = {
      matricule: this.matricule,
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

    this.veuveService.addVeuve(veuve).subscribe((response) => {
      window.alert('Veuve ajouté! ajouter maintenant ses fils!');
      this.router.navigate(['/main/ajouterDossier/ajouterOrphelin'], { queryParams: {matriculeMother: this.matricule} });

    });

  }
}
