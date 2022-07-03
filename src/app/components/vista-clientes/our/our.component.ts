import { Component, OnInit } from '@angular/core';
import { VisibilidadInicioService } from '../inicio/visibilidad/visibilidad-inicio.service';

@Component({
  templateUrl: './our.component.html',
  styleUrls: ['./our.component.css']
})
export class OurComponent implements OnInit {


  constructor(  private visibilidadInicioService : VisibilidadInicioService) { }

  ngOnInit(): void {
    this.visibilidadInicioService.hacerInvisibleInicio();
  }
}

