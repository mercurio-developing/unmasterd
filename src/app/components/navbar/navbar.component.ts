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

  constructor(private navService:NavbarService) { }

  ngOnInit() {
  }
  
  pdf() {
    this.navService.getFile('https://clarividencia-fotografia.herokuapp.com:443/downloads')
      .subscribe(fileData => FileSaver.saveAs(fileData, "sample.pdf"));
  }
}
