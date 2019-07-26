import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-admin-setting',
  templateUrl: './admin-setting.component.html',
  styleUrls: ['./admin-setting.component.css']
})
export class AdminSettingComponent implements OnInit {


  setting=[];

  id=0;
  email='';
  password='';
  fname='';
  lname='';
  role='';
  
  constructor(
    private router:Router,
    activeRoute: ActivatedRoute,
    private userService: UserService
  ) { 
    activeRoute
    .queryParams.subscribe(params=>{
     
 
    this.userService.getASetting().subscribe(response=>{
      this.setting=response.json();
      console.log(this.setting);
      this.id=this.setting['id'];
      this.email=this.setting['email'];
      this.password=this.setting['password'];
      this.fname=this.setting['fname'];
      this.lname=this.setting['lname'];
      this.role=this.setting['role'];
    });
    });
  }

  ngOnInit() {
    document.getElementById("loginbtn").setAttribute("Style","display:none");
    document.getElementById("logup").setAttribute("Style","display:none");
    document.getElementById("logoutbtn").setAttribute("Style","display:block");
    
  }

 

  onSave()
{
  this.userService.updateAdminSetting(this.id,this.email,this.password,this.fname,this.lname,this.role).subscribe(response=>{
  console.log(this.id);
  this.router.navigate(['/admindashboard']);
  })
}

}
