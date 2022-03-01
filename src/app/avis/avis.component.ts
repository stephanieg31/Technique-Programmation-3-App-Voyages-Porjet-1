import { Component,Input, OnInit } from '@angular/core';
import { MiniForfait} from '../mini-forfait'; /* INTERFACE */
import { ForfaitService } from '../forfait.service'; /* SERVICE*/

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.css']
})
export class AvisComponent implements OnInit {
  forfaits: MiniForfait[] = [];

 @Input() nombreAvis:number = 0;
  

   constructor(private forfaitService: ForfaitService) { }

   ngOnInit(): void {
    this.getForfaits();
  }

  getForfaits(): void {
    this.forfaitService.getForfaits()
      .subscribe(resultat => this.forfaits = resultat);
  }

}
