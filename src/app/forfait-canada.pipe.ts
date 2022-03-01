import { Pipe, PipeTransform } from '@angular/core';
import { MiniForfait } from './mini-forfait';  /* MON INTERFACE */

@Pipe({
  name: 'forfaitCanada'
})
export class ForfaitCanadaPipe implements PipeTransform { 
 
  transform(forfaits: MiniForfait[]): MiniForfait[] {
    return forfaits.filter(forfait => forfait.destination == "Canada");
  }
}
