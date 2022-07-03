import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from 'src/app/services/menu.service';
import { Producto } from 'src/app/services/Producto';
import { ProductoService } from 'src/app/services/producto.service';
import { Proveedor } from 'src/app/services/Proveedor';
import { Vendedor } from 'src/app/services/Vendedor';


@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})

export class ReportesComponent implements OnInit {

  producto : Producto = new Producto();
  proveedores:Proveedor[];

  constructor(private productoServicio:ProductoService,private router:Router) { }

  ngOnInit(): void {
    console.log(this.producto);
  }

  guardarProducto(){
    this.productoServicio.registrarProducto(this.producto).subscribe(dato=>{
      console.log(dato);
      this.irALaListaDeProductos();

    },error => console.log(error));
  }

  irALaListaDeProductos(){
    this.router.navigate( ['/productos']);
  }

  onSubmit(){ // imprime los datos del vendedor que se registra
    this.guardarProducto();
  }


}

