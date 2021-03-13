import { Component, OnInit } from '@angular/core';
import {Orphelin} from '../../models/Orphelin';
import {OrphelinService} from '../../services/orphelin.service';

@Component({
  selector: 'app-ajouter-orphelin',
  templateUrl: './ajouter-orphelin.component.html',
  styleUrls: ['./ajouter-orphelin.component.css']
})
export class AjouterOrphelinComponent implements OnInit {
  nom: string;
  prenom: string;
  dateDeNaissance: string;
  adresse: string;
  numTel: number;
  cin: number;
  dateOuvertureDossier: string;
  niveauScolaire: string;
  infoTravail: string;
  revenueMonsuel: number;
  montantAideMonsuelle: number;
  siutationSanitaire: string;
  typeCouvertureSociale: string;
  coutMedicaments: number;
  jourNaissance: string;
  moisNaissance: string;
  anneeNaissance: string;
  jourDeces: string;
  moisDeces: string;
  anneeDeces: string;
  jourOuverture: string;
  moisOuverture: string;
  anneeOuverture: string;
  sexe: string;
  situationConjugale: string;

  constructor(private orphelinService: OrphelinService) { }
  matriculeMother: number;

  ngOnInit(): void {

  }
  submit() {
    let orphelin: Orphelin = {
      matricule: this.matriculeMother,
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
      sexe: this.sexe,
      situationConjugale: this.situationConjugale
    };
    this.orphelinService.addOrphelin(orphelin).subscribe((response) => {
      window.alert('orphelin ajouté!ajouter son frère si vous voulez');
      location.reload();
    });

  }
}
