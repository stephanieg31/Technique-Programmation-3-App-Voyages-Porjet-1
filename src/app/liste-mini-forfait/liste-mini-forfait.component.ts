import { Component,Input, OnInit } from '@angular/core';

import { MiniForfait } from "../mini-forfait";
/* Importation de mon interface */

import { MINIFORFAIT } from "../mock-miniforfait";
/* Importation de mon fichier mock-forfaits */


@Component({
  selector: 'app-liste-mini-forfait',
  templateUrl: './liste-mini-forfait.component.html',
  styleUrls: ['./liste-mini-forfait.component.css']
})
export class ListeMiniForfaitComponent implements OnInit {

  miniforfaits : MiniForfait [] = MINIFORFAIT;

  @Input() enVedette : boolean = true; 

  constructor() { }

  ngOnInit(): void {
  }

}
