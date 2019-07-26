import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService implements CanActivate {

  url = 'http://localhost:8080/JavaHema/user';

  constructor(
    private router : Router,
    private http: Http
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // check if user has logged in
    if (sessionStorage['login_status'] == '1') {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
  
  signup(fname: string, lname: string, email: string, password: string, role: string) {
    const body = {
      fname: fname,
      lname: lname,
      email: email,
      password: password,
      role : role
    };
    const headers = new Headers({'Content-Type': 'application/json'});
    const requestOptions = new RequestOptions({headers: headers});

    return this.http.post(this.url + '/register', body, requestOptions);
  }


}
