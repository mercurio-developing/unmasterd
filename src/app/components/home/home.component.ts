import { Component, OnInit, OnDestroy, ElementRef, Renderer2, Input, AfterViewInit, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { DOCUMENT } from '@angular/platform-browser';
import { ISubscription } from "rxjs/Subscription";
import { NavbarService } from "../navbar/navbar.service"
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[NavbarService]
})


export class HomeComponent implements OnInit {

  errors:any;
  showImg1: boolean = false;
  showImg2: boolean = false;

  private subscription: ISubscription;

  show: Boolean = true;

  width: number = document.documentElement.clientWidth;
  height: number = document.documentElement.clientHeight;

  constructor(private navService:NavbarService,private renderer: Renderer2, private el: ElementRef, @Inject(DOCUMENT) private docu) {

    const $resizeEvent = Observable.fromEvent(window, 'resize')

      .map(() => {
        let x = document.documentElement.clientWidth;
        let y = document.documentElement.clientHeight;
        let sizes = [x, y]
        return sizes;
      })

    this.subscription = $resizeEvent.subscribe(data => {
      this.width = data[0];
      this.height = data[1]

      if (this.width <= 992){
          this.show = false;
      } else {
        this.renderer.setStyle(this.docu.body, 'overflow', 'hidden');
        this.show = true;
      }
      if (this.height <= 600) {
        this.renderer.setStyle(this.docu.body, 'overflow', 'scroll');
      } else {
        this.renderer.setStyle(this.docu.body, 'overflow', 'hidden');
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
    if (this.height <= 600) {
      this.renderer.setStyle(this.docu.body, 'overflow', 'scroll');
    } else {
      this.renderer.setStyle(this.docu.body, 'overflow', 'hidden');
    }
  }

  ngOnDestroy() { 
    this.subscription.unsubscribe;
    this.show = false    
  }

  pdf() {
    event.preventDefault()
    this.navService.getFile('https://unmasterd-test.herokuapp.com:443/downloads')
      .subscribe(
      fileData => {
        FileSaver.saveAs(fileData, "sample.pdf")
      },
      error => {
        this.errors = error
        console.log(this.errors)
      })
  }
}
