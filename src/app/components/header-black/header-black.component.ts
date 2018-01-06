import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-black',
  templateUrl: './header-black.component.html',
  styleUrls: ['./header-black.component.css']
})
export class HeaderBlackComponent implements OnInit {

  valueDate: any;

  constructor() {
    this.valueDate = new Date();
  }
  
  ngOnInit() {
  }

}
