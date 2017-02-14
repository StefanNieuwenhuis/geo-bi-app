import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Area } from '../models/area';

@Injectable()
export class AreaService {
  private areaSource = new Subject<Area>();

  areaUpdated$ = this.areaSource.asObservable();

  constructor() { }

  updateArea(area: Area) {
    this.areaSource.next(area);
  }

}
