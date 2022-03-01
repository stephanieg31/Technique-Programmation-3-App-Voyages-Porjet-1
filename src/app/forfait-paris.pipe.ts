import { Pipe, PipeTransform } from '@angular/core';
import { MiniForfait } from './mini-forfait';  /* MON INTERFACE */

@Pipe({
  name: 'forfaitParis'
})
export class ForfaitParisPipe implements PipeTransform {

  transform(forfaits: MiniForfait[]): MiniForfait[] {
    return forfaits.filter(forfait => forfait.destination == "Paris");
  }
}





