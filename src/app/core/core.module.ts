import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';

import { AccordionComponent} from './accordion/accordion.component';
import { NavComponent } from './nav/nav.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [AccordionComponent, NavComponent],
  declarations: [AccordionComponent, NavComponent]
})
export class CoreModule { }
