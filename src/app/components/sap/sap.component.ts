import { Component, OnInit, Renderer2, ElementRef, Inject} from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-sap',
  templateUrl: './sap.component.html',
  styleUrls: ['./sap.component.css']
})
export class SapComponent implements OnInit {

  constructor(private _renderer: Renderer2, @Inject(DOCUMENT) private document) {
 }

  ngOnInit() {
   
  }
}