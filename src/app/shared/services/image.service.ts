import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private imageControllerPath: string;
  private fileToUpload: any;

  constructor(private http: HttpClient) {
  }

  addImage(files: FileList): any {
    this.fileToUpload = files.item(0);
    const formData = new FormData();
    formData.append('imageFile', this.fileToUpload, this.fileToUpload.name);
    this.http.post(this.imageControllerPath, formData).subscribe((val) => {
      console.log(val);
    });
  }
}
