import { Injectable } from '@angular/core';
import { Product as Product } from '../models/product.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  /*private productsList: Product[] = [ //Private --> Está disponible solamente en la clase donde está definida.
                                         //De acuerdo al modelo que definimos en product.models.ts
  {id: 1, name: 'Product 1', description: 'Descripcion Producto 1', price: 100, imageUrl:'../assets/images/cafe.jpg'},
  {id: 2, name: 'Product 2', description: 'Descripcion Producto 2', price: 200, imageUrl:'../assets/images/azucar.jpg'},
  ];

  //private cartProducts: product[] = [];

  getProducts(): Product[] { //traer los productos
    
    return this.productsList;
  
  }

  getProductsByID(id: number): Product | undefined{ //solo puede retornar un solo producto o indefinido  --  Buscar los productos por un ID

    return this.productsList.find(resultProduct => resultProduct.id == id);
    
  }
  
  deleteProduct(id: number){
    this.productsList = this.productsList.filter(product => product.id!= id); //eliminar un producto por ID
  }

  addProduct(product: Product): void {
    this.productsList.push(product);
  }*/


    //CONSUMO DE API

  private apiURL = 'https://fakestoreapi.com/products';
  getProductById: any;
  constructor(private http: HttpClient) {}
       getProducts() : Observable<Product[]> {

        return this.http.get<any[]>(this.apiURL);
       }
  

  getProductsByID(id: number): Observable <Product> {
    
    return this.http.get<Product>(`${this.apiURL}/${id}`);
    
  }

}
