import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-retour',
  templateUrl: './date-retour.component.html',
  styleUrls: ['./date-retour.component.css']
})
export class DateRetourComponent implements OnInit {
  @Input() dateRetour:string = " ";

  constructor() { }

  ngOnInit(): void {
  }

}
