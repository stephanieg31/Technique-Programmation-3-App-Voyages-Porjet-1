import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-depart',
  templateUrl: './date-depart.component.html',
  styleUrls: ['./date-depart.component.css']
})
export class DateDepartComponent implements OnInit {

  @Input() dateDepart:string = " ";
  constructor() { }

  ngOnInit(): void {
  }

}
