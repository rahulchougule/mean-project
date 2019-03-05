import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { Response } from "@angular/http";


import { PersonalInfo } from "./../../model/app.personalinfo.model";
import { PersonalInfoService } from "./../../service/app.personalinfo.service";


@Component({
  selector: 'app-personalinfo',
  templateUrl: './personalinfo.component.html',
  styleUrls: ['./personalinfo.component.css']
})
export class PersonalinfoComponent implements OnInit {

  person:PersonalInfo;
  persons:Array<PersonalInfo>;
  token:string;
  user:string;
  frmPersonalInfo:FormGroup;
  role:string;

  constructor(private serve:PersonalInfoService, private router:Router, private route :ActivatedRoute) {

    
    this.person = new PersonalInfo("","","","","","",0,"","","","",0,0,0,"","","","");
    this.persons = new Array<PersonalInfo>();

    this.token = sessionStorage.getItem('token');
    this.role = sessionStorage.getItem('role');
    this.user="";

    this.frmPersonalInfo = new FormGroup({ 
      firstName : new FormControl( this.person.firstName ,
                                    Validators.compose([
                                      Validators.required                                      
                                    ])
                                 ),
      mobileNo : new FormControl( this.person.mobileNo,
                                  Validators.compose([
                                  Validators.minLength(10),
                                  Validators.maxLength(10)
                                  ])
                                ),
       lastName : new FormControl(),
       dob : new FormControl(),
       flatno : new FormControl(),
       areaName : new FormControl(),
       physicalDisablity : new FormControl(),
       educationStatus : new FormControl(),
       middleName : new FormControl(),
       gender : new FormControl(),
       age : new FormControl(),
       societyName : new FormControl(),
       city : new FormControl(),
       pinCode : new FormControl(),
       phoneNo : new FormControl(),   
       maritalStatus : new FormControl(),   
       birthSign : new FormControl(),
       userName : new FormControl() 
    
    })

   }

  ngOnInit() {
    let person1 = this.route.params.subscribe(params =>{
      this.user = params['userName']     
      
    })
            
      this.serve.getPersonalInfoByUserName(this.user, this.token).subscribe(
      (resp:Response) => {
        this.persons = resp.json().data
        
        
      },
      error => {
        console.log(`Error occured ${error}`);
        
      }
           
    ) 
  }

  save():void{
    
    this.person = this.frmPersonalInfo.getRawValue()
                

    if(this.role ==='Admin'){
    this.serve.postData(this.person, this.token).subscribe(
     (resp:Response) => {
      alert(resp.json().message)
     },
     error => {
       console.log(`Error occured ${error}`);
     } 
    )
    }
    else{
      this.serve.postDataTemp(this.person, this.token).subscribe(
        (resp:Response) => {
         alert(resp.json().message)
        },
        error => {
          console.log(`Error occured ${error}`);
        } 
       ) 
    }





  }

}
