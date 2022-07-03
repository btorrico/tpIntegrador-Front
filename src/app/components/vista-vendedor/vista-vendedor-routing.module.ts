import { RouterModule, Routes } from '@angular/router';
import { VistaVendedorComponent } from './vista-vendedor.component';
import { ReportesComponent } from './reportes/reportes.component';
import { ProductosComponent } from './productos/productos.component';
import { ActualizarProductoComponent } from './actualizar-producto/actualizar-producto.component';
import { ProductoDetallesComponent } from './producto-detalles/producto-detalles.component';
import { NgModule } from '@angular/core';
import { InicioVendedorComponent } from './inicio-vendedor/inicio-vendedor.component';
//import { InicioVendedorComponent } from './inicio-vendedor/inicio-vendedor.component';

const routes: Routes = [
    { path: '', component: VistaVendedorComponent, children: [
      { path: '', component: InicioVendedorComponent },
       {path: 'productos',component:ProductosComponent},
     //  {path: 'ordenes',component:OrdenesComponent},
      { path: 'aniadirProductos', component: ReportesComponent },
      {path: 'producto-detalles/:id',component:ProductoDetallesComponent},
      {path: 'actualizar-producto/:id',component:ActualizarProductoComponent},


    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VistaVendedorRoutingModule { }
