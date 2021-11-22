import { Component, Input, OnInit } from '@angular/core';

import { MiniForfait } from "../mini-forfait";
/* Importation de mon interface */



@Component({
  selector: 'app-mini-forfait',
  templateUrl: './mini-forfait.component.html',
  styleUrls: ['./mini-forfait.component.css']
})
export class MiniForfaitComponent implements OnInit {

  @Input() miniforfait? : MiniForfait;  
 

  constructor() { }

  ngOnInit(): void {
  }

}
