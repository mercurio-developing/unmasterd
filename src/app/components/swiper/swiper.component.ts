import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { DOCUMENT } from '@angular/platform-browser';
import { ISubscription } from "rxjs/Subscription";
import { SwiperModule, SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.css']
})
export class SwiperComponent implements OnInit,OnDestroy {
 
  private subscription: ISubscription;
  width: number = document.documentElement.clientWidth;

  public slides = [
    '../assets/img/project-1.png',
    '../assets/img/project-2.png',
    '../assets/img/project-3.png',
    '../assets/img/project-4.png',
    '../assets/img/project-5.png',
    '../assets/img/project-6.png',
    '../assets/img/project-7.png',
    '../assets/img/project-8.png',
    '../assets/img/project-9.png',
    '../assets/img/project-10.png',
    '../assets/img/project-11.png',
    '../assets/img/project-12.png',
    '../assets/img/project-13.png',
    '../assets/img/project-14.png',
    '../assets/img/project-15.png',
    '../assets/img/project-16.png'
  ];


  public config: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 3,
    spaceBetween: 2,
    observer: true,
    keyboard: true,
    mousewheel: true,
    scrollbar: false,
    navigation: false,
    pagination: false,
    centeredSlides: true
  };

  constructor(@Inject(DOCUMENT) private docu) {

    const $resizeEvent = Observable.fromEvent(window, 'resize')

      .map(() => {
        let width = document.documentElement.clientWidth;
        return width;
      })

    this.subscription = $resizeEvent.subscribe(data => {
      this.width = data
      if (this.width <= 768) {
        this.config.slidesPerView = 1;
      } else {
        this.config.slidesPerView = 4;
      }

    });
  }

  ngOnInit() {
    console.log(this.width)
    if (this.width <= 768) {
      this.config.slidesPerView = 1;
    } else {
      this.config.slidesPerView = 4;
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onMouseOver(index,image): void {
    image.src = "../assets/img/project-hover-"+index+".png";
  }
  
  onMouseOut(index,image): void {
    image.src = "../assets/img/project-"+index+".png";
  }

  

}
