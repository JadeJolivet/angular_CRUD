import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  private _http: HttpClient = inject(HttpClient);
  private readonly _BASE_API_URL: string = "http://localhost:3000/";


  getAllUsers$(): Observable<User[]> {
    return this._http.get<User[]>(this._BASE_API_URL + "users");
  }

  postUser$(user: User): void {
    this._http.post(this._BASE_API_URL + "users", user).subscribe();
  }

}
