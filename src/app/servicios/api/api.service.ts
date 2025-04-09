import { Injectable } from '@angular/core';
import {LoginI} from '../../modelos/login.interfaces';
import {ResponseI} from '../../modelos/response.interfaces';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string = "http://localhost:4200/";

  constructor(private http: HttpClient) { }

  loginByEmail(form:LoginI):Observable<ResponseI>{
    let direccion = this.url + "auth";
    return this.http.post<ResponseI>(direccion,form);
  }
}
