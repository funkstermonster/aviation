import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Flight, ResponseObject } from '../model/flight';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  FLIGHT_URL = environment.SCEDULE_API_URL;

  getflights(): Observable<ResponseObject> {
    return this.http.get<ResponseObject>(this.FLIGHT_URL);
  }
}
