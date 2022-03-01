import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-graphique2',
  templateUrl: './graphique2.component.html',
  styleUrls: ['./graphique2.component.css']
})
export class Graphique2Component implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }

  public doughnutChartLabels: string[] = [ 'République', 'Canada', 'Europes' ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 45879, 2448, 78594 ] },
      { data: [ 48953,78789, 65884 ] },
      { data: [ 78954, 54896, 78942 ] }
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  

}



