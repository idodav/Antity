import { Component } from '@angular/core';

/**
 * Generated class for the ManageStaffComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'manage-staff',
  templateUrl: 'manage-staff.html'
})
export class ManageStaffComponent {

  text: string;

  constructor() {
    console.log('Hello ManageStaffComponent Component');
    this.text = 'Hello World';
  }

}
