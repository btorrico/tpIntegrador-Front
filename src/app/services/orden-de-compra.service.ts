import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrdenDeCompra } from './OrdenDeCompra';
import { Vendedor } from './Vendedor';


@Injectable({
  providedIn: 'root'
})
export class OrdenDeCompraService {

  //Url para obtener el listado de ordenes
  private baseURL = "http://localhost:8080/api/ordenes";

  constructor(private httpClient: HttpClient) { }

  //Este metodo sirve para obtener a las ordenes de compra
  obtenerListaOrdenes():Observable<OrdenDeCompra[]>{
    return this.httpClient.get<OrdenDeCompra[]>(`${this.baseURL}`);
  }

  // Alta Orden
  registrarOrden(orden:OrdenDeCompra):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,orden)
  }

  //Modificacion Orden De Compra
  actualizarOrden(id:number,orden:OrdenDeCompra):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,orden);
  }

 // Busqueda Orden por id
 obtenerOrdenPorId(id:number):Observable<OrdenDeCompra>{
  return this.httpClient.get<OrdenDeCompra>(`${this.baseURL}/${id}`);
 }

  // Baja Orden
 eliminarOrden(id:number):Observable<Object>{
  return this.httpClient.delete(`${this.baseURL}/${id}`);
}

}
