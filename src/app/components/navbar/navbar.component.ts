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
    window.open("https://unmasterd.herokuapp.com/assets/eir-sample-request-unmasterd.pdf", "_blank");
  }

  pdfDB() {
    window.open("https://unmasterd.herokuapp.com/assets/db-sample-request-unmasterd.pdf", "_blank");
  }

  showLinks(){
    this.showLink = !this.showLink;
  }
}
