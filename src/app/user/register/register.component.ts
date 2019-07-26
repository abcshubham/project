import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  fname = '';
  lname = '';
  email = '';
  password = '';
  confirmPassword = '';
  role='';

  constructor(private router: Router,
    private userService:UserService
    ) { }

  ngOnInit() {
  }

  onSignup() {
    if(this.fname.length==0)
    {
      alert('enter the first name');
    }
    else if(this.lname.length==0)
    {
      alert('enter the last name');
    }
    else if(this.email.length==0)
    {
     alert('enter the email');
    }
    else if(this.password.length==0)
    {
      alert('enter the password');
    }
    else if(this.confirmPassword.length==0)
    {
      alert('enter the confirm password');
    }
    else if(this.confirmPassword!=this.password)
    {
      alert('password not match');
    }
    else
    {
      this.userService.signup(this.fname,this.lname,this.email,this.password,this.role)
      .subscribe(response =>{
        if (response['_body'] == 'user registration succesful') 
        {
          this.router.navigate(['/login']);
        }
        else 
        {
          alert('error while register user');
        }

      });
    }
    
  }
  onCancel()
  {
    this.router.navigate(['/home']);
  }

}
