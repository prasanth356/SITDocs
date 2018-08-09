import { DataService } from './services/data.service';
import { PrimeVendorService } from './services/prime-vendor.service';
import { AuthguardGuard } from './authguard.guard';
import { UserService } from './services/user.service';
import { InterviewService } from './services/interview.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { CustomerComponent } from './components/customer/customer.component'
import { TestComponent } from './components/test/test.component';

//Services
import { CustomerService } from './services/customer.service';
import { OrderByPipe } from './pipes/order-by.pipe';
import { SearchPipe } from './pipes/search.pipe';
import { InterviewComponent } from './components/interview/interview.component';
import { LoginComponent } from './components/login/login.component';
import { PrimeVendorComponent } from './components/prime-vendor/prime-vendor.component';
import { InterviewUpdateComponent } from './components/interview-update/interview-update.component';
import { VendorComponent } from './components/vendor/vendor.component';
import { VendorUpdateComponent } from './components/vendor-update/vendor-update.component';

import { SummaryComponent } from './components/summary/summary.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { SummaryService } from './services/summary.service';
import { SummaryUpdateComponent } from './components/summary-update/summary-update.component';
import { BtwDatesPipe } from './pipes/btwDates.pipe';
import { SummaryEditComponent } from './components/summary-edit/summary-edit.component';
import { SignupComponent } from './components/signup/signup.component';
import { SalesComponent } from './components/sales/sales.component';
import { RecruiterComponent } from './components/recruiter/recruiter.component';
import { AddSalesComponent } from './components/sales/add-sales/add-sales.component';
import { AddRecruiterComponent } from './components/recruiter/add-recruiter/add-recruiter.component';
import { ReportComponent } from './components/report/report.component';
import { SalesReportComponent } from './components/report/sales-report/sales-report.component';
import { RecruiterReportComponent } from './components/report/recruiter-report/recruiter-report.component';
import { SignupService } from 'app/services/signup.service';
@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    NavComponent,
    OrderByPipe,
    SearchPipe,
    BtwDatesPipe,
    CustomerComponent,
    HomeComponent,
    TestComponent,
    InterviewComponent,
    LoginComponent,
    PrimeVendorComponent,
    InterviewUpdateComponent,
    VendorComponent,
    VendorUpdateComponent,
    SummaryComponent,
    SummaryUpdateComponent,
    SummaryEditComponent,
    SignupComponent,
    SalesComponent,
    RecruiterComponent,
    AddSalesComponent,
    AddRecruiterComponent,
    ReportComponent,
    SalesReportComponent,
    RecruiterReportComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: "", redirectTo: "/login", pathMatch: 'full' },
      { path: "signup", component: SignupComponent },
      { path: "sales", component: SalesComponent },
      { path: "recruiter", component: RecruiterComponent },
      { path:"addsales", component: AddSalesComponent},
      { path:"addrecruiter",component:AddRecruiterComponent},
      { path:"report",component:ReportComponent},
      { path:"salesreport",component:SalesReportComponent},
      { path:"recruiterreport",component:RecruiterReportComponent},
      

      //{ path: "", redirectTo: "/home", pathMatch: 'full' },
      { path: "customers", component: CustomerListComponent, canActivate: [AuthguardGuard] },
      { path: "customers/add", component: CustomerComponent, canActivate: [AuthguardGuard] },
      { path: "customers/add", component: CustomerComponent, canActivate: [AuthguardGuard] },
      { path: "customers/edit/:id", component: CustomerComponent, canActivate: [AuthguardGuard] },
      { path: "login", component: LoginComponent},
      { path: "home", component: HomeComponent},
      { path: "interview", component: InterviewComponent, canActivate: [AuthguardGuard]},
      { path: "interview/add", component: InterviewUpdateComponent, canActivate: [AuthguardGuard] },
      { path: "interview/edit/:id", component: InterviewUpdateComponent, canActivate: [AuthguardGuard] },
      { path: "primeVendor", component: PrimeVendorComponent},
      { path: "summary", component: SummaryComponent},
      { path: "summary/add", component: SummaryUpdateComponent},
      { path: "summary/edit", component: SummaryEditComponent},
      { path: '**', component: CustomerListComponent }
    ])
  ],
  providers: [CustomerService, InterviewService, UserService, SignupService, AuthguardGuard, PrimeVendorService, SummaryService, HttpClientModule, DataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
