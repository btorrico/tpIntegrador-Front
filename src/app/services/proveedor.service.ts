
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proveedor } from './Proveedor';
import { Vendedor } from './Vendedor';


@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  //Url para obtener el listado de proveedores
  private baseURL = "http://localhost:8080/api/proveedores";

  constructor(private httpClient: HttpClient) { }

  //Este metodo sirve para obtener a los proveedores
  obtenerListaProveedores():Observable<Proveedor[]>{
    return this.httpClient.get<Proveedor[]>(`${this.baseURL}`);
  }


 // Busqueda Proveedor por id
 obtenerProveedorPorId(id:number):Observable<Proveedor>{
  return this.httpClient.get<Proveedor>(`${this.baseURL}/${id}`);
 }


}
