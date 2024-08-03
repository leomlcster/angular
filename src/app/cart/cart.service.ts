import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';



@Injectable({
  providedIn: 'root'
})
export class CartService {
  addProduct(product: Product) {
    throw new Error('Method not implemented.');
  }
  private items: any = [];
  constructor() { }

    addToCart(product: any) {

      this.items.push(product); //A item que es nuestro arreglo, le agregamos producto
    
    }

    getItems() {
  
      return this.items; //Ver todos los elementos de product

    }

    deleteItem(product: any){
      const index = this.items.findIndex((item: any) => item === product);
      if (index > -1) {
        this.items.splice(index, 1);
    }
    window.alert('Eliminaste el producto');
  }

    cleanCart() {
      window.alert('Limpiaste tu carrito');
      this.items = [];
      return this.items; //Devolvemos el arreglo vacío
    }

}
/*1. find 2.splice
deleteItem(product: any){
  const index = this.items.findIndex((item: any) => item === product);
  if (index > -1) {
    this.items.splice(index, 1);
  }
/*
//USO DEL LOCAL STORAGE
//No cambia la lógica del proyecto porque cada método retorna el mismo tipo de datos que en los métodos pasados.
private storageKey = 'cartItems';
addToCart(product: any){
//Llama getItems() para agregar a la data actual la información del nuevo producto agregado
  const items = this.getItems();
  items.push(product);
  //envía el LS como texto plano JSON
  localStorage.setItem(this.storageKey, JSON.stringify(items)); //Guardar items en nuestro storage
}

getItems() {
  const items = localStorage.getItem(this.storageKey);
  return items ? JSON.parse(items) : []; //Terniario-> vacío o null -- [] si no, retorne un array vacío -- //JSON.parse(items) Trae el texto plano JSON y lo convierte en un objeto
  
}

cleanCart() {

  localStorage.removeItem(this.storageKey); //Limpiamos el storage
  return [];

}

}
*/