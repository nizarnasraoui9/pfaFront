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

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.imageControllerPath = 'http://localhost:8080/image/' + this.person.id;

    console.log(this.person);
  }
  uploadImage(): any {
    this.imagePressed= true;
  }


  postMethod(files: FileList) {this.fileToUpload = files.item(0); let formData = new FormData(); formData.append('imageFile', this.fileToUpload, this.fileToUpload.name); this.http.post(this.imageControllerPath, formData).subscribe((val) => {

    console.log(val);
  });
                               return false; }
}
