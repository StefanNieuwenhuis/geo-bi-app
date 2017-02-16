import { Component, OnInit } from '@angular/core';
import { Filter } from '../../shared/models/filter';

import { FilterService } from '../../shared/services/filter.service';

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
  year = { "display": "Year", "min": 2010, "max": 2015, "step": 1 };

  constructor(private filterService: FilterService) { }

  ngOnInit() {
    this.filter = new Filter(null, 900000, 435000, 30000, 7500, 2015);
  }

  save(isValid: boolean, f: Filter): void {
    if (!isValid) return;
    this.filterService.updateFilter(f);
  }

  reset() {
    this.filter = new Filter(null, 900000, 435000, 30000, 7500, 2015);
    this.filterService.updateFilter(this.filter);
  }


}
