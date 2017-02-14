import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Area } from '../../shared/models/area';
import { AreaService } from '../../shared/services/area.service';

@Component({
  selector: 'app-map-detail',
  templateUrl: './map-detail.component.html',
  styleUrls: ['./map-detail.component.css']
})
export class MapDetailComponent implements OnInit {
  @Input() area: Area;

  constructor(private router: Router, private areaService: AreaService) {
    this.areaService.areaUpdated$.subscribe(response => this.area = response);
  }

  ngOnInit() {
  }

  gotoDashboard() {
    this.router.navigate(['/area-detail', this.area.id]);
  }

  reset() {
    this.areaService.updateArea(null);
  }

}
