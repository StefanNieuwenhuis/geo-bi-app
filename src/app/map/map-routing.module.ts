import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapComponent } from './map.component';
import { AuthGuard } from '../shared/guards/auth-guard.service';

const routes: Routes = [
  { path: 'map', component: MapComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapRoutingModule { }

export const routedComponents = [MapComponent];