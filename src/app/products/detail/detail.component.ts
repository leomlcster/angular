import { Component } from '@angular/core';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {

}

interface Animal {
//Nombre del atributo: tipo de dato
  //sonido: string; //Definición de variable//
  //tipo: string;
  nombre: string;
  edad: number;
  
  //nombre función: tipo de dato retorno
  
  hacerSonido(): void; //Definimos qué tipo de dato nos va a regresar, en este caso, no devuelve nada//

}



class AnimalGeneral implements Animal{
  
  //sonido: string; //Definición de variable//
  //tipo: string;
  nombre: string;
  edad: number; 

  constructor(nombre: string, edad: number){ //El constructor se define con los atributos que se tengan
    
    this.nombre = nombre; 
    this.edad = edad;  //asignando valor a la variable edad//
  
  }

  hacerSonido(): void {
    console.log('hacer sonido');

  }

}
//Extends define que se traen atributos de una CLASE padre (AnimalGeneral)
class Perro extends AnimalGeneral{

  constructor(nombre: string,edad: number){
    super(nombre, edad); //llamando al constructor de la clase padre (AnimalGeneral)
  
  }

  //override define que es un método que viene de la clase padre
  override hacerSonido(): void {
    alert('guau guau guau')
    console.log('guau');
  }

}

class Gato extends AnimalGeneral{

  constructor(nombre: string, edad: number){
    super(nombre, edad); //llamando al constructor de la clase padre (AnimalGeneral)
  }

  //override define que es un método que viene de la clase padre
  override hacerSonido(): void {
    console.log('miau');
  }

}

//instanciar llamar a mis clases y métodos para poderlos utilizar

let firulais:Animal = new Perro('Firulais', 3); //mi perro va a tener todas la propiedades que tenga mi Animal
let pelusa:Animal = new Gato('Pelusa', 1);

console.log(firulais.hacerSonido);
firulais.hacerSonido();


