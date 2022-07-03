import { Component, OnInit } from '@angular/core';
import { VisibilidadInicioService } from '../inicio/visibilidad/visibilidad-inicio.service';

@Component({
  templateUrl: './pantalla-final.component.html',
  styleUrls: ['./pantalla-final.component.css']
})
export class PantallaFinalComponent implements OnInit {


  constructor(  private visibilidadInicioService : VisibilidadInicioService) { }

  ngOnInit(): void {
    this.visibilidadInicioService.hacerInvisibleInicio();
  }
}
