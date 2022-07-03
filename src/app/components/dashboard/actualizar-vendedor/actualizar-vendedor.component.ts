
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuService } from 'src/app/services/menu.service';
import { Vendedor } from 'src/app/services/Vendedor';
import swal from 'sweetalert';

@Component({
  selector: 'app-actualizar-vendedor',
  templateUrl: './actualizar-vendedor.component.html',
  styleUrls: ['./actualizar-vendedor.component.css']
})
export class ActualizarVendedorComponent implements OnInit {

  id:number;
  vendedor:Vendedor = new Vendedor();
  constructor(private vendedorService:MenuService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.vendedorService.obtenerVendedorPorId(this.id).subscribe(dato =>{
      this.vendedor = dato;
    },error => console.log(error));
  }

  irAlaListaDeVendedores(){
    this.router.navigate(['dashboard/vendedores']);
    swal('Vendedor actualizado',`El vendedor ${this.vendedor.nombre} ha sido actualizado con exito`,`success`);
  }

  onSubmit(){
    this.vendedorService.actualizarVendedor(this.id,this.vendedor).subscribe(dato => {
      this.irAlaListaDeVendedores();
    },error => console.log(error));
  }
}
