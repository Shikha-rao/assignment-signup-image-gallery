import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { config } from '../../config';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }
  getMockLoginData(): Observable<any> {
    return this.http.get<any>(`${config.apiUrl}/login`);
  }
  getMockImageData(): Observable<any> {
    return this.http.get<any>(`${config.apiUrl}/image`);
  }
  logout(): Observable<any> {
    return this.http.get<any>(`${config.apiUrl}/logout`);
  }
}
