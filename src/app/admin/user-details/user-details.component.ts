import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
 user=[];
  constructor(
    private router:Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    document.getElementById("loginbtn").setAttribute("Style","display:none");
    document.getElementById("logup").setAttribute("Style","display:none");
    document.getElementById("logoutbtn").setAttribute("Style","display:block");
    this.loadExpRep();
  }


  loadExpRep()
  {
    this.userService.getuserdetails().subscribe(response =>{ 
      const body  =response.json();
      this.user=body;
      console.log(this.user);
    console.log(body);   })
  }
  onDelete(id)
  {
    const result = confirm('Are you sure you want to remove this expense?');
    if(result)
    {
      this.userService.deleteuser(id).subscribe(response=>{
        const body = response["_body"];
        if (body['status'] == 'success') {
          this.ngOnInit();
        }
        this.ngOnInit();
      })
    }
  }
}
