import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { ForfaitService } from '../forfait.service';
import { MiniForfait } from '../mini-forfait';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formulaire-forfaits',
  templateUrl: './formulaire-forfaits.component.html',
  styleUrls: ['./formulaire-forfaits.component.css']
})
export class FormulaireForfaitsComponent implements OnInit {
  @Input() forfait:  MiniForfait = { id: '', destination: " ", villeDepart : " ", dateDepart  : " ", dateRetour : " ", prix : 0, rabais : 0, vedette : true, hotel : {  nomHotel : " ", adresse :" ", nbrChambres : 0, etoiles : 0} , caracteristiques : [], nombreAvis : 0, nbrJours : 0, photoVoyage : " ", }
  
  @Output() majTableau = new EventEmitter();

    constructor(private forfaitService: ForfaitService) { }

  ngOnInit(): void {
  }

    onSave(forfaitForm: NgForm) {
      if (forfaitForm.valid) {
        if (this.forfait.id != null && this.forfait.id != '') {
          // Si on a un id, on doit modifier le forfait
          this.forfaitService.editForfait(this.forfait).subscribe(_ => { /* todo : mettre à jour le tableau */ });
        } 
        
          else { 
            // Sinon, on doit ajouter au forfait
            this.forfaitService.addForfait(this.forfait).subscribe(_ => { /* todo : mettre à jour le tableau */});
          }
      }
        
    }

}





