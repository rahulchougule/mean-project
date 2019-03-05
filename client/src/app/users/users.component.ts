import { Component, OnInit } from '@angular/core';
import { Response } from "@angular/http";
import { Router } from "@angular/router";

import { User } from "./../../model/app.user.model";
import { UserService } from "./../../service/app.users.service";


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user:User;
  users:Array<User>;
  token:string;

  constructor(private serve:UserService, private router:Router) { 
    this.user = new User("","","","", "")
    this.users = new Array<User>();

    this.token = sessionStorage.getItem('token')
  
  }

  ngOnInit() {
  }

  navigateToUserList():void{
    
     this.router.navigate(['dashboard/userlist'])
   }
  
   clear():void{
    this.user = new User("","","","", "")
   }
  save():void{
    
    this.serve.postData(this.user, this.token).subscribe(
      (resp:Response) => {
        this.users.push(resp.json().data);
        alert(resp.json().message)
        this.clear();
      },
      error => {
        console.log(`Error occured ${error}`); 
      }
    )
    
  }

 
 
}
