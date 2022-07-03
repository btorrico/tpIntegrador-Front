import { Component, OnInit } from '@angular/core';
import { VisibilidadInicioService } from '../inicio/visibilidad/visibilidad-inicio.service';

@Component({
  templateUrl: './shop-grid.component.html',
  styleUrls: ['./shop-grid.component.css']
})
export class ShopGridComponent implements OnInit {


  constructor(  private visibilidadInicioService : VisibilidadInicioService) { }

  ngOnInit(): void {
    this.visibilidadInicioService.hacerInvisibleInicio();
  }

}
