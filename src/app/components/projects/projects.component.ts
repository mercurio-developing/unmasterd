import { Component, OnInit, OnDestroy, ElementRef, Renderer2, Input, AfterViewInit, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { DOCUMENT } from '@angular/platform-browser';
import { ISubscription } from "rxjs/Subscription";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  private subscription: ISubscription;

  height: number = document.documentElement.clientHeight;


  constructor(private renderer: Renderer2, private el: ElementRef, @Inject(DOCUMENT) private docu) {

    const $resizeEvent = Observable.fromEvent(window, 'resize')

    .map(() => {
      let height = document.documentElement.clientHeight;
      return height;
    })

    this.subscription = $resizeEvent.subscribe(data => {
    this.height = data
    this.renderer.setStyle(this.docu.body, 'overflow', 'scroll');
    if (this.height <= 900) {
      this.renderer.setStyle(this.docu.body, 'overflow', 'scroll');
    } 

    });
  }

  ngOnInit() {
    this.renderer.setStyle(this.docu.body, 'overflow', 'scroll');
    if (this.height <= 900) {
      this.renderer.setStyle(this.docu.body, 'overflow', 'scroll');
    } 
  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

