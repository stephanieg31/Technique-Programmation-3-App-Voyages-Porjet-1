import { Component, OnInit, Input } from '@angular/core';

import { MiniForfait } from "../mini-forfait";
/* Importation de mon interface */

import { MINIFORFAIT } from "../mock-miniforfait";
/* Importation de mon fichier mock-forfaits */

import { ForfaitService } from '../forfait.service';
/* Importation de mon service */

@Component({
  selector: 'app-forfait-canada',
  templateUrl: './forfait-canada.component.html',
  styleUrls: ['./forfait-canada.component.css']
})
export class ForfaitCanadaComponent implements OnInit {
  
  lesforfaits : MiniForfait [] = MINIFORFAIT;

    constructor(private forfaitService: ForfaitService) { }

 ngOnInit(): void {
   this.getForfaits();
 }

 getForfaits(): void {
   this.forfaitService.getForfaits()
       .subscribe(resultat => this.lesforfaits = resultat);
 }
}
