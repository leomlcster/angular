import { Component } from '@angular/core';
import { CartService } from '../../cart/cart.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule,RouterLink],

  templateUrl: './checkout.component.html', 
  styleUrl: './checkout.component.css',

})


export class CheckoutComponent {
  
    //Traer todos mis items del arreglo de cart.service.ts
        items: any;
        constructor(private cartService: CartService){};//instancio mi servicio, creo primero una variable privada "cartService" que me va a traer todos mis métodos de CartService()
        ngOnInit(): void{
  
          this.items = this.cartService.getItems(); //llama el método getItems de mi servicio
  
        }
  }
