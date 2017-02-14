import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';
import { Area } from '../../shared/models/area';

@Component({
  selector: 'app-map-detail',
  templateUrl: './map-detail.component.html',
  styleUrls: ['./map-detail.component.css']
})
export class MapDetailComponent implements OnInit {
  @Input() area: Area;

  constructor(private router:Router) { }

  ngOnInit() {
  }

  gotoDashboard(){
     this.router.navigate(['/area-detail', this.area.objectid]);
  }

  reset(){
    this.area = null;
  }

}
