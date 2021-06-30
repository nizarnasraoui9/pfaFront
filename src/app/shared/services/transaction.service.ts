import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Parrain} from '../models/Parrain';
import {Transaction} from '../models/Transaction';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) { }
  getTransactions(id: number): Observable<any>{
    let path= 'http://localhost:8080/transaction/' + id;
    return this.http.get(path);
  }
  verserTransaction(idParrain: number, idPersonne: number, montant: number): Observable<any>{
    let transaction: any =
    {
      parrainId: idParrain,
      personneId: idPersonne,
      montant: montant


    };
    let result= this.http.post('http://localhost:8080/transaction',transaction);
    return result;

  }
}
