import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductListComponent,
    FormsModule
  ],
  exports: [
    ProductListComponent
   
  ]
})
export class ProductsModuleTsModule { }
