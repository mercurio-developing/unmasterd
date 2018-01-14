import { Component } from '@angular/core';
import { FooterService } from './footer.service';
import { EmailValidatorDirective } from '../../shared/directives/emailvalidator.directive';
import * as FileSaver from 'file-saver';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  providers: [FooterService]

})
export class FooterComponent {
  
  show:boolean;
  errors

  email:string = ''
  message:string = ''
  
  constructor(private footerService:FooterService) { }

  onSubmit(dataEmail) {
    this.footerService.sendEmail(dataEmail)
  }

  pdfEIR() {
    window.open("https://unmasterd.herokuapp.com/assets/eir-sample-request-unmasterd.pdf", "_blank");
  }

  pdfDB() {
    window.open("https://unmasterd.herokuapp.com/assets/db-sample-request-unmasterd.pdf", "_blank");
  }

  showLinks(){
    this.show = !this.show
  }

  ngOnInit(){
    this.show = false;
  }
}
