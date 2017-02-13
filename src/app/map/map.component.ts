import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import { MapViewComponent } from './map-view/map-view.component';
import { MapDetailComponent } from './map-detail/map-detail.component';
import { Area } from '../shared/area';
import { Filter } from '../shared/filter';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  @ViewChild(MapViewComponent) mapViewComponent: MapViewComponent;
  @ViewChild(MapDetailComponent) mapDetailComponent: MapDetailComponent;

  webmapId = 'f896be9c355e4f17bcd78543d069f18f';

  constructor() { }

  ngOnInit() {

  }

  setActiveArea(area: Area) {
    this.mapDetailComponent.area = area;
  }

  onAreaChanged(event: Area) {
    this.setActiveArea(event);
  }

  onFilterChanged(event: Filter) {
    this.mapViewComponent.filter(event);
  }

}
