import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserCrudOperationsService {

  private endpointURL = 'https://reqres.in';
  private getUsersURL = this.endpointURL + '/api/users?per_page=50';
  private createUserURL = this.endpointURL + '/api/register';
  private loginURL = this.endpointURL + '/api/login';

  constructor(private http: HttpClient) { }

  public getUsers() {
    return this.http.get(this.getUsersURL);
  }

  public registerUser(data) {
    return this.http.post(this.createUserURL, data);
  }

  public login(data) {
    return this.http.post(this.loginURL, data);
  }
}
