import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ville-depart',
  templateUrl: './ville-depart.component.html',
  styleUrls: ['./ville-depart.component.css']
})
export class VilleDepartComponent implements OnInit {

  @Input() villeDepart:string = " ";
  constructor() { }

  ngOnInit(): void {
  }

}
