import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginComponent } from '../components/login/login';
import { SignupComponent } from '../components/signup/signup';
import { WorkerMainPageComponent } from '../components/worker-main-page/worker-main-page';
import { CalendarComponent } from '../components/calendar/calendar';
import { WorkPlacesComponent } from '../components/work-places/work-places';
import { ManagerMainPageComponent } from '../components/manager-main-page/manager-main-page';
import { CalendarModule } from 'angular-calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewWorkPlaceComponent } from '../components/new-work-place/new-work-place';
import { NavbarComponent } from '../components/navbar/navbar';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginComponent,
    SignupComponent,
    WorkerMainPageComponent,
    CalendarComponent,
    WorkPlacesComponent,
    ManagerMainPageComponent,
    NewWorkPlaceComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CalendarModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginComponent,
    SignupComponent,
    WorkerMainPageComponent,
    CalendarComponent,
    WorkPlacesComponent,
    ManagerMainPageComponent,
    NewWorkPlaceComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
