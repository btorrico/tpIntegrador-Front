import { Component, OnInit } from '@angular/core';
import { VisibilidadInicioService } from '../inicio/visibilidad/visibilidad-inicio.service';

@Component({
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


  constructor(  private visibilidadInicioService : VisibilidadInicioService) { }

  ngOnInit(): void {
    this.visibilidadInicioService.hacerInvisibleInicio();
  }

}
