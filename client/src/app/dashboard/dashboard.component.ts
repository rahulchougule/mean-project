import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Response } from "@angular/http";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user:string;   
  role:string;

  forUser:boolean = false;
  
  constructor(private router:Router) {

   }

  ngOnInit() {
  this.user = sessionStorage.getItem('user')
  this.role = sessionStorage.getItem('role')
  
  if(this.role === 'AccessUser'){
    this.forUser = true;
    
        
    this.router.navigate(['dashboard/personalinfo/', this.user])
  
  }

  }

}
