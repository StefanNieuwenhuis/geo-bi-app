import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Filter } from '../../shared/models/filter';

@Component({
  selector: 'app-map-filter',
  templateUrl: './map-filter.component.html',
  styleUrls: ['./map-filter.component.css']
})
export class MapFilterComponent implements OnInit {
  filter: Filter;

  population = { "display": "Population", "min": 0, "max": 900000, "step": 1000 };
  households = { "display": "Households", "min": 0, "max": 435000, "step": 1000 };
  popDensity = { "display": "Population density (per sq. km)", "min": 0, "max": 30000, "step": 100 };
  avgPowerUsage = { "display": "Avg. power usage (kWh)", "min": 0, "max": 7500, "step": 10 };

  @Output() onFilterChanged = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.filter = {
      name: null,
      population: 900000,
      households: 435000,
      popDensity: 30000,
      avgPowerUsage: 7500
    };
  }

  save(isValid: boolean, f: Filter): void {
    if (!isValid) return;
    this.onFilterChanged.emit(f);
  }

  reset() {
    this.filter = {
      name: null,
      population: 900000,
      households: 435000,
      popDensity: 30000,
      avgPowerUsage: 7500
    };
    this.onFilterChanged.emit(this.filter);
  }


}
