import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { find } from 'rxjs';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  //Traer todos mis items del arreglo de cart.service.ts
      items: any;
product: any;
      constructor(private cartService: CartService){};//instancio mi servicio, creo primero una variable privada "cartService" que me va a traer todos mis métodos de CartService()
      ngOnInit(): void{

        this.items = this.cartService.getItems(); //llama el método getItems de mi servicio

      }
      
      cleanCart(){
        this.items = this.cartService.cleanCart(); //llama el método getItems de mi servicio para que se muestren los productos vacíos en el carrito.
      }

      deleteProduct(product: any){
        this.cartService.deleteItem(product); //llama el método deleteItems de mi servicio para que se elimine el producto del carrito.
        this.items = this.cartService.getItems(); //llama el método getItems de mi servicio para que se muestren los productos actualizados en el carrito.
      }
      

      
}

/*1. find 2.splice
deleteItem(product: any){
  const index = this.items.findIndex((item: any) => item === product);
  if (index > -1) {
    this.items.splice(index, 1);
  }
}
Formación CYMETRIA
19:18
deleteProduct(){
this.cartService.clearCart();
this.items = this.cartService.getItems();
}*/