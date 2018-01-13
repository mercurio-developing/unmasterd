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
    event.preventDefault();
    this.footerService.getFile('https://unmasterd.herokuapp.com:443/eir')
      .subscribe(
      fileData => {
        console.log(fileData)
        FileSaver.saveAs(fileData, "eir-sample.pdf")
      },
      error => {
        this.errors = error
      })
  }

  pdfDB() {
    event.preventDefault();
    console.log('gat')
    this.footerService.getFile('https://unmasterd.herokuapp.com:443/db')
      .subscribe(
      fileData => {
        console.log(fileData)
        FileSaver.saveAs(fileData, "db-sample.pdf")
      },
      error => {
        this.errors = error
      })
  }
  
  showLinks(){
    this.show = !this.show
  }

  ngOnInit(){
    this.show = false;
  }
}
