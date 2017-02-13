import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import { AreaDetailComponent }   from './area-detail.component';
import { AreaDetailRoutingModule} from './area-detail-routing.module';

import {ChartModule} from 'angular2-chartjs';

@NgModule({
    imports: [CommonModule, AreaDetailRoutingModule, ChartModule],
    exports: [],
    declarations: [AreaDetailComponent],
    providers: [],
})
export class AreaDetailModule { }
