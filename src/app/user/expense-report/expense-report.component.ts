import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';
import { asElementData } from '@angular/core/src/view';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';

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
    document.getElementById("loginbtn").setAttribute("Style","display:none");
    document.getElementById("logup").setAttribute("Style","display:none");
    document.getElementById("logoutbtn").setAttribute("Style","display:block");
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
  invoice()
  {
  html2canvas(document.querySelector('#test1')).then(canvas => {
	var pdf = new jspdf('p','pt',[200,700]);
	var imgData= canvas.toDataURL("image/jpeg",3.0);
	pdf.addImage(imgData,0,0,200,200);
	pdf.save("incomereport.pdf");

  });

}

  

}
