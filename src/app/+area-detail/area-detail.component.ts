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

  title: string;

  bar = 'bar';
  pie = 'pie';
  horizontalBar = 'horizontalBar';

  populationData: Object;
  areaData: Object;
  ageData: Object;
  civilStatusData: Object;
  powerData: Object;
  lifeData: Object;
  householdsData: Object;

  options = {
    responsive: true,
    maintainAspectRation: true,
    legend: { "display": false },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };

  barOptions = {
    responsive: true,
    maintainAspectRation: true,
    legend: { "display": false }
  };

  horizontalBarOptions = {
    responsive: true,
    maintainAspectRation: true,
    legend: { "display": false },
    scales: {
      xAxes: [{
        stacked: true,
      }],
      yAxes: [{
        stacked: true
      }]
    }
  };

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
        this.title = `${this.area.gm_naam} area details`;

        // population chart
        this.populationData = {
          "labels": ["Male", "Female"],
          "datasets": [{
            "label": "Value",
            "data": [this.area.aant_man, this.area.aant_vrouw],
            "backgroundColor": ['#D3D3D3', '#696969']
          }],

        };

        // area chart
        this.areaData = {
          "labels": ["Land", "Water"],
          "datasets": [{
            "label": "Value",
            "data": [this.area.opp_land, this.area.opp_water],
            "backgroundColor": ['#D3D3D3', '#696969']
          }]
        };

        // age charts
        this.ageData = {
          "labels": ['0-14', '15-24', '25-44', '45-64', '>65'],
          "datasets": [{
            "type": "bar",
            "label": "Value",
            "data": [this.area.p_00_14_jr, this.area.p_15_24_jr, this.area.p_25_44_jr, this.area.p_45_64_jr, this.area.p_65_eo_jr],
            "backgroundColor": ['#D3D3D3', '#C0C0C0', '#A9A9A9', '#808080', '#696969']
          }]
        };

        // power charts
        this.powerData = {
          "labels": ['Appartments', 'Mid-terrace houses', 'Corner houses', 'Semi-detached houses', 'Ranch houses', 'Unknown'],
          "datasets": [{
            "type": "line",
            "label": "Avg. total value",
            "data": [this.area.p_elek_tot, this.area.p_elek_tot, this.area.p_elek_tot, this.area.p_elek_tot, this.area.p_elek_tot, this.area.p_elek_tot],
            "fill": false,
            "backgroundColor": "red",
            "borderColor": "red",
            "pointBorderColor": "red"
          },
          {
            "type": "bar",
            "label": "Value",
            "data": [this.area.p_elek_app, this.area.p_elek_tus, this.area.p_elek_hoe, this.area.p_elek_21k, this.area.p_elek_vry, this.area.p_elek_onb],
            "backgroundColor": ['#D3D3D3', '#C0C0C0', '#A9A9A9', '#808080', '#696969', '#778899']
          }
          ]
        };

        this.civilStatusData = {
          "labels": ['Married', 'Unmarried', 'Divorced', 'Widowed'],
          "datasets": [{
            "label": "Value",
            "data": [this.area.p_gehuwd, this.area.p_ongehuwd, this.area.p_gescheid, this.area.p_verweduw],
            "backgroundColor": ['#D3D3D3', '#C0C0C0', '#A9A9A9', '#808080']
          }]
        };

        this.lifeData = {
          "labels": ["Birth", "Death"],
          "datasets": [{
            "label": "Value",
            "data": [this.area.geboo_tot, this.area.sterft_tot],
            "backgroundColor": ['#D3D3D3', '#696969']
          }]
        };

        this.householdsData = {
          "labels": ["One person households", "Households with kids", "Households without kids"],
          "datasets":[{
            "label": "Value",
            "data": [this.area.p_eenp_hh, this.area.p_hh_m_k, this.area.p_hh_z_k],
            "backgroundColor": ['#D3D3D3', '#C0C0C0', '#A9A9A9']
          }]
        };
      });
  }
}
