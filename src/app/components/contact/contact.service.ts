import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ContactService {

  constructor(private http: Http) { }

  sendEmail(dataEmail) {
    this.http.post('http://localhost:3000/sendmail', dataEmail).subscribe((data) => {
      console.log(data)
      console.log('the email is sended')
    })
  }
}
