import { TestBed } from '@angular/core/testing';

import { DataObservableService } from './data-observable.service';

describe('DataObservableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataObservableService = TestBed.get(DataObservableService);
    expect(service).toBeTruthy();
  });
});
