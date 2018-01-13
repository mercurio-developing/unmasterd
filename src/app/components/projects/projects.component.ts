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
  width: number = document.documentElement.clientWidth;
  mobile: boolean;

  constructor(private renderer: Renderer2, private el: ElementRef, @Inject(DOCUMENT) private docu) {

    const $resizeEvent = Observable.fromEvent(window, 'resize')

    .map(() => {
      let height = document.documentElement.clientHeight;
      let width = document.documentElement.clientWidth;
      let data = [width, height]
      return data;
    })

    this.subscription = $resizeEvent.subscribe(data => {
      console.log(data)
    this.height = data[1]
    this.width = data[0]

    this.renderer.setStyle(this.docu.body, 'overflow', 'scroll');
    if (this.height <= 900) {
      this.renderer.setStyle(this.docu.body, 'overflow', 'scroll');
    } 
    if (this.width >= 900) {
      this.mobile = false;
      console.log(this.width)

    } else {
      this.mobile = true;
      console.log(this.width)

    }

    });
  }

  ngOnInit() {

    if (this.width >= 900) {
      console.log(this.width)
      this.mobile = false;
    } else {
      this.mobile = true;
    }
    this.renderer.setStyle(this.docu.body, 'overflow', 'scroll');
    if (this.height <= 900) {
      this.renderer.setStyle(this.docu.body, 'overflow', 'scroll');
    } 
  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

