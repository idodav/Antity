import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login';
import { SignupComponent } from './signup/signup';
import { WorkerMainPageComponent } from './worker-main-page/worker-main-page';
import { ManagerMainPageComponent } from './manager-main-page/manager-main-page';
import { CalendarComponent } from './calendar/calendar';
import { WorkPlacesComponent } from './work-places/work-places';
import { NewWorkPlaceComponent } from './new-work-place/new-work-place';
import { ManageStaffComponent } from './manage-staff/manage-staff';
import { NavbarComponent } from './navbar/navbar';
@NgModule({
	declarations: [LoginComponent,
    SignupComponent,
    WorkerMainPageComponent,
    ManagerMainPageComponent,
    CalendarComponent,
    WorkPlacesComponent,
    NewWorkPlaceComponent,
    ManageStaffComponent,
    NavbarComponent],
	imports: [],
	exports: [LoginComponent,
    SignupComponent,
    WorkerMainPageComponent,
    ManagerMainPageComponent,
    CalendarComponent,
    WorkPlacesComponent,
    NewWorkPlaceComponent,
    ManageStaffComponent,
    NavbarComponent]
})
export class ComponentsModule {}