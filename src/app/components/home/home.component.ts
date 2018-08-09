import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  routeSummery(){
    this.router.navigate(['summary']);
  }

  routeCandidates(){
    this.router.navigate(['customers']);
  }

  routeInterviews(){
    this.router.navigate(['interview']);
  }

  routePV(){
    this.router.navigate(['primeVendor']);
  }
}
