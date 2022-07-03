
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuService } from 'src/app/services/menu.service';
import { Producto } from 'src/app/services/Producto';
import { ProductoService } from 'src/app/services/producto.service';
import { Vendedor } from 'src/app/services/Vendedor';

@Component({
  templateUrl: './producto-detalles.component.html',
  styleUrls: ['./producto-detalles.component.css']
})
export class ProductoDetallesComponent implements OnInit {

   id:number;
   producto: Producto;
  constructor(private route: ActivatedRoute, private productoServicio: ProductoService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.producto = new Producto();
    this.productoServicio.obtenerProductoPorId(this.id).subscribe(dato =>
      {this.producto = dato;});

  }

}
