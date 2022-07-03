import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';
import { VisibilidadInicioService } from './visibilidad/visibilidad-inicio.service';

@Component({
  selector: 'app-inicio',
  templateUrl:'./inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class InicioComponent implements OnInit {

    estaVisible: boolean;
    public productos = [];

    //@Output() cambioDeVisibilidad: EventEmitter<boolean>;

  constructor(   private visibilidadInicioService : VisibilidadInicioService, private productoService : ProductoService) {
  // this.cambioDeVisibilidad = new EventEmitter(); // Inicializa EvenEmitter
    this.estaVisible = true;

   }

  ngOnInit(): void {
   // this.visibilidadInicioService.mostrarInicio();
   this.visibilidadInicioService.cambioDeVisibilidad.subscribe((estaVisible:boolean) =>
   {
    this.estaVisible= estaVisible;});

    this.productoService.obtenerListaProductos().subscribe(dato => {
      this.productos = dato;

    });
  }
    agregar(producto){
      alert('producto: ' + producto.nombre);
      this.productoService.agregarProductoACarrito(producto);

    }
}
