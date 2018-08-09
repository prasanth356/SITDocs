//import { error } from 'selenium-webdriver';
import {Observable} from 'rxjs/Observable';
import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SummaryService } from 'app/services/summary.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-summary-edit',
  templateUrl: './summary-edit.component.html',
  styleUrls: ['./summary-edit.component.css']
})
export class SummaryEditComponent implements OnInit {

  summaryForm: FormGroup;
  interview;

  constructor(private summaryService: SummaryService,
              private router: Router, public dataService: DataService) { }

  ngOnInit() {
    this.interview = this.dataService.interview;
    //console.log(this.interview ,"from edit summary"); 
    this.summaryForm = new FormGroup({
      'candidateName' : new FormControl(this.interview.candidateName, Validators.required),
      'dateofEntry' : new FormControl(this.interview.dateofEntry, Validators.required),
      'skillSet' : new FormControl(this.interview.skillSet, Validators.required),
      'candidateCompanyContact' : new FormControl(this.interview.candidateCompanyContact, Validators.required),
      'candidateCompanyName' : new FormControl(this.interview.candidateCompanyName, Validators.required),
      'dateofInterview' : new FormControl(this.interview.dateofInterview, Validators.required),
      'candidateEmail' : new FormControl(this.interview.candidateEmail, [Validators.required]),
      'candidatePhone' : new FormControl(this.interview.candidatePhone, Validators.required),
      'sitsalesName' : new FormControl(this.interview.sitsalesName, Validators.required),
      'sitrecruiterName' : new FormControl(this.interview.sitrecruiterName, Validators.required),
      'endClientName' : new FormControl(this.interview.endClientName, Validators.required),
      'echiringManager' : new FormControl(this.interview.echiringManager, Validators.required),
      'echiringManagerLinkedIn' : new FormControl(this.interview.echiringManagerLinkedIn, Validators.required),
      'pvsalesName' : new FormControl(this.interview.pvsalesName, Validators.required),
      'pvsalesEmail' : new FormControl(this.interview.pvsalesEmail, Validators.required),
      'pvsalesPhone' : new FormControl(this.interview.pvsalesPhone, Validators.required),
      'pvsalesLinkedIn' : new FormControl(this.interview.pvsalesLinkedIn, Validators.required),
      'pvrecruiterName' : new FormControl(this.interview.pvrecruiterName, Validators.required),
      'pvrecruiterEmail' : new FormControl(this.interview.pvrecruiterEmail, Validators.required),
      'pvrecruiterPhone' : new FormControl(this.interview.pvrecruiterPhone, Validators.required),
      'pvrecruiterLinkedIn' : new FormControl(this.interview.pvrecruiterLinkedIn, Validators.required)
    });
  }

  onSave() {

    this.summaryService.editSummary(this.summaryForm.value, this.interview.summaryId)
      .subscribe(
        (response)=>{
          console.log(response,"response");
          if(response.status == 200)
          {
            this.summaryForm.reset();
            this.router.navigate(['summary']);
          }
        },
        (error)=>{
          console.log(error,"error");
        },
      );
    
  }

  onCancel() {
    this.summaryForm.reset();
    this.router.navigate(['summary']);
  }

}
