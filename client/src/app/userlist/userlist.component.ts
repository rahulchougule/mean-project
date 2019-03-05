import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Response } from "@angular/http";

import { User } from "./../../model/app.user.model";
import { UserService } from "./../../service/app.users.service";



@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  user:User;
  users:Array<User>;
  token:string;

  constructor(private router:Router, private serve:UserService) { 

    this.user = new User("","","","", "")
    this.users = new Array<User>();

    this.token = sessionStorage.getItem('token')
  }

  
  ngOnInit():void {

    this.serve.getUsers(this.token).subscribe(
           
      (resp:Response) =>{
        this.users = resp.json().data;
        
    },
    error => {
        console.log(`Error occured ${error}`);
        
      }
    )
  }



  navigateToCreateUser():void{
   
    this.router.navigate(['dashboard/createuser'])
  }

  navigateToPersonalInfo(u:User):void{
     
    // this.user = Object.assign({}, u); 
    //  console.log(this.user.userName);
     
    //this.router.navigate(['dashboard/personalinfo'])
 
  }

  // search(val:string){
  //   this.serve.searchData(val, this.token).subscribe(
  //     (resp:Response) =>{
  //       this.users = resp.json().data;
  //       console.log(resp.json().data);
  //   },
  //   error => {
  //       console.log(`Error occured ${error}`);
        
  //     }
  //   )
    
  // }

}



// @Pipe({
//   name: 'search'
// })
// export class SearchPipe implements PipeTransform {
//   public transform(value, keys: string, term: string) {

//     if (!term) return value;
//     return (value || []).filter(item => keys.split(',').some(key => item.hasOwnProperty(key) && new RegExp(term, 'gi').test(item[key])));

//   }
// }
