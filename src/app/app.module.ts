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
    ContactComponent
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
      { path: 'addUserAdmin' , component:AddUserAdminComponent},
      { path: 'addSetting' , component:AdminSettingComponent},
      { path: 'userDetails' , component:UserDetailsComponent},
      { path: 'admindashboard', component:AdmindashboardComponent},
      { path : 'aboutus', component:AboutusComponent},
      { path : 'contactus', component:ContactComponent},
      
    

    ])
  ],
  providers: [UserService,AdminserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
