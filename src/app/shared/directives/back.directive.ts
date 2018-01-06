import { Directive, ElementRef, Renderer2, Input, AfterViewInit,Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Directive({ selector: '[BackDirective]' })
export class BackDirective {

  constructor(private renderer: Renderer2, private el: ElementRef, @Inject(DOCUMENT) private document) { }

  @Input() BackDirective: string;

  ngAfterViewInit() {
    this.renderer.setStyle(this.document.body, 'background-color', this.BackDirective);
  }
} 