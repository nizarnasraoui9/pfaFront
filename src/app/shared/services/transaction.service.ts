import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Parrain} from '../models/Parrain';
import {Transaction} from '../models/Transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) { }
  ajouterTransaction(transaction: Transaction): void{
    this.http.post<Transaction>('localhost:8080/transaction', {title: 'transaction'}).subscribe(data => {
      console.log(data);
    });
  }
}
