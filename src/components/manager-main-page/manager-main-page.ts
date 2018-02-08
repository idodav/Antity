import { Component } from '@angular/core';

/**
 * Generated class for the ManagerMainPageComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'manager-main-page',
  templateUrl: 'manager-main-page.html'
})
export class ManagerMainPageComponent {

  text: string;

  constructor() {
    console.log('Hello ManagerMainPageComponent Component');
    this.text = 'Hello World';
  }

}
