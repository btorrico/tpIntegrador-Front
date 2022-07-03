
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/services/Cliente';
import { ClienteService } from 'src/app/services/cliente.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})

export class InicioComponent implements OnInit {
  clientes: Cliente[];

  constructor(private clienteServicio: ClienteService, private router:Router) {}

  ngOnInit(): void {
    this.obtenerClientes();
  }


  eliminarCliente(id:number){
    this.clienteServicio.eliminarCliente(id).subscribe(dato => {
      console.log(dato);
      this.obtenerClientes();
    })
  }

  verDetallesCliente(id:number){
  this.router.navigate(['dashboard/cliente-detalles',id]);
  }
  private obtenerClientes() {
    this.clienteServicio.obtenerListaClientes().subscribe(dato => {
      this.clientes = dato;
    });
  }
}

