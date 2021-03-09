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
  }

  addVeuve() {
    this.viewVeuve = true;
    this.viewOrphelin = false;
  }

  addOrphelin() {
    this.viewOrphelin = true;
    this.viewVeuve = false;
  }
}
