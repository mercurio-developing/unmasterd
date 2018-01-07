import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Injectable()
export class ContactService {

  constructor(private http: Http, private router:Router) { }

  errors;

  sendEmail(dataEmail) {
    this.http.post('https://clarividencia-fotografia.herokuapp.com:443/sendmail', dataEmail)
    .subscribe((data) => {
      console.log(data)
    },
      error => {
        this.errors = error;
        console.log(error)
      },
       () => {
         this.router.navigate(['emailsuccess'])
        }
    )
  }
}
