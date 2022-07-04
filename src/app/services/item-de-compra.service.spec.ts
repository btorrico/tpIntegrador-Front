import { TestBed } from '@angular/core/testing';

import { ItemDeCompraService } from './item-de-compra.service';

describe('ItemDeCompraService', () => {
  let service: ItemDeCompraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemDeCompraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
