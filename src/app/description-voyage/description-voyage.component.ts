import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-description-voyage',
  templateUrl: './description-voyage.component.html',
  styleUrls: ['./description-voyage.component.css']
})
export class DescriptionVoyageComponent implements OnInit {

  @Input() caracteristiques :string[]=[] ;

  constructor() { }

  ngOnInit(): void {
  }

}
