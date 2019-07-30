import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-addcat',
  templateUrl: './addcat.component.html',
  styleUrls: ['./addcat.component.css']
})
export class AddcatComponent implements OnInit {

  modeofexpense='';
  constructor(
    private router:Router,
    private userService:UserService
  ) { }

  ngOnInit() {
    document.getElementById("loginbtn").setAttribute("Style","display:none");
    document.getElementById("logup").setAttribute("Style","display:none");
    document.getElementById("logoutbtn").setAttribute("Style","display:block");
  }

  onSave()
  {
 if(this.modeofexpense.length==0)
 {
  alert('plz write payment method');
 }
 else
    {
      this.userService.
      saveexpensecat(this.modeofexpense)
      .subscribe(response =>{
       
          const admin=sessionStorage.getItem('user');
          this.router.navigate(['/dashboard']);
        
        

      });
    }
  }

}
