import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.css']
})
export class AvisComponent implements OnInit {

  @Input() nombreAvis:number = 0;
  

  constructor() { }

  ngOnInit(): void {
  }

}
