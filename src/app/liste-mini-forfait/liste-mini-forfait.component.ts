import { Component,Input, OnInit } from '@angular/core';
import { ForfaitService } from '../forfait.service';

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

  @Input() vedette : boolean = true; 



constructor(private forfaitService: ForfaitService) { }

ngOnInit(): void {
  this.getForfaits();
}

getForfaits(): void {
  this.forfaitService.getForfaits()
      .subscribe(resultat => this.miniforfaits = resultat);
}
}
