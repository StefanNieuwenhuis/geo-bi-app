/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FilterService } from './filter.service';

describe('FilterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FilterService]
    });
  });

  it('should ...', inject([FilterService], (service: FilterService) => {
    expect(service).toBeTruthy();
  }));
});
