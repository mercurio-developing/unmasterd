import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

valueDate:any;

  constructor() { 
    this.valueDate = new Date();
}

  ngOnInit() {
  }

}
