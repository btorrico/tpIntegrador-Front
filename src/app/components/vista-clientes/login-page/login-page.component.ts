import { Component, OnInit } from '@angular/core';
import { VisibilidadInicioService } from '../inicio/visibilidad/visibilidad-inicio.service';

@Component({
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(  private visibilidadInicioService : VisibilidadInicioService) { }

  ngOnInit(): void {
    this.visibilidadInicioService.hacerInvisibleInicio();
  }

}
