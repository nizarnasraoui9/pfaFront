import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajouter-dossier',
  templateUrl: './ajouter-dossier.component.html',
  styleUrls: ['./ajouter-dossier.component.css']
})
export class AjouterDossierComponent implements OnInit {
  viewVeuve: boolean;
  viewOrphelin: boolean;
  constructor() { }

  ngOnInit(): void {
    this.viewVeuve= true;
  }



  addOrphelin() {
    this.viewOrphelin = true;
    this.viewVeuve = false;
  }
}
