import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-view-person',
  templateUrl: './view-person.component.html',
  styleUrls: ['./view-person.component.css']
})
export class ViewPersonComponent implements OnInit {
  @Input() person: any;

  constructor() { }

  ngOnInit(): void {

    console.log(this.person);
  }

}
