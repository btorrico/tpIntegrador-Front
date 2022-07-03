import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarVendedorComponent } from './actualizar-vendedor.component';

describe('ActualizarVendedorComponent', () => {
  let component: ActualizarVendedorComponent;
  let fixture: ComponentFixture<ActualizarVendedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarVendedorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarVendedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
