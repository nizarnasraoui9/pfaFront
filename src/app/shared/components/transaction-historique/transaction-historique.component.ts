import {Component, Input, OnInit} from '@angular/core';
import {TransactionService} from '../../services/transaction.service';

@Component({
  selector: 'app-transaction-historique',
  templateUrl: './transaction-historique.component.html',
  styleUrls: ['./transaction-historique.component.css']
})
export class TransactionHistoriqueComponent implements OnInit {
  @Input() personId: number;
  transaction: any;

  constructor(private ts: TransactionService ) { }

  ngOnInit(): void {
    let result= this.ts.getTransactions(this.personId);
    result.subscribe((response) => {
      this.transaction = response;
      console.log(response);
    });

  }

}
