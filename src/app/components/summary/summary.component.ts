import { DataService } from './../../services/data.service';
import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { SummaryService } from 'app/services/summary.service';
import { Observable } from 'rxjs/Observable';
import { ViewChild } from '@angular/core';
import { Angular2Csv } from 'angular2-csv/Angular2-csv';
import { element } from 'protractor';
import { DatePipe } from '@angular/common';
import { BtwDatesPipe } from '../../pipes/btwDates.pipe';
//import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})


export class SummaryComponent implements OnInit {
  @ViewChild('fileInput') fileInput;
  interviews;
  fromDate: String;
  toDate: String;
  today: string;
  yesterday: string;
  lastWeek: string;
  lastMonth: string;

  constructor(private uploadService: SummaryService, private httpClient: HttpClient,
              private router: Router, public dataService: DataService ) {   }

  ngOnInit() {
    this.getProfile();
    this.todayDate();
  }

fileUpload(): void {
  let fi = this.fileInput.nativeElement;
  if (fi.files && fi.files[0]) {
    let fileToUpload = fi.files[0];
      this.uploadService
          .upload(fileToUpload)
          .subscribe(res => {
              console.log(res);
          });
  }
}

getProfile(){
  this.httpClient.get(`http://148.76.75.203:8080/SourceInfoEmployeeManagementnew/summary/getcompletesummaryforexcel`)
  .subscribe(
    (data) => {
        console.log(data);
        this.interviews = data;
    }
  )
}

// head = ['S.No','Date of Entry', 'Date of Interview', 'PV Sales Name', 'PV Sales Email', 'PV Sales Phone', 
// 'PV Sales LinkedIn', 'PV Recruiter Name', 'PV Recruiter Email', 'PV Recruiter Phone', 'PV Recruiter LinkedIn',
// 'Skill Set', 'End Client Name', 'EC Hiring Manager', 'EC Hiring Manager LinkedIn','Candidate Name' , 
// 'Candidate Email', 'Candidate Phone', 'Candidate Company Name', 'Candidate Company Contact', 
// 'sit Sales Name', 'sit RecruiterName'];

export() {
  var excelData = this.foo(this.interviews, this.fromDate, this.toDate);
  new Angular2Csv(excelData, 'My Report', {headers: Object.keys(this.interviews[0])});
}

foo(records, _fromDate, _toDate){

  var fromDate = new Date(_fromDate);
    var toDate = new Date(_toDate);
    
    var recDate :Date;

    if((_fromDate==null)||(_toDate==null)) return records;
    if((_fromDate=="")||(_toDate=="")) return records;
    return records.filter(function(rec){
     recDate = new Date(rec.dateofEntry);
     return ((recDate>=fromDate)&&(recDate<=toDate));
    })   

}

edit(data){
  //console.log(data,"edit function");
  this.dataService.interview = data;
  this.router.navigate(['summary/edit']);
}

add(){
  this.router.navigate(['summary/add']);
}


searchYesterday(){
  this.yesterdayDate();
  this.fromDate = this.yesterday;
  this.toDate = this.today;
  console.log(this.today);
}

searchLastWeek(){
  this.lastWeekDate();
  this.fromDate = this.lastWeek;
  this.toDate = this.today;
}
searchLastMonth(){
  this.lastMonthDate();
  this.fromDate = this.lastMonth;
  this.toDate = this.today;
}

todayDate(){
  var _today: any = new Date();
  var dd : any = _today.getDate()-1;
  var mm:any = _today.getMonth()+1; //January is 0!

  var yyyy = _today.getFullYear();
  if(dd<10){
    dd='0'+dd;
  } 
  if(mm<10){
    mm='0'+mm;
  } 
  _today = yyyy+'-'+mm+'-'+dd;
  this.today = _today;
}

yesterdayDate(){
  var _yesterday: any = new Date();
  var dd : any = _yesterday.getDate()-1;
  var mm:any = _yesterday.getMonth()+1; //January is 0!

  var yyyy = _yesterday.getFullYear();
  if(dd<10){
    dd='0'+dd;
  } 
  if(mm<10){
    mm='0'+mm;
  } 
  _yesterday = yyyy+'-'+mm+'-'+dd;
  this.yesterday = _yesterday;
}

lastMonthDate(){
  var _lastMonth: any = new Date();
  var dd : any = _lastMonth.getDate();
  var mm:any = _lastMonth.getMonth()+1-1; //January is 0!

  var yyyy = _lastMonth.getFullYear();
  if(dd<10){
    dd='0'+dd;
  } 
  if(mm<10){
    mm='0'+mm;
  } 
  _lastMonth = yyyy+'-'+mm+'-'+dd;
  this.lastMonth = _lastMonth;
}

lastWeekDate(){
  var _today :Date =new Date();
  var _lastWeek: any = new Date(_today.getFullYear(), _today.getMonth(), _today.getDate() - 7);
  var dd : any = _lastWeek.getDate();
  var mm:any = _lastWeek.getMonth()+1; //January is 0!

  var yyyy = _lastWeek.getFullYear();
  if(dd<10){
    dd='0'+dd;
  } 
  if(mm<10){
    mm='0'+mm;
  } 
  _lastWeek = yyyy+'-'+mm+'-'+dd;
  this.lastWeek = _lastWeek;
}

}
