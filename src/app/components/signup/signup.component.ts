import { Component, OnInit } from '@angular/core';
import { SignupService } from 'app/services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private signupService: SignupService) { }

  ngOnInit() {
  }

  submit(form){
   //console.log(form.value);
   
   let signupDetails = {
    "active": true,
    "email": form.value.email,
    "firstName": form.value.firstname,
    "lastName": form.value.lastname,
    "password": form.value.password,
    "role": form.value.role,
   }
   //console.log(signupDetails);
  
   this.signupService
    .signUp(signupDetails)
    .subscribe(res => {
      console.log(res);
    });

  }

}
