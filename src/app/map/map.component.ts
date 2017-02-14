import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import { MapViewComponent } from './map-view/map-view.component';
import { MapDetailComponent } from './map-detail/map-detail.component';
import { Area } from '../shared/models/area';
import { Filter } from '../shared/models/filter';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  @ViewChild(MapDetailComponent) mapDetailComponent: MapDetailComponent;

  webmapId = 'f896be9c355e4f17bcd78543d069f18f';

  constructor() { }

  ngOnInit() {}

  setActiveArea(area: Area) {
    this.mapDetailComponent.area = area;
  }

  onAreaChanged(event: Area) {
    this.setActiveArea(event);
  }
}
