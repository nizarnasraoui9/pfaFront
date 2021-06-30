import { Injectable } from '@angular/core';
import {Orphelin} from '../models/Orphelin';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Veuve} from '../models/Veuve';

@Injectable({
  providedIn: 'root'
})
export class OrphelinService {

  constructor(private http: HttpClient) { }
  addOrphelin(orphelin: Orphelin): Observable<any>{
    return this.http.post<any>('http://localhost:8080/orphelin', orphelin);
  }
  modifyOrphelin(orphelin: any): Observable<any>{
    return this.http.put<Orphelin>('http://localhost:8080/orphelin/' + orphelin.id , orphelin);
  }
}
