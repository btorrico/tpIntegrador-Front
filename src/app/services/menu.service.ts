import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vendedor } from './Vendedor';


@Injectable({
  providedIn: 'root'
})
export class MenuService {

  //Url para obtener el listado de vendedores
  private baseURL = "http://localhost:8080/api/vendedores";

  constructor(private httpClient: HttpClient) { }

  //Este metodo sirve para obtener a los vendedores
  obtenerListaVendedores():Observable<Vendedor[]>{
    return this.httpClient.get<Vendedor[]>(`${this.baseURL}`);
  }

  // Alta Vendedor - Registro vendedor
  registrarVendedor(vendedor:Vendedor):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,vendedor)
  }

  //Modificacion Vendedor -
  actualizarVendedor(id:number,vendedor:Vendedor):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,vendedor);
  }

 // Busqueda Vendedor por id
 obtenerVendedorPorId(id:number):Observable<Vendedor>{
  return this.httpClient.get<Vendedor>(`${this.baseURL}/${id}`);
 }

  // Baja Vendedor
 eliminarVendedor(id:number):Observable<Object>{
  return this.httpClient.delete(`${this.baseURL}/${id}`);
}

}
