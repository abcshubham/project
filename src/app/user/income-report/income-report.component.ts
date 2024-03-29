import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas'; 

@Component({
  selector: 'app-income-report',
  templateUrl: './income-report.component.html',
  styleUrls: ['./income-report.component.css']
})
export class IncomeReportComponent implements OnInit {
income=[];
  constructor(
    private router:Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    document.getElementById("loginbtn").setAttribute("Style","display:none");
    document.getElementById("logup").setAttribute("Style","display:none");
    document.getElementById("logoutbtn").setAttribute("Style","display:block");
    this.loadExpRep();
  }


  loadExpRep()
  
  {
    this.userService.getIncomeDetails().subscribe(response =>{ 
      const body  =response.json();
      this.income=body;
      console.log(this.income);
    console.log(body);   })
  }

  
  onDelete(billid)
  {
    const result = confirm('Are you sure you want to remove this income?');
    if(result)
    {
      this.userService.deleteincome(billid).subscribe(response=>{
        const body = response["_body"];
        if (body['status'] == 'success') {
          this.ngOnInit();
        }
        this.ngOnInit();
      })
    }
  }

  newtran()
  {
    this.router.navigate(['/transaction-income']);
  }

  onUpdate(exp)
  {
    console.log(exp.billid)
    this.router.navigate(['/update-income'],{queryParams:{billid:exp.billid}});
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
