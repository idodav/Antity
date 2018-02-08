import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CalendarComponent } from '../calendar/calendar';

/**
 * Generated class for the WorkerMainPageComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'worker-main-page',
  templateUrl: 'worker-main-page.html'
})
export class WorkerMainPageComponent {

  text: string;

  constructor(public navCtrl: NavController) {
    console.log('Hello WorkerMainPageComponent Component');
    this.text = 'Hello World';
  }
  navToCalendar(){
    this.navCtrl.push(CalendarComponent);
  }
}
