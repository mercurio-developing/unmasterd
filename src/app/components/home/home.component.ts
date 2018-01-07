import { Component, OnInit, OnDestroy, ElementRef, Renderer2, Input, AfterViewInit, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { DOCUMENT } from '@angular/platform-browser';
import { ISubscription } from "rxjs/Subscription";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  showImg1: boolean = false;
  showImg2: boolean = false;

  private subscription: ISubscription;

  show: Boolean = true;

  width: number = document.documentElement.clientWidth;

  constructor(private renderer: Renderer2, private el: ElementRef, @Inject(DOCUMENT) private docu) {

    const $resizeEvent = Observable.fromEvent(window, 'resize')

      .map(() => {
        return document.documentElement.clientWidth;
      })

    this.subscription = $resizeEvent.subscribe(data => {
      
      this.width = data;

      if (this.width <= 992){
          this.show = false;
      } else {
        this.renderer.setStyle(this.docu.body, 'overflow', 'hidden');
        this.show = true;
      }
    });
  }

  ngOnInit() {
    this.renderer.setStyle(this.docu.body, 'overflow', 'hidden');
    if (this.width <= 992) {
      this.show = false;
    } else {
      this.show = true;
    }
  }

  ngOnDestroy() { 
    this.subscription.unsubscribe;
    this.show = false    
  }
}
