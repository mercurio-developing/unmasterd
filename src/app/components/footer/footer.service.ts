import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, ResponseContentType } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class FooterService {

  errors

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
      },() => {
         this.router.navigate(['emailsuccess'])
        }
    )
  }
}
