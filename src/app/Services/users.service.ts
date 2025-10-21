import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUsers } from '../Core/Interfaces/iusers';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

 constructor(private http:HttpClient) { }

   Fetcher():Observable<IUsers>{
     return this.http.get<IUsers>('/users');
   }
}
