import { Component, OnInit, OnDestroy, ElementRef, Renderer2, Input, AfterViewInit, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { DOCUMENT } from '@angular/platform-browser';
import { ISubscription } from "rxjs/Subscription";

@Component({
  selector: 'app-sap',
  templateUrl: './sap.component.html',
  styleUrls: ['./sap.component.css']
})
export class SapComponent implements OnInit {

  private subscription: ISubscription;

  height: number = document.documentElement.clientHeight;

  constructor(private renderer: Renderer2, private el: ElementRef, @Inject(DOCUMENT) private docu) {

    const $resizeEvent = Observable.fromEvent(window, 'resize')

      .map(() => {
        let height = document.documentElement.clientHeight;
        return height;
      })

    this.subscription = $resizeEvent.subscribe(data => {
      this.renderer.setStyle(this.docu.body, 'overflow-x', 'hidden');

      this.height = data
      if (this.height <= 600) {
        this.renderer.setStyle(this.docu.body, 'overflow', 'scroll');
        this.renderer.setStyle(this.docu.body, 'overflow-x', 'hidden');

      } else {
        this.renderer.setStyle(this.docu.body, 'overflow', 'hidden');
      }

    });
  }

  ngOnInit() {
    this.renderer.setStyle(this.docu.body, 'overflow-x', 'hidden');

    if (this.height <= 600) {
      this.renderer.setStyle(this.docu.body, 'overflow', 'scroll');
    } else {
      this.renderer.setStyle(this.docu.body, 'overflow', 'hidden');
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}