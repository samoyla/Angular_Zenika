import { TestBed } from '@angular/core/testing';

import { BasketResourceTs } from './basket-resource.js';

describe('BasketResourceTs', () => {
  let service: BasketResourceTs;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasketResourceTs);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
