//Conceptos basicos de typescript

//definiendo una variable

//Definiendo tipado de las variables
const username: string | number = 'avelezo';

// creando una funcion
const sum = (a: number, b: number ) => {
  return a + b ;
}

sum(1,2);

//Creando una clase
class Person {
  age: number;
  lastName: string;

  constructor(age: number, lastName: string) {
     this.age = age;
     this.lastName = lastName;
  }
}

//Creando una instancia de persona
const anlly = new Person(15, 'velez');

//Metodos de acceso
anlly.age;

//Otra forma de definirlo sin tener que inicializar ni asignar
// class Person {
//   constructor(age: number, lastName: string) {}
// }
