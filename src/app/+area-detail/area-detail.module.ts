import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import { AreaDetailComponent }   from './area-detail.component';
import { AreaDetailRoutingModule} from './area-detail-routing.module';

@NgModule({
    imports: [CommonModule, AreaDetailRoutingModule],
    exports: [],
    declarations: [AreaDetailComponent],
    providers: [],
})
export class AreaDetailModule { }
