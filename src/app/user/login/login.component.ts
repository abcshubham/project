import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email='';
  password='';
  constructor( private router: Router,
    private userService : UserService
    ) { }

  ngOnInit() {
  }


  onLogin() {
    if (this.email.length == 0) {
      alert('enter email');
    } else if (this.password.length == 0) {
      alert('enter password');
    } else {
      this.userService
        .login(this.email, this.password)
        .subscribe(response => {
         // const body = response.json();
          if (response['_body'] == 'user login succesful') {

            // cache the login status
            // localStorage
            sessionStorage['login_status'] = '1';
            sessionStorage.setItem('user',this.email);

            alert('welcome to the user');
            this.router.navigate(['/dashboard']);
          }
          else if(response['_body']=='admin login succesful')
          {
            sessionStorage['login_status'] = '1';
            alert('welcome to admin');
            this.router.navigate(['/admindashboard']);
          }
          else
          {
            alert("login failed");
          }
        });
    }
  }

  onCancel() {
    this.router.navigate(['/dashboard']);
  }

  onSignup() {
    this.router.navigate(['/register']);
  }

}
