import { ReportesComponent } from './reportes/reportes.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VendedorDetallesComponent } from './vendedor-detalles/vendedor-detalles.component';
import { ActualizarVendedorComponent } from './actualizar-vendedor/actualizar-vendedor.component';
import { ClienteDetallesComponent } from './cliente-detalles/cliente-detalles.component';

@NgModule({
  declarations: [
    DashboardComponent,
    UsuariosComponent,
    InicioComponent,
    NavbarComponent,
    ReportesComponent,
    VendedorDetallesComponent,
    ActualizarVendedorComponent,
    ClienteDetallesComponent


  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule


  ]
})
export class DashboardModule { }
