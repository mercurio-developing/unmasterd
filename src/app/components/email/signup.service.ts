import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, ResponseContentType } from '@angular/http';
import { Router } from '@angular/router';

@Injectable()
export class SignupService {

  constructor(private http: Http, private router: Router) { }

  errors;
  
  sendEmail(dataEmail) {
    this.http.post('https://unmasterd.herokuapp.com:443/sendmail', dataEmail)
      .subscribe((data) => {
      },
      error => {
        this.errors = error;
      }, () => {
        this.router.navigate(['emailsuccess'])
      }
      )
  }
}
