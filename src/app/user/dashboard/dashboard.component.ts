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
  constructor(
    private router:Router,
    private userService:UserService
  ) { }

  ngOnInit() {
    this.gettotalexpense();
    this.gettotalincome();
    
  }

  gettotalincome()
  {
   this.userService.totalincome().subscribe(response=>{
    const body  =response.json();
    this.income=body;
    
    

   })
  }


  gettotalexpense()
  {
   this.userService.totalexpense().subscribe(response=>{
    const body  =response.json();
    this.expense=body;
    //this.ngOnInit();
    

   })
  }
  


}
