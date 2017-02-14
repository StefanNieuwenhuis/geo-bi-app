import { Injectable } from '@angular/core';
import { Subject} from 'rxjs/Subject';

import {Filter} from '../models/filter';

@Injectable()
export class FilterService {
  private filterSource = new Subject<Filter>();

  filterUpdated$ = this.filterSource.asObservable();

  constructor() { }

  updateFilter(filter:Filter){
    this.filterSource.next(filter);
  }
  
}
