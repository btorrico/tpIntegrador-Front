import { CantidadProductoService } from './../cantidad-producto.service';
import { ProductoService } from 'src/app/services/producto.service';
import { Component, OnInit } from '@angular/core';
import { VisibilidadInicioService } from '../inicio/visibilidad/visibilidad-inicio.service';

@Component({
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  public carrito;
 total ;
 public cantidad = 1;
 public cantidadIngresada;
  constructor(  private visibilidadInicioService : VisibilidadInicioService, private productoService: ProductoService, private cantidadProductoService:CantidadProductoService) { }

  ngOnInit(): void {
    this.visibilidadInicioService.hacerInvisibleInicio();
    this.carrito = this.productoService.getCarrito();
    this.total = this.productoService.calcularTotalCarrito();
  //  alert(this.carrito);
 console.log(this.cantidadIngresada);



  }

    precioTotalCarrito(){
      return this.total;
    }

 //   actualizarCantidad(){
   //   this.cantidad = this.cantidadIngresada;
   //   console.log(this.cantidad);
    //}
}
