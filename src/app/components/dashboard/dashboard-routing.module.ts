import { VistaVendedorComponent } from './../vista-vendedor/vista-vendedor.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarVendedorComponent } from './actualizar-vendedor/actualizar-vendedor.component';
import { ClienteDetallesComponent } from './cliente-detalles/cliente-detalles.component';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { ReportesComponent } from './reportes/reportes.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { VendedorDetallesComponent } from './vendedor-detalles/vendedor-detalles.component';

const routes: Routes = [
    { path: '', component: DashboardComponent, children: [
      { path: '', component: InicioComponent },
      { path: 'vendedores', component: UsuariosComponent },
      { path: 'aniadirVendedores', component: ReportesComponent },
      {path: 'vendedor-detalles/:id',component:VendedorDetallesComponent},
      {path: 'actualizar-vendedor/:id',component:ActualizarVendedorComponent},
      {path: 'cliente-detalles/:id',component:ClienteDetallesComponent},

    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
