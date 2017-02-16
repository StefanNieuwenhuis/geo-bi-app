import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MapRoutingModule } from './map-routing.module';

import { MapComponent } from './map.component';
import { MapViewComponent } from './map-view/map-view.component';
import { MapDetailComponent } from './map-detail/map-detail.component';
import { MapFilterComponent } from './map-filter/map-filter.component';

import { DataService } from '../shared/services/data.service';
import { FilterService } from '../shared/services/filter.service';
import { AreaService } from '../shared/services/area.service';

import {AuthGuard} from '../shared/guards/auth-guard.service';

@NgModule({
    imports: [CommonModule, FormsModule, MapRoutingModule],
    exports: [],
    declarations: [MapComponent, MapViewComponent, MapDetailComponent, MapFilterComponent],
    providers: [AuthGuard, DataService, FilterService, AreaService],
})
export class MapModule { }
