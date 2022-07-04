import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from 'src/app/services/menu.service';
import { Producto } from 'src/app/services/Producto';
import { ProductoService } from 'src/app/services/producto.service';
import { Proveedor } from 'src/app/services/Proveedor';
import { ProveedorService } from 'src/app/services/proveedor.service';
import { Vendedor } from 'src/app/services/Vendedor';


@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})

export class ReportesComponent implements OnInit {

  producto : Producto = new Producto();
  proveedores:Proveedor[];
  proveedoresLista: any;

  constructor(private productoServicio:ProductoService,private router:Router,private proveedorServicio:ProveedorService) { }

  ngOnInit(): void {
    console.log(this.producto);
    this.proveedorServicio.obtenerListaProveedores().subscribe((data:any)=>{
      this.proveedoresLista=data;
    })
  }

  guardarProducto(){
    this.productoServicio.registrarProducto(this.producto).subscribe(dato=>{
      console.log(dato);
      this.irALaListaDeProductos();

    },error => console.log(error));
  }

  irALaListaDeProductos(){
    this.router.navigate( ['/vista-vendedor']);
  }

  onSubmit(){ // imprime los datos del vendedor que se registra
    this.guardarProducto();
  }

  private obtenerProveedores() {
    this.proveedorServicio.obtenerListaProveedores().subscribe(dato => {
      this.proveedores = dato;
    });
  }
}

