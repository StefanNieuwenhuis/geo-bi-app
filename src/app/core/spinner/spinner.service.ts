import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SpinnerService {
  private statusSource = new Subject<boolean>();

  statusUpdated$ = this.statusSource.asObservable();

  constructor() { }

  updateVisibility(status: boolean) {
    this.statusSource.next(status);
  }

}
