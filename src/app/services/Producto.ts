import { Proveedor } from './Proveedor';
export class Producto {

  id: number;
  nombre: string;
  descripcion: string;
  cantStock:number;
  categoria:string;
  precio: number;
  imagen: string;
  proveedor: Proveedor;

}
