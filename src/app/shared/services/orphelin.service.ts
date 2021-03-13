import { Injectable } from '@angular/core';
import {Orphelin} from '../models/Orphelin';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrphelinService {

  constructor(private http: HttpClient) { }
  addOrphelin(orphelin: Orphelin): Observable<any>{
    return this.http.post<any>('http://localhost:8080/orphelin', orphelin);
  }
}
