import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DataService } from '../shared/data.service';
import { Area } from '../shared/area';
import 'rxjs/add/operator/switchMap';

import { ChartModule } from 'angular2-chartjs';

@Component({
  selector: 'app-area-detail',
  templateUrl: './area-detail.component.html',
  styleUrls: ['./area-detail.component.css']
})
export class AreaDetailComponent implements OnInit {
  area: Area;

  bar = 'bar';
  pie = 'pie';

  populationData: Object;
  areaData: Object;
  options = { responsive: true, maintainAspectRation: false };

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.dataService.getTownById(+params['id']))
      .subscribe((area: Area) => {
        this.area = area[0].attributes;

        // population chart
        this.populationData = {
          "labels": ["Male", "Female"],
          datasets: [{
            "label": "Value",
            "data": [this.area.aant_man, this.area.aant_vrouw],
            "backgroundColor": ['#0097AC', '#C0362C']
          }]
        };

        // area chart
        this.areaData = {
          "labels": ["Land", "Water"],
          datasets: [{
            "label": "Value",
            "data": [this.area.opp_land, this.area.opp_water],
            "backgroundColor": ['#668D3C','#0097AC']
          }]
        };
      });
  }

}
