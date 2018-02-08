import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginComponent } from "../../components/login/login"
import { SignupComponent } from '../../components/signup/signup';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  navToLogin: any;
  navToSignup: any;

  constructor(public navCtrl: NavController) {
    this.navToLogin = LoginComponent;
    this.navToSignup = SignupComponent;  
  }

}
