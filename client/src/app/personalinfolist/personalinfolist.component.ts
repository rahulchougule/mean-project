import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Response } from "@angular/http";

import { PersonalInfo } from "./../../model/app.personalinfo.model";
import { PersonalInfoService } from "./../../service/app.personalinfo.service";

@Component({
  selector: 'app-personalinfolist',
  templateUrl: './personalinfolist.component.html',
  styleUrls: ['./personalinfolist.component.css']
})
export class PersonalinfolistComponent implements OnInit {

  person:PersonalInfo;
  persons:Array<PersonalInfo>;
  token:string;

  constructor(private serve:PersonalInfoService, private router:Router) {

    this.person = new PersonalInfo("","","","","","",0,"","","","",0,0,0,"","","","");
    this.persons = new Array<PersonalInfo>();

    this.token = sessionStorage.getItem('token');
   }

  ngOnInit() :void{

    this.serve.getPersonalInfo(this.token).subscribe(

      (resp:Response) => {
        this.persons = resp.json().data;
        console.log("resp ===", this.persons);
        
      },
      error => {
        console.log(`Error occured ${error}`);
        
      }
    )
    
  }

  navigateToUserList():void{
    this.router.navigate(['dashboard/userlist'])
  }

  navigateToPendingList():void{
    this.router.navigate(['dashboard/personalinfolisttemp'])
  }

}
