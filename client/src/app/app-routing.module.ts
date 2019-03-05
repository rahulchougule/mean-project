import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from "./dashboard/dashboard.component";
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { PersonalinfoComponent } from './personalinfo/personalinfo.component';
import { UserlistComponent } from "./userlist/userlist.component";
import { PersonalinfolistComponent } from './personalinfolist/personalinfolist.component';
import { AppGuardService } from "./../service/app.route.guard";
import { LogoutComponent } from './logout/logout.component';
import { PersonalinfolisttempComponent } from './personalinfolisttemp/personalinfolisttemp.component';

const routes: Routes = [
    {
        path:'', 
        component:LoginComponent
    },
    {
        path:'login', 
        component:LoginComponent
    },
    {
        path:'dashboard', 
        component: DashboardComponent, 
        canActivate:[AppGuardService],
        children :[
            {
              path:'userlist',
              component:UserlistComponent,
              canActivate:[AppGuardService]   
            },
            {
                path:'createuser',
                component:UsersComponent,
                canActivate:[AppGuardService]
            },
            {
               path:'personalinfo/:userName',
               component:PersonalinfoComponent,
               canActivate:[AppGuardService]
            },
            {
                path:'personalinfolist',
                component:PersonalinfolistComponent,
                canActivate:[AppGuardService]
            },
            {
                path:'personalinfolisttemp',
                component:PersonalinfolisttempComponent,
                canActivate:[AppGuardService]
            },
            {
                path:'logout',
                component:LogoutComponent
            }
            
        ] 

    },
    
    
    

];


// register the route table for root of the current angular app
// when routing is procided to imports of ngmodule, this will load routermodule with route table
export const routing:ModuleWithProviders = RouterModule.forRoot(routes);
