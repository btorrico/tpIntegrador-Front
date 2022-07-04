import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from './Cliente';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  //Url para obtener el listado de cliente
  private baseURL = "https://torrico-tpintegrador.herokuapp.com/api/clientes";

  constructor(private httpClient: HttpClient) { }

  //Este metodo sirve para obtener a los clientes
  obtenerListaClientes():Observable<Cliente[]>{
    return this.httpClient.get<Cliente[]>(`${this.baseURL}`);
  }

 // Busqueda Cliente por id
 obtenerClientePorId(id:number):Observable<Cliente>{
  return this.httpClient.get<Cliente>(`${this.baseURL}/${id}`);
 }


  // Baja Cliente
 eliminarCliente(id:number):Observable<Object>{
  return this.httpClient.delete(`${this.baseURL}/${id}`);
}

}
