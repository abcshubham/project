import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  expense:any;
  income:any;
  expensemonth:any;
  incomemonth:any;
  expenseyear:any;
  incomeyear:any;
  
  constructor(
    private router:Router,
    private userService:UserService
  ) { }

  ngOnInit() {

    document.getElementById("loginbtn").setAttribute("Style","display:none");
    document.getElementById("logup").setAttribute("Style","display:none");
    document.getElementById("logoutbtn").setAttribute("Style","display:block");

    this.gettotalexpense();
    this.gettotalincome();
    this.getexpenseMonth();
    this.getincomeMonth();
    this.getexpenseYear();
    this.getincomeYear();
    
  }

  gettotalincome()
  {
   this.userService.totalincome().subscribe(response=>{
    const body  =response.json();
    this.income=body;})
  }


  gettotalexpense()
  {
   this.userService.totalexpense().subscribe(response=>{
    const body  =response.json();
    this.expense=body; })
  }
  
  getexpenseMonth()
  {
    let a = new Date();
    let b = a.getMonth()+1;
    console.log(b);
    this.userService.expensemonth(b).subscribe(response=>{
      const body  =response.json();
      this.expensemonth=body; })
  
  }

  getincomeMonth()
  {
    let a = new Date();
    let b = a.getMonth()+1;
    this.userService.incomemonth(b).subscribe(response=>{
      const body  =response.json();
      this.incomemonth=body; })
  
  }
 
  getincomeYear()
  {
    let a = new Date();
    let b = a.getFullYear();
    this.userService.incomeyear(b).subscribe(response=>{
      const body  =response.json();
      this.incomeyear=body; })
  }
  getexpenseYear()
  {
    let a = new Date();
    let b = a.getFullYear();
    console.log(b);
    this.userService.expenseyear(b).subscribe(response=>{
      const body  =response.json();
      this.expenseyear=body; })
  }

 }
