import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-prix-rabais',
  templateUrl: './prix-rabais.component.html',
  styleUrls: ['./prix-rabais.component.css']
})
export class PrixRabaisComponent implements OnInit {
  @Input() rabais:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
