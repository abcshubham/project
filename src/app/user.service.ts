import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService implements CanActivate{

  url = 'http://localhost:8080/JavaHema/user';

  expense:any;
  income:any;
  setting:any;
  constructor(
    private router : Router,
    private http: Http
  ) { }
  
  getDetails() {
    return this.http.get(this.url + '/expense-report' );
  }

  getIncomeDetails()
  {
    return this.http.get(this.url + '/expense-income' );
  }

  getMopDetails()
  {
    return this.http.get(this.url + '/mop' );
  }
  getExpenseDetails()
  {
    return this.http.get(this.url + '/savecatexp' );
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (sessionStorage['login_status'] === '1') {
      return true;
    }this.router.navigate(['/login']);
    return false;
  }

  login(email: string, password: string) {
    const body = {
      email: email,
      password: password
    };
    const headers = new Headers({'Content-Type': 'application/json'});
    const requestOptions = new RequestOptions({headers: headers});
    return this.http.post(this.url + '/login', body, requestOptions);
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

  saveup(name:string,amount:number,category:string,paymentcategory:string,date:Date,descrption:string)
  {
    const body = {
      amount:amount,
      category:category,
      date:date,
      descrption:descrption,
      paymentcategory:paymentcategory,
      name:name
    
    };
    console.log(body)
    const headers = new Headers({'Content-Type': 'application/json'});
    const requestOptions = new RequestOptions({headers: headers});
    return this.http.post(this.url + '/transaction-expense', body, requestOptions);
  }

  delete(id: number) 
  {
    return this.http.delete(this.url + '/' + id);
  }
  deletemop(iad:number)
  {
    return this.http.delete(this.url + '/mop/' + iad);
  }
  deletecat(iad:number)
  {
    return this.http.delete(this.url + '/mopexpense/' + iad);
  }
  deleteuser(id: number) 
  {
    return this.http.delete(this.url + '/deleteuser/' + id);
  }


  deleteincome(abc: number) 
  {
    return this.http.delete(this.url + '/income/' + abc);
  }

  getExpenseById(expenseId:number)
  {
    console.log(expenseId);
    return this.http.get(this.url + '/' + expenseId);
  }

  getIncomeById(incomeid:number)
  {
    return this.http.get(this.url + '/income/' + incomeid); 
  }
 getSetting()
 {
  return this.http.get(this.url+'/setting');
 }
 getASetting()
 {
  return this.http.get(this.url+'/adminsetting');
 }

 updateExpense(assetid,name,amount,category,payment_type,expense_date,descrption)
 {
    console.log(assetid);
    let newUrl=this.url+"/"+assetid;
    this.expense={
      "name":name,
      "amount":amount,
      "category":category,
      "paymentcategory":payment_type,
      "date":expense_date,
      "descrption":descrption
    }
    return this.http.put(newUrl,this.expense);
 
  }

  updateIncome(billid,name,amount,category,payment_type,expense_date,descrption)
  {
    console.log("in the "+billid);
    let newUrl=this.url+"/income/"+billid;
    this.income={
      "name":name,
      "amount":amount,
      "category":category,
      "paymentcategory":payment_type,
      "date":expense_date,
      "descrption":descrption
    }
    return this.http.put(newUrl,this.income);
 
  }

  saveincome(name:string,amount:number,category:string,paymentcategory:string,date:Date,descrption:string)
  {
    const body = {
      amount:amount,
      category:category,
      date:date,
      descrption:descrption,
      paymentcategory:paymentcategory,
      name:name
    
    };
    console.log(body)
    const headers = new Headers({'Content-Type': 'application/json'});
    const requestOptions = new RequestOptions({headers: headers});

    return this.http.post(this.url + '/transaction-income', body, requestOptions);
  }

  totalexpense()
  {
    return this.http.get(this.url+"/totalexpense");
  }

  totalincome()
  {
    return this.http.get(this.url +"/totalincome");
  }

updateSetting(id:number,email:string,password:string,fname:string,lname:string,role:string)
{
  let newUrl=this.url+"/setting/"+id;
  this.setting={
    id:id,
    email:email,
    password:password,
    fname:fname,
    lname:lname,
    role:role
  }
  return this.http.put(newUrl,this.setting);
}

updateAdminSetting(id,email,password,fname,lname,role)
{
  let newUrl=this.url+"/adminsetting/"+id;
  this.setting={
    "id":id,
    "email":email,
    "password":password,
    "fname":fname,
    "lname":lname,
    "role":role
  }
  return this.http.put(newUrl,this.setting);
}

expensemonth(b)
{
  return this.http.get(this.url +"/expensemonth/"+b);
}


incomemonth(b)
{
  return this.http.get(this.url +"/incomemonth/"+b);
}

expenseyear(b)
{
  return this.http.get(this.url +"/expenseabc/"+b);
}


incomeyear(b)
{
  return this.http.get(this.url +"/yearabc/"+b);
}

logout()
{
  return this.http.get(this.url+"/logout");
}

getuserdetails()
{
  return this.http.get(this.url + '/userDetails' );
}


totalu()
{
  return this.http.get(this.url + "/admin");
}


insertComp(complain:string)
{
  const body = {
    complain:complain
};
console.log(body)
const headers = new Headers({'Content-Type': 'application/json'});
const requestOptions = new RequestOptions({headers: headers});

return this.http.post(this.url + '/complaint', body, requestOptions);
}

getcompdetails()
{
  return this.http.get(this.url + '/useradmincomp' );
}
deleteusercomp(id)
{
  return this.http.delete(this.url + '/deleteusercomp/' + id);
}


signupadmin(fname: string, lname: string, email: string, password: string, role: string) {
  const body = {
    fname: fname,
    lname: lname,
    email: email,
    password: password,
    role : role
  };
  const headers = new Headers({'Content-Type': 'application/json'});
  const requestOptions = new RequestOptions({headers: headers});
  return this.http.post(this.url + '/adminuserregister', body, requestOptions);
}

savemop(modeofpayment:string)
  {
    const body = {
  
      modeofpayment:modeofpayment
    };
    console.log(body)
    const headers = new Headers({'Content-Type': 'application/json'});
    const requestOptions = new RequestOptions({headers: headers});
    return this.http.post(this.url + '/savemop', body, requestOptions);
  }


saveexpensecat(modeofexpense:string)
{
  const body = {

    modeofexpense:modeofexpense
  };
  console.log(body)
  const headers = new Headers({'Content-Type': 'application/json'});
  const requestOptions = new RequestOptions({headers: headers});
  return this.http.post(this.url + '/saveexpensecat', body, requestOptions);
}

}
