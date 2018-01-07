import { Component, OnInit,Injectable } from '@angular/core';
import { NavbarService } from  './navbar.service'
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers:[NavbarService]
})
export class NavbarComponent implements OnInit {
  errors;
  constructor(private navService:NavbarService) { }

  ngOnInit() {
  }
  
  pdf() {
    event.preventDefault();
    this.navService.getFile('https://clarividencia-fotografia.herokuapp.com:443/downloads')
      .subscribe(
      fileData => {
        console.log(fileData)
        console.log('gato')
        FileSaver.saveAs(fileData, "sample.pdf")
      },
      error => {
          this.errors = error
         console.log(this.errors)
      });
  }
}
