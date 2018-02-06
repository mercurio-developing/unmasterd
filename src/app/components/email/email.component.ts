import { Component, OnInit } from '@angular/core';
import { SignupService } from './signup.service';
import { EmailvalidatorDirective } from '../../shared/emailvalidator.directive';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  constructor(private signup:SignupService) { }

  ngOnInit() {
  }
  onSubmit(dataEmail) {
    this.signup.sendEmail(dataEmail)
  }
}
