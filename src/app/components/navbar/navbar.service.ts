import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, ResponseContentType } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as FileSaver from 'file-saver';



@Injectable()
export class NavbarService {

  constructor(private http: Http) { }

  public getFile(path: string): Observable<Blob> {
    let options = new RequestOptions({ responseType: ResponseContentType.Blob });

    return this.http.get(path, options)
      .map((response: Response) => <Blob>response.blob())
  }

}
