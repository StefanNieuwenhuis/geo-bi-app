import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Area } from '../../shared/area';

@Component({
  selector: 'app-map-filter',
  templateUrl: './map-filter.component.html',
  styleUrls: ['./map-filter.component.css']
})
export class MapFilterComponent implements OnInit {
  area: Area;

  aant_inw = { "display": "Population", "min": 0, "max": 900000, "step": 1000 };
  aantal_hh = { "display": "Households", "min": 0, "max": 750000, "step": 1000 };
  bev_dichth = { "display": "Population density [per sq. km]", "min": 0, "max": 30000, "step": 100 };
  p_elek_tot = { "display": "Power usage [kWh]", "min": 0, "max": 7500, "step": 10 };

  @Output() onFilterChanged = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.area = {
      name: null,
      aant_inw: 900000,
      aantal_hh: 750000,
      bev_dichth: 30000,
      p_elek_tot: 7500
    };
  }

  save(isValid: boolean, f: Area): void {
    if (!isValid) return;
    this.onFilterChanged.emit(f);
  }

  reset() {
    this.area = {
      name: null,
      aant_inw: 900000,
      aantal_hh: 750000,
      bev_dichth: 30000,
      p_elek_tot: 7500
    };
    this.onFilterChanged.emit(this.area);
  }


}
