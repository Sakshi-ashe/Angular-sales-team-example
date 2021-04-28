import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  //create an array of objects
   salesPersonList : SalesPerson[] = [
    new SalesPerson("sakshi", "gupta" ,"sak@gmail.com", 600000),
    new SalesPerson("anni", "dev" ,"devA@gmail.com",20000),
    new SalesPerson("jim", "corbet" ,"jico@gmail.com",10),
    new SalesPerson("bitto", "gupta" ,"bitto@gmail.com",2056),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
