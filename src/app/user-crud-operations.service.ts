import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs';
//import { tap } from 'rxjs/operators';
//import { User } from './list-users/user';

@Injectable({
  providedIn: 'root'
})
export class UserCrudOperationsService {

  private endpointURL = 'https://reqres.in';
  private getUsersURL = this.endpointURL + '/api/users?per_page=50';

  constructor(private http: HttpClient) { }

  public getUsers() {
    return this.http.get(this.getUsersURL);
  }
}
