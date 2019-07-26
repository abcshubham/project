import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-update-expense',
  templateUrl: './update-expense.component.html',
  styleUrls: ['./update-expense.component.css']
})
export class UpdateExpenseComponent implements OnInit {
 
  list=[];

  
 
  assetid=0;
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
  ) 
  { 
    activeRoute
    .queryParams.subscribe(params=>{
      const expenseId = params['assetid']
      console.log("in update :"+expenseId);

      this.userService.getExpenseById(expenseId).subscribe(response=>
      {
      this.list= response.json();
      
      console.log(this.list);
      this.amount=this.list['amount'];
      this.name=this.list['name'];
      this.category=this.list['category'];
      this.paymentcategory=this.list['paymentcategory'];
      this.date=this.list['date'];
      this.descrption=this.list['descrption'];
      this.assetid=this.list['assetid'];
      
        
        
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
    this.userService.updateExpense(this.assetid,this.name,this.amount,this.category,this.paymentcategory,
      this.date,this.descrption).subscribe(response=>{
        let result=response.json();
        
        this.router.navigate(['/expense-report']);}
      
      )

  }
  



}


