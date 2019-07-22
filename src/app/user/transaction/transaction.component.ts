import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
   

  amount=0;
  category='';
  expense_date:Date;
  descrption='hii';
  payment_type='';
  name='';
  constructor(private router:Router,
    private userService : UserService
    ) { }

  ngOnInit() {
  }

  onSaveIncome(){
    if(this.name.length==0)
    {
      alert('enter the name');
    }
    else if(this.amount==0)
    {
      alert('enter the amount');
    }
    else if(this.category.length==0)
    {
     alert('enter the category');
    }
    else if(this.payment_type.length==0)
    {
      alert('enter the payment_type');
    }
    else if(this.descrption.length==0)
    {
      alert('enter the descrption');
    }
    else
    {
      console.log(this.payment_type)
      this.userService.
      saveincome(this.name,this.amount,this.category,this.payment_type,this.expense_date,this.descrption)
      .subscribe(response =>{
        if (response['_body'] == 'income register succesful') 
        {
          const admin=sessionStorage.getItem('user');
          this.router.navigate(['/income-report']);
        }
        else 
        {
          alert('error while register user');
        }

      });
    }

  }
}
