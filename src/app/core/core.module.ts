import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AccordionComponent } from './accordion/accordion.component';
import { NavComponent } from './nav/nav.component';
import { SpinnerComponent } from './spinner/spinner.component'
import { SpinnerService } from '../shared/services/spinner.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [AccordionComponent, NavComponent, SpinnerComponent],
  declarations: [AccordionComponent, NavComponent, SpinnerComponent],
  providers: [SpinnerService]
})
export class CoreModule { }
