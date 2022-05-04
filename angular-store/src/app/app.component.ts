import { Component } from '@angular/core';

//Decorador, dice como debe comportarse la clase
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', //Vista asociada al Appcomponent
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //Atributos
  name = 'Anlly';
  age = 22;
  img = 'https://source.unsplash.com/random';
  btnDisabled = true;

  //Creando un objeto
  person = {
    name: 'vanesa',
    age: 22,
  }

  //creando un comportamiento
  toggleButton(){
    this.btnDisabled = !this.btnDisabled;
  }

  increaseAge(){
    this.person.age += 1;
  }

  onScroll(event: Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event){
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }
}
