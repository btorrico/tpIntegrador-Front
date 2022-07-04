
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from './Producto';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  //Url para obtener el listado de productos
  private baseURL = "https://torrico-tpintegrador.herokuapp.com/api/productos";

  private carrito = [];
  total: number =0;

  constructor(private httpClient: HttpClient) {
   // alert('Ejecutando cosntructor');
   }

  //Este metodo sirve para obtener a los productos
  obtenerListaProductos():Observable<Producto[]>{
    return this.httpClient.get<Producto[]>(`${this.baseURL}`);
  }

  // Alta Prodcuto - Registro producto
  registrarProducto(producto:Producto):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,producto)
  }

  //Modificacion Producto -
  actualizarProducto(id:number,producto:Producto):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,producto);
  }

 // Busqueda prodcuto por id
 obtenerProductoPorId(id:number):Observable<Producto>{
  return this.httpClient.get<Producto>(`${this.baseURL}/${id}`);
 }

  // Baja Vendedor
 eliminarProducto(id:number):Observable<Object>{
  return this.httpClient.delete(`${this.baseURL}/${id}`);
}


//----- Carrito de compra
agregarProductoACarrito(producto:Producto){
  alert('Se agrego '  + producto.nombre + ' al carrito de compra');
  this.carrito.push(producto);
}

getCarrito(){
 // alert('carrito: ' + this.carrito);
    return this.carrito;
}

calcularTotalCarrito() :number{

 //return 'hola';
 this.carrito.forEach(producto => {
    this.total +=  producto.precio;
  });
  return this.total;
}

precioTotalCarrito(){
  return this.total;
}

}
