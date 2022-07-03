
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert';
import { ProductoService } from 'src/app/services/producto.service';
import { Producto } from 'src/app/services/Producto';
import { Proveedor } from 'src/app/services/Proveedor';

@Component({
  templateUrl: './actualizar-producto.component.html',
  styleUrls: ['./actualizar-producto.component.css']
})
export class ActualizarProductoComponent implements OnInit {

  id:number;
  producto:Producto = new Producto();
  proveedores:Proveedor[];

  constructor(private productoService:ProductoService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.productoService.obtenerProductoPorId(this.id).subscribe(dato =>{
      this.producto = dato;
    },error => console.log(error));
  }

  irAlaListaDeProductos(){
    this.router.navigate(['dashboard/productos']);
    swal('Producto actualizado',`El producto ${this.producto.nombre} ha sido actualizado con exito`,`success`);
  }

  onSubmit(){
    this.productoService.actualizarProducto(this.id,this.producto).subscribe(dato => {
      this.irAlaListaDeProductos();
    },error => console.log(error));
  }
}
