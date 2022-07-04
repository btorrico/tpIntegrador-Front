import { ItemDeCompraService } from './../../../services/item-de-compra.service';
import { ItemDeCompra } from './../../../services/ItemDeCompra';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProveedorService } from 'src/app/services/proveedor.service';
import { OrdenDeCompra } from 'src/app/services/OrdenDeCompra';
import { OrdenDeCompraService } from 'src/app/services/orden-de-compra.service';
import { Producto } from 'src/app/services/Producto';

@Component({
  templateUrl: './ordenes-de-compra.component.html',
  styleUrls: ['./ordenes-de-compra.component.css']
})
export class OrdenesDeCompraComponent implements OnInit {

  ordenes: OrdenDeCompra[];
  producto : Producto;
  items: ItemDeCompra[];


  constructor(private ordenDeCompraService: OrdenDeCompraService, private router:Router, itemDeCompraServicio: ItemDeCompraService) {}

  ngOnInit(): void {
    this.obtenerOrdenes();
  }



  eliminarOrden(id:number){
    this.ordenDeCompraService.eliminarOrden(id).subscribe(dato => {
      console.log(dato);
      this.obtenerOrdenes();
    })
  }
  /*
actualizarOrden(id:number){
    this.router.navigate(['vista-vendedor/actualizar-orden',id]);
  }
  verDetallesOrden(id:number){
  this.router.navigate(['vista-vendedor/orden-detalles',id]);
  console.log("hola")
  }
*/
  private obtenerOrdenes() {
    this.ordenDeCompraService.obtenerListaOrdenes().subscribe(dato => {
      this.ordenes = dato;
    });
  }





}

