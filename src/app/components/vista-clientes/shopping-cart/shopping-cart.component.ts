import { ProductoService } from 'src/app/services/producto.service';
import { Component, OnInit } from '@angular/core';
import { VisibilidadInicioService } from '../inicio/visibilidad/visibilidad-inicio.service';

@Component({
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  public carrito;

  constructor(  private visibilidadInicioService : VisibilidadInicioService, private productoService: ProductoService) { }

  ngOnInit(): void {
    this.visibilidadInicioService.hacerInvisibleInicio();
    this.carrito = this.productoService.getCarrito();
    alert(this.carrito);
  }
}
