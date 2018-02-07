import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  valueDate: any;

  constructor() {
    setInterval(() => {         //replaced function() by ()=>
      this.valueDate = new Date();
    }, 1000);
  }

  ngOnInit() {
    this.valueDate = new Date();
  }


}
