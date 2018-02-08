import { Component } from '@angular/core';

/**
 * Generated class for the NewWorkPlaceComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'new-work-place',
  templateUrl: 'new-work-place.html'
})
export class NewWorkPlaceComponent {

  text: string;

  constructor() {
    console.log('Hello NewWorkPlaceComponent Component');
    this.text = 'Hello World';
  }

}
