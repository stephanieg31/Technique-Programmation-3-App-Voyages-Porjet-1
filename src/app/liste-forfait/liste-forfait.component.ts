import { Component, OnInit } from '@angular/core';

import { MiniForfait } from "../mini-forfait";
/* Importation de mon interface */

import { MINIFORFAIT } from "../mock-miniforfait";
/* Importation de mon fichier mock-forfaits */

@Component({
  selector: 'app-liste-forfait',
  templateUrl: './liste-forfait.component.html',
  styleUrls: ['./liste-forfait.component.css']
})
export class ListeForfaitComponent implements OnInit {

  lesforfaits : MiniForfait [] = MINIFORFAIT;

  constructor() { }

  ngOnInit(): void {
  }

}
