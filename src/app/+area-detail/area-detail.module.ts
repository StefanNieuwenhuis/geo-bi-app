import { NgModule } from '@angular/core';

import { AreaDetailComponent }   from './area-detail.component';
import { AreaDetailRoutingModule} from './area-detail-routing.module';

@NgModule({
    imports: [AreaDetailRoutingModule],
    exports: [],
    declarations: [AreaDetailComponent],
    providers: [],
})
export class AreaDetailModule { }
