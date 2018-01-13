import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, ResponseContentType } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router'
import 'rxjs/add/operator/map';
import * as FileSaver from 'file-saver';


@Injectable()
export class NavbarService {
  errors;

  constructor(private http: Http, private router:Router) { }

  public getFile(path: string): Observable<Blob> {
    let options = new RequestOptions({ responseType: ResponseContentType.Blob });

    return this.http.get(path, options)
      .map((response: Response) => <Blob>response.blob())
  }

  sendEmail(dataEmail) {
    this.http.post('https://unmasterd.herokuapp.com:443/sendmail', dataEmail)
      .subscribe((data) => {
      },
      error => {
        this.errors = error;
      }, () => {
        this.router.navigate(['emailsuccess'])
      }
      )
  }
}


