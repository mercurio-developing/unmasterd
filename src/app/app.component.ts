import { Component, OnInit } from '@angular/core';
import { BackDirective } from './shared/directives/back.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  val = true;
  color:string;

  constructor() {
  }

  ngOnInit(){
    document.body.style.background = 'rgba(0, 0, 0, 1)';
  }


}
