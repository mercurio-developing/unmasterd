import { Component, OnInit,OnDestroy, ElementRef, Renderer2, Input, AfterViewInit, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { DOCUMENT } from '@angular/platform-browser';
import { ISubscription } from "rxjs/Subscription";

@Component({
  selector: 'app-db',
  templateUrl: './db.component.html',
  styleUrls: ['./db.component.css']
})
export class DbComponent implements OnInit,OnDestroy {
 
  private subscription:ISubscription;
  
  showRow:Boolean = false;

  width: number = document.documentElement.clientWidth;

  constructor(private renderer: Renderer2, private el: ElementRef, @Inject(DOCUMENT) private docu) { 
  
    const $resizeEvent = Observable.fromEvent(window, 'resize')

    .map(() => {
      return document.documentElement.clientWidth;
    })
    .debounceTime(100)

  this.subscription = $resizeEvent.subscribe(data => {
      this.width = data;
      if (this.showRow === true && this.width < 990) {
        this.renderer.setStyle(this.docu.body, 'overflow', 'scroll');
      } else {
        this.renderer.setStyle(this.docu.body, 'overflow', 'hidden');
      }
    }); 
    
  }  

  ngOnInit() {
    this.renderer.setStyle(this.docu.body, 'overflow', 'hidden');
    this.showRow = false;
  }

  ngOnDestroy(){this.subscription.unsubscribe}

  show(){
    this.showRow = !this.showRow
    if (this.showRow === true && this.width < 990){
    this.renderer.setStyle(this.docu.body, 'overflow', 'scroll');
    }else{
    this.renderer.setStyle(this.docu.body, 'overflow', 'hidden');
    }
  }
}