import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Response } from "@angular/http";

import { PersonalInfo } from "./../../model/app.personalinfo.model";
import { PersonalInfoService } from "./../../service/app.personalinfo.service";

@Component({
  selector: 'app-personalinfolisttemp',
  templateUrl: './personalinfolisttemp.component.html',
  styleUrls: ['./personalinfolisttemp.component.css']
})
export class PersonalinfolisttempComponent implements OnInit {

  person:PersonalInfo;
  persons:Array<PersonalInfo>;
  token:string;
  uname : string
  role:string;
  enablebtn:boolean = false

  constructor(private serve:PersonalInfoService, private router:Router) {

    this.person = new PersonalInfo("","","","","","",0,"","","","",0,0,0,"","","","");
    
    this.persons = new Array<PersonalInfo>();

    this.token = sessionStorage.getItem('token');

    this.role = sessionStorage.getItem('role');

  }

  ngOnInit() :void{
    
    if(this.role === "Admin"){
      this.enablebtn = true
    }

    this.serve.getPersonalInfoTemp(this.token).subscribe(

      (resp:Response) => {
        this.persons = resp.json().data;
        console.log("resp ===", this.persons);
        
      },
      error => {
        console.log(`Error occured ${error}`);
        
      }
    )
    
  }

  selectedUser(user:any){

    this.uname = user.userName;
    console.log("user :::::", this.uname);
    

  }
  onClickApprove(){
    
     
      this.serve.getPersonalInfoByUserNameTemp(this.uname,this.token).subscribe(
      (resp:Response) => {
        this.person = resp.json().data
      
                   
        
          this.serve.postData(this.person, this.token).subscribe(
            (resp:Response)=>{        
             
              this.onClickReject();

              
            },
            error => {
              console.log(`Error occured ${error}`);
              
            }
          )
      },
      error => {
        console.log(`Error occured ${error}`);
        
      }
    )
    
    
  }



  onClickReject(){
    
    
    this.serve.deleteTempData(this.uname, this.token).subscribe(                
                
      (resp:Response) => {
        //this.persons = resp.json().data;
                   
        alert("Personal details Approved")

        this.ngOnInit();
      },
      error =>{
        alert(`Error ocured : ${error}`)
      }
    )

  }


  navigateToUserList():void{
    this.router.navigate(['dashboard/userlist'])
  }

  navigateToApprovedInfo():void{
    this.router.navigate(['dashboard/personalinfolist'])
  }


}