import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WorkerMainPageComponent } from '../worker-main-page/worker-main-page';
import { NewWorkPlaceComponent } from '../new-work-place/new-work-place';

/**
 * Generated class for the WorkPlacesComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'work-places',
  templateUrl: 'work-places.html'
})
export class WorkPlacesComponent {
  text: string;
  public workPlaces: any[];

  constructor(public navCtrl: NavController) {
    console.log('Hello WorkPlacesComponent Component');

    // Initialize data
    this.workPlaces = [];
    this.workPlaces.push("Work place A");
    this.workPlaces.push("Work place B");

  }

  navToWorkPlace(){
    this.navCtrl.push(WorkerMainPageComponent);
  }

  navToCreateWorkPlace(){
    this.navCtrl.push(NewWorkPlaceComponent);
  }

}
