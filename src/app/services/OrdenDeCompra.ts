import { ItemDeCompra } from "./ItemDeCompra";
import { Producto } from "./Producto";

export class OrdenDeCompra {

    id: number;
    fecha: Date;
    subtotal: string;
    total:string;
    itemsDeCompra:
    [
      {
        id: number,
        producto: Producto,
        cantidad: number
      },
    ]

}
