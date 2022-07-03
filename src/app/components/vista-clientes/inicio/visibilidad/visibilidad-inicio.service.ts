import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({ // Puede inyectarse
  providedIn: 'root'
})
export class VisibilidadInicioService {

  private inicioEstaVisible: boolean;

  @Output() cambioDeVisibilidad: EventEmitter<boolean>;

  constructor() {
    this.cambioDeVisibilidad=new EventEmitter();
    this.inicioEstaVisible = false;
  }

  hacerInvisibleInicio(){

    this.inicioEstaVisible = false;
    this.notificarCambio();
  }

  mostrarInicio(){
    this.inicioEstaVisible = true;
    this.notificarCambio();
  }

  private notificarCambio(){
    this.cambioDeVisibilidad.emit(this.inicioEstaVisible);
  }
}
