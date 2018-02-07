import { Component, OnInit } from '@angular/core';
import { EmailValidatorDirective } from '../../shared/emailvalidator.directive';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css'],
  
})
export class EmailComponent implements OnInit {
  dataEmail

  constructor() {
  }
  ngOnInit() {
  }

  onSubmit(dataEmail) {
    console.log(dataEmail)
    // this.signup.sendEmail(dataEmail)
  }
}
