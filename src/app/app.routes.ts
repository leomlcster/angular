import { Routes } from '@angular/router';
import { ProductListComponent } from './products/product-list/product-list.component';
import { CartComponent } from './cart/cart/cart.component';
import { CheckoutComponent } from './checkout/checkout/checkout.component';

export const routes: Routes = [
    {
        path: "",
        component: ProductListComponent
    },
    {
        path: "cart",
        component: CartComponent
    },
    {
        path: "cart/checkout",
        component: CheckoutComponent
    }
   
];
