import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nom-hotel',
  templateUrl: './nom-hotel.component.html',
  styleUrls: ['./nom-hotel.component.css']
})
export class NomHotelComponent implements OnInit {
  @Input() nomHotel:string = " ";

  constructor() { }

  ngOnInit(): void {
  }

}
