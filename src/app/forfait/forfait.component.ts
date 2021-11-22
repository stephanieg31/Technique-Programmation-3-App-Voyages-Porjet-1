import { Component, Input, OnInit } from '@angular/core';

import { MiniForfait } from "../mini-forfait";
/* Importation de mon interface */

@Component({
  selector: 'app-forfait',
  templateUrl: './forfait.component.html',
  styleUrls: ['./forfait.component.css']
})
export class ForfaitComponent implements OnInit {

  @Input() leforfait? : MiniForfait;  

  constructor() { }

  ngOnInit(): void {
  }

}
