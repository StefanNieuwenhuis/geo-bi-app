import { Component, OnInit, ElementRef, EventEmitter, Input, Output } from '@angular/core';

import { EsriLoaderService } from 'angular2-esri-loader';
import { DataService } from '../../shared/services/data.service';
import {FilterService } from '../../shared/services/filter.service';

import { Area } from '../../shared/models/area';
import { Filter } from '../../shared/models/filter';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css'],
  providers: [EsriLoaderService]
})
export class MapViewComponent implements OnInit {
  webmap: any;
  view: any;

  @Input() webmapId: string;
  @Output() onAreaChanged = new EventEmitter();

  constructor(private esriLoader: EsriLoaderService, private elRef: ElementRef, private dataService: DataService, private filterService:FilterService) {
    this.filterService.filterUpdated$.subscribe(response => this.filter(response));
   }

  ngOnInit() {
    this.esriLoader.load({
      url: '//js.arcgis.com/4.2'
    }).then(() => {
      this.esriLoader.loadModules(['esri/WebMap', 'esri/views/MapView'])
        .then(([WebMap, MapView]) => {
          this.webmap = new WebMap({
            portalItem: { id: this.webmapId }
          });

          this.view = new MapView({
            container: this.elRef.nativeElement.firstChild,
            map: this.webmap
          });

          this.view.on('click', event => this.onViewClicked(event));
        });
    });
  }

  onViewClicked(event) {
    let mapPoint = JSON.stringify({ x: event.mapPoint.x, y: event.mapPoint.y });
    this.dataService.getTownByLocation(mapPoint).subscribe(response => { this.onAreaChanged.emit(response[0]) },
      err => console.error('Something went wrong'),
      () => console.log('Area loaded')
    );
  }

  filter(filter: Filter) {
    let layer = this.webmap.findLayerById('CBS_WijkenBuurten_2011_4172').findSublayerById(2);
    let query = layer.createQuery();
    
    query.where = `aant_inw <= ${filter.population} AND aantal_hh <= ${filter.households} AND bev_dichth <= ${filter.popDensity} AND p_elek_tot <= ${filter.avgPowerUsage}`;
    if (filter.name) query.where += ` AND gm_naam LIKE '%${filter.name}%'`;

    layer.definitionExpression = query.where;
    layer.queryFeatures(query);
  }

}
