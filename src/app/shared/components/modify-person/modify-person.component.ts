import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TransactionService} from '../../services/transaction.service';
import {ImageService} from '../../services/image.service';
import {VeuveService} from '../../services/veuve.service';
import {OrphelinService} from '../../services/orphelin.service';

@Component({
  selector: 'app-modify-person',
  templateUrl: './modify-person.component.html',
  styleUrls: ['./modify-person.component.css']
})
export class ModifyPersonComponent implements OnInit {
  @Input() person;
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
  anneeNaissance: string;
  jourDeces: string;
  anneeDeces: string;
  anneeOuverture: string;
  matricule: number;
  imageControllerPath: string;
  parrainPath: string ;
  parrain: any;
  nomParrain: string;
  prenomParrain: string;
  images: any;
  montant: number;
  typePersonne: string;
  veuve: boolean;


  // tslint:disable-next-line:max-line-length
  constructor(private http: HttpClient, private ts: TransactionService, private imageService: ImageService, private veuveService: VeuveService, private orphelinService: OrphelinService) { }

  ngOnInit(): void {
    console.log(this.person);
    if (this.person.dateDecesMari === undefined){
      this.typePersonne = 'orphelin';
    }
    else{
      this.typePersonne = 'veuve';
      // tslint:disable-next-line:no-unused-expression
      this.veuve === true;
    }
    this.imageControllerPath = 'http://localhost:8080/image/' + this.person.id;
    this.parrainPath = 'http://localhost:8080/' + this.typePersonne + '/' + this.person.id + '/parrains';
    console.log(this.parrainPath);
    let path: string;
    path = this.parrainPath;
    let obs = this.http.get(path);
    obs.subscribe((response) => {
      this.parrain = response;
      this.parrain = this.parrain._embedded.parrain;
      console.log(this.parrain);
    });

  }

  uploadImage(files: any): any {
    this.http.get('http://localhost:8080/veuve/1/images').subscribe(response => {
      this.images = response;
      this.images = this.images._embedded;
    });

  }


  addImage(files: FileList): any {
    this.imageService.addImage(files);
  }


  ajouterParrain(): any {
    let path: string = 'http://localhost:8080/addParrain/' + this.nomParrain + '/' + this.prenomParrain + '/' + this.person.id;
    this.http.post<any>(path, null).subscribe(response =>  {
      console.log(this.person.id);
    });
  }




  verserTransaction(id: number): any {
    this.ts.verserTransaction(id, this.person.id, this.montant).subscribe((result) => {
      console.log(id);
    });

  }


  modifyNumTel(): any {
    this.person.numTel = this.numTel;
    this.modify();
  }

  modifyAdress(): any {
    this.person.adresse = this.adresse;
    this.modify();

  }

  modifyInfoTravail(): any {
    this.person.infoTravail = this.infoTravail;
    this.modify();
  }

  modifyRevenueMonsuel(): any {
    this.person.revenueMonsuel = this.revenueMonsuel;
    this.modify();
  }

  modifyniveauScolaire(): any {
    this.person.niveauScolaire = this.niveauScolaire;
    this.modify();
  }

  modifyMontantAideMensuelle(): any {
    this.person.montantAideMonsuelle = this.montantAideMonsuelle;
    this.modify();
  }

  modifySituationSanitaire(): any {
    this.person.siutationSanitaire = this.siutationSanitaire;
    this.modify();
  }

  modifyTypeCouvertureSociale(): any {
    this.person.typeCouvertureSociale = this.typeCouvertureSociale;
    this.modify();
  }

  modifyCoutMedicaments(): any {
    this.person.coutMedicaments = this.coutMedicaments;
    this.modify();
  }

  modifyRib(): any {
    this.person.rib = this.rib;
    this.modify();
  }
  modify(): any{
    switch (this.typePersonne){
      case 'veuve': {
        this.veuveService.modifyVeuve(this.person).subscribe(() => {
          window.alert('modifié avec succès!');
        });
        break;
      }
      case 'orphelin': {
        this.orphelinService.modifyOrphelin(this.person).subscribe(() => {
          window.alert('modifié avec succès!');
        });
        break;
      }
      }
    }


  }

