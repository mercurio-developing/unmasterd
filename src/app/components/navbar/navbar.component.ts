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
  data:any;
  constructor(private navService:NavbarService) { }

  ngOnInit() {
    console.log(this.data)
  }
  
  pdf() {
    this.navService.getFile('https://clarividencia-fotografia.herokuapp.com:443/downloads')
      .subscribe(
      fileData => {
        console.log(fileData)
        console.log('gato')
        console.log('gato')
        this.data = fileData
        FileSaver.saveAs(fileData, "sample.pdf")
      },
      error => {
          this.errors = error
         console.log(this.errors)
      }),()=>{console.log(this.data)};
  }
}
