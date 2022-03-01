import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-graphique1',
  templateUrl: './graphique1.component.html',
  styleUrls: ['./graphique1.component.css']
})
export class Graphique1Component implements OnInit {

  public monGraphique = {
    type: <ChartType>'bar',
    legende: true,
    plugins:[],
    options: { responsive: true, maintainAspectRatio: false }
  };

  public mesDonnees: ChartData<'bar', number[], string | string[]> = {
    labels: ['2018', '2019', '2020', '2021'],
    datasets: [
      { data: [5028, 6597, 485, 800,], label: 'Nombre de voyage au Canada' },
      { data: [7895, 24896, 528, 898], label: 'Nombre de voyage à Paris' }
    ]
  };
  constructor() { }

  ngOnInit(): void {
  }

}
