import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'node';

  constructor(private router:Router,
    private userService:UserService){}


  logout()
  {
  this.userService.logout().subscribe(response=>{})
  }

}
