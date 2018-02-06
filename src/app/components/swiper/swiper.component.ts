import { Component, OnInit } from '@angular/core';
import { SwiperModule, SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.css']
})
export class SwiperComponent implements OnInit {
  index;

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
    slidesPerView: 4,
    spaceBetween: 25,
    observer: true,
    keyboard: true,
    mousewheel: true,
    scrollbar: false,
    navigation: false,
    pagination: false,
    centeredSlides: true
  };

  constructor() { }

  onMouseOver(index,image): void {
    image.src = "../assets/img/project-hover-"+index+".png";
  }
  
  onMouseOut(index,image): void {
    image.src = "../assets/img/project-"+index+".png";
  }

  ngOnInit() {
    this.index = 0;
  }

}
