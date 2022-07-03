import { Producto } from './../../../services/Producto';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';
import { Proveedor } from 'src/app/services/Proveedor';
import { ProveedorService } from 'src/app/services/proveedor.service';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],

})
export class ProductosComponent implements OnInit {
  productos: Producto[];
  proveedores: Proveedor[];

  constructor(private productoServicio: ProductoService, private router:Router,
    private proveedorServicio:ProveedorService) {}

  ngOnInit(): void {
    this.obtenerProductos();
  }

  actualizarProducto(id:number){
    this.router.navigate(['dashboard/actualizar-producto',id]);
  }

  eliminarProducto(id:number){
    this.productoServicio.eliminarProducto(id).subscribe(dato => {
      console.log(dato);
      this.obtenerProductos();
    })
  }

  verDetallesProducto(id:number){
  this.router.navigate(['dashboard/producto-detalles',id]);
  console.log("hola")
  }

  private obtenerProductos() {
    this.productoServicio.obtenerListaProductos().subscribe(dato => {
      this.productos = dato;
    });
  }

  private obtenerProveedores() {
    this.proveedorServicio.obtenerListaProveedores().subscribe(dato => {
      this.proveedores = dato;
    });
  }
}
