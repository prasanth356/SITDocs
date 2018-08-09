import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) { }

  login(email:string, password:string){
    let credentials = {'email': email, 'password': password}
    this.http
      .post('http://login.com',credentials);
  }

}
