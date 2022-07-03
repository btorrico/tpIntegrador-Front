

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuService } from 'src/app/services/menu.service';
import { Vendedor } from 'src/app/services/Vendedor';

@Component({
  selector: 'app-vendedor-detalles',
  templateUrl: './vendedor-detalles.component.html',
  styleUrls: ['./vendedor-detalles.component.css']
})
export class VendedorDetallesComponent implements OnInit {

   id:number;
   vendedor: Vendedor;
  constructor(private route: ActivatedRoute, private vendedorServicio: MenuService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.vendedor = new Vendedor();
    this.vendedorServicio.obtenerVendedorPorId(this.id).subscribe(dato =>
      {this.vendedor = dato;});

  }

}
