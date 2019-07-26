import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-update-income',
  templateUrl: './update-income.component.html',
  styleUrls: ['./update-income.component.css']
})
export class UpdateIncomeComponent implements OnInit {


  list=[];

  billid=0;
  name='';
  amount=0;
  category=0;
  paymentcategory='';
  date='';
  descrption='';

  constructor(
    private router:Router,
    activeRoute: ActivatedRoute,
    private userService: UserService
  ) { 
    activeRoute
    .queryParams.subscribe(params=>{
      const incomeid = params['billid']
      console.log("in update :" + incomeid);

      this.userService.getIncomeById(incomeid).subscribe(response=>
      {
      this.list= response.json();
      
      console.log(this.list);
      this.amount=this.list['amount'];
      this.name=this.list['name'];
      this.category=this.list['category'];
      this.paymentcategory=this.list['paymentcategory'];
      this.date=this.list['date'];
      this.descrption=this.list['descrption'];
      this.billid=this.list['billid'];
    });
  });
}

  ngOnInit() {
    document.getElementById("loginbtn").setAttribute("Style","display:none");
    document.getElementById("logup").setAttribute("Style","display:none");
    document.getElementById("logoutbtn").setAttribute("Style","display:block");
  }

  onUpdate()
  {
    this.userService.updateIncome(this.billid,this.name,this.amount,this.category,this.paymentcategory,
      this.date,this.descrption).subscribe(response=>{
        let result=response.json();
        console.log(this.billid);
        this.router.navigate(['/income-report']);}
      
      )

  }

}
