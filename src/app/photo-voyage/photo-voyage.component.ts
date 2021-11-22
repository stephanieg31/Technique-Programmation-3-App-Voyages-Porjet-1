import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-voyage',
  templateUrl: './photo-voyage.component.html',
  styleUrls: ['./photo-voyage.component.css']
})
export class PhotoVoyageComponent implements OnInit {
  @Input() photoVoyage:string = " ";

  constructor() { }

  ngOnInit(): void {
  }

}
