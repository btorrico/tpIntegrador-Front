
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from 'src/app/services/Cliente';
import { ClienteService } from 'src/app/services/cliente.service';


@Component({
  templateUrl: './cliente-detalles.component.html',
  styleUrls: ['./cliente-detalles.component.css']
})
export class ClienteDetallesComponent implements OnInit {

   id:number;
   cliente: Cliente;
  constructor(private route: ActivatedRoute, private clienteServicio: ClienteService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.cliente = new Cliente();
    this.clienteServicio.obtenerClientePorId(this.id).subscribe(dato =>
      {this.cliente = dato;});

  }

}
