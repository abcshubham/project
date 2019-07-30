import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usercomplain',
  templateUrl: './usercomplain.component.html',
  styleUrls: ['./usercomplain.component.css']
})
export class UsercomplainComponent implements OnInit {

  compl =''
  constructor(
    private userService : UserService,
    private router :Router
  ) { }

  ngOnInit() {
  }

  onSubmit()
  {
    this.userService.insertComp(this.compl).subscribe(response=>{
      //const body = response.json();
      this.router.navigate(['/dashboard']);
    })

  }
  onCancel()
  {
    this.router.navigate(['/dashboard']);
  }

}
