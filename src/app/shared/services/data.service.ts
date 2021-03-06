import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Area } from '../models/area';

@Injectable()
export class DataService {
  baseURL = 'http://localhost:8080/api';

  constructor(private http: Http) { }

  getAllTowns(): Observable<any> {
    return this.http.get(`${this.baseURL}/towns`)
      .map((response: Response) => response.json())
      .catch(error => this.handleError(error));
  }

  getTownById(id: number): Observable<any> {
    return this.http.get(`${this.baseURL}/towns/${id}`)
      .map((response: Response) => response.json())
      .catch(error => this.handleError(error))
  }

  getTownByLocation(point: Object): Observable<Area> {
    return this.http.get(`${this.baseURL}/towns/geo/${point}`)
      .map((response: Response) => response.json()
        .map(feature =>
          new Area(
            feature.attributes.objectid,
            feature.attributes.gm_naam,
            feature.attributes.aant_inw,
            feature.attributes.aantal_hh,
            feature.attributes.bev_dichth,
            feature.attributes.p_elek_tot
          )
        )
      )
      .catch(error => this.handleError(error));
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    return Observable.throw(errMsg);
  }

}
