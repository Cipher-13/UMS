import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FormRequest, FormResponse } from '../Core/Interfaces/iform';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  Authenticate(data:FormRequest):Observable<FormResponse>{ 
    return this.http.post<FormResponse>('/auth/login', data);
  }

}
