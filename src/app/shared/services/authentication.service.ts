import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) {
  }
  addAdmin(name: string, passw: string): Observable<any>{
    let admin: any = {
      username: name,
      password: passw
  };
    console.log(admin);
    this.http.post<any>('http://localhost:8080/admin', admin);
    const result = this.http.post<any>('http://localhost:8080/admin', admin);
    return result;
}

}
