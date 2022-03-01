import { Component, OnInit } from '@angular/core';
import { MiniForfait} from '../mini-forfait'; /* INTERFACE */
import { ForfaitService } from '../forfait.service'; /* SERVICE*/

import { NgForm } from '@angular/forms';  // Permet de vérifier si le formulaire est valide
import {MatTable} from '@angular/material/table';  // Permet de mettre à jour les données du tableau 



@Component({
  selector: 'app-table-forfaits',
  templateUrl: './table-forfaits.component.html',
  styleUrls: ['./table-forfaits.component.css']
})
export class TableForfaitsComponent implements OnInit {
  forfaits: MiniForfait[] = [];
  selectedForfait?: MiniForfait;
  columnsToDisplay = ['destination', "nomHotel", "prix", 'actions'];


 
  constructor(private forfaitService: ForfaitService) { }

  ngOnInit(): void {
    this.getForfaits();
  }

  getForfaits(): void {
    this.forfaitService.getForfaits()
      .subscribe(resultat => this.forfaits = resultat);
  }

  onDelete(forfait: MiniForfait): void {
    this.forfaitService.deleteForfait(forfait.id)
      .subscribe(result => this.forfaits = this.forfaits.filter(p => p !== forfait));
  }

  onSelect(forfait: MiniForfait): void {
    this.selectedForfait = forfait; 
  }

  onEdit(forfaitFormEdition: NgForm): void {
    if (forfaitFormEdition.valid && this.selectedForfait != null) {
      this.forfaitService.editForfait(this.selectedForfait)
          .subscribe(() => this.selectedForfait = undefined);
    }
  }
}




