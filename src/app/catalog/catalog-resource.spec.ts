import { TestBed } from '@angular/core/testing';

import { CatalogResourceTc } from './catalog-resource';

describe('CatalogResourceTc', () => {
  let service: CatalogResourceTc;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatalogResourceTc);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
