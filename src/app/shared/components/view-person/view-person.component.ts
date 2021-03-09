import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TransactionService} from '../../services/transaction.service';


@Component({
  selector: 'app-view-person',
  templateUrl: './view-person.component.html',
  styleUrls: ['./view-person.component.css']
})
export class ViewPersonComponent implements OnInit {
  @Input() person: any;
  imageControllerPath: string;
  private fileToUpload: any;
  imagePressed: boolean;
  ajouterDonneurPressed: boolean;
  parrainPath: string ;
  parrain: any;
  nomDonneur: string;
  prenomDonneur: string;
  images: any;
  viewImage: boolean;
  viewHistoriqueTransactions: boolean;
  montant: number;


  constructor(private http: HttpClient, private ts: TransactionService) { }

  ngOnInit(): void {
    this.imageControllerPath = 'http://localhost:8080/image/' + this.person.id;
    this.parrainPath = 'http://localhost:8080/veuve/' + this.person.id + '/parrains';
    console.log(this.parrainPath);
    let tab: object[];
    let path: string;
    path = this.parrainPath;
    let obs = this.http.get(path);
    obs.subscribe((response) => {
      this.parrain = response;
      this.parrain = this.parrain._embedded.parrain;
    });
    this.http.get('http://localhost:8080/veuve/1/images').subscribe(response => {
      this.images = response;
      this.images = this.images._embedded;
    });
  }
  uploadImage(): any {
    this.imagePressed = true;
  }


  postMethod(files: FileList) {this.fileToUpload = files.item(0); const formData = new FormData(); formData.append('imageFile', this.fileToUpload, this.fileToUpload.name); this.http.post(this.imageControllerPath, formData).subscribe((val) => {
    console.log(val);
  });
                               return false; }
  addDonneurPressed() {
    this.ajouterDonneurPressed = true;
  }

  ajouterDonneur() {
    let path: string = 'http://localhost:8080/addParrain/' + this.nomDonneur + '/' + this.prenomDonneur + '/' + this.person.id;
    this.http.post<any>(path, null).subscribe(response =>  {
      console.log(response);
    });
  }

  viewImages() {
    this.viewImage = true;
  }

  transactionsHistorique() {
    this.viewHistoriqueTransactions = true;
  }

  verserTransaction(id: number) {
    this.ts.verserTransaction(this.person.id, id, this.montant).subscribe((result) =>{
      console.log(result);
    });

  }


}
