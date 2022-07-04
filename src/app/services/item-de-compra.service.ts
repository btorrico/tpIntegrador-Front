import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemDeCompra } from './ItemDeCompra';
import { Vendedor } from './Vendedor';


@Injectable({
  providedIn: 'root'
})
export class ItemDeCompraService {

  //Url para obtener el listado de vendedores
  private baseURL = "http://localhost:8080/items";

  constructor(private httpClient: HttpClient) { }

  //Este metodo sirve para obtener a los items
  obtenerListaItems():Observable<ItemDeCompra[]>{
    return this.httpClient.get<ItemDeCompra[]>(`${this.baseURL}`);
  }

  // Alta Item
  registrarItems(item:ItemDeCompra):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,item)
  }

  //Modificacion Item-
  actualizarItem(id:number,item:ItemDeCompra):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,item);
  }

 // Busqueda Vendedor por id
 obtenerItemrPorId(id:number):Observable<ItemDeCompra>{
  return this.httpClient.get<ItemDeCompra>(`${this.baseURL}/${id}`);
 }

  // Baja Item
 eliminarItem(id:number):Observable<Object>{
  return this.httpClient.delete(`${this.baseURL}/${id}`);
}

}
