import { ProductoService } from 'src/app/services/producto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
public carrito;
public total= 0;
  constructor(private productoService:ProductoService) { }

  ngOnInit(): void {
    this.carrito = this.productoService.getCarrito();
    this.total = this.productoService.precioTotalCarrito();
  }

}


