import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Injectable()
export class ContactService {

  constructor(private http: Http, private router:Router) { }

  errors;

  sendEmail(dataEmail) {
    console.log(dataEmail)
    this.http.post('https://unmasterd-test.herokuapp.com:443/sendmail', dataEmail)
    .subscribe((data) => {
      console.log(data)
    },
      error => {
        this.errors = error;
        console.log(error)
      }
      // ,
      //  () => {

      //    this.router.navigate(['emailsuccess'])
      //   }
    )
  }
}
