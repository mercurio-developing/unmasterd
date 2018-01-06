import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-emailsuccess',
  templateUrl: './emailsuccess.component.html',
  styleUrls: ['./emailsuccess.component.css']
})
export class EmailsuccessComponent implements OnInit {

  constructor(private router: Router) {
    setTimeout(() => {
      this.router.navigate(['home'])
    }, 3000);
  }

  ngOnInit() {
  }

}
