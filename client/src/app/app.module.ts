import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HttpModule } from '@angular/http';
import { AuthenticationService } from 'src/service/app.authenticaion.service';
import { routing } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { UserlistComponent } from './userlist/userlist.component';
import { PersonalinfoComponent } from "./personalinfo/personalinfo.component";
import { PersonalinfolistComponent } from './personalinfolist/personalinfolist.component';


import { PersonalInfoService } from "./../service/app.personalinfo.service";
import { UserService } from "./../service/app.users.service";
import { LogoutComponent } from './logout/logout.component';
import { AppGuardService } from "./../service/app.route.guard";
import { PersonalinfolisttempComponent } from './personalinfolisttemp/personalinfolisttemp.component';

import { SearchPipe } from "./../pipe/search.pipe";
import { DashboardService } from 'src/service/app.dashboard.service';

@NgModule({
    declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    UsersComponent,
    PersonalinfoComponent,
    UserlistComponent,
    PersonalinfolistComponent,
    LogoutComponent,
    PersonalinfolisttempComponent,
    SearchPipe  
  ],
  imports: [
    BrowserModule,
    routing,
    HttpModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AuthenticationService, UserService, PersonalInfoService, AppGuardService, DashboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
