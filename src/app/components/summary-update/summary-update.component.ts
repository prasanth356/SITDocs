import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SummaryService } from 'app/services/summary.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-summary-update',
  templateUrl: './summary-update.component.html',
  styleUrls: ['./summary-update.component.css']
})
export class SummaryUpdateComponent implements OnInit {
summaryForm: FormGroup;

  constructor(private summaryService: SummaryService,
              private router: Router) { }

  ngOnInit() {
    this.summaryForm = new FormGroup({
      'candidateName' : new FormControl(null, Validators.required),
      'dateofEntry' : new FormControl(null, Validators.required),
      'skillSet' : new FormControl(null, Validators.required),
      'candidateCompanyContact' : new FormControl(null, Validators.required),
      'candidateCompanyName' : new FormControl(null, Validators.required),
      'dateofInterview' : new FormControl(null, Validators.required),
      'candidateEmail' : new FormControl(null, [Validators.required]),
      'candidatePhone' : new FormControl(null, Validators.required),
      'sitsalesName' : new FormControl(null, Validators.required),
      'sitrecruiterName' : new FormControl(null, Validators.required),
      'endClientName' : new FormControl(null, Validators.required),
      'echiringManager' : new FormControl(null, Validators.required),
      'echiringManagerLinkedIn' : new FormControl(null, Validators.required),
      'pvsalesName' : new FormControl(null, Validators.required),
      'pvsalesEmail' : new FormControl(null, Validators.required),
      'pvsalesPhone' : new FormControl(null, Validators.required),
      'pvsalesLinkedIn' : new FormControl(null, Validators.required),
      'pvrecruiterName' : new FormControl(null, Validators.required),
      'pvrecruiterEmail' : new FormControl(null, Validators.required),
      'pvrecruiterPhone' : new FormControl(null, Validators.required),
      'pvrecruiterLinkedIn' : new FormControl(null, Validators.required)
    });
  }

  onSave() {
    console.log(this.summaryForm);
    console.log(this.summaryForm.value);
    console.log('above');
    this.summaryService.saveSummary(this.summaryForm.value)
      .subscribe(
        (response)=>{console.log(response)},
        (error)=>{console.log(error)},
      );
    // alert('Saved Successfully');
    this.summaryForm.reset();
    this.router.navigate(['summary']);
    
  }

  onCancel() {
    this.summaryForm.reset();
    this.router.navigate(['summary']);
  }

}