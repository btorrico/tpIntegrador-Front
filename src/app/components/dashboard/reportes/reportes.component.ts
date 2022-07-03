import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from 'src/app/services/menu.service';
import { Vendedor } from 'src/app/services/Vendedor';


@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})

export class ReportesComponent implements OnInit {

  vendedor : Vendedor = new Vendedor();

  constructor(private vendedorServicio:MenuService,private router:Router) { }

  ngOnInit(): void {
    console.log(this.vendedor);
  }

  guardarVendedor(){
    this.vendedorServicio.registrarVendedor(this.vendedor).subscribe(dato=>{
      console.log(dato);
      this.irALaListaDeVendedores();

    },error => console.log(error));
  }

  irALaListaDeVendedores(){
    this.router.navigate( ['/dashboard/vendedores']);
  }

  onSubmit(){ // imprime los datos del vendedor que se registra
    this.guardarVendedor();
  }


}

