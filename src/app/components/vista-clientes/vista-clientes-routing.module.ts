import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactComponent } from './contact/contact.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { OurComponent } from './our/our.component';
import { PantallaFinalComponent } from './pantalla-final/pantalla-final.component';
import { RegisterComponent } from './register/register.component';
import { ShopGridComponent } from './shop-grid/shop-grid.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { VistaClientesComponent } from './vista-clientes.component';

const routes: Routes = [
  { path: '', component: VistaClientesComponent, children: [
      { path: '', component: InicioComponent },
      { path: 'inicio', component: InicioComponent },
      { path: 'our', component: OurComponent },
      { path: 'shop-grid', component: ShopGridComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'shopping-cart', component: ShoppingCartComponent },
      { path: 'login-page', component: LoginPageComponent},
      { path: 'register', component: RegisterComponent},
      { path: 'checkout', component: CheckoutComponent},
      { path: 'pantalla-final', component: PantallaFinalComponent}
    ]
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VistaClientesRoutingModule { }
