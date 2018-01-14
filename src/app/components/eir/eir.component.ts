import { Component, OnInit,OnDestroy, ElementRef, Renderer2, Input, AfterViewInit, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { DOCUMENT } from '@angular/platform-browser';
import { ISubscription } from "rxjs/Subscription";

@Component({
  selector: 'app-eir',
  templateUrl: './eir.component.html',
  styleUrls: ['./eir.component.css']
})

export class EirComponent implements OnInit,OnDestroy {

  private subscription: ISubscription;

  width:number = document.documentElement.clientWidth;
  height:number = document.documentElement.clientHeight;


  constructor(private renderer: Renderer2, private el: ElementRef, @Inject(DOCUMENT) private docu) { 
    
    const change = () => {
      this.renderer.setStyle(this.el.nativeElement.children[0].children[2].children[0].children[0], 'max-width', this.width + 'px')
      this.renderer.setStyle(this.el.nativeElement.children[0].children[2].children[1].children[0], 'max-width', this.width + 'px')
      this.renderer.setStyle(this.el.nativeElement.children[0].children[2].children[2].children[0], 'max-width', this.width + 'px')
      this.renderer.setStyle(this.el.nativeElement.children[0].children[2].children[3].children[0], 'max-width', this.width + 'px')
    }
    
    const $resizeEvent = Observable.fromEvent(window, 'resize')
    
    .map(() => {
      let x = document.documentElement.clientWidth;
      let y = document.documentElement.clientHeight;
      let sizes = [x,y]
      return sizes;
      })

    this.subscription = $resizeEvent.subscribe(data => {
      this.width = data[0];
      this.height = data[1]
      if (this.width >= 768 && this.height <= 800) {
        this.renderer.setStyle(this.docu.body, 'overflow', 'scroll');
        this.renderer.setStyle(this.docu.body, 'overflow-x', 'hidden');
      } else {
        this.renderer.setStyle(this.docu.body, 'overflow', 'hidden');
      }

      if (this.width <= 768){
        change();
        this.renderer.setStyle(this.docu.body, 'overflow', 'scroll');
        this.renderer.setStyle(this.docu.body, 'overflow-x', 'hidden');
      }
      
    }); 
  }
  ngOnInit(){
    const change = () => {
      this.renderer.setStyle(this.el.nativeElement.children[0].children[2].children[0].children[0], 'max-width', this.width + 'px')
      this.renderer.setStyle(this.el.nativeElement.children[0].children[2].children[1].children[0], 'max-width', this.width + 'px')
      this.renderer.setStyle(this.el.nativeElement.children[0].children[2].children[2].children[0], 'max-width', this.width + 'px')
      this.renderer.setStyle(this.el.nativeElement.children[0].children[2].children[3].children[0], 'max-width', this.width + 'px')
    }

    if (this.width >= 768 && this.height <= 800) {
      this.renderer.setStyle(this.docu.body, 'overflow', 'scroll');
      this.renderer.setStyle(this.docu.body, 'overflow-x', 'hidden');
    } else {
      this.renderer.setStyle(this.docu.body, 'overflow', 'hidden');
    }

    if (this.width <= 768) {
      change();
      this.renderer.setStyle(this.docu.body, 'overflow', 'scroll');
      this.renderer.setStyle(this.docu.body, 'overflow-x', 'hidden');
    }
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
