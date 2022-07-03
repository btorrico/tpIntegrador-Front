
import { ReportesComponent } from './reportes/reportes.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VistaVendedorRoutingModule } from './vista-vendedor-routing.module';
import { VistaVendedorComponent } from './vista-vendedor.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActualizarProductoComponent } from './actualizar-producto/actualizar-producto.component';
import { ProductoDetallesComponent } from './producto-detalles/producto-detalles.component';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    VistaVendedorComponent,
    NavbarComponent,
    ReportesComponent,
    ActualizarProductoComponent,
    ProductoDetallesComponent,
    VistaVendedorComponent,
    


  ],
  imports: [
    CommonModule,
    VistaVendedorRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule

  ]
})
export class VistaVendedorModule { }
