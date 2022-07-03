import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from 'src/app/services/menu.service';
import { Vendedor } from 'src/app/services/Vendedor';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})

export class UsuariosComponent implements OnInit {
  vendedores: Vendedor[];

  constructor(private vendedorServicio: MenuService, private router:Router) {}

  ngOnInit(): void {
    this.obtenerVendedores();
  }

  actualizarVendedor(id:number){
    this.router.navigate(['dashboard/actualizar-vendedor',id]);
  }

  eliminarVendedor(id:number){
    this.vendedorServicio.eliminarVendedor(id).subscribe(dato => {
      console.log(dato);
      this.obtenerVendedores();
    })
  }

  verDetallesVendedor(id:number){
  this.router.navigate(['dashboard/vendedor-detalles',id]);
  console.log("hola")
  }

  private obtenerVendedores() {
    this.vendedorServicio.obtenerListaVendedores().subscribe(dato => {
      this.vendedores = dato;
    });
  }
}
