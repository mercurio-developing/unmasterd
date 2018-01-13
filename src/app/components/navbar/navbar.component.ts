import { Component, OnInit,Injectable } from '@angular/core';
import { NavbarService } from  './navbar.service'
import * as FileSaver from 'file-saver';
import { Router } from '@angular/router'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers:[NavbarService]
})
export class NavbarComponent implements OnInit {
  errors;
  data:any = [];
  showLink:boolean = false;

  constructor(private navService:NavbarService,private router:Router) { }

  ngOnInit() {
    this.showLink = false;
  }
  
  pdfEIR() {
    event.preventDefault();
    this.navService.getFile('https://unmasterd.herokuapp.com:443/eir')
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
    this.navService.getFile('https://unmasterd.herokuapp.com:443/db')
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
    this.showLink = !this.showLink;
  }
}
