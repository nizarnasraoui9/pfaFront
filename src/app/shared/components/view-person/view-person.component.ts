import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TransactionService} from '../../services/transaction.service';
import {ImageService} from '../../services/image.service';


@Component({
  selector: 'app-view-person',
  templateUrl: './view-person.component.html',
  styleUrls: ['./view-person.component.css']
})
export class ViewPersonComponent implements OnInit {
  @Input() person: any;
  imageControllerPath: string;
  imagePressed: boolean;
  parrainPath: string ;
  parrain: any;
  nomParrain: string;
  prenomParrain: string;
  images: any;
  montant: number;
  typePersonne: string;
  veuve: boolean;


  constructor(private http: HttpClient, private ts: TransactionService, private imageService: ImageService) { }

  ngOnInit(): void {
    if (this.person.dateDecesMari === undefined){
      this.typePersonne = 'orphelin';
    }
    else{
      this.typePersonne = 'veuve';
      this.veuve = true;
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
  uploadImage(): any {
    this.http.get('http://localhost:8080/veuve/1/images').subscribe(response => {
      this.images = response;
      this.images = this.images._embedded;
      this.imagePressed = true;
    });
  }
  addImage(files: FileList): any{
    this.imageService.addImage(files);
  }


  ajouterParrain() {
    let path: string = 'http://localhost:8080/addParrain/' + this.nomParrain + '/' + this.prenomParrain + '/' + this.person.id;
    this.http.post<any>(path, null).subscribe(response =>  {
      console.log(this.person.id);
    });
  }




  verserTransaction(idParrain: number): any {
    this.ts.verserTransaction(idParrain, this.person.id, this.montant).subscribe(() => {
    });
  }


}
