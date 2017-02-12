import { Component, OnInit, Input } from '@angular/core';
import { Area } from '../../shared/area';

@Component({
  selector: 'app-map-detail',
  templateUrl: './map-detail.component.html',
  styleUrls: ['./map-detail.component.css']
})
export class MapDetailComponent implements OnInit {
  @Input() area: Area;

  constructor() { }

  ngOnInit() {
  }

}
