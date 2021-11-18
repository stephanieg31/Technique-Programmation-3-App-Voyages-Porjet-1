import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sejour',
  templateUrl: './sejour.component.html',
  styleUrls: ['./sejour.component.css']
})
export class SejourComponent implements OnInit {

  @Input() dateDepart:string = " ";
  @Input() nbrJours:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
