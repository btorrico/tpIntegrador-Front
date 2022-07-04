import { TestBed } from '@angular/core/testing';

import { CantidadProductoService } from './cantidad-producto.service';

describe('CantidadProductoService', () => {
  let service: CantidadProductoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CantidadProductoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
