import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';


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
  parrainPath: string ;
  parrain: object;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.imageControllerPath = 'http://localhost:8080/image/' + this.person.id;
    this.parrainPath = 'http://localhost:8080/veuve/' + this.person.id + '/parrains';
    let tab: object[];
    let path: string;
    path = 'http://localhost:8080/recherche/ali/ali';
    let obs = this.http.get(path);
    obs.subscribe((response) => {
      this.parrain = response;
    });
  }
  uploadImage(): any {
    this.imagePressed = true;
  }


  postMethod(files: FileList) {this.fileToUpload = files.item(0); const formData = new FormData(); formData.append('imageFile', this.fileToUpload, this.fileToUpload.name); this.http.post(this.imageControllerPath, formData).subscribe((val) => {

    console.log(val);
  });
                               return false; }
}
