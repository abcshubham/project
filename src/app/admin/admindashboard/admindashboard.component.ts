import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {
  
  tuser:any;
  constructor(
    private router:Router,
    private admin:UserService
  ) {this.totaluser(); }

  ngOnInit() {
    document.getElementById("loginbtn").setAttribute("Style","display:none");
    document.getElementById("logup").setAttribute("Style","display:none");
    document.getElementById("logoutbtn").setAttribute("Style","display:block");
    this.totaluser();
  }

  totaluser()
  {
    this.admin.totalu().subscribe(response=>{
      const body  =response.json();
      this.tuser=body;})
  }

}
