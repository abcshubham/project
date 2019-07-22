import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';
import { asElementData } from '@angular/core/src/view';

@Component({
  selector: 'app-expense-report',
  templateUrl: './expense-report.component.html',
  styleUrls: ['./expense-report.component.css']
})
export class ExpenseReportComponent implements OnInit {
 expense= [];

  constructor(
    private router:Router,
    private userService: UserService
  ) { }


  loadExpRep()
  
  {
    this.userService.getDetails().subscribe(response =>{ 
      const body  =response.json();
      this.expense=body;
      console.log(this.expense);
       console.log(body);   })
  }
   
  onDelete(assetid)
  {
    const result = confirm('Are you sure you want to remove this expense?');
    if(result)
    {
      this.userService.delete(assetid).subscribe(response=>{
        const body = response["_body"];
        if (body['status'] == 'success') {
          this.ngOnInit();
        }
        this.ngOnInit();
      })
    }
  }

  ngOnInit() {
    this.loadExpRep();
  }

  newtran()
  {
    this.router.navigate(['/transaction-expense']);
  }
  onUpdate(exp)
  {
    console.log(exp.assetid)
    this.router.navigate(['/update-expense'],{queryParams:{assetid:exp.assetid}});
  }

}