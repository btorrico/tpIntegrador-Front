import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendedorDetallesComponent } from './vendedor-detalles.component';

describe('VendedorDetallesComponent', () => {
  let component: VendedorDetallesComponent;
  let fixture: ComponentFixture<VendedorDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendedorDetallesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendedorDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
