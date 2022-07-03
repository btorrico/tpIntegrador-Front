import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VistaClientesRoutingModule } from './vista-clientes-routing.module';
import { VistaClientesComponent } from './vista-clientes.component';
import { InicioComponent } from './inicio/inicio.component';
import { OurComponent } from './our/our.component';
import { ShopGridComponent } from './shop-grid/shop-grid.component';
import { ContactComponent } from './contact/contact.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterComponent } from './register/register.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PantallaFinalComponent } from './pantalla-final/pantalla-final.component';


@NgModule({
  declarations: [
    VistaClientesComponent,
    InicioComponent,
    FooterComponent,
    HeaderComponent,
    OurComponent,
    ShopGridComponent,
    ContactComponent,
    LoginPageComponent,
    RegisterComponent,
    ShoppingCartComponent,
    CheckoutComponent,
    PantallaFinalComponent
  ],
  imports: [
    CommonModule,
    VistaClientesRoutingModule,
    MatIconModule
  ]
})
export class VistaClientesModule { }
