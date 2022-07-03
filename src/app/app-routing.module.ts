import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', loadChildren: () => import('./components/dashboard/dashboard.module').then(x => x.DashboardModule) },
  { path: 'vista-vendedor', loadChildren: () => import('./components/vista-vendedor/vista-vendedor.module').then(m => m.VistaVendedorModule) },
  { path: 'vista-clientes', loadChildren: () => import('./components/vista-clientes/vista-clientes.module').then(m => m.VistaClientesModule) },
  {path: '**', redirectTo: '/login',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
