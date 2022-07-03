import { TestBed } from '@angular/core/testing';

import { VisibilidadInicioService } from './visibilidad-inicio.service';

describe('VisibilidadInicioService', () => {
  let service: VisibilidadInicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisibilidadInicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
