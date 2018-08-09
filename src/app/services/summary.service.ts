import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable()
export class SummaryService {

  constructor(private http: HttpClient, private httpn: Http) {  }

  upload(fileToUpload: any) {
    let input = new FormData();
    input.append('file', fileToUpload);

    return this.http
        .post('http://148.76.75.203:8080/SourceInfoEmployeeManagementnew/summary/addsummaryfromexcel', input);
  }

  saveSummary(servers) {
    console.log(servers);
    return this.http
        .post('http://148.76.75.203:8080/SourceInfoEmployeeManagementnew/summary/addsummary', servers)
        .map( (response: Response) => {response.json();});
        
  }

  editSummary(data,Id){
    //console.log(data,"editSummary");
    return this.http
        .put(`http://148.76.75.203:8080/SourceInfoEmployeeManagementnew/summary/updateSummary/${Id}`, data, { observe: 'response' })
        //.map( (response: Response) => {console.log(response); response.json();});
  }
}