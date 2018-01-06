import { Component } from '@angular/core';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [ContactService]

})
export class ContactComponent{

  email: string = '';
  message: string = '';

  constructor(private contactService:ContactService) {
  }

  onSubmit(dataEmail) {
    console.log(dataEmail)
    this.contactService.sendEmail(dataEmail)
  }
}
