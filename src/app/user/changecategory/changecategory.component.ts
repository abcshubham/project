import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-changecategory',
  templateUrl: './changecategory.component.html',
  styleUrls: ['./changecategory.component.css']
})
export class ChangecategoryComponent implements OnInit {

  payment=[];

  constructor(
    private router: Router,
    private userService:UserService
  ) {
    this.loadmop();
   }

  ngOnInit() {
    document.getElementById("loginbtn").setAttribute("Style","display:none");
    document.getElementById("logup").setAttribute("Style","display:none");
    document.getElementById("logoutbtn").setAttribute("Style","display:block");
  }
  
  loadmop()
  {
    this.userService.getExpenseDetails().subscribe(response =>{ 
      const body  =response.json();
      this.payment=body;
      console.log(this.payment);
    console.log(body);  
   })
  }
  onDelete(iad)
  {
    const result = confirm('Are you sure you want to remove this income?');
    if(result)
    {
      this.userService.deletecat(iad).subscribe(response=>{
        const body = response["_body"];
        if (body['status'] == 'success') {
          this.ngOnInit();
          

        }
        this.ngOnInit();
        this.router.navigate(['/dashboard']);
      })
    }
  }

  newcategory()
  {
    this.router.navigate(['/addcat']);
  }

}
