import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/user.service';
@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {

  setting=[];

  id=0;
  email='';
  password='';
  fname='';
  lname='';
  role='user';

  constructor(
    private router:Router,
    activeRoute: ActivatedRoute,
    private userService: UserService
  ) { this.loadsetting}

  ngOnInit() {
    this.loadsetting();
  }
 
  loadsetting()
  {
    this.userService.getSetting().subscribe(response=>{
      this.setting=response.json();
      console.log(this.setting);
      this.id=this.setting['id'];
      this.email=this.setting['email'];
      this.password=this.setting['password'];
      this.fname=this.setting['fname'];
      this.lname=this.setting['lname'];
      this.role=this.setting['role'];
    })
  }

onSave()
{
  this.userService.updateSetting(this.id,this.email,this.password,this.fname,this.lname,this.role).subscribe(response=>{
    let result=response.json();
    console.log(this.id);
    this.router.navigate(['/dashboard']);
  })
}
  
}
