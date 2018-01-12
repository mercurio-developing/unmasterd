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
  showButton: Boolean = true;

  width: number = document.documentElement.clientWidth;
  height:number = document.documentElement.clientHeight;

  constructor(private renderer: Renderer2, private el: ElementRef, @Inject(DOCUMENT) private docu) { 
  
    const $resizeEvent = Observable.fromEvent(window, 'resize')

    .map(() => {
        let x = document.documentElement.clientWidth;
        let y = document.documentElement.clientHeight;
        let sizes = [x, y]
        return sizes;
      })
    .debounceTime(100)

  this.subscription = $resizeEvent.subscribe(data => {
      this.width = data[0];
      if (this.showRow === true && this.width <= 990) {
        this.renderer.setStyle(this.docu.body, 'overflow', 'scroll');
      } else {
        this.renderer.setStyle(this.docu.body, 'overflow', 'hidden');
      }
      this.height = data[1]
      if ((this.width >= 990 && this.height <= 768) || (this.width >= 990 && this.height <= 768 && this.showRow === true)  ) {
        this.renderer.setStyle(this.docu.body, 'overflow', 'scroll');
        this.renderer.setStyle(this.docu.body, 'overflow-x', 'hidden');
      }
    }); 
  }  

  ngOnInit() {
    this.renderer.setStyle(this.docu.body, 'overflow', 'hidden');
    this.showRow = false;
  }

  ngOnDestroy(){this.subscription.unsubscribe()}

  show(){
    this.showRow = !this.showRow
    this.showButton = !this.showButton
    if (this.showRow === true && this.width <= 990){
      console.log('gato')
    this.renderer.setStyle(this.docu.body, 'overflow', 'scroll');
    }else{
    this.renderer.setStyle(this.docu.body, 'overflow', 'hidden');
    }
    if (this.width >= 990 && this.height <= 768 && this.showRow === true) {
      console.log('gato 2')
      this.renderer.setStyle(this.docu.body, 'overflow', 'scroll');
      this.renderer.setStyle(this.docu.body, 'overflow-x', 'hidden');
    } 
  }
}