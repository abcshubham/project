import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-transcation-expense',
  templateUrl: './transcation-expense.component.html',
  styleUrls: ['./transcation-expense.component.css']
})
export class TranscationExpenseComponent implements OnInit {
payment=[];

  amount=0;
  category='';
  expense_date:Date;
  descrption='hii';
  payment_type='';
  name='';

  constructor(private router: Router,
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
    this.userService.getMopDetails().subscribe(response =>{ 
      const body  =response.json();
      this.payment=body;
      console.log(this.payment);
    console.log(body);  
   })
  }

  onSave(){
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
      saveup(this.name,this.amount,this.category,this.payment_type,this.expense_date,this.descrption)
      .subscribe(response =>{
        if (response['_body'] == 'expense register succesful') 
        {
          const admin=sessionStorage.getItem('user');
          this.router.navigate(['/expense-report']);
        }
        else 
        {
          alert('error while register user');
        }

      });
    }

}
}
