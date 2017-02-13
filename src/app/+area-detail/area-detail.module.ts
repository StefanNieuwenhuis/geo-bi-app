import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import { AreaDetailComponent }   from './area-detail.component';
import { AreaDetailRoutingModule} from './area-detail-routing.module';

import {ChartModule} from 'angular2-chartjs';
import {CoreModule} from '../core/core.module';

@NgModule({
    imports: [CommonModule, AreaDetailRoutingModule, ChartModule, CoreModule],
    exports: [],
    declarations: [AreaDetailComponent],
    providers: [],
})
export class AreaDetailModule { }
