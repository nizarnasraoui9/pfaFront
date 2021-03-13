import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RechercheDossierService} from '../../services/recherche-dossier.service';

@Component({
  selector: 'app-modification',
  templateUrl: './modification.component.html',
  styleUrls: ['./modification.component.css']
})
export class ModificationComponent implements OnInit {
  nom: string;
  prenom: string;
  result: object;
  viewSearch: boolean;
  viewResult: boolean;
  selectedPerson: object;
  matricule: number;

  constructor(private http: HttpClient, private rechercheDossierService: RechercheDossierService) { }

  ngOnInit(): void {
    this.viewSearch = true;
  }

  searchByNomAdnPrenom(): any {
    this.rechercheDossierService.searchByNomAndPrenom(this.nom,this.prenom).subscribe((response)=>{
      this.result = response;
    });
  }

  viewPerson(i: object): any {
    this.viewSearch = false;
    this.selectedPerson = i;
    this.viewResult = true;


  }

  returnToSearch(): any {
    location.reload();
  }

  searchMatricule() {
    this.rechercheDossierService.searchByMatricule(this.matricule).subscribe((response) => {
      console.log(response);
      this.result = response;
    });
  }
}

