import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  constructor(private router: Router) {
    setTimeout(() => {
      this.router.navigate(['home'])
    }, 3000);
  }

  ngOnInit() {
  }

}
