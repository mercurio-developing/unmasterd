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

  constructor(private renderer: Renderer2, private el: ElementRef, @Inject(DOCUMENT) private docu) { 
    
    const change = () => {
      this.renderer.setStyle(this.el.nativeElement.children[0].children[2].children[0].children[0], 'max-width', this.width + 'px')
      this.renderer.setStyle(this.el.nativeElement.children[0].children[2].children[1].children[0], 'max-width', this.width + 'px')
      this.renderer.setStyle(this.el.nativeElement.children[0].children[2].children[2].children[0], 'max-width', this.width + 'px')
      this.renderer.setStyle(this.el.nativeElement.children[0].children[2].children[3].children[0], 'max-width', this.width + 'px')
    }
    
    const $resizeEvent = Observable.fromEvent(window, 'resize')
    
    .map(() => {
        return document.documentElement.clientWidth;
      })

    this.subscription = $resizeEvent.subscribe(data => {
      this.width = data;
      if (this.width < 768){
        change();
        this.renderer.setStyle(this.docu.body, 'overflow', 'scroll');
        this.renderer.setStyle(this.docu.body, 'overflow-x', 'hidden');

      }else {
        this.renderer.setStyle(this.docu.body, 'overflow', 'hidden');
        change();
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
    if (this.width < 768) {
      this.renderer.setStyle(this.docu.body, 'overflow', 'scroll');
      console.log(this.el.nativeElement.children[0])

      change()
    }else{
      this.renderer.setStyle(this.docu.body, 'overflow', 'hidden');
      change()
    }
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
