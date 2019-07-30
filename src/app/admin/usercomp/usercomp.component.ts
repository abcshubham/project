import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-usercomp',
  templateUrl: './usercomp.component.html',
  styleUrls: ['./usercomp.component.css']
})
export class UsercompComponent implements OnInit {

  admin=[];
  constructor(
    private router:Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    document.getElementById("loginbtn").setAttribute("Style","display:none");
    document.getElementById("logup").setAttribute("Style","display:none");
    document.getElementById("logoutbtn").setAttribute("Style","display:block");
    this.loadcomp();
  }

  loadcomp()
  {
    this.userService.getcompdetails().subscribe(response =>{ 
      const body  =response.json();
      this.admin=body;
      console.log(this.admin);
    console.log(body);   })
  }

  onDeleteC(id)
  {
    const result = confirm('Are you sure you want to remove this expense?');
    if(result)
    {
      this.userService.deleteusercomp(id).subscribe(response=>{
        const body = response["_body"];
        if (body['status'] == 'success') {
          this.ngOnInit();
        }
        this.ngOnInit();
      })
    }
  }

}
