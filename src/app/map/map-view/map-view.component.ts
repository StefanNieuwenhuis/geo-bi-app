import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { EsriLoaderService } from 'angular2-esri-loader';
import { Area } from '../../shared/area';

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

  constructor(private esriLoader: EsriLoaderService, private elRef: ElementRef) { }

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
    let mapPoint = event.mapPoint;
    //do call to api
  }

  filter(area: Area) {
    let layer = this.webmap.findLayerById('CBS_WijkenBuurten_2011_4172').findSublayerById(2);
    let query = layer.createQuery();

    query.where = `aant_inw <= ${area.aant_inw} AND aantal_hh <= ${area.aantal_hh} AND bev_dichth <= ${area.bev_dichth} AND p_elek_tot <= ${area.p_elek_tot}`;
    if (area.name) query.where += ` AND gm_naam LIKE '%${area.name}%'`;

    layer.definitionExpression = query.where;
    layer.queryFeatures(query);
  }

}
