import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SignupService {

  constructor(private http: HttpClient) { }

  signUp(data){
    console.log(data);
    return this.http
      .post('http://192.168.1.126:8080/api/signup',data);
  }

}
