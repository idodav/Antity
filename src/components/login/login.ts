import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WorkPlacesComponent } from '../work-places/work-places';
import { ManagerMainPageComponent } from '../manager-main-page/manager-main-page';
import { WorkerMainPageComponent } from '../worker-main-page/worker-main-page';

@Component({
  selector: 'login',
  templateUrl: 'login.html'
})

export class LoginComponent {
  loginInfo = {'user':'','pass':''};  
  text: string;  
  title: string;

  constructor(public navCtrl: NavController) {
    console.log('Hello LoginComponent Component');
    this.title = "התחברות";
    this.loginInfo.user = '';
    this.loginInfo.pass = '';
  }

  // Navigate to the component by user role
  login(){
    console.log(this.loginInfo.user + "logged in")
    if (this.userIsManager()) {
      this.navCtrl.push(ManagerMainPageComponent);
    }
    else {
      this.navCtrl.push(WorkerMainPageComponent);
    }
  }

  // Check if the user is manager
  userIsManager(){
    return this.loginInfo.user == 'm';
  }
}