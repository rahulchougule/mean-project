import { Injectable } from '@angular/core';
//import { CanActivate } from '@angular/router/src/utils/preactivation';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';


@Injectable()
export class AppGuardService implements CanActivate{
    constructor(private _router:Router){}


    canActivate(){

        let istoken = sessionStorage.getItem("token")

        if(istoken === "" || istoken === null){
            
            this._router.navigate(['login'])

            return false
        }
        else{
            return true
        }
        
    }
}