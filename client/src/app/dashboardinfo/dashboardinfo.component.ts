import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Response } from "@angular/http";

import { DashboardService } from "./../../service/app.dashboard.service";

@Component({
  selector: 'app-dashboardinfo',
  templateUrl: './dashboardinfo.component.html',
  styleUrls: ['./dashboardinfo.component.css']
})
export class DashboardinfoComponent implements OnInit {

  user:string;   
  role:string;
   token:string;
  forUser:boolean = false;
  dashboardData:string;
  dashboardDataPending:string;
  accessUsersData:string;
  operatorData:string;

  totalUsers:string;
  pendingApprovals:string;
  accessUsers:string;
  operators:string;

  constructor(private router:Router, private serve:DashboardService) {

   }

  ngOnInit() {
  this.user = sessionStorage.getItem('user')
  this.role = sessionStorage.getItem('role')
   this.token = sessionStorage.getItem('token')
  
  if(this.role === 'AccessUser'){
    this.forUser = true;
    
        
    this.router.navigate(['dashboard/personalinfo/', this.user])
  
}

    this.serve.dashboardData(this.token).subscribe(

      (resp:Response) => {
        this.dashboardData = resp.json().data;
        this.totalUsers = this.dashboardData;  
               
      })

      this.serve.dashboardDataPending(this.token).subscribe(

        (resp:Response) => {
          this.dashboardDataPending = resp.json().data;
          this.pendingApprovals = this.dashboardDataPending;  
                 
        })

        this.serve.AccessUserCount(this.token).subscribe(

          (resp:Response) => {
            this.accessUsersData = resp.json().data;
            this.accessUsers = this.accessUsersData;  
                   
          })

          this.serve.OperatorCount(this.token).subscribe(

            (resp:Response) => {
              this.operatorData = resp.json().data;
              this.operators = this.operatorData;  
                     
            })


  }

}
