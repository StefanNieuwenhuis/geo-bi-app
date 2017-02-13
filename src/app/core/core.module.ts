import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccordionComponent} from './accordion/accordion.component'

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [AccordionComponent],
  declarations: [AccordionComponent]
})
export class CoreModule { }
