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
  constructor(private navService:NavbarService,private router:Router) { }

  ngOnInit() {
  }
  
  pdf() {
    event.preventDefault();
    this.navService.getFile('https://unmasterd.herokuapp.com:443/downloads')
      .subscribe(
      fileData => {
        FileSaver.saveAs(fileData, "sample.pdf")
      },
      error => {
          this.errors = error
         console.log(this.errors)
      })
  }
}
