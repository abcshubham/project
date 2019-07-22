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
import { FrontPagesComponent } from './user/front-pages/front-pages.component';
import { AdminSettingComponent } from './admin/admin-setting/admin-setting.component';
import { AddUserAdminComponent } from './admin/add-user-admin/add-user-admin.component';
import { UserDetailsComponent } from './admin/user-details/user-details.component';
import { RouterModule } from '@angular/router';


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
    FrontPagesComponent,
    AdminSettingComponent,
    AddUserAdminComponent,
    UserDetailsComponent
    
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
      { path: 'dashboard', component:DashboardComponent},
      { path: 'expense-report',component:ExpenseReportComponent},
      { path: 'income-report', component:IncomeReportComponent},
      { path: 'transaction-income',component:TransactionComponent},
      { path: 'transaction-expense',component:TranscationExpenseComponent},
      { path: 'update-expense', component:UpdateExpenseComponent},
      { path : 'update-income', component:UpdateIncomeComponent},
      {path : 'setting' , component:SettingComponent}
     

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
