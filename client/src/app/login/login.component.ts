import { Component, OnInit } from '@angular/core';
import { Response } from "@angular/http";
import { Router } from "@angular/router";

import { Login } from "./../../model/app.login.model";
import { AuthenticationService } from "./../../service/app.authenticaion.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:Login;
  users:Array<Login>

  constructor(private serve:AuthenticationService, private router:Router) { 
    this.user =new Login("", "")
    this.users = new Array<Login>()  
  }

  ngOnInit() {
  }

  navigateToDashboard(){

  }

  checkLogin():void{

    
    
    this.serve.loginData(this.user).subscribe(

      (resp:Response) => {
        if(resp){
          console.log("resp", resp);
          
        this.users.push(resp.json().token)

        sessionStorage.setItem("token", resp.json().token)
        sessionStorage.setItem("role", resp.json().role)
        sessionStorage.setItem("user", resp.json().userName)  
          
        if(sessionStorage.getItem("token") === undefined || resp.json().status=="403" || resp.json().status == "401"){
          this.router.navigate(['login']) 
          alert(resp.json().message)
        }
         else{
          this.router.navigate(['dashboard/dashboardinfo'])          
        }
      }
      else{
       alert("Please enter valid details  ") 
      }
      },
      error =>{
        console.log(`Error occured at login :  ${error}`);
        
      }
    )
  }
}
