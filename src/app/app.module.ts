import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { TransactionComponent } from './user/transaction/transaction.component';
import { TranscationExpenseComponent } from './user/transcation-expense/transcation-expense.component';
import { SettingComponent } from './user/setting/setting.component';
import { DashboardComponent } from './user/dashboard/dashboard.component';
import { ExpenseReportComponent } from './user/expense-report/expense-report.component';
import { IncomeReportComponent } from './user/income-report/income-report.component';
import { UpdateIncomeComponent } from './user/update-income/update-income.component';
import { UpdateExpenseComponent } from './user/update-expense/update-expense.component';
import { AdminSettingComponent } from './admin/admin-setting/admin-setting.component';
import { AddUserAdminComponent } from './admin/add-user-admin/add-user-admin.component';
import { UserDetailsComponent } from './admin/user-details/user-details.component';
import { RouterModule } from '@angular/router';
import { HomepageComponent } from './user/homepage/homepage.component';
import { AdmindashboardComponent } from './admin/admindashboard/admindashboard.component';
import { UserService } from './user.service';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { AdminserviceService } from './adminservice.service';
import { UsercomplainComponent } from './user/usercomplain/usercomplain.component';
import { UsercompComponent } from './admin/usercomp/usercomp.component';
import { MoplistComponent } from './user/moplist/moplist.component';
import { ChangecategoryComponent } from './user/changecategory/changecategory.component';
import { AddmopComponent } from './user/addmop/addmop.component';
import { AddcatComponent } from './user/addcat/addcat.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    TransactionComponent,
    TranscationExpenseComponent,
    SettingComponent,
    DashboardComponent,
    ExpenseReportComponent,
    IncomeReportComponent,
    UpdateIncomeComponent,
    UpdateExpenseComponent,
    AdminSettingComponent,
    AddUserAdminComponent,
    UserDetailsComponent,
    HomepageComponent,
    AdmindashboardComponent,
    AboutusComponent,
    ContactComponent,
    UsercomplainComponent,
    UsercompComponent,
    MoplistComponent,
    ChangecategoryComponent,
    AddmopComponent,
    AddcatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    AppRoutingModule,
    HttpModule,
    ReactiveFormsModule,
    
    RouterModule.forRoot([
      
      { path: 'login', component:LoginComponent },
      { path: 'register', component:RegisterComponent },
      { path: 'dashboard', component:DashboardComponent,canActivate:[UserService]},
      { path: 'expense-report',component:ExpenseReportComponent,canActivate:[UserService]},
      { path: 'income-report', component:IncomeReportComponent,canActivate:[UserService]},
      { path: 'transaction-income',component:TransactionComponent,canActivate:[UserService]},
      { path: 'transaction-expense',component:TranscationExpenseComponent,canActivate:[UserService]},
      { path: 'update-expense', component:UpdateExpenseComponent,canActivate:[UserService]},
      { path : 'update-income', component:UpdateIncomeComponent,canActivate:[UserService]},
      { path : 'setting' , component:SettingComponent,canActivate:[UserService]},
      { path : 'home' , component:HomepageComponent},
      { path: 'addUserAdmin' , component:AddUserAdminComponent,canActivate:[UserService]},
      { path: 'addSetting' , component:AdminSettingComponent,canActivate:[UserService]},
      { path: 'userDetails' , component:UserDetailsComponent,canActivate:[UserService]},
      { path: 'admindashboard', component:AdmindashboardComponent,canActivate:[UserService]},
      { path : 'aboutus', component:AboutusComponent},
      { path : 'contactus', component:ContactComponent},
      { path : 'complain', component:UsercomplainComponent},
      { path : 'usercomp', component:UsercompComponent},
      { path : 'mop', component:MoplistComponent},
      { path : 'categorychange', component:ChangecategoryComponent },
      { path : 'addmop', component:AddmopComponent},
      { path : 'addcat', component:AddcatComponent}

    ])
  ],
  providers: [UserService,AdminserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
