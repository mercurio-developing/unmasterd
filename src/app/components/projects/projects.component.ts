import { Component, OnInit } from '@angular/core';
import { ElementRef, Renderer2, Input, AfterViewInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private renderer: Renderer2, private el: ElementRef, @Inject(DOCUMENT) private document) {
    this.renderer.setStyle(this.document.body, 'overflow', 'scroll');
   }

  ngOnInit() {
    this.renderer.setStyle(this.document.body, 'overflow','scroll');
  }
}