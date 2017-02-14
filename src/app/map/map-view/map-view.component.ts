import { Component, OnInit, ElementRef, Input } from '@angular/core';

import { EsriLoaderService } from 'angular2-esri-loader';
import { DataService } from '../../shared/services/data.service';
import { FilterService } from '../../shared/services/filter.service';
import { AreaService } from '../../shared/services/area.service';
import { SpinnerService } from '../../shared/services/spinner.service';

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

  constructor(
    private esriLoader: EsriLoaderService,
    private elRef: ElementRef,
    private dataService: DataService,
    private filterService: FilterService,
    private areaService: AreaService,
    private spinnerService: SpinnerService
  ) {
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
    this.spinnerService.updateStatus(true);
    let mapPoint = JSON.stringify({ x: event.mapPoint.x, y: event.mapPoint.y });
    this.dataService.getTownByLocation(mapPoint)
      .subscribe(response => {
        this.areaService.updateArea(response[0])
        this.spinnerService.updateStatus(false);
      });
  }

  filter(filter: Filter) {
    this.spinnerService.updateStatus(true);
    let layer = this.webmap.findLayerById('CBS_WijkenBuurten_2011_4172').findSublayerById(2);
    let query = layer.createQuery();

    query.where = `aant_inw <= ${filter.population} AND aantal_hh <= ${filter.households} AND bev_dichth <= ${filter.popDensity} AND p_elek_tot <= ${filter.avgPowerUsage}`;
    if (filter.name) query.where += ` AND gm_naam LIKE '%${filter.name}%'`;

    layer.definitionExpression = query.where;
    layer.queryFeatures(query).then(response => this.spinnerService.updateStatus(false));
  }

}
