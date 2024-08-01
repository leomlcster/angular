import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../cart/cart.service';
import { RouterModule } from '@angular/router';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  productId!: number;
  selectedProduct: Product | undefined;
  productList: Product[] = [];
 /*constructor(private productService: ProductService, private cartService: CartService){}//creo la variable cartService y la voy a usar en el servicio CartService que es el que necesito.

    ngOnInit():void //Este método va a definir lo que nuestro componente va a hacer cuando se inicie es de tipo vacío no retorna nada
          {
            this.productList = this.productService.getProducts(); //Get products nos trae una lista de productos.
           
          }

          addToCart(product: any): void{

            
            console.log('agregado: ' + product.name);
            this.cartService.addToCart(product); //Agregamos el producto al carrito.his.cartService.addToCart(pr); //Agregamos el producto al carrito.his.cartService.addto(product); //Agregamos el producto al carrito.
            window.alert('Agregaste el producto: ' + product.name) //Poner Alerta
          }

          getProductById(){
            if (this.productId){
              
              this.selectedProduct = this.productService.getProductsByID(this.productId);
          }
          }

*/
constructor(private productService: ProductService, private cartService: CartService){}

  ngOnInit(): void {

    this.productService.getProducts().subscribe((data: Product[]) => {
      this.productList = data;
    });

}

getProductById() {
  
  if(this.productId) { 
  
  this.productService.getProductsByID(this.productId).subscribe((product: any)=> {
    this.selectedProduct = product;
  });
  
  /*((data:[]) => {
    this.productList = data;
  });*/

}
}

addToCart(product: any): void{

            
  console.log('agregado: ' + product.name);
  this.cartService.addToCart(product); //Agregamos el producto al carrito.his.cartService.addToCart(pr); //Agregamos el producto al carrito.his.cartService.addto(product); //Agregamos el producto al carrito.
  window.alert('Agregaste el producto: ' + product.title) //Poner Alerta
}


}