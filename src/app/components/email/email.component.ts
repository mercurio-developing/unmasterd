import { Component, OnInit } from '@angular/core';
import { EmailValidatorDirective } from '../../shared/emailvalidator.directive';
import { SignupService } from './signup.service'

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css'],
  providers:[SignupService]
})
export class EmailComponent implements OnInit {
  dataEmail

  constructor(public signup:SignupService) {
  }
  ngOnInit() {
  }

  onSubmit(dataEmail) {
    this.signup.sendEmail(dataEmail)
  }
}
