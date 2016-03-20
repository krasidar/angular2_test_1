import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: '<h1>Tekst z komponentu!</h1>'
})

export class AppComponent {
  napiszCos(){
	console.log('metoda napiszCos')
  }
}