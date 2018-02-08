import { Component } from '@angular/core';
// import { NgSwitch } from '@angular/common/src/directives';
import { NgForOf } from '@angular/common/src/directives';
import { NgIf } from '@angular/common/src/directives';
import { List } from 'ionic-angular/components/list/list';
import { Navbar } from 'ionic-angular/components/toolbar/navbar';

/**
 * Generated class for the CalendarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'calendar',
  templateUrl: 'calendar.html'
})
export class CalendarComponent {
  text: string;
  date: Date;
  month: any;
  day: any;
  year: any;
  dayofweek: any;
  daysOfWeek: any[];

  fulldate: string;
  constructor() {
    console.log('Hello CalendarComponent Component');
    this.text = 'Hello World';
    this.date = new Date(Date.now());
    this.day = this.date.getDate();
    this.dayofweek = this.date.getDay()
    this.month = this.date.getMonth();
    this.year = this.date.getFullYear();
    this.fulldate = this.day + "/" + this.month + "/" + this.year;
    let currDay = false;
    this.daysOfWeek = [1,2,3,4,5,6,7,8];
  }
}
