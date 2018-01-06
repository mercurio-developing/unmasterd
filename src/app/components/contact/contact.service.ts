import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ContactService {

  constructor(private http: Http) { }

  sendEmail(dataEmail) {
    this.http.post('https://clarividencia-fotografia.herokuapp.com:443/sendmail', dataEmail).subscribe((data) => {
      console.log(data)
      console.log('the email is sended')
    })
  }
}
