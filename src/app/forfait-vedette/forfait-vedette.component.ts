import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-forfait-vedette',
  templateUrl: './forfait-vedette.component.html',
  styleUrls: ['./forfait-vedette.component.css']
})
export class ForfaitVedetteComponent implements OnInit {
  @Input() enVedette = true; 

  constructor() { }

  ngOnInit(): void {
  }

}
